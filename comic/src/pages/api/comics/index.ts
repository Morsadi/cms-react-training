// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import md5 from 'md5';
import {ComicResult} from '../../../../types'

const api_key = '3ddd7fcf726acc8fa2940749b2c8641d'
const private_key = '6629ec43fdacee75cb0e6419ff2d3ea12e7334f6'

export default async function handler(req, res) {
	// const API_BASE = process.env.COMIC_API_BASE;
	const baseUrl = 'http://gateway.marvel.com/v1/public/comics';
	const ts = Date.now().toString();
	const apiKey = api_key;
	const privateKey = private_key;
	

	let hash = md5(ts + privateKey + apiKey);

	let api = `${baseUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

	interface Provider {
		id: number,
		thumbnail: string,
		creators: any,
		issueNumber: string
	}
	
	try {
		const response = await fetch(api);
		const data = await response.json();
		const { results } = data.data;

		const newResults = results.map((comic:ComicResult) => {
			const { id, thumbnail: img, creators: {items: creators}, issueNumber, title, modified: publishDate} = comic;

			const thumbnail = `${img.path}.${img.extension}`
			// const publishDate = dates?.find(date=> date.type === "focDate")?.date

			return { id, thumbnail, creators: creators, issueNumber, title, publishDate }
			// return comic
		})

		res.status(200).json(newResults);
	} catch (err) {
		console.log(err);
		return;
	}
}
