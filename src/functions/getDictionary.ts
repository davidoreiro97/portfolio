import path from "path";
import fs from "fs";
export default function getDictionary(idioma: string) {
	const rutaLenguajes = path.join(
		process.cwd(),
		`/src/dictionaries/${idioma}.json`
	);
	const jsonData = fs.readFileSync(rutaLenguajes, "utf8");
	return JSON.parse(jsonData);
}
