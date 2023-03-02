import React from 'react';
import Moment from 'react-moment';

interface Props {
	issue: number;
	date: string | undefined;
	creators: string;
}

export const Detail = ({ issue = 0, date, creators }: Props) => {
	return (
		<ul data-testid='details'>
			<li className='issue'><strong>Issue: </strong>{issue}</li>
			{!!date && <li className='date'><strong>Pubulished: </strong><Moment format='LL'>{ date }</Moment></li>}
			{creators && <li className='creator'><strong>Creators: </strong>{ creators }</li>}
		</ul>
	);
};
