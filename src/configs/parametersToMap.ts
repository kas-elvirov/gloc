import isPositiveArray from 'is-positive-array';

import { LOCATION } from '../types';

export type ExistenceChecker = (entity: HTMLAnchorElement[]) => boolean;
export type Wrapper = (links: HTMLAnchorElement) => HTMLAnchorElement[];

export interface ParameterToMap {
	locationName: LOCATION;
	selector: 'querySelectorAll' | 'querySelector' | void;
	pathToSelect: string | void;
	pathToInsert?: string ;
	existenceChecker: ExistenceChecker | void;
	wrapper: Wrapper | void;
}

const currentUserLocation = window.location.pathname.replace('/', '');

export const parametersToMap: ParameterToMap[] = [
	{
		/*
			https://github.com/kas-elvirov
		*/
		locationName: LOCATION.PINNED_REPOS,
		selector: 'querySelectorAll',
		pathToSelect: '.js-pinned-items-reorder-list .pinned-item-list-item-content div a',
		pathToInsert: '.wb-break-all',
		existenceChecker: (entity: HTMLAnchorElement[]) => isPositiveArray(entity),
		wrapper: (entity) => Array.prototype.slice.call(entity),
	},
	{
		/*
			https://github.com/torvalds
		*/
		locationName: LOCATION.POPULAR_REPOS,
		selector: 'querySelectorAll',
		pathToSelect: '.js-pinned-items-reorder-container ol li div div div a',
		pathToInsert: '.wb-break-all',
		existenceChecker: (entity: HTMLAnchorElement[]) => isPositiveArray(entity),
		wrapper: (entity) => Array.prototype.slice.call(entity),
	},
	{
		locationName: LOCATION.ORGANIZATION,
		selector: 'querySelectorAll',
		pathToSelect: '#org-repositories div ul div.flex-auto > h3 > a',
		existenceChecker: (entity: HTMLAnchorElement[]) => isPositiveArray(entity),
		wrapper: (entity) => Array.prototype.slice.call(entity),
	},
	{
		locationName: LOCATION.SEARCH,
		selector: 'querySelectorAll',
		pathToSelect: '.codesearch-results ul li a.v-align-middle',
		existenceChecker: (entity: HTMLAnchorElement[]) => isPositiveArray(entity),
		wrapper: (entity) => Array.prototype.slice.call(entity),
	},
	{
		locationName: LOCATION.SINGLE,
		selector: 'querySelector',
		pathToSelect: '#repository-container-header > div.d-flex.mb-3.px-3.px-md-4.px-lg-5 > div > div > strong a',
		/*
			for example: https://github.com/kas-elvirov/gloc
		*/
		pathToInsert: '.public',
		existenceChecker: (entity: HTMLAnchorElement[]) => Boolean(entity),
		wrapper: (entity: HTMLAnchorElement) => [entity],
	},
	{
		locationName: LOCATION.EXPLORE,
		selector: 'querySelectorAll',
		pathToSelect: 'article h1 a.text-bold',
		existenceChecker: (entity: HTMLAnchorElement[]) =>
			currentUserLocation === LOCATION.EXPLORE.toLowerCase() && isPositiveArray(entity),
		wrapper: (entity) => Array.prototype.slice.call(entity),
	},
	{
		locationName: LOCATION.TRENDING,
		selector: 'querySelectorAll',
		pathToSelect: 'article h1 a',
		existenceChecker: (entity: HTMLAnchorElement[]) =>
			currentUserLocation === LOCATION.TRENDING.toLowerCase() && isPositiveArray(entity),
		wrapper: (entity) => Array.prototype.slice.call(entity),
	},
	{
		/*
			https://github.com/kas-elvirov?tab=repositories
		*/
		locationName: LOCATION.USER_REPOSITORIES,
		selector: 'querySelectorAll',
		pathToSelect: '#user-repositories-list ul li h3 a',
		existenceChecker: (entity: HTMLAnchorElement[]) => isPositiveArray(entity),
		wrapper: (entity) => Array.prototype.slice.call(entity),
	},
	{
		locationName: LOCATION.LIKED_REPOS,
		selector: 'querySelectorAll',
		pathToSelect: '.page-profile h3 a',
		existenceChecker: (entity: HTMLAnchorElement[]) => isPositiveArray(entity),
		wrapper: (entity) => Array.prototype.slice.call(entity),
	},
	{
		locationName: LOCATION.UNKNOWN,
		selector: undefined,
		pathToSelect: undefined,
		existenceChecker: undefined,
		wrapper: undefined,
	},
];