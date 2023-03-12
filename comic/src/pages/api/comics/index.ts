// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiResponse, NextApiRequest } from 'next';
import md5 from 'md5';
import { FetchedResult } from '../../../../types';

let COMIC_API_PRIVATE_KEY = process.env.COMIC_API_PRIVATE_KEY;
let COMIC_API_KEY = process.env.COMIC_API_KEY;

// For review
COMIC_API_KEY = '3ddd7fcf726acc8fa2940749b2c8641d';
COMIC_API_PRIVATE_KEY = '6629ec43fdacee75cb0e6419ff2d3ea12e7334f6';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const headers: string[] = req.rawHeaders;
	const { charactor } = req.query;
	const { creator } = req.query;
	const offset = Number(req.query.offset);
	const limit = 15;

	// Prevent endpoint direct access
	if (!headers.includes('Referer')) {
		res.status(200).send({ message: 'Restricted Access' });
		return;
	}

	const baseUrl = 'http://gateway.marvel.com/v1/public/comics';
	const ts = Date.now().toString();
	const apiKey = COMIC_API_KEY;
	const privateKey = COMIC_API_PRIVATE_KEY;
	const hash = md5(ts + privateKey + apiKey);
	const api = `${baseUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&offset=${offset}&limit=${limit}&${
		charactor ? `&characters=${charactor}` : ''
	}${creator ? `&creators=${creator}` : ''}`;

	try {
		const response = await fetch(api);
		const data = await response.json();
		const { results } = data?.data;
		const { total: resultCount } = data?.data;

		const newResults = results.map((comic: FetchedResult) => {
			const {
				id,
				thumbnail: img,
				creators: { items: creators },
				issueNumber,
				title,
				modified: publishDate,
			} = comic;

			const thumbnail = `${img.path}.${img.extension}`;
			const creatorNames = creators.map((val) => val.name);

			return { id, thumbnail, creators: creatorNames, issueNumber, title, publishDate };
		});

		res.status(200).json({ resultCount, results: newResults });
	} catch (err: any) {
		// Passing err to front end for potential use
		res.status(400).json({ resultCount: 0, results: [], err });
		console.log(err);
		return;
	}
}
