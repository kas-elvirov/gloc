import React, { FC } from 'react';
import { render } from 'react-dom';
import { Grid } from '@material-ui/core';
import PopupPage from './modules/Popup';

const App: FC = () => {
  return (
    <Grid container>
      <Grid item></Grid>

      <Grid item>
        <PopupPage />
      </Grid>
    </Grid>
  );
};

const domNode = document.getElementById('root');

render(<App />, domNode);
