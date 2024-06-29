import React from "react";
import styles from "./subconjuntoHabilidades.module.css";
import { BordeRectangular } from "@/components/Svg/ImagenesSvg";
type propsSubconjuntoHabilidades = {
	subconjuntos: { nombreSubconjunto: string; contenidoSubconjunto: string[] }[];
};
export const SubconjuntoHabilidades = ({
	subconjuntos,
}: propsSubconjuntoHabilidades) => {
	return (
		<div className={styles.contenedorSecciones}>
			{subconjuntos.map((subconjunto, index) => (
				<section key={index} className={styles.subconjuntoCont}>
					<header className={styles.subconjuntCont__header}>
						<h3 className={styles.subconjuntCont__header__h3}>
							{subconjunto.nombreSubconjunto}
						</h3>
						<BordeRectangular width={200} height={40} className="bordeRect" />
					</header>
					<div className={styles.subconjuntCont__textCont}>
						<div className="lineasContainer">
							<div className={`lineas`} />
						</div>
						{subconjunto.contenidoSubconjunto.map(
							(nombreHerramienta, index) => (
								<p key={index} className={styles.subconjuntCont__textCont__p}>
									<span className={styles.subconjuntCont__textCont__p__simbolo}>
										▲{" "}
									</span>
									{nombreHerramienta}
								</p>
							)
						)}
					</div>
				</section>
			))}
		</div>
	);
};
