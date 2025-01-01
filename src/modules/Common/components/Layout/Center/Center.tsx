import * as React from 'react';
import styled from 'styled-components';

const CenterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default class Center extends React.PureComponent {
  render() {
    const { children } = this.props;

    return <CenterStyled>{children}</CenterStyled>;
  }
}
