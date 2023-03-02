// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiResponse, NextApiRequest } from 'next';
import md5 from 'md5';
import { FetchedResult } from '../../../../types';
const api_key = '3ddd7fcf726acc8fa2940749b2c8641d';
const private_key = '6629ec43fdacee75cb0e6419ff2d3ea12e7334f6';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const headers: string[] = req.rawHeaders;

	// Prevent endpoint direct access
	// if (!headers.includes('Referer')) {
	// 	res.status(200).send({message: 'Restricted Access'});
	// 	return;
	// }

	// const API_BASE = process.env.COMIC_API_BASE;
	const baseUrl = 'http://gateway.marvel.com/v1/public/comics';
	const ts = Date.now().toString();
	const apiKey = api_key;
	const privateKey = private_key;
	const hash = md5(ts + privateKey + apiKey);
	const api = `${baseUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

	try {
		const response = await fetch(api);
		const data = await response.json();
		const { results } = data.data;

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
			const creatorNames = creators.map( val => val.name );

			return { id, thumbnail, creators: creatorNames, issueNumber, title, publishDate };
		});

		res.status(200).json(newResults);
	} catch (err: any) {
		console.log(err);
		return;
	}
}
