/**
 * https://github.com/artem-solovev/gloc
 *
 * Licensed GPL-2.0 © Artem Solovev
 */
import * as $ from 'jquery';

import { log } from './utils/log';
import { isEmpty } from './utils/isEmpty';
import { formatOutput } from './utils/formatOutput';
import { APP_CLASSNAME, TRIES_DEFAULT } from './consts/index';
import { LOCATION, InitialData, GithubError, CodeFrequency, WeeklyAggregate } from './types';


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
	init()
	.then(res => {
		appendLoc(res);
		log('info', res);
	})
	.catch(err => log('err', err));
};

const init = (): Promise<InitialData> => {
	/**
	 * Current user's location
	 */
	const current: InitialData = {
		location: null,
		link: null,
	};

	const currentLocation = window.location.pathname.replace('/', '');

	// User's repos
	const user: NodeListOf<Element> = document.querySelectorAll('#user-repositories-list h3 a');
	const isUser = user.length > 0 ? LOCATION.USER : false;

	// Organisation's repos
	const organisation: NodeListOf<Element> = document.querySelectorAll('.repo-list h3 a');
	const isOrganisation = organisation.length > 0 ? LOCATION.ORGANIZATION : false;

	// Recommended repos
	const search: NodeListOf<Element> = document.querySelectorAll('.codesearch-results ul li a.v-align-middle');
	const isSearch = search.length > 0 ? LOCATION.SEARCH : false;

	// Single repo
	const single: HTMLAnchorElement = document.querySelector('.repohead-details-container h1 strong a');
	const isSingle = single ? LOCATION.SINGLE : false;

	// explore page
	const explore: NodeListOf<Element> = document.querySelectorAll('article h1 a.text-bold');
	const isExplore = currentLocation === LOCATION.EXPLORE.toLowerCase() && explore
		? LOCATION.EXPLORE
		: false;

	// tranding page
	const tranding: NodeListOf<Element> = document.querySelectorAll('article h1 a');
	const isTranding = currentLocation === LOCATION.TRENDING.toLowerCase() && tranding
		? LOCATION.EXPLORE
		: false;

	if (isUser) {
		current.location = LOCATION.USER;
		current.link = Array.prototype.slice.call(user);
	} else if (isOrganisation) {
		current.location = LOCATION.ORGANIZATION;
		current.link = Array.prototype.slice.call(organisation);
	} else if (isSearch) {
		current.location = LOCATION.SEARCH;
		current.link = Array.prototype.slice.call(search);
	} else if (isSingle) {
		current.location = LOCATION.SINGLE;
		current.link = [single];
	} else if (isExplore) {
		current.location = LOCATION.EXPLORE;
		current.link = Array.prototype.slice.call(explore);
	} else if (isTranding) {
		current.location = LOCATION.TRENDING;
		current.link = Array.prototype.slice.call(tranding);
	} else {
		current.location = LOCATION.UNKNOWN;
	}

	if (current.location !== LOCATION.UNKNOWN && current.link.length > 0) {
		return Promise.resolve(current);
	} else {
		return Promise.reject('Error: unknown location for counting LOC (lines of code)');
	}
};

const appendLoc = (config: InitialData) => {
	config.link.map((anchor) => {
		const reponame = anchor.getAttribute('href');

		if (reponame) {
			getLoc(reponame, TRIES_DEFAULT)
			.then(loc => setLoc(anchor, formatOutput(loc)))
			.catch(err => console.error(`Error by setting LOC for ${reponame}`, err));
		}
	});
};

/**
 * @param {string} reponame /user/repo
 * @param {number} tries
 * @returns {Promise<number>}
 */
const getLoc = (reponame: string, tries: number): Promise<number | void> => {
	if (tries === 0) {
		return Promise.reject('Repo: ' + reponame + '; Too many requests to API !');
	}

	const url = tokenizeUrl(getApiUrl(reponame));

	return fetch(url)
		.then(response => response.json())
		.then(stat => {
			const isEmptyResponse = isEmpty(stat);
			if (stat && !isEmptyResponse) {
				return calculate(stat);
			}
			console.error(`Error by getting stat for ${reponame}. Response -->`, stat);
			return null;
		})
		.catch((err: GithubError) => {
			if (err.message) {
				console.error('\t err', err);
			} else {
				getLoc(reponame, tries - 1);
			}
		});
};

const setLoc = (anchor: HTMLAnchorElement, loc: string) => {
	anchor.innerHTML += getBadgeWithLines(loc);
};

/**
 * @param {string} repo - /user/repo
 * @return {string}
 */
const getApiUrl = (repoName: string) =>
	`https://api.github.com/repos${repoName}/stats/code_frequency`;

/**
 * Adds token to URL
 * @param {string} url
 * @return {string}
 */
const tokenizeUrl = (url: string) => {
	if (githubToken !== null && typeof githubToken === 'string') {
		return `${url}?access_token=${githubToken}`;
	}

	log('e', 'Error by tokenizing URL');

	return '';
};

const calculate = (stat: CodeFrequency): number => {
	return stat.reduce((total: number, changes: WeeklyAggregate) =>
		total + changes[1] + changes[2], 0);
};

/**
 * Returns badge container for LOC with LOC
 * @param {number | string} lines - LOC | Error
 * @return {html}
 */
const getBadgeWithLines = (lines: string) => {
	return (
		` <div class='box' style='font-size: 0; font-family: Verdana;'>
				<span
					style='background-color: #555555; color: #fff; padding: 2px 6px; font-size: 14px;'
				>
					${chrome.i18n.getMessage('lines')}
				</span>
				<span
					class='${APP_CLASSNAME}'
					style='background-color: #44CC11; color: #fff; padding: 2px 6px; font-size: 14px;'
				>
					${lines}
				</span>
			</div> `
	);
};
