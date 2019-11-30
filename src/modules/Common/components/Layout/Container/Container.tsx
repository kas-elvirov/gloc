import * as React from 'react';
import styled, { css } from 'styled-components';

const _Container = styled.div`
    display: flex;
    width: 100%;
    background-color: ${props => props.color || 'pink'};
`;

export default class Container extends React.PureComponent<{
    color?: string,
}> {
    render() {
        const { children, color } = this.props;

        return (
            <_Container color={color}>
                {children}
            </_Container>
        );
    }
}
