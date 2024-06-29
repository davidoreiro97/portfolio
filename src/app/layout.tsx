import type { Metadata } from "next";
import "./globals.css";
import { Footer, Menu } from "../components/index";
export const metadata: Metadata = {
	title: "Desarrollo Web Fullstack | David Oreiro - Portfolio",
	description:
		"Te doy la bienvenida a mi Portfolio!. Soy David Oreiro, desarrollador web fullstack Jr. con React, Next.js, Node, Express, MySQL y otras tecnologías. También soy estudiante avanzado de ingeniería en sistemas de información.",
	keywords:
		"David Oreiro desarrollador web portfolio, diseño pagina web rosario, programador rosario,analista programador rosario",
	openGraph: {
		title: "Desarrollo Web Fullstack | David Oreiro - Portfolio",
		description:
			"Te doy la bienvenida a mi Portfolio!. Soy David Oreiro, desarrollador web fullstack Jr. con React, Next.js, Node, Express, MySQL y otras tecnologías. También soy estudiante avanzado de ingeniería en sistemas de información.",
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
		canonical: "https://davidoreiro97.github.io/portfolio",
		languages: {
			en: "https://davidoreiro97.github.io/portfolio/en",
			es: "https://davidoreiro97.github.io/portfolio",
		},
	},
	robots: "index,follow",
	category: "Web development",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body>
				<Menu />
				{children}
				<Footer />
			</body>
		</html>
	);
}
