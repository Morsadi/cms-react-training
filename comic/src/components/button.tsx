import { FaBolt } from 'react-icons/fa';
import styles from '../styles/Comic.module.css';

export const Button = ({ placeholderLink }) => {
	return (
		<button className={styles.button} href={placeholderLink}>
			<FaBolt aria-hidden='true' />
		</button>
	);
};
