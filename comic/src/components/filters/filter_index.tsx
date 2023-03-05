import { useEffect, useState } from 'react';
import { Filter } from './filter_detail';
import { creators, charactors } from '../../components/filters/inventory';

export const Filters = ({updateCall, isLoading}) => {
	const [charactor, setCharactor] = useState('');
	const [creator, setCreator] = useState('');

	const updateParams = (filterType: string, selectedFilterVal: string) => {
		filterType === 'creator' ? setCreator(selectedFilterVal) : setCharactor(selectedFilterVal);
	};

	useEffect(() => {
		const query = `${charactor ? `charactor=${charactor}` : ''}${creator ? `&creator=${creator}` : ''}`;
		updateCall(query);
	}, [charactor, creator]);

	return (
		<div>
			<Filter isLoading={isLoading} updateParams={updateParams} filterObj={creators} filterType='creator' />
			<Filter isLoading ={isLoading} updateParams={updateParams} filterObj={charactors} filterType='charactor' />
		</div>
	);
};
