import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
	return (
		<footer className={`container ${styles.footer}`}>
			<Link href="/">Laureano Rosales</Link>
			<span>© {new Date().getFullYear()}</span>
		</footer>
	);
}
