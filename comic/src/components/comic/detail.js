import Moment from 'react-moment';
import PropTypes from 'prop-types';

export const Detail = ({ issue = 0, date, creators }) => {
	console.log(typeof creators);
	return (
		<ul>
			<li><strong>Issue: </strong>{issue}</li>
			{!!date && <li><strong>Pubulished: </strong><Moment format='LL'>{ date }</Moment></li>}
			{creators && <li><strong>Creators: </strong>{ creators }</li>}
		</ul>
	);
};

Detail.propTypes = {
	creators: PropTypes.string,
	date: PropTypes.string,
};
