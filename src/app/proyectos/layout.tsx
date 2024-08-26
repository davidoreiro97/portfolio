import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Desarrollo Web Fullstack | David Oreiro - Proyectos",
	description:
		"Aqui podras encontrar todos mis proyectos tanto terminados como en los que me encuentro trabajando junto con sus detalles, repositorio y enlace para visitarlos.",
	keywords:
		"David Oreiro desarrollador web portfolio, diseño pagina web rosario, programador rosario,analista programador rosario, portfolio, proyectos",
	openGraph: {
		title: "Desarrollo Web Fullstack | David Oreiro - Proyectos",
		description:
			"Aqui podras encontrar todos mis proyectos tanto terminados como en los que me encuentro trabajando junto con sus detalles, repositorio y enlace para visitarlos.",
		images: [
			{
				url: "https://davidoreiro97.github.io/portfolio/opengraph-image.png",
				width: 1200,
				height: 630,
				alt: "David Oreiro Portfolio Image",
			},
		],
	},
	creator: "David Oreiro",
	authors: [
		{ name: "David oreiro", url: "https://davidoreiro97.github.io/portfolio" },
	],
	publisher: "David Oreiro",
	alternates: {
		canonical: "https://davidoreiro97.github.io/portfolio/proyectos",
		languages: {
			en: "https://davidoreiro97.github.io/portfolio/en/proyectos",
			es: "https://davidoreiro97.github.io/portfolio/proyectos",
		},
	},
	robots: "index,follow",
	category: "Web development",
};

export default function ProyectosLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
