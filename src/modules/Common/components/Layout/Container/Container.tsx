import * as React from 'react';
import styled from 'styled-components';

import type { Props } from './index';

const ContainerStyled = styled.div`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.color || ''};
  box-sizing: border-box;
  padding: 8px;
`;

export default class Container extends React.PureComponent<Props> {
  render() {
    const { children, color } = this.props;

    return <ContainerStyled color={color}>{children}</ContainerStyled>;
  }
}
