import { FC } from 'react';
import { createRoot } from 'react-dom/client';

/**
 * # Render app function
 *
 * Renders app into DOM
 */
export const renderApp = ({
  appId,
  Application,
}: {
  appId: string;
  Application: FC;
}) => {
  const container = document.getElementById(appId);

  if (container) {
    const root = createRoot(container);

    root.render(<Application />);
  } else {
    const newContainer = document.createElement('div');
    newContainer.id = appId;
    document.body.appendChild(newContainer);

    const root = createRoot(newContainer);

    root.render(<Application />);
  }
};
