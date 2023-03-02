import React from 'react';
import Image from 'next/image';
import { Button } from './button';
import { Detail } from './detail';
import styles from '../styles/Comic.module.css';

import { ComicResult } from '../../types';

interface Props {
	comic: ComicResult;
}

export default function Comic({ comic }: Props) {
	const { title, thumbnail, issueNumber, publishDate, creators } = comic;
	return (
		<article data-testid='comic' className={styles.card}>
			<div>
				<h2 data-testid='title'>{title}</h2>
				<Detail
					issue={+issueNumber}
					date={Date.parse(publishDate) ? publishDate : undefined}
					creators={creators?.map(( name ) => name.split(' ')[1]).join(', ')}
				/>
			</div>
			<div className={styles.imgCont}>
				<Image
					data-testid='image'
					className={styles.imageCover}
					alt={title}
					src={thumbnail}
					blurDataURL={thumbnail}
					placeholder='blur'
					fill
					sizes='(min-width: 640px) 30vw, 35vw'
				/>
				<Button />
			</div>
		</article>
	);
}
