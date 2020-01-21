import * as React from 'react';

import { Type, Props } from './index';

export default class Header extends React.PureComponent<Props> {
    detectComponentType(): Type {
        const { type } = this.props;

        switch (type) {
            case Type.H1: return Type.H1;
            case Type.H2: return Type.H2;
            case Type.H3: return Type.H3;
            case Type.H4: return Type.H4;
            case Type.H5: return Type.H5;
            case Type.H6: return Type.H6;
            default: return Type.H1;
        }
    }

    render() {
        const { children } = this.props;
        const Wrapper = this.detectComponentType();

        return (
            <Wrapper>
                {children}
            </Wrapper>
        );
    }
}