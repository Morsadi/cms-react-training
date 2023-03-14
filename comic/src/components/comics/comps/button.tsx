import React from 'react';
import styles from '../../../styles/Comic.module.css';
import { FaBolt } from 'react-icons/fa';

interface Props {
	eventHandler: Function;
	isStorageFull: boolean;
}

export const Button = ({ eventHandler, isStorageFull }: Props) => {
	return (
		<button
			data-disabled={isStorageFull}
			onClick={() => eventHandler()}
			className={styles.saveFavButton}>
			<FaBolt aria-hidden='true' />
		</button>
	);
};
