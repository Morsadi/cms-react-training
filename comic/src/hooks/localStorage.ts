import { useState, useEffect } from 'react';
import { Favorites } from '../../types';

const useLocalStorage = (key: string, initialValue: Favorites[]) => {
	const [storedValue, setStoredValue] = useState(initialValue);

	// This was a solution to avoid react hydration
	useEffect(() => {
		if (typeof window === 'undefined' || !window.localStorage) {
			return;
		}

		try {
			const storedItem = window.localStorage.getItem(key);
			if (storedItem !== null) {
				setStoredValue(JSON.parse(storedItem));
			}
		} catch (error) {
			console.log(error);
		}
	}, [key]);

	useEffect(() => {
		if (typeof window === 'undefined' || !window.localStorage) {
			return;
		}

		try {
			window.localStorage.setItem(key, JSON.stringify(storedValue));
		} catch (error) {
			console.log(error);
		}
	}, [key, storedValue]);

	return [storedValue, setStoredValue] as const;
};

export default useLocalStorage;
