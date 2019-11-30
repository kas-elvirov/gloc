import * as React from 'react';

export default class Text extends React.PureComponent {
	render() {
		const { children } = this.props;
		
		if (typeof children !== 'string') {
			return null;
		}

		return <span>{children}</span>;
	}
}
