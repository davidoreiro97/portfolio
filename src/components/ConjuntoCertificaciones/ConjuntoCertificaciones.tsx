import React from "react";
import styles from "./conjuntoCertificaciones.module.css";
import { Certificacion } from "./Certificacion/Certificacion";
type propsConjuntoCertificaciones = {
	tituloConjunto: string;
	certificaciones: {
		tituloCert: string;
		descripcionCert: string;
		linkAContenido: string;
		linkACertificado: string;
	}[];
};

export const ConjuntoCertificaciones = ({
	tituloConjunto,
	certificaciones,
}: propsConjuntoCertificaciones) => {
	return (
		<section className={styles.conjuntoCertCont}>
			<div className={`${styles.lineasconjuntoCertCont} lineasContainer`}>
				<div className="lineas" />
			</div>
			<header className={styles.conjuntoCertCont__header}>
				<h2 className={styles.conjuntoCertCont__header__h2}>
					{tituloConjunto}
				</h2>
			</header>
			{certificaciones.map((certificacion, index) => (
				<Certificacion
					key={index}
					tituloCert={certificacion.tituloCert}
					descripcionCert={certificacion.descripcionCert}
					linkAContenido={certificacion.linkAContenido}
					linkACertificado={certificacion.linkACertificado}
				/>
			))}
		</section>
	);
};
