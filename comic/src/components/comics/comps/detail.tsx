import React from 'react';
import Moment from 'react-moment';
import styles from '../../../styles/Comic.module.css';

interface Props {
	issue: number;
	date: string | undefined;
	creators: string;
}

export const Detail = ({ issue = 0, date, creators }: Props) => {
	return (
		<ul
			className={styles.details}
			data-testid='details'>
			<li>
				<label>Issue: </label>
				{`${issue}`}
			</li>
			{!!date && (
				<li>
					<label>Pubulished: </label>
					<Moment format='LL'>{date}</Moment>
				</li>
			)}
			{creators && (
				<li>
					<label>Creators: </label>
					{creators}
				</li>
			)}
		</ul>
	);
};
