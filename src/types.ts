export interface InitialData {
	location: LOCATION;
	link: HTMLAnchorElement[];
}

export enum LOCATION {
	USER = 'USER',
	ORGANIZATION = 'ORGANIZATION',
	RECOMMENDED = 'RECOMMENDED',
	SINGLE = 'SINGLE',
	UNKNOWN = 'UNKNOWN',
}

export interface GithubError {
	message: string;
	documentation_url: string;
}

export type CodeFrequency = WeeklyAggregate[];

export type WeeklyAggregate = [
	number, // total
	number, // additions
	number, // deletions
];
