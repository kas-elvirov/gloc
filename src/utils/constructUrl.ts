import { log } from './log';

export const constructUrl = (repoName: string, token: string) =>
    tokenizeUrl(getApiUrl(repoName), token);

/**
 * @param {string} repo - /user/repo
 * @return {string}
 */
const getApiUrl = (repoName: string) =>
	`https://api.github.com/repos${repoName}/stats/code_frequency`;


const tokenizeUrl = (url: string, token: string): string => {
	if (typeof token === 'string') {
		return `${url}?access_token=${token}`;
	}

	log('e', 'Error by tokenizing URL');

	return url;
};
