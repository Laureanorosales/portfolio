import Link from 'next/link';
import { dtfSheet } from '../../projects';
import { cvUrl } from '../../cv';
import styles from './Hero.module.css';

export default function Hero({ hasCv }: { hasCv: boolean }) {
 return <section className={styles.hero} aria-labelledby="nombre">
  <div className={styles.art} aria-hidden="true"><div /><div /><div /></div>
  <div className={styles.content}>
   <p className={styles.availability}><span aria-hidden="true" /> Mendoza, Argentina · Disponible para oportunidades</p>
   <h1 id="nombre" className={styles.name}><span><span>LAUREANO</span></span><span><span>ROSALES</span></span></h1>
   <div className={styles.bottom}>
    <p className={styles.intro}><span lang="en">Frontend Developer &amp; AI Enthusiast</span><br />Técnico Superior en Desarrollo de Software, con aprendizaje autodidacta continuo. Exploro la creatividad digital y el desarrollo asistido por IA para crear soluciones tecnológicas.</p>
    <div className={styles.actions}><Link href={dtfSheet.caseUrl}>Explorar DTF Sheet <span aria-hidden="true">↗</span></Link><a href="https://github.com/Laureanorosales">GitHub <span aria-hidden="true">↗</span></a>{hasCv ? <a href={cvUrl} download>Descargar CV <span aria-hidden="true">↓</span></a> : <button type="button" disabled>CV aún no disponible</button>}</div>
   </div>
  </div>
  <a href="#proyectos" className={styles.scroll}>Desplazá para explorar <span aria-hidden="true">↓</span></a>
 </section>;
}
