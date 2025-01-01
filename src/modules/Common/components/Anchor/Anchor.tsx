import * as React from 'react';
import styled from 'styled-components';

import type { Props } from './index';

const AnchorStyled = styled.a`
  color: ${(props) => props.color || ''};
`;

export default class Anchor extends React.PureComponent<Props> {
  render() {
    const { children, color, href, target } = this.props;

    const anchorProps = {
      href,
      target,
    };

    return (
      <AnchorStyled {...anchorProps} color={color}>
        {children}
      </AnchorStyled>
    );
  }
}
