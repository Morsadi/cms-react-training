import { useEffect, useState, useContext } from 'react';
import { Filter } from './detail';
import { creators, charactors } from './inventory';
import { FilterIndex } from '../../../../types';
import { MyContext } from '../../../pages/index';
import { FaFilter } from 'react-icons/fa';
import styles from '../../../styles/Filters.module.css';

export const Filters = ({ refreshCall, isLoading }: FilterIndex) => {
	const [charactor, setCharactor] = useState('');
	const [creator, setCreator] = useState('');
	const [isMobile, setIsMobile] = useState(false);
	const { comicNavigation, setComicNavigation } = useContext(MyContext);

	const updateParams = (filterType: string, selectedFilterVal: string) => {
		setComicNavigation('');
		filterType === 'creator' ? setCreator(selectedFilterVal) : setCharactor(selectedFilterVal);
	};

	const openFilters = () => {
		if (comicNavigation === 'filter') setComicNavigation('');
		else setComicNavigation('filter');
	};

	useEffect(() => {
		const query = `${charactor ? `charactor=${charactor}` : ''}${creator ? `&creator=${creator}` : ''}`;
		refreshCall(query);
	}, [charactor, creator]);

	useEffect(() => {
		if (window.matchMedia('(max-width: 1023px)').matches) {
			setIsMobile(true);
		}
	}, []);

	return (
		<div className={styles.main}>
			<label>
				{isMobile ? (
					<button onClick={() => openFilters()}>
						Filter
						<FaFilter aria-hidden='true' />
					</button>
				) : (
					'Filter by:'
				)}
			</label>
			<div
				data-show={comicNavigation}
				className={styles.flexStack}>
				<Filter
					isLoading={isLoading}
					updateParams={updateParams}
					filterObj={charactors}
					filterType='charactor'
				/>
				<Filter
					isLoading={isLoading}
					updateParams={updateParams}
					filterObj={creators}
					filterType='creator'
				/>
			</div>
		</div>
	);
};
