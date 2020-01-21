import * as React from 'react';
import styled, { css } from 'styled-components';

import { Props } from './index';

const _Text = styled.span`
	color: ${props => props.color || ''};
`;

export default class Text extends React.PureComponent<Props> {
	render() {
		const { children, color } = this.props;
		
		if (typeof children !== 'string') {
			return null;
		}

		return (
			<_Text color={color}>
				{children}
			</_Text>
		);
	}
}
