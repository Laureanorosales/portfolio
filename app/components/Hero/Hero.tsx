import styles from './Hero.module.css';

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.text}>
				<h1>
					Laureano
					<br />
					<em>Rosales</em>
				</h1>
				<p>
					Frontend developer en formación. Construyo interfaces limpias, funcionales y pensadas en las
					personas.
				</p>
				<div className={styles.actions}>
					<a href='#proyectos' className={styles.btnPrimary}>
						Ver proyectos
					</a>
					<a href='#contacto' className={styles.btnOutline}>
						Contacto
					</a>
				</div>
			</div>

			<div className={styles.card}>
				<div className={styles.label}>Stack actual</div>
				<div className={styles.stack}>
					{[
						{ name: 'JavaScript', level: 75 },
						{ name: 'React', level: 60 },
						{ name: 'Next.js', level: 45 },
						{ name: 'CSS', level: 80 },
					].map((tech) => (
						<div key={tech.name} className={styles.stackItem}>
							<span>{tech.name}</span>
							<div className={styles.barWrap}>
								<div className={styles.bar} style={{ width: `${tech.level}%` }} />
							</div>
						</div>
					))}
				</div>
				<div className={styles.badge}>
					<span className={styles.dot} />
					Disponible para trabajar
				</div>
			</div>
		</section>
	);
}
