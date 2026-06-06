import type { Metadata } from 'next';
import { DM_Sans, DM_Serif_Display } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '500'],
	variable: '--font-sans',
});

const dmSerif = DM_Serif_Display({
	subsets: ['latin'],
	weight: ['400'],
	style: ['normal', 'italic'],
	variable: '--font-serif',
});

export const metadata: Metadata = {
	title: 'Laureano Rosales — Frontend Developer',
	description: 'Portfolio de Laureano Rosales, frontend developer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='es' className={`${dmSans.variable} ${dmSerif.variable}`}>
			<body>{children}</body>
		</html>
	);
}
