import React from "react";
import styles from "./expProyUni.module.css";
import Link from "next/link";
import { BordeExpProyUni } from "../Svg/ImagenesSvg";
type propsExpProyUni = {
	titulo: string;
	svg: React.ReactNode;
	texto: string[];
	textoBoton: string;
	linkBoton: string;
};
export const ExpProyUni = ({
	titulo,
	svg,
	texto,
	textoBoton,
	linkBoton,
}: propsExpProyUni) => {
	return (
		<article className={styles.ExpProyUniCont}>
			<BordeExpProyUni width={300} height={450} className="BordeExpProyUni" />
			<div className="lineasContainer">
				<div className="lineas" />
			</div>
			<header className={styles.ExpProyUniCont__header}>
				<h1 className={styles.ExpProyUniCont__header__h1}>{titulo}</h1>
			</header>

			<div className={styles.ExpProyUniCont__svgTextCont}>
				<div className={styles.ExpProyUniCont__svgTextCont__svgCont}>{svg}</div>
				<p className={styles.ExpProyUniCont__svgTextCont__texto}>
					{texto.map((line, index) => (
						<span key={index}>
							{line}
							<br />
						</span>
					))}
				</p>
			</div>

			<Link className={styles.ExpProyUniCont__btn} href={linkBoton}>
				{textoBoton}
			</Link>
		</article>
	);
};
