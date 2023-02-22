import { FaBolt } from 'react-icons/fa';
import styles from '../styles/Comic.module.css';

export const Button = () => {
	return (
		<button className={styles.button}>
			<FaBolt aria-hidden='true' />
		</button>
	);
};
