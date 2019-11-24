import { InitialData, LOCATION } from '../types';
import { parametersToMap } from '../configs/parametersToMap';

import { scrapData } from './scrapData';

export const getLinksFromDom = (): Promise<HTMLAnchorElement[]> => {
	const data: InitialData = scrapData(parametersToMap);

	if (data.location !== LOCATION.UNKNOWN && data.links.length > 0) {
		return Promise.resolve(data.links);
	} else {
		return Promise.reject('Error: unknown location for counting LOC (lines of code)');
	}
};
