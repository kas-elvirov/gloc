import { LOCATION } from '../types';

export type ExistenceChecker = (entity: HTMLAnchorElement[]) => boolean;
export type Wrapper = (links: HTMLAnchorElement) => HTMLAnchorElement[];

export interface ParameterToMap {
  locationName: LOCATION;
  selector: 'querySelectorAll' | 'querySelector';
  pathToSelect: string;
  pathToInsert?: string;
  existenceChecker: ExistenceChecker;
  wrapper: Wrapper;
}

const currentUserLocation = window.location.pathname.replace('/', '');

export const GITHUB_LOCATION_CONFIGS: ParameterToMap[] = [
  {
    /**
     * Example https://github.com/kas-elvirov
     */
    locationName: LOCATION.PINNED_REPOS,
    selector: 'querySelectorAll',
    pathToSelect:
      '.js-pinned-items-reorder-list .pinned-item-list-item-content div a',
    pathToInsert: '.wb-break-all',
    existenceChecker: (entity: HTMLAnchorElement[]) => entity?.length > 0,
    wrapper: (entity) => Array.prototype.slice.call(entity),
  },
  {
    locationName: LOCATION.SINGLE,
    selector: 'querySelector',
    pathToSelect:
      '#repository-container-header > div.d-flex.mb-3.px-3.px-lg-5 > div > div > strong a',
    /**
     * Example https://github.com/kas-elvirov/gloc
     */
    pathToInsert: '.public',
    existenceChecker: (entity: HTMLAnchorElement[]) => Boolean(entity),
    wrapper: (entity: HTMLAnchorElement) => [entity],
  },
  {
    locationName: LOCATION.UNKNOWN,
    selector: 'querySelectorAll',
    pathToSelect: '',
    existenceChecker: (entity: HTMLAnchorElement[]) => entity?.length > 0,
    wrapper: (entity) => Array.prototype.slice.call(entity),
  },
];

export const GITHUB_LOCATION_CONFIGS_LEGACY: ParameterToMap[] = [
  {
    /*
			https://github.com/torvalds
		*/
    locationName: LOCATION.POPULAR_REPOS,
    selector: 'querySelectorAll',
    pathToSelect: '.js-pinned-items-reorder-container ol li div div div a',
    pathToInsert: '.wb-break-all',
    existenceChecker: (entity: HTMLAnchorElement[]) => entity?.length > 0,
    wrapper: (entity) => Array.prototype.slice.call(entity),
  },
  {
    locationName: LOCATION.ORGANIZATION,
    selector: 'querySelectorAll',
    pathToSelect: '#org-repositories div ul div.flex-auto > h3 > a',
    existenceChecker: (entity: HTMLAnchorElement[]) => entity?.length > 0,
    wrapper: (entity) => Array.prototype.slice.call(entity),
  },
  {
    locationName: LOCATION.SEARCH,
    selector: 'querySelectorAll',
    pathToSelect: '.codesearch-results ul li a.v-align-middle',
    existenceChecker: (entity: HTMLAnchorElement[]) => entity?.length > 0,
    wrapper: (entity) => Array.prototype.slice.call(entity),
  },
  {
    locationName: LOCATION.EXPLORE,
    selector: 'querySelectorAll',
    pathToSelect: 'article h1 a.text-bold',
    existenceChecker: (entity: HTMLAnchorElement[]) =>
      currentUserLocation === LOCATION.EXPLORE.toLowerCase() &&
      entity?.length > 0,
    wrapper: (entity) => Array.prototype.slice.call(entity),
  },
  {
    locationName: LOCATION.TRENDING,
    selector: 'querySelectorAll',
    pathToSelect: 'article h1 a',
    existenceChecker: (entity: HTMLAnchorElement[]) =>
      currentUserLocation === LOCATION.TRENDING.toLowerCase() &&
      entity?.length > 0,
    wrapper: (entity) => Array.prototype.slice.call(entity),
  },
  {
    /*
			https://github.com/kas-elvirov?tab=repositories
		*/
    locationName: LOCATION.USER_REPOSITORIES,
    selector: 'querySelectorAll',
    pathToSelect: '#user-repositories-list ul li h3 a',
    existenceChecker: (entity: HTMLAnchorElement[]) => entity?.length > 0,
    wrapper: (entity) => Array.prototype.slice.call(entity),
  },
  {
    locationName: LOCATION.LIKED_REPOS,
    selector: 'querySelectorAll',
    pathToSelect: '.page-profile h3 a',
    existenceChecker: (entity: HTMLAnchorElement[]) => entity?.length > 0,
    wrapper: (entity) => Array.prototype.slice.call(entity),
  },
];
