import { Avatar, Chip, IconButton, Paper, Stack, Typography } from '@mui/material';
import { pink } from '@mui/material/colors';
import SettingsIcon from '@mui/icons-material/Settings';
import { FC } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useGetRepoStatQuery } from '../../../../_shared/api/github/endpoints';

/**
 * # Popup page
 *
 * Page which opens on click from browser toolbar
 */
export const PopupPage: FC = () => {
  const onSettingsClick = () => {
    chrome.tabs.create({
      url: 'chrome://extensions/?options=' + chrome.runtime.id,
    });
  };

  const goToRepo = () => {
    window.open(import.meta.env.VITE_APP_APPLICATION_REPO, '_blank', 'noopener,noreferrer');
  };

  const {
    data,
    isFetching,

  } = useGetRepoStatQuery({
    repoName: 'gloc',
    author: 'kas-elvirov'
  });

  const statText = isFetching
    ? 'is loading ...'
    : `${data?.stargazers_count} coders already liked it`;

  return (
    <Paper variant='outlined'>
      <Stack
        direction='column'
        spacing={2}
        style={{
          padding: '16px',
          justifyContent: 'center',
          justifyItems: 'center',
          alignContent: 'center',
          alignItems: 'center'
        }}
      >
        <Stack direction='row' spacing={2} style={{ justifyContent: 'space-between' }}>
          <Stack direction='row' spacing={2}>
            <Typography variant='h4'>GitHub</Typography>
            <Typography variant='h4' color={pink[500]}>Gloc</Typography>
          </Stack>

          <IconButton onClick={onSettingsClick} title='Go to settings page'>
            <SettingsIcon />
          </IconButton>
        </Stack>

        <Chip
          avatar={<Avatar><GitHubIcon /></Avatar>}
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
