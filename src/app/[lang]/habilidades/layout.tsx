import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Fullstack Web Development  | David Oreiro - Skills",
	description:
		"Here you can find all my skills, many of them self-taught and others obtained through courses which you can find in the certifications section, you can also find my notes at the bottom of the section.",
	keywords:
		"David Oreiro web developer portfolio, web design rosario, programmer analyst Rosario, React, Node, Html, CSS, Javascript, Skills, self-taught",
	alternates: {
		canonical: "https://davidoreiro97.github.io/portfolio/en/habilidades",
		languages: {
			en: "https://davidoreiro97.github.io/portfolio/en/habilidades",
			es: "https://davidoreiro97.github.io/portfolio/habilidades",
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
