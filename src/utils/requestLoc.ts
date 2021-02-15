import { CodeFrequency, GithubError } from '../types';

import { calculateLoc } from './calculateLoc';
import { getApiUrl } from './constructUrl';
import { isEmpty } from './isEmpty';

/*
	Read more:
	- https://developer.github.com/v3/auth/#via-oauth-and-personal-access-tokens
	- https://developer.github.com
		/changes/2019-11-05-deprecated-passwords-and-authorizations-api/#authenticating-using-query-parameters
*/

function makeRequest(repoName: string, token: string): Promise<Response> {
	const url = getApiUrl(repoName);
	const options: RequestInit | undefined = {
		method: 'GET',
	};

	if (token) {
		options.headers = {
			Authorization: `token ${token}`,
		};
	}

	return fetch(url, options);
}

export const requestLoc = (repoName: string, tries: number, token: string): Promise<number | void | null> => {
	if (tries === 0) {
		return Promise.reject(`Repo: ${repoName}; Too many requests to API !`);
	}

	return makeRequest(repoName, token)
		.then(async response => {
			// A response of 202 indicates that stats are still being collected.
			// After waiting for a couple seconds, the stats are usually available.
			if (response.status === 202) {
				let sleepTime = 1000;
				let status = 202;
				let tries = 4;
				while (tries > 0) {
					// sleep for some time
					await new Promise(resolve => window.setTimeout(resolve, sleepTime));
					const resp = await makeRequest(repoName, token);
					status = resp.status;

					// got a 200 or an error
					if (status !== 202) {
						return resp;
					}

					// exponentially increase wait time
					sleepTime *= 2;
					tries--;
				}
			} else if (response.status === 200) {
				return response;
			}
			return Promise.reject();
		})
		.then(response => response.json())
		.then((stat: CodeFrequency) => {
			if (!isEmpty(stat)) {
				return calculateLoc(stat);
			}

			console.error(`Error by calculating LOC for ${repoName}. Incoming stat -->`, stat);

			return null;
		})
		.catch((err: GithubError) => {
			// this occurs when we retry after a 202 and still don't get a 200 response
			if (err === undefined) {
				console.error(`Error by getting stat for ${repoName}.`);
				return;
			}

			if (err.message) {
				console.error(`Error by getting stat for ${repoName}. Response -->`, err);
			}

			requestLoc(repoName, tries - 1, token);
		});
};
