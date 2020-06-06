import { ParameterToMap, ExistenceChecker, Wrapper } from '../configs/parametersToMap';
import { LOCATION, InitialData } from '../types';

export const scrapData = (parameters: ParameterToMap[]): InitialData | void => {
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

		if (locationName === LOCATION.UNKNOWN) {
			return {
				location: LOCATION.UNKNOWN,
				links: [],
				linksToInsert: [],
			};
		}

		// @ts-ignore
		const entity = document[selector](pathToSelect);
		// @ts-ignore
		const entityToInsert = document[selector](pathToInsert);

		if ((existenceChecker as ExistenceChecker)(entity)) {
			return {
				location: locationName,
				links: (wrapper as Wrapper)(entity) as HTMLAnchorElement[],
				linksToInsert: (wrapper as Wrapper)(entityToInsert) as HTMLAnchorElement[],
			};
		}
	}
};
