import { Stack } from '@mui/material';
import { FC } from 'react';
import { OptionsPage } from '../../../_modules/Options/components/OptionsPage/OptionsPage';
import { PopupPage } from '../../../_modules/Popup/components/PopupPage/PopupPage';
import { useStyles } from './DevApplication.styles';
import { LocIndicator } from '../../../_modules/Content/containers/LocIndicator/LocIndicator';

/**
 * # Application for development purposes only
*/
export const DevApplication: FC = () => {
  const classes = useStyles();

  return (
    <Stack spacing={2} className={classes.root}>
      <div className={classes.pageWrapper}>
        <PopupPage />
      </div>

      <div className={classes.pageWrapper}>
        <OptionsPage />
      </div>

      <div className={classes.pageWrapper}>
        <LocIndicator
          /**
           * Mine app
          */
          author='kas-elvirov'
          repository='gloc'

          /**
           * problems - more than 10k commits
          */
          // author='torvalds'
          // repository='linux'

          /**
           * working
           *
           * Issue - https://github.com/kas-elvirov/gloc/issues/119
          */
          // author='Ollie-Hooper'
          // repository='StockifySentiment'

          /**
           * problems - negative LOC
           *
           * Issue
           * - https://github.com/kas-elvirov/gloc/issues/136 (now it's has more than 10k commits)
          */
          // author='scipy'
          // repository='scipy'

          /**
           * problems - negative LOC (working again)
           *
           * Issue
           * - https://github.com/kas-elvirov/gloc/issues/156
          */
          // author='Be1zebub'
          // repository='IGS'

          /**
           * problems - negative LOC
           *
           * Issue
           * - https://github.com/kas-elvirov/gloc/issues/12
          */
          // author='FezVrasta'
          // repository='bootstrap-material-design'

          /**
           * problems - negative LOC
           *
           * Issue
           * - https://github.com/kas-elvirov/gloc/issues/12
          */
          // author='reactos'
          // repository='reactos'

          /**
           * problems - negative LOC (working again)
           *
           * Issue
           * - https://github.com/kas-elvirov/gloc/issues/9
          */
          // author='AngularClass'
          // repository='angular2-webpack-starter'
        />
      </div>
    </Stack>
  );
};
