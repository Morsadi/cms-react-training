import { FaBolt } from "react-icons/fa";
import cardStyles from '@/styles/Card.module.css';

export const Button = ({ link }) => {
	return <button className={[cardStyles.centerInner,cardStyles.button].join(' ')} href={link}><FaBolt aria-hidden='true'/></button>;
};
