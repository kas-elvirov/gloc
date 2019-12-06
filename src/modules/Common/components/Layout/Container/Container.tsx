import * as React from 'react';
import styled, { css } from 'styled-components';

import { Props } from './index';

const _Container = styled.div`
    display: flex;
    width: 100%;
    background-color: ${props => props.color || ''};
`;

export default class Container extends React.PureComponent<Props> {
    render() {
        const { children, color } = this.props;

        return (
            <_Container color={color}>
                {children}
            </_Container>
        );
    }
}
