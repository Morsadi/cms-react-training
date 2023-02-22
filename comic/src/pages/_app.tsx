import '../styles/globals.css'
import { Montserrat } from '@next/font/google';
import { AppProps } from 'next/app';

const montserrat = Montserrat({
	weight: ['100', '400', '700'],
	subsets: ['latin'],
});


export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={montserrat.className}>
			<Component {...pageProps} />
		</main>
	);
}
