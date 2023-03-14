import styles from '../../../styles/Filters.module.css';
import { useEffect, useState } from 'react';
import { Filter } from './detail';
import { creators, charactors } from './inventory';
import { FilterIndex } from '../../../../types';
	
	

export const Filters = ({ refreshCall, isLoading }: FilterIndex) => {
	const [charactor, setCharactor] = useState('');
	const [creator, setCreator] = useState('');
	const [isMobile, setIsMobile] = useState(false);
	const [showFilters, setShowFilters] = useState(false);

	const updateParams = (filterType: string, selectedFilterVal: string) => {
		setShowFilters(false)
		filterType === 'creator' ? setCreator(selectedFilterVal) : setCharactor(selectedFilterVal);
	};

	useEffect(() => {
		const query = `${charactor ? `charactor=${charactor}` : ''}${creator ? `&creator=${creator}` : ''}`;
		refreshCall(query);
	}, [charactor, creator]);
	
	useEffect(()=>{
		if (window.matchMedia("(max-width: 1023px)").matches) {
			setIsMobile(true)
		}
	},[])

	return (
		<div className={styles.main}>
			<label>{isMobile ? <button onClick={()=>setShowFilters(!showFilters)}>Filter</button> : 'Filter by:'}</label>
			<div data-show={showFilters} className={styles.flexStack}>
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
