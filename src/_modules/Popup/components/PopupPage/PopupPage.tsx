/* eslint-disable max-len */
import { LinearProgressWithLabel } from 'src/_lib/components/LinearProgressWithLabel/LinearProgressWithLabel';
import { SYSTEM_DEFAULTS } from 'src/_shared/consts/defaults';
import {
  TrackEventsService,
  TrackEventsState,
} from 'src/_shared/services/TrackEvent/TrackEvent';

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

  const [freeHourlyApiUsage, setFreeHourlyApiStatPercent] = React.useState(0);
  const [tokenizedHourlyApiUsage, setTokenizedHourlyApiStatPercent] =
    React.useState(0);

  useEffect(() => {
    chrome?.storage?.sync?.get(
      {
        [SYSTEM_DEFAULTS.STORAGE.APP_MODE.KEY]:
          SYSTEM_DEFAULTS.STORAGE.APP_MODE.DEFAULT_VALUE,
        [SYSTEM_DEFAULTS.STORAGE.EVENTS_STAT.KEY]:
          SYSTEM_DEFAULTS.STORAGE.EVENTS_STAT.DEFAULT_VALUE,
      },
      result => {
        setAppStatus(result[SYSTEM_DEFAULTS.STORAGE.APP_MODE.KEY]);

        if (
          (result[SYSTEM_DEFAULTS.STORAGE.EVENTS_STAT.KEY] as TrackEventsState)[
            SYSTEM_DEFAULTS.STORAGE.EVENTS_STAT.REQUESTS_STAT
          ]
        ) {
          setFreeHourlyApiStatPercent(
            TrackEventsService.calculatePercentOfHourlyEventUsage({
              state: result[
                SYSTEM_DEFAULTS.STORAGE.EVENTS_STAT.KEY
              ] as TrackEventsState,
              eventName: SYSTEM_DEFAULTS.STORAGE.EVENTS_STAT.REQUESTS_STAT,
              limit: Number(
                import.meta.env.VITE_APP_GITHUB_API_FREE_HOURLY_LIMIT,
              ),
            }),
          );

          setTokenizedHourlyApiStatPercent(
            TrackEventsService.calculatePercentOfHourlyEventUsage({
              state: result[
                SYSTEM_DEFAULTS.STORAGE.EVENTS_STAT.KEY
              ] as TrackEventsState,
              eventName: SYSTEM_DEFAULTS.STORAGE.EVENTS_STAT.REQUESTS_STAT,
              limit: Number(
                import.meta.env.VITE_APP_GITHUB_API_TOKENIZED_HOURLY_LIMIT,
              ),
            }),
          );
        }
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

        <Stack style={{ width: '100%' }}>
          <Typography variant='body2'>
            Free requests (GitHub limit -{' '}
            {Number(import.meta.env.VITE_APP_GITHUB_API_FREE_HOURLY_LIMIT)} per
            hour)
          </Typography>

          <LinearProgressWithLabel value={freeHourlyApiUsage} />
        </Stack>

        <Stack style={{ width: '100%' }}>
          <Typography variant='body2'>
            Tokenised requests (GitHub limit -{' '}
            {Number(import.meta.env.VITE_APP_GITHUB_API_TOKENIZED_HOURLY_LIMIT)}{' '}
            per hour)
          </Typography>

          <LinearProgressWithLabel value={tokenizedHourlyApiUsage} />
        </Stack>

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
