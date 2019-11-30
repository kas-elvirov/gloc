import * as React from 'react';

import { Footer } from './components/Footer/index';
import { Body } from './components/Body/index';

export default class PopupPage extends React.PureComponent {
	render() {
		return (
			<React.Fragment>
				<Body />
				<Footer />
			</React.Fragment>
		);
	}
}
