// For review
// COMIC_API_KEY = '3ddd7fcf726acc8fa2940749b2c8641d';
// COMIC_API_PRIVATE_KEY = '6629ec43fdacee75cb0e6419ff2d3ea12e7334f6';

export default async function handler(req: any, res: any) {
	let obj = [
		{
			id: 82970,
			title: 'Marvel Previews (2017)',
			issueNumber: 0,
			thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada.jpg',
		},
		{
			id: 183,
			title: 'Startling Stories: The Incorrigible Hulk (2004) #1',
			issueNumber: 1,
			thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
		},
		{
			id: 61581,
			title: 'SPIDER-MAN: HOMECOMING PRELUDE TPB (Trade Paperback)',
			issueNumber: 1,
			thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/c/20/5931dbd1d85ba.jpg',
		},
	];

	let result = new Set(obj);
	let newFav = {
		id: 82970,
		title: 'Marvel Previews (2017)',
		issueNumber: 0,
		thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada.jpg',
	};

	res.status(200).json(result);
}
