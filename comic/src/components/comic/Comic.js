import Image from 'next/image';
import PropTypes from 'prop-types';

import { Button } from '../comic/button';
import { Detail } from '../comic/detail';
import styles from '@/styles/Comic.module.css';

export default function Comic({ content }) {
	const { title, thumbnail, issueNumber, publishDate, creators } = content;
	return (
		<article className={styles.card}>
			<div>
				<h2>{title}</h2>
				<Detail
					issue={+issueNumber}
					date={publishDate && new Date(publishDate)}
					creators={creators.map(({name}) => name.split(' ')[1]).join(', ')}
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

Comic.propTypes = {
	content: PropTypes.shape({
		title: PropTypes.string,
		thumbnail: PropTypes.string,
		issueNumber: PropTypes.number,
		publishDate: PropTypes.string,
		creators: PropTypes.array,
	}),
};

