import React, { useContext } from 'react';
import Image from 'next/image';
import styles from '../../styles/Comic.module.css';
import { FaTimes, FaBolt } from 'react-icons/fa';
import { Favorites } from '../../../types';
import { MyContext } from '../../pages/index';

interface Props {
	storedValue: Favorites[];
	setStoredValue: Function;
}

export const FavoriteList = ({ storedValue, setStoredValue }: Props) => {
	const { comicNavigation, setComicNavigation } = useContext(MyContext);

	const deleteFavorite = (index: number) => {
		const newStoredValue = [...storedValue];
		newStoredValue.splice(index, 1);

		setStoredValue(newStoredValue);
	};

	const openFilters = () => {
		if (comicNavigation === 'favorite') setComicNavigation('');
		else setComicNavigation('favorite');
	};

	return (
		<section className={styles.favListPanel}>
			<button onClick={() => openFilters()}>
				{comicNavigation === 'favorite' ? 'Hide' : 'Show'} Favorites
				<FaBolt aria-hidden='true' />
			</button>
			<div data-show={comicNavigation}>
				<h3 className={styles.favListHeading}>Favorites</h3>
				<div>
					{storedValue.length
						? storedValue.map((comic: Favorites, key: number) => (
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
											height={75}
											width={50}
										/>
									</div>
								</div>
						  ))
						: null}
				</div>
				<button
					className={styles.closeFavList}
					onClick={() => openFilters()}>
					Hide Favorites
					<FaBolt aria-hidden='true' />
				</button>
			</div>
		</section>
	);
};
