import { FaBolt } from 'react-icons/fa';
import styles from '../styles/Comic.module.css';
// {/* <FaBolt aria-hidden='true' /> */}

export const Button = () => {

	return (
		<button onClick={()=> console.log('text')} data-testid='button-title' className={styles.button}>
			Button
		</button>
	);
};
