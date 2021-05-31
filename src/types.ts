export interface InitialData {
	location: LOCATION;
	links: HTMLAnchorElement[];
	linksToInsert: HTMLAnchorElement[];
}

export enum LOCATION {
	USER_REPOSITORIES = 'USER_REPOSITORIES',
	POPULAR_REPOS = 'POPULAR_REPOS',
	PINNED_REPOS = 'PINNED_REPOS',
	LIKED_REPOS = 'LIKED_REPOS',
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
