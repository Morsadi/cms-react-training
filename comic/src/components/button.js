import { FaBolt } from 'react-icons/fa';
import styles from '@/styles/Comic.module.css';

export const Button = ({ link }) => {
	return (
		<button className={styles.button} href={link}>
			<FaBolt aria-hidden='true' />
		</button>
	);
};
