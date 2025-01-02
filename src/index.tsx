import { FC } from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { PopupPage } from './_modules/Popup/components/PopupPage/PopupPage';
import { store } from './store';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { OptionsPage } from './_modules/Options/components/OptionsPage/OptionsPage';
import { Stack } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App: FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Provider store={store}>
        <Stack spacing={2}>
          <div style={{ width: '400px' }}>
            <PopupPage />
          </div>

          <div style={{ width: '400px' }}>
            <OptionsPage />
          </div>
        </Stack>
      </Provider>
    </ThemeProvider>
  );
};

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  root.render(<App />);
} else {
  const newContainer = document.createElement('div');
  newContainer.id = 'root';
  document.body.appendChild(newContainer);

  const root = createRoot(newContainer);

  root.render(<App />);
}
