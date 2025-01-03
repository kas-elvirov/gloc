import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { store } from './AppWrapper.store';
import { darkTheme } from './AppWrapper.theme';

/**
 * # Application wrapper
 *
 * Wrap an app with
 * - theme
 * - store
 * - etc
 */
export const AppWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
};
