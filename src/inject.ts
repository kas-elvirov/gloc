import { renderLocs } from './utils/renderLocs';
import { getLinksFromDom } from './utils/getLinksFromDom';

let githubToken = '';

const gloc = (): void => {
  getLinksFromDom()
    .then((linksData) => {
      renderLocs(linksData, githubToken);

      console.info(linksData);
    })
    .catch((err) => console.error(err));
};

chrome.storage.sync.get({ 'x-github-token': '' }, (result) => {
  if (result && result['x-github-token'] !== null) {
    githubToken = result['x-github-token'];
  }

  gloc();
});

chrome.runtime.onMessage.addListener(function (request) {
  if (request.message === 'gloc-extension-page-update') {
    // reinitialize after page update
    gloc();
  }
});
