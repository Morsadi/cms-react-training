import React, { useEffect, useState } from 'react';
import styles from '../../styles/Comic.module.css';
import Comic from './detail';
import { Pagination } from './comps/pagination';
import { Filters } from './filters/index';
import { fetchData } from '../../hooks/fetchData';
import { usePager } from '../../hooks/pager';

import { ComicResult, Favorites } from '../../../types';
export default function Comics({ storedValue, addToFavorites }: any) {
	const [query, setQuery] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [url, setUrl] = useState(`/api/comics?offset=0&${query}`);

	// Fetch and set pages
	const { isLoading, data, serverError } = fetchData(url);
	const [offset, end, pageDisplay] = usePager(data.resultCount, currentPage);

	// url is being listened to in the fetchData file
	const refreshCall = (query: string) => {
		setCurrentPage(1);
		setQuery(query);
	};

	const prevPage = () => currentPage !== 1 && setCurrentPage(currentPage - 1);

	const nextPage = () => end !== data.resultCount && setCurrentPage(currentPage + 1);

	useEffect(() => {
		setUrl(`/api/comics?offset=${offset}&${query}`);
	}, [currentPage, query]);

	return (
		<section>
			<Filters
				isLoading={isLoading}
				refreshCall={refreshCall}
			/>
			<div
				data-testid='grid'
				className={styles.grid}>
				{isLoading ? (
					<span>Loading...</span>
				) : serverError ? (
					<span>Error in fetching data...</span>
				) : data?.results?.length ? (
					data?.results?.map((comic: ComicResult) => (
						<Comic
							isFavorite={storedValue && !!storedValue.find((val: Favorites) => val.id === comic.id)}
							addToFavorites={addToFavorites}
							key={`comic-${comic.id}`}
							comic={comic}
						/>
					))
				) : (
					<h3>No results</h3>
				)}
			</div>
			{!isLoading && data.resultCount > 15 ? (
				<Pagination
					prevPage={prevPage}
					nextPage={nextPage}
					display={`${pageDisplay}`}
				/>
			) : null}
		</section>
	);
}
