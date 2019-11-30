/* import { translateElements } from './utils/translateElements';
import { MESSAGE_IDS } from './consts/index'; */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Popup from './modules/Popup/index';

class PopupPage extends React.PureComponent {
	render() {
		return <Popup />;
	}
}

/* (() => {
	document.getElementById('settings-button').addEventListener('click', () => {
		chrome.tabs.create({url: 'chrome://extensions/?options=' + chrome.runtime.id});
	});

	translateElements(MESSAGE_IDS.POPUP);
})(); */

const placeToMount = document.getElementById('root')/*  || document.createElement('div') */;

ReactDOM.render(<PopupPage />, placeToMount);
