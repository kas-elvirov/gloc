import * as React from 'react';
import styled from 'styled-components';

const _Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export default class Center extends React.PureComponent {
    render() {
        const { children } = this.props;

        return (
            <_Center>
                {children}
            </_Center>
        );
    }
}
