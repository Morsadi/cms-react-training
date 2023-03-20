import React from 'react';
import styles from '../../styles/Home.module.css';
import { FaBolt } from 'react-icons/fa';


export const IntroPanel = () => {
	return (
		<section className={`${styles.introPanel} ${styles.controlled}`}>
			<h3>new Comics</h3>
			<h2>Coming Out Daily</h2>
			<p>Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
        </section>
	);
};
