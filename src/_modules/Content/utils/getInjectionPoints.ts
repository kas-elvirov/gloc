import { RepoLocationConfig, CurrentUserLocation } from '../consts/locations';

export interface InjectionPointConfig {
  userLocation: CurrentUserLocation;

  applicationConfigs: Array<{
    appId: string,
    originalConfig: RepoLocationConfig;
    author: string;
    repository: string;
    placeToInsertAnApp: HTMLUListElement;
  }>;
}

export const getInjectionPoints = (initialConfigs: RepoLocationConfig[]): InjectionPointConfig => {
  const result: InjectionPointConfig = {
    userLocation: CurrentUserLocation.Unknown,
    applicationConfigs: [],
  };

  for (let i = 0; i < initialConfigs.length; i++) {
    const config = initialConfigs[i];

    const {
      userLocation,
      selector,
      pathToSelectRepoName,
      placeToInsert,
    } = config;

    if (userLocation === CurrentUserLocation.Unknown) {
      break;
    }

    // @ts-ignore
    const anchorWithRepoName = document[selector](pathToSelectRepoName) as HTMLAnchorElement;
    // @ts-ignore
    const placeToInsertAnApp = document[selector](placeToInsert) as HTMLUListElement;

    if (Boolean(anchorWithRepoName)) {
      const repoName = anchorWithRepoName.getAttribute('href') as string;
      const repoNameParts = repoName.split('/').filter(Boolean);

      result.userLocation = userLocation;

      result.applicationConfigs.push({
        appId: repoNameParts.join('-'),
        author: repoNameParts[0],
        repository: repoNameParts[1],
        originalConfig: config,
        placeToInsertAnApp,
      });

      console.group('getInjectionPoints');
      console.log('anchorWithRepoName', anchorWithRepoName);
      console.log('entityToInsert', placeToInsertAnApp);
      console.groupEnd();

      break;
    }

  }

  return result;
};
