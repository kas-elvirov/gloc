import { CodeFrequency, GithubError } from '../types';

import { calculateLoc } from './calculateLoc';
import { getApiUrl } from './constructUrl';
import { isEmpty } from './isEmpty';

/*
	Read more:
	- https://developer.github.com/v3/auth/#via-oauth-and-personal-access-tokens
	- https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api/#authenticating-using-query-parameters
*/
export const requestLoc = (reponame: string, tries: number, token: string): Promise<number | void | null> => {
	if (tries === 0) {
		return Promise.reject('Repo: ' + reponame + '; Too many requests to API !');
	}

	const url = getApiUrl(reponame);
	const options = {
		method: 'GET',
		headers: {
			'Authorization': `token ${token}`
		},
	};

	return fetch(url, options)
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
