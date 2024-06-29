import type { Metadata } from "next";
export async function generateStaticParams() {
	return [{ lang: "en" }];
}
export const metadata: Metadata = {
	title: "Fullstack Web Development  | David Oreiro - Projects",
	description:
		"Here you can find all my projects both finished and in which I am working along with their details, repository and link to visit them.",
	keywords:
		"David Oreiro web developer portfolio, web design rosario, programmer analyst Rosario, React, Node, Html, CSS, Javascript, Projects",
	alternates: {
		canonical: "https://davidoreiro97.github.io/portfolio/en/proyectos",
		languages: {
			en: "https://davidoreiro97.github.io/portfolio/en/proyectos",
			es: "https://davidoreiro97.github.io/portfolio/proyectos",
		},
	},
};

import getDictionary from "@/functions/getDictionary";
export default function ProyectosLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
