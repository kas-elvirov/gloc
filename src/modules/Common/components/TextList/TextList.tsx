import * as React from 'react';

import { Type, Props } from './types';

export default class TextList extends React.PureComponent<Props> {
  detectComponentType(): Type {
    const { type } = this.props;

    switch (type) {
      case Type.Ul:
        return Type.Ul;
      case Type.Ol:
        return Type.Ol;
      default:
        return Type.Ul;
    }
  }

  renderList() {
    const { list } = this.props;

    return list.map(this.renderItem);
  }

  renderItem(item: string) {
    return <li>{item}</li>;
  }

  render() {
    const Wrapper = this.detectComponentType();

    return <Wrapper>{this.renderList()}</Wrapper>;
  }
}
