import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Fullstack Web Development  | David Oreiro - Certifications",
	description:
		"Here you can find all my certifications obtained over time, with their details, their link to the content and the certificate of completion.",
	keywords:
		"David Oreiro web developer portfolio, web design rosario, programmer analyst Rosario, React, Node, Html, CSS, Javascript, Certifications",
	alternates: {
		canonical: "https://davidoreiro97.github.io/portfolio/en/certificaciones",
		languages: {
			en: "https://davidoreiro97.github.io/portfolio/en/certificaciones",
			es: "https://davidoreiro97.github.io/portfolio/certificaciones",
		},
	},
};

import getDictionary from "@/functions/getDictionary";
// export async function generateMetadata({
// 	params,
// }: {
// 	params: { lang: string };
// }): Promise<Metadata> {
// 	const idioma = await getDictionary(params.lang);
// 	return {
// 		title: "David Oreiro | Certifications",
// 		description: idioma.metadata_description_certificaciones,
// 	};
// }

export default function ProyectosLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
