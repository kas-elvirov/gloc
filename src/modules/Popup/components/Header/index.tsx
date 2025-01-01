import * as React from 'react';

import appConfig from '../../../Common/helpers/appConfig';
import { Grid, Typography } from '@mui/material';

export default class PopupPage extends React.PureComponent {
  render() {
    return (
      <Grid container direction="row" style={{ justifyItems: 'space-between' }}>
        <Grid item>
          <img
            alt="Extension logo"
            src="img/icon128.png"
            width="50"
            style={{
              verticalAlign: 'middle',
              marginRight: '2px',
            }}
          />
        </Grid>

        <Grid item>
          <Typography variant={'h5'}>GitHub &nbsp; Gloc</Typography>

          <Typography variant={'caption'}>
            Version: {appConfig.appVersion}
          </Typography>
        </Grid>

        <Grid item>header</Grid>
      </Grid>
    );
  }
}
