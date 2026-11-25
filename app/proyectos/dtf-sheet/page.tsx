import Link from 'next/link';
/* eslint-disable @next/next/no-html-link-for-pages -- The browser resolves section fragments directly across pages. */
import type { Metadata } from 'next';
import Image from 'next/image';
import { dtfSheet, projects } from '../../projects';
import styles from './Case.module.css';

export const metadata: Metadata = {
	title: 'DTF Sheet',
	description: 'Cómo identifiqué, definí y probé una herramienta para preparar planchas DTF mediante desarrollo asistido por IA.',
	alternates: { canonical: '/proyectos/dtf-sheet' },
	openGraph: {
		type: 'article',
		title: 'DTF Sheet | Laureano Rosales',
		description: 'Caso de estudio: definición del problema, flujo del editor y desarrollo asistido por IA.',
		url: '/proyectos/dtf-sheet',
	},
	twitter: {
		card: 'summary',
		title: 'DTF Sheet | Laureano Rosales',
		description: 'Caso de estudio de una herramienta para preparar planchas DTF.',
	},
};

const project = projects.find(entry => entry.id === dtfSheet.id);

export default function DtfSheetPage() {
	return (
		<article className={`container ${styles.article}`}>
			<header className={styles.intro}>
				<Link href="/#proyectos">Volver a Proyectos</Link>
				<h1>DTF Sheet</h1>
				<p>Una herramienta web para preparar planchas de impresión textil mediante desarrollo asistido por IA.</p>
				<div className="actions">
					<a className="button button-primary" href={dtfSheet.demoUrl}>Probar DTF Sheet <span aria-hidden="true">↗</span></a>
					{project?.repositoryUrl && <a className="button" href={project.repositoryUrl}>Ver repositorio</a>}
				</div>
				<figure className={styles.figure} data-reveal>
					<Image src="/dtf-editor-final.webp" width={1440} height={950} alt="Editor de DTF Sheet con biblioteca de diseños, plancha organizada en el lienzo y lista de capas." sizes="(min-width: 1024px) 55vw, 92vw" loading="eager" />
					<figcaption>La biblioteca, el lienzo y las capas del mismo ejemplo.</figcaption>
				</figure>
			</header>

			<section className={`section ${styles.split}`} aria-labelledby="problema">
				<h2 className="section-title" id="problema" data-reveal>El problema</h2>
				<p>Para imprimir varios diseños en una misma película DTF (Direct to Film), hay que distribuir las piezas dentro del área imprimible, respetar su tamaño y dejar margen entre ellas. La preparación termina cuando la plancha se puede exportar como un archivo.</p>
			</section>

			<section className="section" aria-labelledby="solucion">
				<h2 className="section-title" id="solucion" data-reveal>De diseños a plancha</h2>
				<ol className={styles.steps}>
					<li><h3>Cargar diseños</h3><p>El ejemplo parte de tres archivos de prueba con distintos tamaños y cantidades.</p></li>
					<li><h3>Organizar en el lienzo</h3><p>La organización automática acomoda las piezas dentro del margen de la plancha.</p></li>
					<li><h3>Exportar el resultado</h3><p>El cuadro muestra las dimensiones de salida antes de descargar la plancha como PNG.</p></li>
				</ol>

				<div className={styles.details}>
					<figure className={styles.figure} data-reveal>
						<Image src={dtfSheet.image.src} alt={dtfSheet.image.alt} width={dtfSheet.image.width} height={dtfSheet.image.height} sizes="(min-width: 1410px) 720px, (min-width: 768px) 51vw, 91vw" />
						<figcaption>Detalle del margen y la separación entre piezas.</figcaption>
					</figure>
					<figure className={styles.figure} data-reveal>
						<Image src="/dtf-exportacion-final.webp" width={576} height={572} alt="Opciones de exportación de DTF Sheet y dimensiones de salida de la plancha de muestra." sizes="(min-width: 1410px) 538px, (min-width: 768px) 40vw, 91vw" />
						<figcaption>Exportación con el tamaño de la misma plancha.</figcaption>
					</figure>
				</div>
			</section>

			<section className={`section ${styles.split}`} id="proceso" aria-labelledby="participacion">
				<h2 className="section-title" id="participacion" data-reveal>Mi participación</h2>
				<div className={styles.prose}>
					<p>Identifiqué el problema y definí los requisitos funcionales. Dirigí el desarrollo con herramientas de inteligencia artificial y tomé decisiones sobre las funciones y la experiencia de uso.</p>
					<p>Probé la aplicación manualmente, detecté errores y solicité correcciones. Propuse mejoras de diseño, usabilidad y compatibilidad de imágenes, y repetí ese proceso hasta conseguir una herramienta funcional.</p>
					<h3>Desarrollo asistido por IA</h3>
					<p>Las herramientas de IA generaron el código bajo mi dirección. El proyecto utiliza Next.js, React y TypeScript.</p>
				</div>
			</section>

			<nav aria-label="Continuar desde el caso" className={`section ${styles.continue}`}>
				<Link href="/#proyectos">Ver proyectos</Link>
				<a className="button button-primary" href="/#contacto">Contacto</a>
			</nav>
		</article>
	);
}
