import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Comic.module.css';
import Comic from '../components/comic';
import { Pagination } from '../components/pagination';
import { Filters } from '../components/filters/filter_index';
import { fetchData } from '../hooks/fetchData';
import { usePager } from '../hooks/pager';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { ComicResult } from '../../types';
const slides = {
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fit, minmax(183px, 1fr))',
	gridGap: '30px 20px',
	paddingInline: '10px',
};

export default function Home() {
	const [storage, setStorage] = useLocalStorage('favorites', []);
	const [query, setQuery] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [url, setUrl] = useState(`/api/comics?offset=0&${query}`);

	// Fetch and set pages
	const { isLoading, data, serverError } = fetchData(url);
	const [offset, end, pageDisplay] = usePager(data.resultCount, currentPage);

	// url is being listened to in the fetchData file
	const updateCall = (query: string) => {
		setCurrentPage(1);
		setQuery(query);
	};

	const prevPage = () => {
		currentPage !== 1 && setCurrentPage(currentPage - 1);
	};

	const nextPage = () => {
		end !== data.resultCount && setCurrentPage(currentPage + 1);
	};

	const addToFavorites = (comicInfo) => {
		if (!storage.find(savedComicInfo => savedComicInfo.id === comicInfo.id)) {
			const newStorage = [...storage, comicInfo];
			setStorage(newStorage);
		} else {
			const index = storage.findIndex(savedComicInfo => savedComicInfo.id === comicInfo.id);
			let newStorage = [...storage];
			newStorage.splice(index, 1);
			setStorage(newStorage);
		}
	};

	useEffect(() => {
		setUrl(`/api/comics?offset=${offset}&${query}`);
	}, [currentPage, query]);
	return (
		<>
			<Head>
				<title>Comic Cards</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Filters isLoading={isLoading} updateCall={updateCall} />
			<div data-testid='grid' style={slides} className={styles.slides}>
				{isLoading ? (
					<span>Loading...</span>
				) : serverError ? (
					<span>Error in fetching data...</span>
				) : data?.results?.length ? (
					data?.results?.map((comic: ComicResult) => (
						<Comic
							isFavorite={!!storage.find((val) => val.id === comic.id)}
							addToFavorites={addToFavorites}
							key={`comic-${comic.id}`}
							comic={comic}
						/>
					))
				) : (
					<h3>No results</h3>
				)}
			</div>
			{!isLoading && <Pagination prevPage={prevPage} nextPage={nextPage} display={pageDisplay} />}
		</>
	);
}
