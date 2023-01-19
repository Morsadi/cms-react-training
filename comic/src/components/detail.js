import Moment from 'react-moment';

export const Detail = ({ issue= 0, date, creators }) => {
	return (
		<ul>
			<li><strong>Issue: </strong>{issue}</li>
			{date && <li><strong>Pubulished: </strong><Moment format='LL'>{date}</Moment></li>}
			{creators && <li><strong>Creators: </strong>{creators}</li>}
		</ul>
	);
};
