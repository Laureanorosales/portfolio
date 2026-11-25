import ScrambleText from '../ScrambleText';
import styles from './Contact.module.css';

export default function Contact() {
	return (
		<section id="contacto" className={`section ${styles.contact}`} aria-labelledby="contacto-titulo" data-reveal>
			<h2 id="contacto-titulo" className="section-title" data-reveal><span>Hagamos</span>{" "}<span>algo juntos.</span></h2>
			<div>
				<p>Busco mi primera oportunidad en desarrollo frontend y proyectos donde pueda combinar tecnología y creatividad. También estoy abierto a propuestas freelance.</p>
				<div className="actions">
					<a className="button button-primary" data-magnetic href="https://www.linkedin.com/in/laureano-rosales-6b3425239"><ScrambleText>Escribime en LinkedIn</ScrambleText> <span aria-hidden="true">↗</span></a>
					<a className="button" data-magnetic href="https://github.com/Laureanorosales"><ScrambleText>GitHub</ScrambleText> <span aria-hidden="true">↗</span></a>
				</div>
			</div>
		</section>
	);
}
