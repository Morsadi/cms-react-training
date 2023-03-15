import React, { useContext } from 'react';
import { MyContext } from '../../pages/index';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import { HeroSection } from './hero_section';
import { FaBars, FaBolt } from 'react-icons/fa';
const items = [
	{ label: 'Home', href: '/' },
	{ label: 'Shop', href: '/' },
];

const thumbnail = '/logo.svg';

interface MyContextValue {
	comicNavigation: string;
	setComicNavigation: Function;
	storedValue: any[]
}


export const Navigation = () => {
	const { storedValue } = useContext<MyContextValue>(MyContext);

	return (
		<>
			<header className={styles.header}>
				<div>
					<a href='/'>
						<Image
							className={styles.logo}
							data-testid='image'
							alt='logo'
							src={thumbnail}
							width={106}
							height={106}
							loading='eager'
						/>
					</a>
				</div>
				<nav className={styles.navigation}>
					<span><FaBolt aria-hidden='true' /><span className={styles.desktop}>My Favorites</span>{`(${storedValue.length})`}</span>
					<button className={styles.mobile}>
						<FaBars aria-hidden='true' />
					</button>
					<ul className={styles.desktop}>
						{items.map((item, index) => (
							<li key={index}>
								<a href={item.href}>{item.label}</a>
							</li>
						))}
					</ul>
				</nav>
			</header>
			<HeroSection />
		</>
	);
};
