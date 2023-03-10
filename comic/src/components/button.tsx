import React from 'react';
import { FaBolt } from 'react-icons/fa';
import styles from '../styles/Comic.module.css';

export const Button = ({eventHandler}) => {
	
	return (
		<button onClick={eventHandler} className={styles.button}>
			<FaBolt aria-hidden='true' />
		</button>
	);
};
