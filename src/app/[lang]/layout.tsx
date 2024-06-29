import getDictionary from "@/functions/getDictionary";
import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Fullstack Web Development  | David Oreiro - Portfolio",
	description:
		"Welcome to my Portfolio! I'm David Oreiro, Jr. fullstack web developer with React, Next.js, Node, Express, MySQL and other technologies. I'm also an advanced student of information systems engineering.",
	keywords:
		"David Oreiro web developer portfolio, web design rosario, programmer analyst Rosario, React, Node, Html, CSS, Javascript",
	openGraph: {
		title: "Fullstack Web Development  | David Oreiro - Portfolio",
		description:
			"Welcome to my Portfolio! I'm David Oreiro, Jr. fullstack web developer with React, Next.js, Node, Express, MySQL and other technologies. I'm also an advanced student of information systems engineering.",
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
		canonical: "https://davidoreiro97.github.io/portfolio/en",
		languages: {
			en: "https://davidoreiro97.github.io/portfolio/en",
			es: "https://davidoreiro97.github.io/portfolio",
		},
	},
	robots: "index,follow",
	category: "Web development",
};

export async function generateStaticParams() {
	return [{ lang: "en" }];
}

export default function ProyectosLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
