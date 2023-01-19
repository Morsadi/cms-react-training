import { FaBolt } from "react-icons/fa";

export const Button = ({ link }) => {
	return <button href={link}><FaBolt aria-hidden='true'/></button>;
};
