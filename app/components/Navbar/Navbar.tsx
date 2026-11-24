/* eslint-disable @next/next/no-html-link-for-pages -- The browser resolves section fragments directly across pages. */
import Link from 'next/link';
import ThemeSelect from './ThemeSelect';
import styles from './Navbar.module.css';

export default function Navbar() {
	return (
		<header className={styles.header}>
			<div className={`container ${styles.inner}`}>
				<Link className={styles.brand} href="/">Laureano Rosales</Link>
				<nav aria-label="Navegación principal" className={styles.nav}>
					<a href="/#proyectos">Proyectos</a>
					<a href="/#skills">Perfil</a>
					<a href="/#contacto">Contacto</a>
				</nav>
				<ThemeSelect />
			</div>
		</header>
	);
}
