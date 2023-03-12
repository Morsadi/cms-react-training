import styles from '../../../styles/Filters.module.css';
import { useEffect, useState } from 'react';
import { Filter } from './detail';
import { creators, charactors } from './inventory';
import { FilterIndex } from '../../../../types';

export const Filters = ({ refreshCall, isLoading }: FilterIndex) => {
	const [charactor, setCharactor] = useState('');
	const [creator, setCreator] = useState('');

	const updateParams = (filterType: string, selectedFilterVal: string) => {
		filterType === 'creator' ? setCreator(selectedFilterVal) : setCharactor(selectedFilterVal);
	};

	useEffect(() => {
		const query = `${charactor ? `charactor=${charactor}` : ''}${creator ? `&creator=${creator}` : ''}`;
		refreshCall(query);
	}, [charactor, creator]);

	return (
		<div className={styles.main}>
			<label>Filter by:</label>
			<div className={styles.flexStack}>
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
