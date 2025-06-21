import { debounce } from 'lodash';

import { Provider } from 'react-redux';

import { POSSIBLE_REPO_LOCATIONS } from './_modules/Content/consts/locations';
import { LocIndicator } from './_modules/Content/containers/LocIndicator/LocIndicator';
import { getInjectionPoints } from './_modules/Content/utils/getInjectionPoints';
import { store } from './_shared/containers/AppWrapper/AppWrapper.store';
import { renderApp } from './_shared/utils/renderApp';

const initApp = debounce(() => {
  const injectionPoints = getInjectionPoints(POSSIBLE_REPO_LOCATIONS);

  injectionPoints.applicationConfigs.forEach(appConfig => {
    console.log(
      '[GLOC] - preparing to mount a widget with next config',
      appConfig,
    );

    const placeToMountNode = appConfig.placeToInsertAnApp;

    const newItem = document.createElement('li');
    newItem.id = appConfig.appId;
    newItem.textContent = '';

    placeToMountNode.appendChild(newItem.cloneNode(true));

    chrome.storage.sync.get({ 'x-github-token': '' }, result => {
      if (result && result['x-github-token'] !== null) {
        renderApp({
          appId: appConfig.appId,
          Application: () => (
            <Provider store={store}>
              <LocIndicator
                author={appConfig.author}
                repository={appConfig.repository}
                token={result['x-github-token']}
              />
            </Provider>
          ),
        });
      }
    });
  });
}, 500);

initApp();

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  initApp();
});
