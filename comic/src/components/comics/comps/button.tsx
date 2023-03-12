import React from 'react';
import { FaBolt } from 'react-icons/fa';
import styles from '../../../styles/Comic.module.css';

interface Props {
	eventHandler: Function;
}

export const Button = ({ eventHandler }: Props) => {
	return (
		<button
			onClick={() => eventHandler()}
			className={styles.saveFavButton}>
			<FaBolt aria-hidden='true' />
		</button>
	);
};
