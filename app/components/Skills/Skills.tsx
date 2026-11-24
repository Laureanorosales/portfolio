import { dtfSheet } from '../../projects';
import styles from './Skills.module.css';

export default function Skills() {
	return (
		<section id="skills" className={`section ${styles.profile}`} aria-labelledby="perfil">
			<div className={styles.heading}><h2 id="perfil" className="section-title" data-reveal>Curiosidad en práctica.</h2><p>Aprendo explorando, probando y mejorando cada idea.</p></div>
			<div className={styles.grid}>
				<article className={styles.frontend}><span className={styles.icon} aria-hidden="true">⌘</span><h3>Frontend</h3><p>Aprendizaje autodidacta de JavaScript, React, Next.js y CSS.</p><div className={styles.tags}><span>JavaScript</span><span>React</span><span>Next.js</span><span>CSS</span></div></article>
				<article><span className={styles.icon} aria-hidden="true">✳</span><h3>Inteligencia artificial</h3><p>OpenAI Codex y Google Antigravity para el desarrollo asistido por IA.</p><a href={`${dtfSheet.caseUrl}#proceso`}>Conocé mi proceso</a></article>
				<article><span className={styles.icon} aria-hidden="true">▦</span><h3>Excel</h3><p>Fórmulas, tablas y gráficos para trabajar con información.</p></article>
				<article><span className={styles.icon} aria-hidden="true">◈</span><h3>Diseño gráfico</h3><p>Una mirada visual aplicada a la composición y la comunicación.</p></article>
			</div>
		</section>
	);
}
