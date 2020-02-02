import * as React from 'react';
import styled, { css } from 'styled-components';

import { Props } from './index';

const _Anchor = styled.a`
	color: ${props => props.color || ''};
`;

export default class Anchor extends React.PureComponent<Props> {
    render() {
        const {
            children,
            color,
            href,
            target,
        } = this.props;

        const anchorProps = {
            href,
            target,
        };

        return (
            <_Anchor {...anchorProps} color={color}>
                {children}
            </_Anchor>
        );
    }
}
