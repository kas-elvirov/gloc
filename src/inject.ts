/**
 * https://github.com/artem-solovev/gloc
 *
 * Licensed GPL-2.0 © Artem Solovev
 */
import * as $ from 'jquery';

import { log } from './utils/log';
import { renderLocs } from './utils/renderLocs';
import { getLinksFromDom } from './utils/getLinksFromDom';

/**
 * Accepted abbreviations
 * - LOC - lines of code
 */

let githubToken: string = null;

/**
 * Main
 */
(() => {
	chrome.storage.sync.get({ 'x-github-token': '' }, result => {
		if (result && result['x-github-token'] !== null) {
			githubToken = result['x-github-token'];
		}

		gloc();

		$(document).on('pjax:complete', () => {
			gloc();
		});
	});
})();

const gloc = (): void => {
	getLinksFromDom()
		.then(links => {
			renderLocs(links, githubToken);

			log('info', links);
		})
		.catch(err => log('err', err));
};
