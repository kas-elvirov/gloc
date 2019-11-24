import { DEFAULT_OUTPUT } from '../consts/index';

export const getBgColorForLoc = (lines: string): string => {
	if (lines === DEFAULT_OUTPUT) {
		return '#b1006a';
	}

	return '#09af00';
};
