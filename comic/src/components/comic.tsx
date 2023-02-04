import Image from 'next/image';
import { Button } from './button';
import { Detail } from './detail';
import styles from '../styles/Comic.module.css';

import {ComicResult} from '../../types'

export default function Comic({ content }: ComicResult ) {
	console.log(ComicResult);
	
	const { title, thumbnail, issueNumber, publishDate, creators } = content;
	return (
		<article className={styles.card}>
			<div>
				<h2>{title}</h2>
				<Detail
					issue={+issueNumber}
					date={Date.parse(publishDate) ? publishDate : undefined}
					creators={creators?.map(({ name }) => name.split(' ')[1]).join(', ')}
				/>
			</div>
			<div className={styles.imgCont}>
				<Image
					className={styles.imageCover}
					alt={title}
					src={thumbnail}
					blurDataURL={thumbnail}
					placeholder='blur'
					fill
					sizes='(min-width: 640px) 30vw, 35vw'
				/>
				<Button placeholderLink={content.thumbnail} />
			</div>
		</article>
	);
}