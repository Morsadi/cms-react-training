import { useState } from 'react';

export const Filter = ({ updateParams, filterObj, filterType, isLoading }) => {
	const [selected, setSelected] = useState('');

	const eventHandler = (e) => {
		const index = e.target.selectedIndex;
		const el = e.target.childNodes[index];
		const selectedId = el.getAttribute('id');

		setSelected(e.target.value);
		updateParams(filterType, selectedId);
	};

	return (
		<select value={selected} onChange={(e) => eventHandler(e)}>
			<option disabled={isLoading} key='0'>{filterType}</option>
			{filterObj.map((val) => (
				<option disabled={isLoading} key={val.id} id={val.id}>
					{val.name}
				</option>
			))}
		</select>
	);
};
