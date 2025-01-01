import isPositiveArray from 'is-positive-array';

import { InitialData, LOCATION } from '../types';
import { GITHUB_LOCATION_CONFIGS } from '../configs/parametersToMap';

import { scrapData } from './scrapData';

export const getLinksFromDom = (): Promise<InitialData> => {
	const data = scrapData(GITHUB_LOCATION_CONFIGS) as InitialData;

	if (data.location !== LOCATION.UNKNOWN && isPositiveArray(data.links)) {
		return Promise.resolve(data);
	} else {
		return Promise.reject('Error: unknown location for counting LOC (lines of code)');
	}
};
