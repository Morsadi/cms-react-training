export interface FetchedResult {
	id: number;
	thumbnail: Thumbnail;
	creators: CreatorCall;
	issueNumber: number;
	title: string;
	modified: string;
}

export interface CreatorCall {
	items?: {
		resourceURI: string;
		name: string;
		role: string;
	};
}

export interface Thumbnail {
	path: string;
	extension: string;
}

export interface ComicResult {
	id: number;
	thumbnail: string;
	creators: Creator[];
	issueNumber: number;
	title: string;
	publishDate: string;
}


export interface Creator {
	resourceURI: string;
	name: string;
	role: string;
}
