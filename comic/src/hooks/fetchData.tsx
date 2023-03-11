import { useState, useEffect } from 'react';
import { ComicResult } from '../../types';

interface FetchDataResponse<Res> {
	isLoading: boolean;
	data: Data<Res>;
	serverError: any;
}
interface Data<Res> {
	results: Res[];
	resultCount: number;
}

export const fetchData = <Res extends ComicResult>(url: string): FetchDataResponse<Res> => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [data, setData] = useState<Data<Res>>({ results: [], resultCount: 0 });
	const [serverError, setServerError] = useState<any>(null);

	useEffect(() => {
		setIsLoading(true);
		const fetchData = async (): Promise<void> => {
			try {
				const res = await fetch(url);
				const data = await res.json();

				setData(data);
				setIsLoading(false);
			} catch (err: any) {
				setServerError(err);
				setIsLoading(false);
			}
		};

		fetchData();
	}, [url]);

	return { isLoading, data, serverError } as const;
};
