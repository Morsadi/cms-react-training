import '../styles/globals.css';
import { Montserrat, Karla } from '@next/font/google';
import { AppProps } from 'next/app';

const montserrat = Montserrat({
	weight: ['100', '400', '500', '700'],
	subsets: ['latin'],
});

const karla = Karla({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<style
				jsx
				global>{`
				:root {
					--font-body: ${karla.style.fontFamily}, font-sans;
					--font-display: ${montserrat.style.fontFamily}, font-sans;
				}
			`}</style>
			<Component {...pageProps} />
		</>
	);
}
