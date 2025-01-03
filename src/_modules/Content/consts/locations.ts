export enum CurrentUserLocation {
  /**
   * # User page (there are pinned repos)
   *
   * For example - https://github.com/kas-elvirov
   */
  PinnedByUser = 'PinnedByUser',

  /**
   * Single repo page
   *
   * For example - https://github.com/kas-elvirov/gloc
   */
  SinglePage = 'SinglePage',

  /**
   * # Unknown location
   *
   * Just placeholder for later scripts
   */
  Unknown = 'Unknown',
}

export interface RepoLocationConfig {
  /**
   * Where user is currently located
   */
  userLocation: CurrentUserLocation;

  /**
   * Which selector script has to apply to `pathToSelectRepoName` and `placeToInsert` paths
   */
  selector: 'querySelectorAll' | 'querySelector';

  /**
   * Place in GitHub DOM where repo name is located (author/reposity)
   */
  pathToSelectRepoName: string;

  /**
   * Place in GitHub DOM where script has to insert its functionality
   */
  placeToInsert: string;
}

/**
 * Place for location. Can be extended for other places but i don't want to overload GitHub api with these scripts
 */
export const POSSIBLE_REPO_LOCATIONS: RepoLocationConfig[] = [
  /* {
    userLocation: CurrentUserLocation.PinnedByUser,
    selector: 'querySelectorAll',
    pathToSelectRepoName:
      '.js-pinned-items-reorder-list .pinned-item-list-item-content div a',
    placeToInsert: '.wb-break-all',
  }, */
  {
    userLocation: CurrentUserLocation.SinglePage,
    selector: 'querySelector',
    pathToSelectRepoName: 'div.d-flex.mb-3.px-3.px-lg-5 > div > div > strong a',
    placeToInsert:
      'div.AppHeader-globalBar-start > div > div.AppHeader-context-full > nav > ul',
  },
  {
    userLocation: CurrentUserLocation.Unknown,
    selector: 'querySelectorAll',
    pathToSelectRepoName: '',
    placeToInsert: '',
  },
];
