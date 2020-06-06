import { TRIES_DEFAULT } from '../consts/index';

import { formatOutput } from './formatOutput';
import { requestLoc } from './requestLoc';
import { renderBadge } from './renderBadge';
import { InitialData } from '../types';

export const renderLocs = (linksData: InitialData, token: string) => {
	linksData.links.map((anchor: HTMLAnchorElement, index) => {
		const reponame = anchor.getAttribute('href');

		const placeToInsert = linksData.linksToInsert[index] || anchor;

		if (reponame) {
			requestLoc(reponame, TRIES_DEFAULT, token)
				.then(loc => renderLoc(placeToInsert, formatOutput(loc)))
				.catch(err => console.error(`Error by setting LOC for ${reponame}`, err));
		}
	});
};

const renderLoc = (anchor: HTMLAnchorElement, loc: string) => {
	anchor.innerHTML += renderBadge(loc);
};