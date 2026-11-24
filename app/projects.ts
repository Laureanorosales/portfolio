type Project = {
	id: string;
	title: string;
	summary: string;
	image?: { src: string; width: number; height: number; alt: string };
	caseUrl?: `/proyectos/${string}`;
	demoUrl?: `https://${string}`;
	repositoryUrl?: `https://github.com/${string}`;
};

export const dtfSheet = {
	id: 'dtf-sheet',
	title: 'DTF Sheet',
	summary: 'Una herramienta web para distribuir diseños sobre una plancha de impresión textil y exportar el resultado.',
	image: {
		src: '/dtf-plancha-final.webp',
		width: 786,
		height: 793,
		alt: 'Plancha de muestra con ilustraciones, reglas en centímetros y un margen señalado con línea discontinua.',
	},
	caseUrl: '/proyectos/dtf-sheet',
	demoUrl: 'https://dtfsheet-rosy.vercel.app/',
} satisfies Project;

export const projects: readonly Project[] = [
	dtfSheet,
	{
		id: 'gifs-app',
		title: 'Gifs App',
		summary: 'Buscador de GIFs con React, TypeScript y la API de Giphy, creado como proyecto de curso.',
		image: {
			src: '/gifs-buscador.webp',
			width: 560,
			height: 220,
			alt: 'Pantalla de Gifs App con el campo de búsqueda y el encabezado de búsquedas previas.',
		},
		repositoryUrl: 'https://github.com/Laureanorosales/03-gifs-app',
	},
];
