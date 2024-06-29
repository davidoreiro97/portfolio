import { MetadataRoute } from "next";
const urlBaseWeb = "https://davidoreiro97.github.io/portfolio";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	//Para la fecha de ultima actualización
	const currentDate = new Date();
	// Formatear la fecha en el formato ISO8601 requerido por lastModified
	const lastModifiedDate = currentDate.toISOString();
	// Si tenemos una página multiidioma debemos utilizar el atributo alternates
	// para especificar la página alternativa en dicho idioma.
	function generarAlternativa(urlSeccion: string) {
		return {
			languages: {
				es: `${urlBaseWeb}/${urlSeccion}`,
				en: `${urlBaseWeb}/en/${urlSeccion}`,
			},
		};
	}
	return [
		{
			url: urlBaseWeb,
			changeFrequency: "never",
			lastModified: lastModifiedDate,
			priority: 1,
			alternates: generarAlternativa(""),
		},
		{
			url: `${urlBaseWeb}/proyectos`,
			changeFrequency: "never",
			lastModified: lastModifiedDate,
			priority: 0.9,
			alternates: generarAlternativa("proyectos"),
		},
		{
			url: `${urlBaseWeb}/habilidades`,
			changeFrequency: "never",
			lastModified: lastModifiedDate,
			priority: 0.8,
			alternates: generarAlternativa("habilidades"),
		},
		{
			url: `${urlBaseWeb}/certificaciones`,
			changeFrequency: "never",
			lastModified: lastModifiedDate,
			priority: 0.7,
			alternates: generarAlternativa("certificaciones"),
		},
	];
}
