import debounce from 'lodash.debounce';

import { useEffect, useState } from 'react';

import { useGetAllUserReposQuery } from '../../../../_shared/api/github/endpoints';

export const useDebouncedTokenSave = ({
  token,
  delay,
}: {
  token: string;
  delay: number;
}) => {
  const [debouncedToken, setDebouncedToken] = useState(token);

  const debouncedSetToken = debounce(term => {
    setDebouncedToken(term);
  }, delay);

  useEffect(() => {
    debouncedSetToken(token);

    return () => {
      debouncedSetToken.cancel();
    };
  }, [token, debouncedSetToken]);

  return useGetAllUserReposQuery(
    { token: debouncedToken },
    {
      skip: !debouncedToken,
    },
  );
};
