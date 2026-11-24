import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Reveal from './components/Reveal';
import { themeStorageKey } from './theme';
import './globals.css';

const dmSans = localFont({
	src: './fonts/dm-sans-latin.woff2',
	weight: '400 700',
	variable: '--font-sans',
});

export const metadata: Metadata = {
	metadataBase: new URL('https://laureanorosalesportfolio.vercel.app'),
	title: { default: 'Laureano Rosales | Frontend Developer & AI Enthusiast', template: '%s | Laureano Rosales' },
	description: 'Portfolio de Laureano Rosales, Técnico Superior en Desarrollo de Software y desarrollador frontend en formación, con práctica en creatividad digital y desarrollo asistido por IA.',
	alternates: { canonical: '/' },
	openGraph: {
		type: 'website',
		locale: 'es_AR',
		siteName: 'Laureano Rosales',
		title: 'Laureano Rosales | Frontend Developer & AI Enthusiast',
		description: 'Técnico Superior en Desarrollo de Software y frontend en formación, con práctica en creatividad digital y desarrollo asistido por IA.',
		url: '/',
	},
	twitter: {
		card: 'summary',
		title: 'Laureano Rosales | Frontend Developer & AI Enthusiast',
		description: 'Frontend en formación, creatividad digital y desarrollo asistido por inteligencia artificial.',
	},
};

const themeBootstrap = `
	try {
		const theme = localStorage.getItem(${JSON.stringify(themeStorageKey)});
		if (theme === 'light' || theme === 'dark') document.documentElement.dataset.theme = theme;
	} catch {}
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="es-AR" className={dmSans.variable} suppressHydrationWarning>
			<head>
				<script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
			</head>
			<body>
				<a className="skip-link" href="#contenido">Saltar al contenido</a>
				<Navbar />
				<main id="contenido" tabIndex={-1}>{children}</main>
				<Footer />
				<Reveal />
			</body>
		</html>
	);
}
