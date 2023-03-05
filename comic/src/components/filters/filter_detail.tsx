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
		<select disabled={isLoading} value={selected} onChange={(e) => eventHandler(e)}>
			<option key='0'>{filterType}</option>
			{filterObj.map((val) => (
				<option key={val.id} id={val.id}>
					{val.name}
				</option>
			))}
		</select>
	);
};
