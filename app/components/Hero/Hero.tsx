import Link from 'next/link';
import { dtfSheet } from '../../projects';
import styles from './Hero.module.css';

export default function Hero({ hasCv }: { hasCv: boolean }) {
	return (
		<section className={styles.hero} aria-labelledby="nombre">
			<div className={styles.content}>
				<p className={styles.availability}><span /> Abierto a oportunidades laborales</p>
				<h1 id="nombre" className={styles.name}>Laureano<br />Rosales<span>.</span></h1>
				<p className={styles.intro}>Desarrollador frontend en formación. Aprendo de forma autodidacta y creo soluciones digitales para problemas concretos.</p>
				<div className="actions">
					<Link className="button button-primary" href={dtfSheet.caseUrl}>Explorar DTF Sheet <span aria-hidden="true">↗</span></Link>
					<a className="button" href="https://github.com/Laureanorosales">GitHub <span aria-hidden="true">↗</span></a>
					{hasCv ? <a className="button" href="/cv.pdf" download>Descargar CV <span aria-hidden="true">↓</span></a> : <button className="button" type="button" disabled>CV aún no disponible</button>}
				</div>
			</div>
			<div className={styles.art} aria-hidden="true">
				<div className={styles.orbit} /><div className={styles.orbitInner} />
				<div className={styles.tileOne} /><div className={styles.tileTwo} /><div className={styles.tileThree} />
				<span className={styles.cross}>✳</span><span className={styles.artCaption}>IDEA / PROCESO / RESULTADO</span>
			</div>
		</section>
	);
}
