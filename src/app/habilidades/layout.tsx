import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Desarrollo Web Fullstack | David Oreiro | Habilidades",
	description:
		"Aqui podras encontrar todas mis habilidades, muchas obtenidas de forma autodidacta y otras mediante cursos los cuales puedes encontrar en la sección de certificaciones, también puedes encontrar mis apuntes al pie de la sección.",
	keywords:
		"David Oreiro desarrollador web portfolio, diseño pagina web rosario, programador rosario,analista programador rosario, habilidades, React, MySQL",
	openGraph: {
		title: "Desarrollo Web Fullstack | David Oreiro | Habilidades",
		description:
			"Aqui podras encontrar todas mis habilidades, muchas obtenidas de forma autodidacta y otras mediante cursos los cuales puedes encontrar en la sección de certificaciones, también puedes encontrar mis apuntes al pie de la sección.",
		images: [
			{
				url: "/opengraph-image.png",
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
		canonical: "https://davidoreiro97.github.io/portfolio/habilidades",
		languages: {
			en: "https://davidoreiro97.github.io/portfolio/en/habilidades",
			es: "https://davidoreiro97.github.io/portfolio/habilidades",
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
