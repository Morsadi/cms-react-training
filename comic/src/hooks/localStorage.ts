import { useState, useEffect } from 'react';

const useLocalStorage = (key: string, initialValue: string) => {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = typeof window !== 'undefined' && window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			console.log(error);
			return initialValue;
		}
	});

	useEffect(() => {
		try {
			typeof window !== 'undefined' && window.localStorage.setItem(key, JSON.stringify(storedValue));
		} catch (error) {
			console.log(error);
		}
	}, [key, storedValue]);

	return [storedValue, setStoredValue];
};

export default useLocalStorage;
