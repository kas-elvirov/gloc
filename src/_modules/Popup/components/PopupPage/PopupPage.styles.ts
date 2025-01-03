import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        padding: theme.spacing(2),
        justifyContent: 'center',
        justifyItems: 'center',
        alignContent: 'center',
        alignItems: 'center',
      },
      pageHeader: {
        justifyContent: 'space-between',
      },
    }),
  {
    classNamePrefix: 'PopupPage',
  }
);
