import { translateElements } from './utils';
import { MESSAGE_IDS } from './constants';

(() => {
	document.getElementById('settings-button').addEventListener('click', () => {
		chrome.tabs.create({url: 'chrome://extensions/?options=' + chrome.runtime.id});
	});

	translateElements(MESSAGE_IDS.POPUP);
})();
