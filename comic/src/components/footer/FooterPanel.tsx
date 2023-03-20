import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

const thumbnail = '/logo.svg';

export const FooterPanel = () => {
	return (
		<>
			<footer className={styles.footer}>
				<Image
					data-testid='image'
					alt='logo'
					src={thumbnail}
					width={106}
					height={106}
					loading='eager'
				/>
				<div className={styles.sitemap}>
					<a href='/'>Privacy Policy</a>
					<span>|</span>
					<a href='/'>Terms of Service</a>
				</div>
				<p>Copyright 2022. Comic Closet, LLC. All rights reserved.</p>
			</footer>
		</>
	);
};
