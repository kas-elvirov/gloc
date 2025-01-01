import * as React from 'react';
import styled from 'styled-components';

const RowStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export default class Row extends React.PureComponent<React.PropsWithChildren> {
  render() {
    const { children } = this.props;

    return <RowStyled>{children}</RowStyled>;
  }
}
