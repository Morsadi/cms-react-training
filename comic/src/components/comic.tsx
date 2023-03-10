import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from './button';
import { Detail } from './detail';
import styles from '../styles/Comic.module.css';

import { ComicResult } from '../../types';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface Props {
	comic: ComicResult;
	addToFavorites: Function;
	isFavorite: any;
}

export default function Comic({ comic, addToFavorites, isFavorite }: Props) {
	const { id, title, thumbnail, issueNumber, publishDate, creators } = comic;

	// const favorites:any = localStorage.getItem('favorites');

	// const isFav = JSON.parse(favorites).find((info) => info.id === id);

	// console.log(isFavorite)

	function eventHandler() {
		addToFavorites({
			id,
			title,
			issueNumber,
			thumbnail,
		});
	}

	return (
		<article
			data-testid='comic'
			data-issues={issueNumber}
			data-thumbnail={thumbnail ? thumbnail : ''}
			data-id={id}
			data-title={title}
			data-isfavorite={isFavorite}
			className={styles.card}>
			<div>
				<h2 data-testid='title'>{title}</h2>
				<Detail
					issue={+issueNumber}
					date={Date.parse(publishDate) ? publishDate : undefined}
					creators={creators?.map((name) => name.split(' ')[1]).join(', ')}
				/>
			</div>
			<div className={styles.imgCont}>
				<Image
					data-testid='image'
					className={styles.imageCover}
					alt={title}
					src={thumbnail ? thumbnail : ''}
					blurDataURL={thumbnail ? thumbnail : ''}
					placeholder='blur'
					fill
					sizes='(min-width: 640px) 30vw, 35vw'
				/>
				<Button eventHandler={eventHandler} />
			</div>
		</article>
	);
}
