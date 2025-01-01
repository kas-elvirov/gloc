import { ParameterToMap } from '../configs/parametersToMap';
import { LOCATION, InitialData } from '../types';

export const scrapData = (parameters: ParameterToMap[]): InitialData => {
  const result: InitialData = {
    location: LOCATION.UNKNOWN,
    links: [],
    linksToInsert: [],
  };

  for (let i = 0; i < parameters.length; i++) {
    const config = parameters[i];

    const {
      locationName,
      selector,
      pathToSelect,
      pathToInsert,
      existenceChecker,
      wrapper,
    } = config;

    // @ts-ignore
    const entity = document[selector](pathToSelect);
    // @ts-ignore
    const entityToInsert = document[selector](pathToInsert);

    if (locationName === LOCATION.UNKNOWN) {
      break;
    }

    if (existenceChecker(entity)) {
      result.location = locationName;
      result.links = wrapper(entity) as HTMLAnchorElement[];
      result.linksToInsert = wrapper(entityToInsert) as HTMLAnchorElement[];

      break;
    }
  }

  return result;
};
