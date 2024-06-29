import { MetadataRoute } from "next";
const urlBaseWeb = "https://davidoreiro97.github.io/portfolio";
export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
			},
		],
		sitemap: `${urlBaseWeb}/sitemap.xml`,
	};
}
