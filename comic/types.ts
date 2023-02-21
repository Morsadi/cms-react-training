export interface ComicCall {
	id: number;
	thumbnail: Thumbnail;
	creators: Creator;
	issueNumber: number;
	title: string;
	modified: string;
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

export interface Characters {
	available: number;
	collectionURI: string;
	items: any[];
	returned: number;
}

export interface Creator {
	items: {
		resourceURI: string;
		name: string;
		role: string;
	}
}
