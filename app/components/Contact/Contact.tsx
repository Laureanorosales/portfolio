import styles from './Contact.module.css';

export default function Contact() {
	return (
		<section id='contacto' className={styles.section}>
			<div className={styles.header}>
				<h2>Contacto</h2>
				<div className={styles.line} />
			</div>
			<div className={styles.grid}>
				<div className={styles.info}>
					<h3>Hablemos.</h3>
					<p>
						Estoy buscando mis primeras oportunidades como frontend developer. Si tenés un proyecto o una
						posición que creas que puede interesarme, escribime.
					</p>
				</div>
				<div className={styles.links}>
					<a
						href='https://github.com/Laureanorosales'
						target='_blank'
						rel='noopener noreferrer'
						className={styles.link}>
						<i className='ti ti-brand-github' aria-hidden='true' />
						<div>
							<span className={styles.linkLabel}>GitHub</span>
							Laureanorosales
						</div>
						<i className='ti ti-arrow-right' style={{ marginLeft: 'auto' }} aria-hidden='true' />
					</a>
					<a
						href='https://www.linkedin.com/in/laureano-rosales-6b3425239'
						target='_blank'
						rel='noopener noreferrer'
						className={styles.link}>
						<i className='ti ti-brand-linkedin' aria-hidden='true' />
						<div>
							<span className={styles.linkLabel}>LinkedIn</span>
							Laureano Rosales
						</div>
						<i className='ti ti-arrow-right' style={{ marginLeft: 'auto' }} aria-hidden='true' />
					</a>
				</div>
			</div>
		</section>
	);
}
