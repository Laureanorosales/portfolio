import styles from './Navbar.module.css';

export default function Navbar() {
	return (
		<nav className={styles.nav}>
			<div className={styles.logo}>LR</div>
			<ul className={styles.links}>
				<li>
					<a href='#proyectos'>Proyectos</a>
				</li>
				<li>
					<a href='#skills'>Skills</a>
				</li>
				<li>
					<a href='#contacto'>Contacto</a>
				</li>
			</ul>
		</nav>
	);
}
