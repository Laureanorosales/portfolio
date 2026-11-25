/* eslint-disable @next/next/no-html-link-for-pages -- The browser resolves section fragments directly across pages. */
import Link from 'next/link';
import ScrambleText from '../ScrambleText';
import ThemeSelect from './ThemeSelect';
import styles from './Navbar.module.css';

export default function Navbar() {
	return (
		<header className={styles.header}>
			<div className={`container ${styles.inner}`}>
				<Link className={styles.brand} href="/">Laureano Rosales</Link>
				<nav aria-label="Navegación principal" className={styles.nav}>
					<a href="/#proyectos"><ScrambleText>Proyectos</ScrambleText></a>
					<a href="/#skills"><ScrambleText>Perfil</ScrambleText></a>
					<a href="/#contacto"><ScrambleText>Contacto</ScrambleText></a>
				</nav>
				<ThemeSelect />
			</div>
		</header>
	);
}
