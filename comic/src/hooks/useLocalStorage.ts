import { useEffect, useState } from 'react';

export const useLocalStorage = (key:any, initial:any) => {
	const item = window.localStorage.getItem(key);
	const [ value, setValue ] = useState(item || initial);

	useEffect(() => {
		window.localStorage.setItem(key, value);
	}, [value, key, initial]);

	return [value, setValue];
};
