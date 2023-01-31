// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import md5 from 'md5';

export default async function handler(req, res) {
	const API_BASE = process.env.COMIC_API_BASE;
	const baseUrl = `${API_BASE}/v1/public/comics`;
	const ts = Date.now().toString();
	const apiKey = process.env.COMIC_API_KEY;
	const privateKey = process.env.COMIC_API_PRIVATE_KEY;
	

	let hash = md5(ts + privateKey + apiKey);

	let api = `${baseUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;
	
	try {
		const response = await fetch(api);
		const data = await response.json();
		const { results } = data.data;

		const newResults = results.map(comic => {
			const { id, thumbnail: img, creators: {items: creators}, characters, issueNumber, title, dates} = comic;

			const thumbnail = `${img.path}.${img.extension}`
			const publishDate = dates?.find(date=> date.type === "onsaleDate")?.date

			return { id, thumbnail, creators: creators, characters, issueNumber, title, publishDate }
			// return comic
		})

		res.status(200).json(newResults);
	} catch (err) {
		console.log(err);
		return;
	}
}
