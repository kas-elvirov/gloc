import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { isObjectEmpty } from '../../../../_lib/utils/isObjectEmpty';
import { CodeFrequency } from '../../../../_shared/api/github/endpoints';
import { calculateLoc } from '../../utils/calculateLoc';
import { SerializedError } from '@reduxjs/toolkit';

interface ErrorType {
  data: {
    message: string;
    documentation_url: string;
    status: number;
  };
  status: number;
}

const getErrorMessage = ({ data, error }: { data?: CodeFrequency, error?: FetchBaseQueryError | SerializedError }) => {
  let errorMessage = '';
  let isError = false;
  const castedError = error as ErrorType;

  /**
   * For errors from 200
  */
  if (castedError?.status > 200 && castedError?.status < 299) {
    return {
      errorMessage: `${castedError?.status} - ${castedError?.data?.message}`,
      isError: true,
    };
  }

  /**
   * For errors from 400
  */
  if (castedError?.status > 400 && castedError?.status < 600) {
    return {
      errorMessage: `${castedError?.status} - ${castedError?.data?.message}`,
      isError: true,
    };
  }

  if (!data) {
    errorMessage = 'Something strange happened with response';
    isError = true;
  }

  if (isObjectEmpty(data)) {
    errorMessage = 'Response is empty for some reason.'
      + '\n1. Check your access token in settings page'
      + '\n2. Or try to load locs one more time'
      + '\n3. Or try to load locs a few more times :)';
    isError = true;
  }

  if (data && !isObjectEmpty(data)) {
    isError = false;
    errorMessage = '';
  }

  return {
    errorMessage,
    isError,
  };
};

export const tryCalculateLocAndGiveProperMessageForError = ({
  data, error
}: { data?: CodeFrequency, error?: FetchBaseQueryError | SerializedError }) => {
  const dataToProcess: CodeFrequency = !data || isObjectEmpty(data)
    ? [[0, 0, 0]]
    : data;

  const loc = calculateLoc(dataToProcess);

  if (loc < 0) {
    return {
      loc: `👈 LOC is negative ${loc}`,
      error: {
        isError: true,
        errorMessage: 'GitHub doesn\'t have public api for LOC counting. '
          + 'So i\'m using code_frequency api. '
          + 'Sometimes it works, sometimes not. '
          + 'Some repos shows negative LOC. Why is that happening i don\'t know. '
          + 'Let me know if you have some information about this',
      },
    };
  }

  return {
    loc,
    error: getErrorMessage({ data, error }),
  };
};
