import styles from './Contact.module.css';

export default function Contact() {
	return (
		<section id="contacto" className={`section ${styles.contact}`} aria-labelledby="contacto-titulo">
			<h2 id="contacto-titulo" className="section-title" data-reveal>Contacto</h2>
			<div>
				<p>Busco mi primera oportunidad en desarrollo frontend. También estoy abierto a propuestas freelance.</p>
				<div className="actions">
					<a className="button button-primary" href="https://www.linkedin.com/in/laureano-rosales-6b3425239">Escribime en LinkedIn <span aria-hidden="true">↗</span></a>
					<a className="button" href="https://github.com/Laureanorosales">GitHub <span aria-hidden="true">↗</span></a>
				</div>
			</div>
		</section>
	);
}
