import getDictionary from "@/functions/getDictionary";
import { Proyecto } from "@/components";
import styles from "./page.module.css";
export async function generateStaticParams() {
	return [{ lang: "en" }];
}
export default function Proyectos({ params }: { params: { lang: string } }) {
	const idioma = getDictionary("en");
	return (
		<article className={styles.proyectosContainer}>
			<div className={styles.proyectosContainer__align}>
				<Proyecto
					titulo={idioma.proyectos_titulo_2}
					urlImagenMuestra="/portfolio/images/avif/proyectoDos.avif"
					detalles={idioma.proyectos_detalles_2}
					urlSitioWeb="https://davidoreiro97.github.io/BuscadorPreciosRosario/"
					disabled={false}
					textoBtn_detalles={idioma.proyectos_texto_btn_detalles}
					textoBtn_visitar={idioma.proyectos_texto_btn_visitar}
					textoHeaderVentanaDetalles={idioma.proyectos_titulo_ventanaFlotante}
				/>
				<Proyecto
					titulo={idioma.proyectos_titulo_1}
					urlImagenMuestra="/portfolio/images/avif/proyectoUno.avif"
					detalles={idioma.proyectos_detalles_1}
					urlSitioWeb="https://rosarioherreria.netlify.app/"
					disabled={false}
					textoBtn_detalles={idioma.proyectos_texto_btn_detalles}
					textoBtn_visitar={idioma.proyectos_texto_btn_visitar}
					textoHeaderVentanaDetalles={idioma.proyectos_titulo_ventanaFlotante}
				/>
			</div>
		</article>
	);
}
