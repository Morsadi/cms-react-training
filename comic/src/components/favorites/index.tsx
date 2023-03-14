import React, { useState } from 'react';
import Image from 'next/image';
import { Favorites } from '../../../types';
import styles from '../../styles/Comic.module.css';
import { FaTimes, FaBolt } from 'react-icons/fa';

interface Props {
	storedValue: Favorites[];
	setStoredValue: Function;
}

export const FavoriteList = ({ storedValue, setStoredValue }: Props) => {
	const [showList, setShowList] = useState(false);

	const deleteFavorite = (index: number) => {
		const newStoredValue = [...storedValue];
		newStoredValue.splice(index, 1);

		setStoredValue(newStoredValue);
	};
	return (
		<section className={styles.favListPanel}>
			<button onClick={()=>setShowList(!showList)}>Show Favorites<FaBolt aria-hidden='true' /></button>
			<div data-show={showList}>
				<h3 className={styles.favListHeading}>Favorites</h3>
				<div>
					{storedValue.length
						? storedValue.map((comic: any, key: number) => (
								<div
									className={styles.favCard}
									key={`fav-comic-${comic.id}`}>
									<button
										className={styles.close}
										onClick={() => deleteFavorite(key)}>
										<FaTimes aria-hidden='true' />
									</button>
									<div className={styles.favContentSection}>
										<h4>{comic.title}</h4>
										{comic.issueNumber ? <p>Issue: {comic.issueNumber}</p> : null}
									</div>
									<div className={styles.favImgCont}>
										<Image
											alt={comic.title}
											src={comic.thumbnail ? comic.thumbnail : ''}
											blurDataURL={comic.thumbnail ? comic.thumbnail : ''}
											placeholder='blur'
											fill
										/>
									</div>
								</div>
						  ))
						: null}
				</div>
			</div>
		</section>
	);
};
