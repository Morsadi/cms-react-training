import styles from '../../../styles/Filters.module.css';
import { useEffect, useState, useContext } from 'react';
import { Filter } from './detail';
import { creators, charactors } from './inventory';
import { FilterIndex } from '../../../../types';
import { MyContext } from '../../../pages/index';
	

export const Filters = ({ refreshCall, isLoading }: FilterIndex) => {
	const [charactor, setCharactor] = useState('');
	const [creator, setCreator] = useState('');
	const [isMobile, setIsMobile] = useState(false);
	const { comicDropdownStatue, setComicDropdownStatue } = useContext(MyContext);
	// setBusyMeny(!busyMenu)
	

	const updateParams = (filterType: string, selectedFilterVal: string) => {
		setComicDropdownStatue('')
		filterType === 'creator' ? setCreator(selectedFilterVal) : setCharactor(selectedFilterVal);
	};

	const openFilters = () => {
		setComicDropdownStatue('filter')
	}



	useEffect(() => {
		const query = `${charactor ? `charactor=${charactor}` : ''}${creator ? `&creator=${creator}` : ''}`;
		refreshCall(query);
	}, [charactor, creator]);
	
	useEffect(()=>{
		if (window.matchMedia("(max-width: 1023px)").matches) {
			setIsMobile(true);
		}
	},[])

	// useEffect(()=>{
	// 	if (showFilters) {
	// 		setShowFilters(false)
	// 	}
	// },[busyMenu])

	return (
		<div className={styles.main}>
			<label>{isMobile ? <button onClick={()=>openFilters()}>Filter</button> : 'Filter by:'}</label>
			<div data-show={comicDropdownStatue} className={styles.flexStack}>
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
