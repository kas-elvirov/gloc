import { APP_NAME } from '../consts/index';

/**
 * Logger
 * @param {string} type - info, warn, err
 * @param {string} str - info for output
 */
export const log = (type: string, str: any) => {
	switch (type) {
		case 'i':
			console.info(APP_NAME + ': ' + str);
			break;
		case 'w':
			console.warn(APP_NAME + ': ' + str);
			break;
		case 'e':
			console.error(APP_NAME + ': ' + str);
			break;
		default:
			console.info(str);
	}
};
