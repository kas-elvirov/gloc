import * as React from 'react';
import styled from 'styled-components';

import type { Props } from './index';

const TextStyled = styled.span`
  color: ${(props) => props.color || ''};
`;

export default class Text extends React.PureComponent<React.PropsWithChildren<Props>> {
  render() {
    const { children, color } = this.props;

    return <TextStyled color={color}>{children}</TextStyled>;
  }
}
