import { LOADING_OUTPUT, TRIES_DEFAULT } from '../consts/index';

import { formatOutput } from './formatOutput';
import { requestLoc } from './requestLoc';
import { renderBadge } from './renderBadge';
import { InitialData } from '../../types';

export const renderLocs = (linksData: InitialData, token: string) => {
  linksData.links.forEach((anchor: HTMLAnchorElement, index) => {
    const repoName = anchor.getAttribute('href');

    const placeToInsert = linksData.linksToInsert[index] || anchor;

    if (repoName) {
      const renderLoaderFunc = makeRenderLoaderFunc(placeToInsert);

      renderLoaderFunc(LOADING_OUTPUT);

      requestLoc(repoName, TRIES_DEFAULT, token)
        .then((loc) => renderLoc(placeToInsert, repoName, formatOutput(loc)))
        .catch((err) =>
          console.error(`Error by setting LOC for ${repoName}`, err)
        );
    }
  });
};

/**
 * Creates a function to render LOC badges.
 * The initial inner HTML of the anchor element is saved and reset upon updating the badge.
 * @param anchor HTML Element to add LOC badges to
 */
const makeRenderLoaderFunc = (anchor: HTMLAnchorElement) => {
  const startInnerHTML = anchor.innerHTML;

  return (loc: string) => {
    anchor.innerHTML = startInnerHTML + renderBadge(loc);
  };
};

const renderLoc = (
  anchor: HTMLAnchorElement,
  reponame: string,
  loc: string
) => {
  anchor.innerHTML = reponame.split('/').slice(-1)[0] + renderBadge(loc);
};
