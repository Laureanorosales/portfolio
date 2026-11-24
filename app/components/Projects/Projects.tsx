import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../../projects';
import styles from './Projects.module.css';

export default function Projects() {
	return (
		<section className={styles.section} id="proyectos" aria-labelledby="proyectos-titulo">
			<h2 className={`section-title ${styles.heading}`} id="proyectos-titulo" data-reveal>Proyectos<br />seleccionados<span> (02)</span></h2>
			<div className={styles.grid}>
				{projects.map((project, index) => (
					<article className={project.caseUrl ? styles.feature : styles.secondary} key={project.id} data-surface>
						<div className={styles.copy}>
							<span className={styles.number}>0{index + 1} /</span><h3>{project.title}</h3>
							<p>{project.summary}</p>
							<div className={styles.links}>
								{project.caseUrl && <Link href={project.caseUrl}>Leer el caso</Link>}
								{project.demoUrl && <a href={project.demoUrl}>Probar DTF Sheet <span aria-hidden="true">↗</span></a>}
								{project.repositoryUrl && <a href={project.repositoryUrl}>Ver código en GitHub <span aria-hidden="true">↗</span></a>}
							</div>
						</div>
						{project.image && <figure className={styles.preview} data-reveal>
							<Image
								src={project.image.src}
								alt={project.image.alt}
								width={project.image.width}
								height={project.image.height}
								loading="lazy"
								sizes={project.caseUrl
									? '(min-width: 1024px) 62vw, 91vw'
									: '(min-width: 1024px) 34vw, 91vw'}
							/>
						</figure>}
					</article>
				))}
			</div>
		</section>
	);
}
