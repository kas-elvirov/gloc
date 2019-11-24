import { InitialData, LOCATION } from '../types';

export const getLinksFromDom = (): Promise<HTMLAnchorElement[]> => {
	/**
	 * Current user's location
	 */
	const current: InitialData = {
		location: null,
		links: null,
	};

	const currentUserLocation = window.location.pathname.replace('/', '');

	// User's repos
	const user: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('#user-repositories-list h3 a');
	const isUser = user.length > 0 ? LOCATION.USER : false;

	// Organisation's repos
	const organisation: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.repo-list h3 a');
	const isOrganisation = organisation.length > 0 ? LOCATION.ORGANIZATION : false;

	// Recommended repos
	const search: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.codesearch-results ul li a.v-align-middle');
	const isSearch = search.length > 0 ? LOCATION.SEARCH : false;

	// Single repo
	const single: HTMLAnchorElement = document.querySelector('.repohead-details-container h1 strong a');
	const isSingle = single ? LOCATION.SINGLE : false;

	// explore page
	const explore: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('article h1 a.text-bold');
	const isExplore = currentUserLocation === LOCATION.EXPLORE.toLowerCase() && explore
		? LOCATION.EXPLORE
		: false;

	// tranding page
	const tranding: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('article h1 a');
	const isTranding = currentUserLocation === LOCATION.TRENDING.toLowerCase() && tranding
		? LOCATION.EXPLORE
		: false;

	if (isUser) {
		current.location = LOCATION.USER;
		current.links = Array.prototype.slice.call(user);
	} else if (isOrganisation) {
		current.location = LOCATION.ORGANIZATION;
		current.links = Array.prototype.slice.call(organisation);
	} else if (isSearch) {
		current.location = LOCATION.SEARCH;
		current.links = Array.prototype.slice.call(search);
	} else if (isSingle) {
		current.location = LOCATION.SINGLE;
		current.links = [single];
	} else if (isExplore) {
		current.location = LOCATION.EXPLORE;
		current.links = Array.prototype.slice.call(explore);
	} else if (isTranding) {
		current.location = LOCATION.TRENDING;
		current.links = Array.prototype.slice.call(tranding);
	} else {
		current.location = LOCATION.UNKNOWN;
	}

	if (current.location !== LOCATION.UNKNOWN && current.links.length > 0) {
		return Promise.resolve(current.links);
	} else {
		return Promise.reject('Error: unknown location for counting LOC (lines of code)');
	}
};
