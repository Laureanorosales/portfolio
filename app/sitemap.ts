import type { MetadataRoute } from 'next';

const siteUrl = 'https://laureanorosalesportfolio.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{ url: siteUrl, changeFrequency: 'monthly', priority: 1 },
		{ url: `${siteUrl}/proyectos/dtf-sheet`, changeFrequency: 'yearly', priority: 0.8 },
	];
}
