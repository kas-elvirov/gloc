import { DEFAULT_OUTPUT } from '../consts/index';

import { abbreviateNumber } from './abbreviateNumber';

/**
 * Format rawline counts into string to show
 */
export const formatOutput = (rawlines: number | void): string => {
	if (typeof(rawlines) === 'number') {
		return abbreviateNumber(rawlines);
    }

	return DEFAULT_OUTPUT;
};