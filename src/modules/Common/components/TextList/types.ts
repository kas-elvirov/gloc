export enum Type {
    Ul = 'ul',
    Ol = 'ol',
}

export interface Props {
    type: Type;
    list: string[];
};