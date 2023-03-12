import React from 'react';
import Image from 'next/image';
import { Favorites } from '../../../types';

interface Props {
	storedValue: Favorites[];
	setStoredValue: Function;
}

export const FavoriteList = ({ storedValue, setStoredValue }: Props) => {
	const deleteFavorite = (index: number) => {
		const newStoredValue = [...storedValue];
		newStoredValue.splice(index, 1);

		setStoredValue(newStoredValue);
	};

	return (
		<>
			<h3>Favorites</h3>
			<div>
				{storedValue.length &&
					storedValue.map((comic: any, key: number) => (
						<div key={`fav-comic-${comic.id}`}>
							<button onClick={() => deleteFavorite(key)}>Delete</button>
							<div>
								<h4>{comic.title}</h4>
								<p>{comic.issueNumber}</p>
							</div>
							<div>
								<Image
									alt={comic.title}
									src={comic.thumbnail ? comic.thumbnail : ''}
									blurDataURL={comic.thumbnail ? comic.thumbnail : ''}
									placeholder='blur'
									width={125}
									height={188}
									sizes='(min-width: 640px) 30vw, 35vw'
								/>
							</div>
						</div>
					))}
			</div>
		</>
	);
};
