export interface ComicCall {
	id: number;
	thumbnail: string;
	items: Creator[];
	issueNumber: number;
	title: string;
	publishDate: string;
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
	resourceURI: string;
	name: string;
	role: string;
}
