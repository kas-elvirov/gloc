import { useGetRepoCodeFrequencyQuery } from 'src/_shared/api/github/endpoints';
import { SYSTEM_DEFAULTS } from 'src/_shared/consts/defaults';

import React, { FC, useEffect } from 'react';

import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import ErrorIcon from '@mui/icons-material/Error';
import { Chip, CircularProgress, Tooltip } from '@mui/material';

import { LocIndicatorProps } from '../LocIndicator/LocIndicator.types';

import {
  logToCrashlyticsService,
  tryCalculateLocAndGiveProperMessageForError,
} from './LocIndicator.utils';

/**
 * # LOC indicator
 *
 * Small component with LOC, actions and information mechanism
 */
export const LocIndicator: FC<LocIndicatorProps> = ({
  author,
  repository,
  token,
}) => {
  const [isAppEnabled, setAppStatus] = React.useState(
    SYSTEM_DEFAULTS.STORAGE.APP_MODE.DEFAULT_VALUE,
  );

  useEffect(() => {
    chrome?.storage?.sync?.get(
      {
        [SYSTEM_DEFAULTS.STORAGE.APP_MODE.KEY]:
          SYSTEM_DEFAULTS.STORAGE.APP_MODE.DEFAULT_VALUE,
      },
      result => {
        setAppStatus(result[SYSTEM_DEFAULTS.STORAGE.APP_MODE.KEY]);
      },
    );
  }, []);

  const response = useGetRepoCodeFrequencyQuery(
    {
      repoName: repository,
      author: author,
      token,
    },
    {
      skip: isAppEnabled === false,
    },
  );

  const { data, error, isFetching, refetch } = response;

  const {
    loc,
    error: { isError, errorMessage, needsToRetry },
  } = tryCalculateLocAndGiveProperMessageForError({
    data,
    error: error as FetchBaseQueryError | undefined,
  });

  /**
   * In order to prevent this error
   * - [Cannot refetch a query that has not been started yet](https://redux-toolkit.js.org/Errors?code=38)
   */
  if (isAppEnabled === true && !isFetching && needsToRetry) {
    refetch();
  }

  logToCrashlyticsService({
    author,
    repository,
    loc,
    isError,
    errorMessage,
    isAppEnabled,
    isFetching,
  });

  return (
    <Chip
      disabled={isFetching}
      color={isFetching ? undefined : isError ? 'error' : 'success'}
      label={isAppEnabled ? loc : 'App is disabled'}
      avatar={
        isFetching ? (
          <CircularProgress size='16px' />
        ) : isError ? (
          <Tooltip title={errorMessage}>
            <ErrorIcon />
          </Tooltip>
        ) : undefined
      }
      deleteIcon={
        <Tooltip title='Request LOCs one more time'>
          <DownloadForOfflineIcon />
        </Tooltip>
      }
      onDelete={refetch}
      variant='outlined'
      size='small'
    />
  );
};
