import * as React from 'react';

import { Header } from './components/_Header/index';
import { Footer } from './components/_Footer/index';
import { Body } from './components/_Body/index';

export default class PopupPage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Body />
        <Footer />
      </React.Fragment>
    );
  }
}
