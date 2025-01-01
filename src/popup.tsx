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

const placeToMount =
  document.getElementById('root'); /*  || document.createElement('div') */

ReactDOM.render(<PopupPage />, placeToMount);
