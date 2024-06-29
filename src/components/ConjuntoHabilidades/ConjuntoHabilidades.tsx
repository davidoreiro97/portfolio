import React from "react";
import styles from "./conjuntoHabilidades.module.css";
import { SubconjuntoHabilidades } from "./Subconjuntohabilidades/SubconjuntoHabilidades";
import { BordeSobreMi } from "../Svg/ImagenesSvg";
type propsConjuntoHabilidades = {
	tituloConjunto: string;
	subconjuntos: { nombreSubconjunto: string; contenidoSubconjunto: string[] }[];
};
export const ConjuntoHabilidades = ({
	tituloConjunto,
	subconjuntos,
}: propsConjuntoHabilidades) => {
	return (
		<section className={styles.conjuntoHabCont}>
			<div className={`${styles.lineasconjuntoHabCont} lineasContainer`}>
				{/* Este container está para poder sacar afuera el borde con el overflow*/}
				<div className="lineas" />
			</div>
			<BordeSobreMi className="bordeSobreMi" width={800} height={350} />
			<header className={styles.conjuntoHabCont__header}>
				<h2 className={styles.conjuntoHabCont__header__h2}>{tituloConjunto}</h2>
			</header>
			<SubconjuntoHabilidades subconjuntos={subconjuntos} />
		</section>
	);
};
