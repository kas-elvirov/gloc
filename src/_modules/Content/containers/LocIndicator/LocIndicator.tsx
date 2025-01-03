import { Chip, Tooltip } from '@mui/material';

import { FC } from 'react';

import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import ErrorIcon from '@mui/icons-material/Error';
import { useGetRepoCodeFrequencyQuery } from '../../../../_shared/api/github/endpoints';
import { LocIndicatorProps } from '../LocIndicator/LocIndicator.types';

import { tryCalculateLocAndGiveProperMessageForError } from './LocIndicator.utils';

export const LocIndicator: FC<LocIndicatorProps> = ({
  author,
  repository,
  token,
}) => {

  const {
    data,
    error,
    isFetching,
    refetch
  } = useGetRepoCodeFrequencyQuery({
    repoName: repository,
    author: author,
    token,
  });

  const {
    loc,
    error: {
      isError,
      errorMessage
    }
  } = tryCalculateLocAndGiveProperMessageForError({ data, error });

  console.group('LocIndicator');
  console.log('data', data);
  console.log('error', error);
  console.groupEnd();

  return (
    <Chip
      disabled={isFetching}
      color={isFetching ? 'primary' : isError ? 'error' : 'success'}
      label={loc}
      avatar={isError ? <Tooltip title={errorMessage}><ErrorIcon /></Tooltip>: undefined}
      deleteIcon={<Tooltip title='Request LOCs one more time'><DownloadForOfflineIcon /></Tooltip>}
      onDelete={refetch}
      variant='outlined'
      size='small'
    />
  );
};
