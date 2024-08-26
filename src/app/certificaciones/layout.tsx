import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Desarrollo Web Fullstack | David Oreiro | Certificaciones",
	description:
		"Aqui podras encontrar todas mis certificaciones obtenidas a lo largo del tiempo, cuentan con su detalle, su link al contenido y el certificado de finalización.",
	keywords:
		"David Oreiro desarrollador web portfolio, diseño pagina web rosario, programador rosario,analista programador rosario, habilidades, React, MySQL",
	openGraph: {
		title: "Desarrollo Web Fullstack | David Oreiro | Certificaciones",
		description:
			"Aqui podras encontrar todas mis certificaciones obtenidas a lo largo del tiempo, cuentan con su detalle, su link al contenido y el certificado de finalización.",
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
		canonical: "https://davidoreiro97.github.io/portfolio/certificaciones",
		languages: {
			en: "https://davidoreiro97.github.io/portfolio/en/certificaciones",
			es: "https://davidoreiro97.github.io/portfolio/certificaciones",
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
