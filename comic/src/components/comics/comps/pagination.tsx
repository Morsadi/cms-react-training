import styles from '../styles/Comic.module.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Pager } from '../../../../types';

export const Pagination = ({ display, prevPage, nextPage }: Pager) => {
	return (
		<>
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
		</>
	);
};
