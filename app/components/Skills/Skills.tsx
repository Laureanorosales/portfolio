import { dtfSheet } from '../../projects';
import styles from './Skills.module.css';

export default function Skills() {
	return (
		<section id="skills" className={`section ${styles.profile}`} aria-labelledby="perfil" data-reveal>
			<div className={styles.heading}><h2 id="perfil" className="section-title" data-reveal data-text-fill><span className="fill-ink">Curiosidad en práctica.</span></h2><p>Técnico Superior en Desarrollo de Software, con aprendizaje autodidacta y práctica en creatividad digital.</p></div>
			<div className={styles.grid}>
				<article className={styles.frontend} data-reveal><h3>Frontend</h3><p>Aprendizaje autodidacta de JavaScript, React, Next.js y CSS.</p><div className={styles.tags}><span>JavaScript</span><span>React</span><span>Next.js</span><span>CSS</span></div></article>
				<article data-reveal><h3>Inteligencia artificial</h3><p>Experiencia práctica con OpenAI Codex y Google Antigravity; uso de skills y flujos con varios modelos, incluidos ChatGPT y Gemini, para desarrollo asistido.</p><a href={`${dtfSheet.caseUrl}#proceso`}>Conocé mi proceso</a></article>
				<article data-reveal><h3>Excel</h3><p>Fórmulas, tablas y gráficos para trabajar con información.</p></article>
				<article data-reveal><h3>Diseño gráfico</h3><p>Una mirada visual aplicada a la composición y la comunicación.</p></article>
			</div>
		</section>
	);
}
