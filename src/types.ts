export interface InitialData {
	location: LOCATION;
	links: HTMLAnchorElement[];
}

export enum LOCATION {
	USER = 'USER',
	ORGANIZATION = 'ORGANIZATION',
	SEARCH = 'SEARCH',
	SINGLE = 'SINGLE',
	EXPLORE = 'EXPLORE',
	TRENDING = 'TRENDING',
	UNKNOWN = 'UNKNOWN',
}

export interface GithubError {
	message: string;
	documentation_url: string;
}

export type CodeFrequency = WeeklyAggregate[];

export type WeeklyAggregate = [
	Total,
	Additions,
	Deletions,
];

type Total = number;
type Additions = number;
type Deletions = number;
