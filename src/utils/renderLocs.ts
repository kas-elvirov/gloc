import { TRIES_DEFAULT } from '../consts/index';

import { formatOutput } from './formatOutput';
import { requestLoc } from './requestLoc';
import { renderBadge } from './renderBadge';

export const renderLocs = (links: HTMLAnchorElement[], token: string) => {
	links.map((anchor: HTMLAnchorElement) => {
		const reponame = anchor.getAttribute('href');

		if (reponame) {
			requestLoc(reponame, TRIES_DEFAULT, token)
				.then(loc => renderLoc(anchor, formatOutput(loc)))
				.catch(err => console.error(`Error by setting LOC for ${reponame}`, err));
		}
	});
};

const renderLoc = (anchor: HTMLAnchorElement, loc: string) => {
	anchor.innerHTML += renderBadge(loc);
};