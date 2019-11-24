import { ParameterToMap } from '../configs/parametersToMap';
import { LOCATION, InitialData } from '../types';

export const scrapData = (parameters: ParameterToMap[]): InitialData => {
    for (let i = 0; i < parameters.length; i++) {
        const config = parameters[i];

        const { locationName, selector, pathToSelect, existenceChecker, wrapper } = config;

        if (locationName === LOCATION.UNKNOWN) {
            return {
                location: LOCATION.UNKNOWN,
                links: [],
            }
        }

        //@ts-ignore
        const entity = document[selector](pathToSelect);

        if (existenceChecker(entity)) {
            return {
                location: locationName,
                links: wrapper(entity),
            };
        }
    }
}