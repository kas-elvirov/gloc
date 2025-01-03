import { debounce } from 'lodash';
import { getInjectionPoints } from './_modules/Content/utils/getInjectionPoints';
import { POSSIBLE_REPO_LOCATIONS } from './_modules/Content/consts/locations';
import { renderApp } from './_shared/utils/renderApp';
import { Provider } from 'react-redux';
import { store } from './_shared/containers/AppWrapper/AppWrapper.store';
import { LocIndicator } from './_modules/Content/containers/LocIndicator/LocIndicator';

const initApp = debounce(() => {
  /**
      * - parse page
      * - mount mini apps with buttons
      * - manual request
      */
  const injectionPoints = getInjectionPoints(POSSIBLE_REPO_LOCATIONS);

  console.group('initApp');
  console.log('injectionPoints', injectionPoints);
  console.groupEnd();

  injectionPoints.applicationConfigs.forEach(appConfig => {
    const list = appConfig.placeToInsertAnApp;

    const newItem = document.createElement('li');
    newItem.id = appConfig.appId;
    newItem.textContent = '';

    list.appendChild(newItem.cloneNode(true));

    chrome.storage.sync.get({ 'x-github-token': '' }, (result) => {
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
