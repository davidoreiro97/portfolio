import { Proyecto } from "@/components";
import styles from "./page.module.css";
import getDictionary from "@/functions/getDictionary";
export default function Proyectos() {
	const idioma = getDictionary("es");
	return (
		<article className={styles.proyectosContainer}>
			<div className={styles.proyectosContainer__align}>
				<Proyecto
					titulo={idioma.proyectos_titulo_1}
					urlImagenMuestra="../../images/avif/proyectoUno.avif"
					detalles={idioma.proyectos_detalles_1}
					urlSitioWeb="https://rosarioherreria.netlify.app/"
					disabled={false}
					textoBtn_detalles={idioma.proyectos_texto_btn_detalles}
					textoBtn_visitar={idioma.proyectos_texto_btn_visitar}
					textoHeaderVentanaDetalles={idioma.proyectos_titulo_ventanaFlotante}
				/>
				{/* Github pages tiene problema con las rutas relativas, se cambio : 
					../../images/avif/proyectoUno.avif
					a ./images/avif/proyectoUno.avif*/}
			</div>
		</article>
	);
}
