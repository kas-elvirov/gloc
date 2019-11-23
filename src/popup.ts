import { translateElements } from './utils/translateElements';
import { MESSAGE_IDS } from './consts/index';

(() => {
	document.getElementById('settings-button').addEventListener('click', () => {
		chrome.tabs.create({url: 'chrome://extensions/?options=' + chrome.runtime.id});
	});

	translateElements(MESSAGE_IDS.POPUP);
})();
