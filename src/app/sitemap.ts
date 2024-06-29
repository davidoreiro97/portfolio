import { MetadataRoute } from "next";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	//Para la fecha de ultima actualización
	const currentDate = new Date();
	// Formatear la fecha en el formato ISO8601 requerido por lastModified
	const lastModifiedDate = currentDate.toISOString();
	return [
		{
			url: "https://davidoreiro97.github.io/portfolio",
			changeFrequency: "never",
			lastModified: lastModifiedDate,
			priority: 1,
			alternates: {
				languages: {
					es: "https://davidoreiro97.github.io/portfolio",
					en: "https://davidoreiro97.github.io/portfolio/en",
				},
			},
		},
		{
			url: "https://davidoreiro97.github.io/portfolio/proyectos",
			changeFrequency: "never",
			lastModified: lastModifiedDate,
			priority: 0.9,
			alternates: {
				languages: {
					es: "https://davidoreiro97.github.io/portfolio/proyectos",
					en: "https://davidoreiro97.github.io/portfolio/en/proyectos",
				},
			},
		},
		{
			url: "https://davidoreiro97.github.io/portfolio/habilidades",
			changeFrequency: "never",
			lastModified: lastModifiedDate,
			priority: 0.8,
			alternates: {
				languages: {
					es: "https://davidoreiro97.github.io/portfolio/habilidades",
					en: "https://davidoreiro97.github.io/portfolio/en/habilidades",
				},
			},
		},
		{
			url: "https://davidoreiro97.github.io/portfolio//certificaciones",
			changeFrequency: "never",
			lastModified: lastModifiedDate,
			priority: 0.7,
			alternates: {
				languages: {
					es: "https://davidoreiro97.github.io/portfolio/certificaciones",
					en: "https://davidoreiro97.github.io/portfolio/en/certificaciones",
				},
			},
		},
	];
}
