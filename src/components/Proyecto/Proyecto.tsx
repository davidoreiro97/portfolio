"use client";
import styles from "./proyecto.module.css";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { VentanaFlotanteDetalles } from "./VentanaFlotanteDetalles/VentanaFlotanteDetalles";
import { BordeExpProyUni } from "../Svg/ImagenesSvg";
type propsProyecto = {
	titulo: string;
	urlImagenMuestra: string;
	detalles: string;
	urlSitioWeb: string;
	textoBtn_detalles: string;
	textoBtn_visitar: string;
	textoHeaderVentanaDetalles: string;
	disabled: boolean;
};
export const Proyecto = ({
	titulo,
	urlImagenMuestra,
	detalles,
	urlSitioWeb,
	textoBtn_detalles,
	textoBtn_visitar,
	textoHeaderVentanaDetalles,
	disabled,
}: propsProyecto) => {
	const [detallesAbierta, setDetallesAbierta] = useState(false);
	return (
		<section className={styles.proyecto}>
			<VentanaFlotanteDetalles
				detallesAbierta={detallesAbierta}
				setDetallesAbierta={setDetallesAbierta}
				textoHeader={textoHeaderVentanaDetalles}
				detalles={detalles}
			/>
			<BordeExpProyUni width={250} height={250} className="BordeExpProyUni" />
			<div className={`lineasContainer`}>
				{/* Este container está para poder sacar afuera el borde con el overflow*/}
				<div className="lineas" />
			</div>
			<header className={styles.proyecto__header}>
				<h2 className={styles.proyecto__header__h2}>{titulo}</h2>
			</header>
			<div className={styles.proyecto__imgLineasContainer}>
				<div className={`lineasContainer`}>
					{/* Este container está para poder sacar afuera el borde con el overflow*/}
					<div className={`lineas`} />
				</div>
				<Image
					className={styles.proyecto__img}
					width={230}
					height={200}
					src={urlImagenMuestra}
					alt="Imagen de proyecto"
				/>
			</div>
			<div className={styles.proyecto__btnsContainer}>
				<button
					className={styles.proyecto__btnsContainer__btn}
					onClick={() => {
						setDetallesAbierta(true);
					}}
				>
					{textoBtn_detalles}
				</button>
				<Link
					className={`${styles.proyecto__btnsContainer__btn} ${
						disabled ? styles.proyecto__btnsContainer__btn__disabled : ""
					}`}
					href={urlSitioWeb}
					target="_blank"
				>
					{textoBtn_visitar}
				</Link>
			</div>
		</section>
	);
};
