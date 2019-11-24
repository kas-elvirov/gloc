import { DEFAULT_OUTPUT } from '../consts/index';
import { colors } from '../theme/colors';

export const getBgColorForLoc = (lines: string): string => {
	if (lines === DEFAULT_OUTPUT) {
		return colors.mainPink;
	}

	return colors.mainGreen;
};
