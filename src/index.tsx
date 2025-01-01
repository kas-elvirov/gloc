import React, { FC } from 'react';
import { createRoot } from 'react-dom/client';
import PopupPage from './modules/Popup';
import { Stack } from '@mui/material';

const App: FC = () => {
  return (
    <Stack spacing={2}>
      <PopupPage />
    </Stack>
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
