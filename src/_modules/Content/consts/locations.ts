export enum CurrentUserLocation {
  PinnedByUser = 'PinnedByUser',
  SinglePage = 'SinglePage',
  Unknown = 'Unknown',
}

export type IsNodeValidCallback = (entity: HTMLAnchorElement[]) => boolean;
export type NodeToArrayConverter = (links: HTMLAnchorElement) => HTMLAnchorElement[];

export interface RepoLocationConfig {
  userLocation: CurrentUserLocation;
  selector: 'querySelectorAll' | 'querySelector';
  pathToSelectRepoName: string;
  placeToInsert: string;
}

export const POSSIBLE_REPO_LOCATIONS: RepoLocationConfig[] = [
  // {
  //   /**
  //    * Example https://github.com/kas-elvirov
  //    */
  //   userLocation: CurrentUserLocation.PinnedByUser,
  //   selector: 'querySelectorAll',
  //   pathToSelectRepoName:
  //     '.js-pinned-items-reorder-list .pinned-item-list-item-content div a',
  //   placeToInsert: '.wb-break-all',
  //   callback: {
  //     isNodeValid: (entity: HTMLAnchorElement[]) => entity?.length > 0,
  //     convertNodeToArray: (entity) => Array.prototype.slice.call(entity),
  //   },
  // },
  {
    userLocation: CurrentUserLocation.SinglePage,
    selector: 'querySelector',
    pathToSelectRepoName:
      'div.d-flex.mb-3.px-3.px-lg-5 > div > div > strong a',
    /**
     * Example https://github.com/kas-elvirov/gloc
     */
    placeToInsert: 'div.AppHeader-globalBar-start > div > div.AppHeader-context-full > nav > ul',
  },
  {
    userLocation: CurrentUserLocation.Unknown,
    selector: 'querySelectorAll',
    pathToSelectRepoName: '',
    placeToInsert: '',
  },
];
