import Image from 'next/image';
import styles from './Projects.module.css';

const projects = [
	{
		title: 'Gifs App',
		description: 'Aplicación para buscar y explorar GIFs usando la API de Giphy. Construida con Angular y TypeScript.',
		tags: ['Angular', 'TypeScript', 'Giphy API'],
		image: '/gifs-app-preview.png',
		url: 'https://github.com/Laureanorosales/03-gifs-app',
	},
];

export default function Projects() {
	return (
		<section id='proyectos' className={styles.section}>
			<div className={styles.header}>
				<h2>Proyectos</h2>
				<div className={styles.line} />
			</div>
			<div className={styles.grid}>
				{projects.map((project) => (
					<a
						key={project.title}
						href={project.url}
						target='_blank'
						rel='noopener noreferrer'
						className={styles.card}>
						<div className={styles.imageWrap}>
							<Image
								src={project.image}
								alt={project.title}
								fill
								style={{ objectFit: 'cover' }}
								sizes='(max-width: 768px) 100vw, 33vw'
							/>
							<div className={styles.overlay}>
								<i className='ti ti-arrow-up-right' aria-hidden='true' />
							</div>
						</div>
						<div className={styles.cardBody}>
							<h3 className={styles.cardTitle}>{project.title}</h3>
							<p className={styles.cardDesc}>{project.description}</p>
							<div className={styles.tags}>
								{project.tags.map((tag) => (
									<span key={tag} className={styles.tag}>
										{tag}
									</span>
								))}
							</div>
						</div>
					</a>
				))}
				<div className={styles.placeholder}>Próximamente</div>
				<div className={styles.placeholder}>Próximamente</div>
			</div>
		</section>
	);
}
