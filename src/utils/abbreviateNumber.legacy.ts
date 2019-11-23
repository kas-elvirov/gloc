enum POSTFIX {
	KILO = 'k',
	MEGA = 'm',
	GIGA = 'g',
}

const DEFAULT_VALUE = '';

/**
 * Convert number into human-readable string
 */
export const abbreviateNumber = (num: number): string => {
	if (typeof num !== 'number') {
		return DEFAULT_VALUE;
	}

	if (num < 1_000) {
		const result = `${num}`;

		return result;
	} else if (num < 10_000) {
		const result = `${Math.round(num / 100) / 10}${POSTFIX.KILO}`;

		return result;
	} else if (num < 1_000_000) {
		const result = `${Math.round(num / 1_000)}${POSTFIX.KILO}`;

		return result;
	} else if (num < 10_000_000) {
		const result = `${Math.round(num / 100_000) / 10}${POSTFIX.MEGA}`;

		return result;
	} else if (num < 1_000_000_000) {
		const result = `${Math.round(num / 1_000_000)}${POSTFIX.MEGA}`;

		return result;
	} else if (num < 10_000_000_000) {
		const result = `${Math.round(num / 100_000_000) / 10}${POSTFIX.GIGA}`;

		return result;
	} else {
		const result = `${num}`;

		return result;
	}
};
