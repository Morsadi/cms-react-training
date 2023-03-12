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
			<li className='issue'>
				<label>Issue: </label>
				{`${issue}`}
			</li>
			{!!date && (
				<li className='date'>
					<label>Pubulished: </label>
					<Moment format='LL'>{date}</Moment>
				</li>
			)}
			{creators && (
				<li className='creators'>
					<label>Creators: </label>
					{creators}
				</li>
			)}
		</ul>
	);
};
