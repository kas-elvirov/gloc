import * as React from 'react';
import { createRoot } from 'react-dom/client';

import Popup from './modules/Popup/index';

class PopupPage extends React.PureComponent {
  render() {
    return <Popup />;
  }
}

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  root.render(<PopupPage />);
} else {
  const newContainer = document.createElement('div');
  newContainer.id = 'root';
  document.body.appendChild(newContainer);

  const root = createRoot(newContainer);

  root.render(<PopupPage />);
}
