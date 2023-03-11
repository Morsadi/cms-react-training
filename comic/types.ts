export interface FetchedResult {
	id: number;
	thumbnail: Thumbnail;
	creators: CreatorCall;
	issueNumber: number;
	title: string;
	modified: string;
}

interface CreatorCall {
	items: Creator[];
}

interface Thumbnail {
	path: string;
	extension: string;
}

export interface ComicResult {
	id: number;
	thumbnail: string;
	creators: string[];
	issueNumber: number;
	title: string;
	publishDate: string;
}

interface Creator {
	resourceURI: string;
	name: string;
	role: string;
}

export interface Favorites {
	id?: number;
	title?: string;
	issueNumber?: number;
	thumbnail?: string;
}

export interface Pager {
	display: string;
	prevPage: Function;
	nextPage: Function;
}

export interface FilterIndex {
	refreshCall: Function;
	isLoading: boolean;
}

export interface FilterDetail {
	updateParams: Function;
	filterObj: FilterTarget[];
	filterType: string;
	isLoading: boolean;
}

interface FilterTarget {
	id: number;
	name: string;
}
