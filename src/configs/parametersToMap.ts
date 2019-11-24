import { LOCATION } from '../types';

export type ParameterToMap = {
    locationName: LOCATION,
    selector: 'querySelectorAll' | 'querySelector',
    pathToSelect: string,
    existenceChecker: (entity: NodeListOf<HTMLAnchorElement> | HTMLAnchorElement) => boolean,
    wrapper: (links: NodeListOf<HTMLAnchorElement> | HTMLAnchorElement) => HTMLAnchorElement[],
}

const currentUserLocation = window.location.pathname.replace('/', '');

export const parametersToMap: ParameterToMap[] = [
    {
        locationName: LOCATION.USER,
        selector: 'querySelectorAll',
        pathToSelect: '#user-repositories-list h3 a',
        existenceChecker: (entity: NodeListOf<HTMLAnchorElement>) => entity && entity.length > 0,
        wrapper: (entity) => Array.prototype.slice.call(entity),
    },
    {
        locationName: LOCATION.ORGANIZATION,
        selector: 'querySelectorAll',
        pathToSelect: '.repo-list h3 a',
        existenceChecker: (entity: NodeListOf<HTMLAnchorElement>) => entity && entity.length > 0,
        wrapper: (entity) => Array.prototype.slice.call(entity),
    },
    {
        locationName: LOCATION.SEARCH,
        selector: 'querySelectorAll',
        pathToSelect: '.codesearch-results ul li a.v-align-middle',
        existenceChecker: (entity: NodeListOf<HTMLAnchorElement>) => entity && entity.length > 0,
        wrapper: (entity) => Array.prototype.slice.call(entity),
    },
    {
        locationName: LOCATION.SINGLE,
        selector: 'querySelector',
        pathToSelect: '.repohead-details-container h1 strong a',
        existenceChecker: (entity: NodeListOf<HTMLAnchorElement>) => Boolean(entity),
        wrapper: (entity: HTMLAnchorElement) => [entity],
    },
    {
        locationName: LOCATION.EXPLORE,
        selector: 'querySelectorAll',
        pathToSelect: 'article h1 a.text-bold',
        existenceChecker: (entity: NodeListOf<HTMLAnchorElement>) =>
            currentUserLocation === LOCATION.EXPLORE.toLowerCase() && entity && entity.length > 0,
        wrapper: (entity) => Array.prototype.slice.call(entity),
    },
    {
        locationName: LOCATION.TRENDING,
        selector: 'querySelectorAll',
        pathToSelect: 'article h1 a',
        existenceChecker: (entity: NodeListOf<HTMLAnchorElement>) =>
            currentUserLocation === LOCATION.TRENDING.toLowerCase() && entity && entity.length > 0,
        wrapper: (entity) => Array.prototype.slice.call(entity),
    },
    {
        locationName: LOCATION.PINNED_REPOS,
        selector: 'querySelectorAll',
        pathToSelect: 'form ol li a.text-bold',
        existenceChecker: (entity: NodeListOf<HTMLAnchorElement>) => entity && entity.length > 0,
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