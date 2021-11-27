/**
 * https://github.com/kas-elvirov/gloc
 *
 * Licensed GPL-2.0 © Kas Elvirov
 */
import 'pjax';

import { log } from './utils/log';
import { renderLocs } from './utils/renderLocs';
import { getLinksFromDom } from './utils/getLinksFromDom';

/**
 * Accepted abbreviations
 * - LOC - lines of code
 */

let githubToken = '';

/**
 * Main
 */
(() => {
	chrome.storage.sync.get({ 'x-github-token': '' }, result => {
		if (result && result['x-github-token'] !== null) {
			githubToken = result['x-github-token'];
		}

		gloc();

		document.addEventListener('pjax:complete', () => {
			gloc();
		});
	});
})();

const gloc = (): void => {
	getLinksFromDom()
		.then(linksData => {
			renderLocs(linksData, githubToken);

			log('info', linksData);
		})
		.catch(err => log('err', err));
};
