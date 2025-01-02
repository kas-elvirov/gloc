/* eslint-disable max-len */

import { Button, IconButton, Link, Paper, Stack, TextField, Typography } from '@mui/material';

import { FC, useEffect, useState } from 'react';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useDebouncedTokenSave } from './OptionsPage.hooks';

/**
 * # Options page
 *
 * Page which opens on settings icon click
 */
export const OptionsPage: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [token, setToken] = useState('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');

  useEffect(() => {
    chrome?.storage?.sync?.get({ 'x-github-token': '' }, (result) => {
      if (typeof result?.['x-github-token'] === 'string') {
        setToken(result['x-github-token']);
      }
    });
  }, []);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const {
    isFetching: isTokenFetching,
    error: tokenError,
    refetch,
  } = useDebouncedTokenSave({
    token,
    delay: 300,
  });

  const onTokenChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setToken(event.target.value);

    console.log('chrome', chrome);

    chrome.storage?.sync?.set?.({ 'x-github-token': event.target.value }, () => { });
  };

  return (
    <Paper variant='outlined'>
      <Stack
        direction='column'
        spacing={2}
        style={{
          padding: '16px',
        }}
      >
        <Typography variant='body2'>
          GitHub Gloc uses GitHub API. By default it makes unauthenticated requests to the GitHub API, set personal access
          token if you want to
          <ul>
            <li>
              access a private repository
            </li>
            <li>
              bypass the rate limit of unauthenticated requests
            </li>
          </ul>
        </Typography>

        <TextField
          label='Personal access token'
          variant='outlined'
          error={Boolean(tokenError)}
          // @ts-expect-error
          helperText={tokenError?.data?.message}
          type={showPassword ? 'text' : 'password'}
          onChange={onTokenChange}
          disabled={isTokenFetching}
          value={token}
          InputProps={{
            endAdornment: (
              <IconButton
                aria-label={
                  showPassword ? 'hide the password' : 'display the password'
                }
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                edge="end"
                disabled={isTokenFetching}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }}
        />

        <Button
          variant='contained'
          onClick={refetch}
          disabled={isTokenFetching}
        >
          Save
        </Button>

        <Link
          href="https://github.com/settings/tokens/new?scopes=repo&description=Github%20GLOC"
          target="_blank"
          variant='caption'
        >
          Create token if you don't have
        </Link>
      </Stack>
    </Paper>
  );
};
