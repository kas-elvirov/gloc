import { translateElements } from './utils/translateElements';
import { MESSAGE_IDS } from './consts/index';

const validateToken = (token: string) => {
	let invalidToken;

	if (typeof token !== 'string') {
		invalidToken = chrome.i18n.getMessage('optionsTokenMustbeString') + ': be62d2235c80b8056h103e8ae03398db9d37d1a0';
	} else if (token.length < 30) {
		invalidToken = chrome.i18n.getMessage('optionsTokenWrongLength');
	} else {
		invalidToken = chrome.i18n.getMessage('optionsTokenWalid');
	}

	if (invalidToken) {
		const validationBlock = document.getElementById('validation-block');
		validationBlock.textContent = invalidToken;
	}
};

const saveOptions = () => {
	document.getElementById('save-button').setAttribute('disabled', 'disabled');
	const token = (document.getElementById('x-gloc-github-token') as HTMLInputElement).value;

	chrome.storage.sync.set({ 'x-github-token': token }, () => {
		const statusText = document.getElementById('status-text');
		statusText.textContent = chrome.i18n.getMessage('optionsSaved');

		validateToken(token);
	});
};

const showOptions = () => {
	chrome.storage.sync.get({ 'x-github-token': '' }, (storedOptions) => {
		const token = storedOptions['x-github-token'];
		(document.getElementById('x-gloc-github-token') as HTMLInputElement).value = token;

		validateToken(token);
	});
};

translateElements(MESSAGE_IDS.OPTIONS);


const optionsInputToken = document.getElementById('x-gloc-github-token') as HTMLInputElement;
optionsInputToken.placeholder = chrome.i18n.getMessage('optionsInputToken');

const optionsSaveButton = document.getElementById('save-button') as HTMLInputElement;
optionsSaveButton.value = chrome.i18n.getMessage('optionsSaveButton');

document.addEventListener('DOMContentLoaded', showOptions);
document.getElementById('save-button').addEventListener('click', saveOptions);
