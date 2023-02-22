import { useState, useEffect } from 'react';

interface FetchDataResponse<Data> {
	isLoading: boolean;
	data: Data[];
	serverError: any;
}

export const fetchData = <Data extends unknown = any>(url: string): FetchDataResponse<Data> => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [data, setData] = useState<Data[]>([]);
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

	return { isLoading, data, serverError };
};
