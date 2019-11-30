import { CodeFrequency, GithubError } from '../types';

import { calculateLoc } from './calculateLoc';
import { constructUrl } from './constructUrl';
import { isEmpty } from './isEmpty';

export const requestLoc = (reponame: string, tries: number, token: string): Promise<number | void | null> => {
	if (tries === 0) {
		return Promise.reject('Repo: ' + reponame + '; Too many requests to API !');
	}

	const url = constructUrl(reponame, token);

	return fetch(url)
		.then(response => response.json())
		.then((stat: CodeFrequency) => {
			if (!isEmpty(stat)) {
				return calculateLoc(stat);
			}

			console.error(`Error by calculating LOC for ${reponame}. Incoming stat -->`, stat);

			return null;;
		})
		.catch((err: GithubError) => {
			if (err.message) {
				console.error(`Error by getting stat for ${reponame}. Response -->`, err);
			}

			requestLoc(reponame, tries - 1, token);
		});
};
