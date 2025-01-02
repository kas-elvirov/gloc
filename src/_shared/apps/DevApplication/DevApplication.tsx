import { Stack } from '@mui/material';
import { FC } from 'react';
import { OptionsPage } from '../../../_modules/Options/components/OptionsPage/OptionsPage';
import { PopupPage } from '../../../_modules/Popup/components/PopupPage/PopupPage';
import { AppWrapper } from '../../../_shared/containers/AppWrapper/AppWrapper';
import { useStyles } from './DevApplication.styles';

/**
 * # Application for development purposes only
*/
export const DevApplication: FC = () => {
  const classes = useStyles();

  return (
    <AppWrapper>
      <Stack spacing={2} className={classes.root}>
        <div className={classes.pageWrapper}>
          <PopupPage />
        </div>

        <div className={classes.pageWrapper}>
          <OptionsPage />
        </div>
      </Stack>
    </AppWrapper>
  );
};
