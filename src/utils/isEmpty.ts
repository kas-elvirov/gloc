import { CodeFrequency } from '../types';

export const isEmpty = (obj: CodeFrequency) => {
	for (const key in obj) {
			if (obj.hasOwnProperty(key)) {
				return false;
			}
	}

	return true;
};
