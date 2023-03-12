import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Comic.module.css';
import Comics from '../components/comics/index';
import { FavoriteList } from '../components/favorites/index';
import useLocalStorage from '../hooks/localStorage';
import { Favorites } from '../../types';

export default function Home() {
	const [storedValue, setStoredValue] = useLocalStorage('favorites', []);
	
	const addToFavorites = (comicInfo: Favorites) => {
		const isFav = (savedComicInfo: Favorites) => savedComicInfo.id === comicInfo.id;
	
		if (storedValue && !storedValue.find(isFav)) {
			const newStorage = [...storedValue, comicInfo];
	
			setStoredValue(newStorage);
		} else {
			const index = storedValue && storedValue.findIndex(isFav);
			let newStorage = [...storedValue];
	
			newStorage.splice(index, 1);
			setStoredValue(newStorage);
		}
	};

	return (
		<main>
			<Head>
				<title>Comic Cards</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<div>
				<Comics addToFavorites={addToFavorites} storedValue={storedValue} />
				<FavoriteList storedValue={storedValue} setStoredValue={setStoredValue}/>
			</div>
		</main>
	);
}
