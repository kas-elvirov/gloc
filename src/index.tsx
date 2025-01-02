import { DevApplication } from './_shared/apps/DevApplication/DevApplication';
import { renderApp } from './_shared/utils/renderApp';

renderApp({
  appId: 'root',
  Application: DevApplication,
});
