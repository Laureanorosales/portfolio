import Link from 'next/link';
import { dtfSheet } from '../../projects';
import { cvUrl } from '../../cv';
import ScrambleText from '../ScrambleText';
import HeroOrbit from './HeroOrbit';
import styles from './Hero.module.css';

export default function Hero({ hasCv }: { hasCv: boolean }) {
 return <section className={styles.hero} aria-labelledby="nombre">
  <span className={styles.introMark} aria-hidden="true">LR</span>
  <div className={styles.content}>
   <p className={styles.availability}><span aria-hidden="true" /> Mendoza, Argentina · Disponible para oportunidades</p>
   <div className={styles.headline}>
    <HeroOrbit />
    <h1 id="nombre" className={styles.name}><span><span>LAUREANO</span></span><span><span>ROSALES</span></span></h1>
   </div>
   <div className={styles.bottom}>
    <p className={styles.intro}><span lang="en"><ScrambleText trigger="enter">Frontend Developer &amp; AI Enthusiast</ScrambleText></span><br />Técnico Superior en Desarrollo de Software, con aprendizaje autodidacta continuo. Exploro la creatividad digital y el desarrollo asistido por IA para crear soluciones tecnológicas.</p>
    <div className={styles.actions}><Link href={dtfSheet.caseUrl}>Explorar DTF Sheet <span aria-hidden="true">↗</span></Link><a href="https://github.com/Laureanorosales">GitHub <span aria-hidden="true">↗</span></a>{hasCv ? <a href={cvUrl} download>Descargar CV <span aria-hidden="true">↓</span></a> : <button type="button" disabled>CV aún no disponible</button>}</div>
   </div>
  </div>
  <a href="#proyectos" className={styles.scroll}>Desplazá para explorar <span aria-hidden="true">↓</span></a>
 </section>;
}
