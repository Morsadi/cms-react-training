import { useState, useEffect } from 'react';

export const fetchData = (url = '/api/hello') => {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState(null);
	const [serverError, setServerError] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		const fetchData = async () => {
			try {
				const res = await fetch(url);
				const data = await res.json();

				setData(data);
				setIsLoading(false);
			} catch (err) {
				setServerError(err);
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);

	return { isLoading, data, serverError };
};
