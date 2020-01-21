import * as React from 'react';
import styled from 'styled-components';

const _Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export default class Row extends React.PureComponent {
    render() {
        const { children } = this.props;

        return (
            <_Row>
                {children}
            </_Row>
        );
    }
}
