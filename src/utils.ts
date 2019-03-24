import { APP_NAME } from './constants';

/**
 * Logger
 * @param {string} type - info, warn, err
 * @param {string} str - info for output
 */
export const log = (type: string, str: string) => {
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

export const translateElements = (ids: string[]) => {
	ids.map(id => {
		const element = document.getElementById(id);
		element.innerHTML = chrome.i18n.getMessage(id);
	});
};
