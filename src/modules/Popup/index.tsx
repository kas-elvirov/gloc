import * as React from 'react';

import { Header } from './components/Header/index';
import { Footer } from './components/Footer/index';
import { Body } from './components/Body/index';

export default class PopupPage extends React.PureComponent {
	render() {
		return (
			<React.Fragment>
				<Header />
				{/* <Body /> */}
				<Footer />
			</React.Fragment>
		);
	}
}
