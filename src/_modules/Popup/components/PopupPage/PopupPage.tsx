import { SYSTEM_DEFAULTS } from 'src/_shared/consts/defaults';

import React, { FC, useEffect } from 'react';

import GitHubIcon from '@mui/icons-material/GitHub';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  Avatar,
  Chip,
  IconButton,
  Paper,
  Stack,
  Switch,
  Typography,
} from '@mui/material';
import { pink } from '@mui/material/colors';

import { useGetRepoStatQuery } from '../../../../_shared/api/github/endpoints';

import { useStyles } from './PopupPage.styles';

/**
 * # Popup page
 *
 * Page which opens on click from browser toolbar
 */
export const PopupPage: FC = () => {
  const classes = useStyles();

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

  const handleChangeAppMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAppStatus(event.target.checked);

    chrome.storage?.sync?.set?.(
      { [SYSTEM_DEFAULTS.STORAGE.APP_MODE.KEY]: event.target.checked },
      () => {},
    );
  };

  const onSettingsClick = () => {
    chrome.tabs.create({
      url:
        import.meta.env.VITE_APP_CHROME_EXTENSION_SETTINGS_LINK_BASE +
        chrome.runtime.id,
    });
  };

  const goToRepo = () => {
    window.open(
      import.meta.env.VITE_APP_APPLICATION_REPO,
      '_blank',
      'noopener,noreferrer',
    );
  };

  const { data, isFetching } = useGetRepoStatQuery({
    repoName: 'gloc',
    author: 'kas-elvirov',
  });

  const statText = isFetching
    ? 'is loading ...'
    : `${data?.stargazers_count} coders already liked it`;

  return (
    <Paper variant='outlined'>
      <Stack className={classes.root} direction='column' spacing={2}>
        <Stack className={classes.pageHeader} direction='row' spacing={2}>
          <Stack direction='row' spacing={2}>
            <Typography variant='h4'>GitHub</Typography>
            <Typography variant='h4' color={pink[500]}>
              Gloc
            </Typography>
          </Stack>

          <IconButton onClick={onSettingsClick} title='Go to settings page'>
            <SettingsIcon />
          </IconButton>
        </Stack>

        <Switch
          checked={isAppEnabled}
          inputProps={{ 'aria-label': 'App mode' }}
          defaultChecked
          color='secondary'
          onChange={handleChangeAppMode}
          title={`App is ${isAppEnabled ? 'enabled' : 'disabled'}`}
        />

        <Chip
          avatar={
            <Avatar>
              <GitHubIcon />
            </Avatar>
          }
          color={isFetching ? 'default' : 'primary'}
          label={statText}
          onClick={goToRepo}
          variant='outlined'
          size='small'
        />
      </Stack>
    </Paper>
  );
};
