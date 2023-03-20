import { Pager } from '../../../../types';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import styles from '../../../styles/Comic.module.css';

export const Pagination = ({ display, prevPage, nextPage }: Pager) => {
	return (
		<div className={styles.pager}>
			<button
				onClick={() => prevPage()}
				className='prev'>
				<FaAngleLeft aria-hidden='true' />
			</button>
			<span>{display}</span>
			<button
				onClick={() => nextPage()}
				className='next'>
				<FaAngleRight aria-hidden='true' />
			</button>
		</div>
	);
};
