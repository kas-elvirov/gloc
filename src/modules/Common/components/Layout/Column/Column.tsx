import * as React from 'react';
import styled from 'styled-components';

const _Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export default class Column extends React.PureComponent {
    render() {
        const { children } = this.props;

        return (
            <_Column>
                {children}
            </_Column>
        );
    }
}
