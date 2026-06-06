import styles from './Projects.module.css';

export default function Projects() {
	return (
		<section id='proyectos' className={styles.section}>
			<div className={styles.header}>
				<h2>Proyectos</h2>
				<div className={styles.line} />
			</div>
			<div className={styles.grid}>
				<div className={styles.placeholder}>Próximamente</div>
				<div className={styles.placeholder}>Próximamente</div>
				<div className={styles.placeholder}>Próximamente</div>
			</div>
		</section>
	);
}
