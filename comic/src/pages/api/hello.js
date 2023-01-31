// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import md5 from 'md5';


export default async function handler(req, res) {
	const API_BASE = process.env.COMIC_API_BASE;
	const API_KEY = process.env.COMIC_API_KEY;
	const PRIVATE_KEY = process.env.COMIC_API_PRIVATE_KEY;

	const baseUrl = `${API_BASE}/v1/public/comics`;
	const ts = Date.now().toString();
	const hash = md5(ts + PRIVATE_KEY + API_KEY);
	const api = `${baseUrl}?ts=${ts}&apikey=${API_KEY}&hash=${hash}`;
	
	try {
		const response = await fetch(api);
		const data = await response.json();

		res.status(200).json(data.data);
	} catch ({message : error}) {
		res.status(500).json({ error });
	}
}
