import { detectBrowser } from 'src/_lib/utils/detectBrowser';
import {
  ICrashlyticsLoggerProps,
  logCrashlytics,
} from 'src/_shared/utils/logCrashlytics';

import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { isObjectValid } from '../../../../_lib/utils/isObjectValid';
import { CodeFrequency } from '../../../../_shared/api/github/endpoints';

import { calculateLoc } from '../../utils/calculateLoc';

interface ErrorType {
  data: {
    message: string;
    documentation_url: string;
    status: number;
  };
  status: number;
}

const getErrorMessage = ({
  data,
  error,
}: {
  data?: CodeFrequency;
  error?: FetchBaseQueryError;
}) => {
  let errorMessage = '';
  let isError = false;
  const castedError = error as ErrorType;

  if (castedError?.status === 202 && !isObjectValid(data)) {
    return {
      errorMessage: 'Needs to retry',
      isError: true,
      needsToRetry: true,
    };
  }

  /**
   * For errors from 200
   */
  if (castedError?.status > 200 && castedError?.status < 299) {
    return {
      errorMessage: `${castedError?.status} - ${castedError?.data?.message}`,
      isError: true,
      needsToRetry: false,
    };
  }

  /**
   * For errors from 400
   */
  if (castedError?.status > 400 && castedError?.status < 600) {
    return {
      errorMessage: `${castedError?.status} - ${castedError?.data?.message}`,
      isError: true,
      needsToRetry: false,
    };
  }

  if (!data) {
    errorMessage = 'Something strange happened with response';
    isError = true;
  }

  if (!isObjectValid(data)) {
    return {
      errorMessage:
        'Response is empty for some reason.' +
        '\n1. Check your access token in settings page' +
        '\n2. Or try to load locs one more time' +
        '\n3. Or try to load locs a few more times :)',
      isError: true,
      needsToRetry: true,
    };
  }

  if (data && isObjectValid(data)) {
    isError = false;
    errorMessage = '';
  }

  return {
    errorMessage,
    isError,
    needsToRetry: false,
  };
};

export const tryCalculateLocAndGiveProperMessageForError = ({
  data,
  error,
}: {
  data?: CodeFrequency;
  error?: FetchBaseQueryError;
}) => {
  const dataToProcess: CodeFrequency =
    !data || !isObjectValid(data) ? [[0, 0, 0]] : data;

  const loc = calculateLoc(dataToProcess);

  if (loc < 0) {
    return {
      loc: `👈 LOC is negative ${loc}`,
      error: {
        isError: true,
        errorMessage:
          'GitHub doesnt have public api for LOC counting. ' +
          'So im using code_frequency api. ' +
          'Sometimes it works, sometimes not. ' +
          'Some repos shows negative LOC. Why is that happening i dont know. ' +
          'Let me know if you have some information about this',
        needsToRetry: false,
      },
    };
  }

  return {
    loc,
    error: getErrorMessage({ data, error }),
  };
};

/**
 * # Log data to crashlytics service
 */
export const logToCrashlyticsService = ({
  author,
  repository,
  loc,
  isError,
  errorMessage,
  isAppEnabled,
  isFetching,
}: {
  author: string;
  repository: string;
  loc: string | number;
  isError: boolean;
  errorMessage: string;
  isAppEnabled: boolean;
  isFetching: boolean;
}) => {
  const commonCrashlyticsProps: Pick<
    ICrashlyticsLoggerProps['data'],
    | 'targetScript'
    | 'browser'
    | 'component'
    | 'url'
    | 'author'
    | 'loc'
    | 'repository'
  > = {
    targetScript: 'content',
    browser: detectBrowser(),
    component: 'LocIndicator',
    url: window.location.href,
    repository,
    author,
    loc,
  };

  if (false === isError) {
    logCrashlytics({
      eventName: 'something_happened',
      data: {
        level: 'error',
        message: errorMessage,

        ...commonCrashlyticsProps,
      },
    });
  }

  if (false === isAppEnabled) {
    logCrashlytics({
      eventName: 'app_is_disabled',
      data: {
        level: 'info',
        message: 'App is disabled',

        ...commonCrashlyticsProps,
      },
    });
  }

  if (isAppEnabled && isFetching === false && repository && author && loc) {
    logCrashlytics({
      eventName: 'gloc_widget_is_ready_to_mount',
      data: {
        level: 'success',
        message: 'Gloc widget is ready to mount',

        ...commonCrashlyticsProps,
      },
    });
  }

  if (
    isAppEnabled &&
    isFetching === false &&
    typeof loc === 'number' &&
    loc < 0
  ) {
    logCrashlytics({
      eventName: 'loc_is_negative',
      data: {
        level: 'warning',
        message: 'LOC is negative',

        ...commonCrashlyticsProps,
      },
    });
  }
};
