import { FC } from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { OptionsPage } from './_modules/Options/components/OptionsPage/OptionsPage';
import { store } from './store';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

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
        <OptionsPage />
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
