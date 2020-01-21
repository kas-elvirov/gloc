export enum Type {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
}

export interface Props {
    type?: Type;
    align?: 'left' | 'center' | 'right' | 'justify';
};

