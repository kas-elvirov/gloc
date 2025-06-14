/* eslint-disable max-len */
import { detectBrowser } from 'src/_lib/utils/detectBrowser';
import { logCrashlytics } from 'src/_shared/utils/logCrashlytics';

import { FC, useEffect, useState } from 'react';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  IconButton,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import { SYSTEM_DEFAULTS } from '../../../../_shared/consts/defaults';

import { useDebouncedTokenSave } from './OptionsPage.hooks';
import { useStyles } from './OptionsPage.styles';

/**
 * # Options page
 *
 * Page which opens on settings icon click
 */
export const OptionsPage: FC = () => {
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const [token, setToken] = useState(
    SYSTEM_DEFAULTS.STORAGE.GITHUB_TOKEN.DEFAULT_VALUE,
  );

  useEffect(() => {
    chrome?.storage?.sync?.get(
      {
        [SYSTEM_DEFAULTS.STORAGE.GITHUB_TOKEN.KEY]:
          SYSTEM_DEFAULTS.STORAGE.GITHUB_TOKEN.DEFAULT_VALUE,
      },
      result => {
        if (
          typeof result?.[SYSTEM_DEFAULTS.STORAGE.GITHUB_TOKEN.KEY] === 'string'
        ) {
          setToken(result[SYSTEM_DEFAULTS.STORAGE.GITHUB_TOKEN.KEY]);
        }
      },
    );

    logCrashlytics({
      eventName: 'user_action',
      data: {
        level: 'info',
        message: 'Options page is visited',
        targetScript: 'options',
        browser: detectBrowser(),
        component: 'OptionsPage',
      },
    });
  }, []);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const { isFetching: isTokenFetching, error: tokenError } =
    useDebouncedTokenSave({
      token,
      delay: SYSTEM_DEFAULTS.DEBOUNCE[300],
    });

  const onTokenChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    setToken(event.target.value);

    chrome.storage?.sync?.set?.(
      { [SYSTEM_DEFAULTS.STORAGE.GITHUB_TOKEN.KEY]: event.target.value },
      () => {},
    );
  };

  return (
    <Paper variant='outlined'>
      <Stack className={classes.root} direction='column' spacing={2}>
        <Typography variant='body2'>
          GitHub Gloc uses GitHub API. By default it makes unauthenticated
          requests to the GitHub API, set personal access token if you want to
          <ul>
            <li>access a private repository</li>
            <li>bypass the rate limit of unauthenticated requests</li>
          </ul>
        </Typography>

        <TextField
          label='Personal access token'
          variant='outlined'
          error={Boolean(tokenError)}
          /**
           * It's a hack in order to skip proper types declaration. I'm lazy, yes
           */
          // @ts-expect-error
          helperText={tokenError?.data?.message}
          type={showPassword ? 'text' : 'password'}
          onChange={onTokenChange}
          disabled={isTokenFetching}
          value={token}
          InputProps={{
            endAdornment: (
              <IconButton
                onClick={handleClickShowPassword}
                edge='end'
                disabled={isTokenFetching}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }}
        />

        <Link
          href={import.meta.env.VITE_APP_TOKEN_CREATION_LINK}
          target='_blank'
          variant='caption'
        >
          Create token if you don't have
        </Link>
      </Stack>
    </Paper>
  );
};
