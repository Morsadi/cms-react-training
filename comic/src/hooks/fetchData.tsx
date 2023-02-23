import { useState, useEffect } from 'react';

interface FetchDataResponse<Res> {
	isLoading: boolean;
	data: Res[];
	serverError: any;
}

export const fetchData = <Res extends unknown = any>(url: string): FetchDataResponse<Res> => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [data, setData] = useState<Res[]>([]);
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
