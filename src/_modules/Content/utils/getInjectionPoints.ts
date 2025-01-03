import { CurrentUserLocation, RepoLocationConfig } from '../consts/locations';

export interface InjectionPointConfig {
  userLocation: CurrentUserLocation;

  applicationConfigs: Array<{
    /**
     * Application id in format
     * author--repositoryname
     */
    appId: string;

    /**
     * Original location config for this app
     */
    originalConfig: RepoLocationConfig;

    /**
     * Repo author (GitHub login)
     */
    author: string;

    /**
     * Repo name
     */
    repository: string;

    /**
     * DOM element to add our react app by link
     */
    placeToInsertAnApp: HTMLUListElement;
  }>;
}

/**
 * # Get injection points
 *
 * Function gets location configs and gives out working configs for current location
 * These congigs will be used for LocIndicator injection
 */
export const getInjectionPoints = (
  initialConfigs: RepoLocationConfig[],
): InjectionPointConfig => {
  const result: InjectionPointConfig = {
    userLocation: CurrentUserLocation.Unknown,
    applicationConfigs: [],
  };

  for (let i = 0; i < initialConfigs.length; i++) {
    const config = initialConfigs[i];

    const { userLocation, selector, pathToSelectRepoName, placeToInsert } =
      config;

    /**
     * If location is unknown, stop script exection
     */
    if (userLocation === CurrentUserLocation.Unknown) {
      break;
    }

    // @ts-ignore
    const anchorWithRepoName = document[selector](
      pathToSelectRepoName,
    ) as HTMLAnchorElement;
    // @ts-ignore
    const placeToInsertAnApp = document[selector](
      placeToInsert,
    ) as HTMLUListElement;

    if (Boolean(anchorWithRepoName)) {
      const repoName = anchorWithRepoName.getAttribute('href') as string;
      const repoNameParts = repoName.split('/').filter(Boolean);

      result.userLocation = userLocation;

      result.applicationConfigs.push({
        appId: repoNameParts.join('--'),
        author: repoNameParts[0],
        repository: repoNameParts[1],
        originalConfig: config,
        placeToInsertAnApp,
      });

      break;
    }
  }

  return result;
};
