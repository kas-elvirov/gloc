import { DevApplication } from './_shared/apps/DevApplication/DevApplication';
import { AppWrapper } from './_shared/containers/AppWrapper/AppWrapper';
import { renderApp } from './_shared/utils/renderApp';

renderApp({
  appId: 'root',
  Application: () => (
    <AppWrapper>
      <DevApplication />
    </AppWrapper>
  ),
});
