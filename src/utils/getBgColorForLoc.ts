import { DEFAULT_OUTPUT, LOADING_OUTPUT } from '../consts/index';
import { colors } from '../theme/colors';

export const getBgColorForLoc = (lines: string): string => {
	if (lines === DEFAULT_OUTPUT) {
		return colors.mainPink;
	}

	if (lines === LOADING_OUTPUT) {
		return colors.mainPurple;
	}

	return colors.mainGreen;
};
