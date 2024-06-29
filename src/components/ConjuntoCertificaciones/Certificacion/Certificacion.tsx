"use client";
import React, { useEffect, useState } from "react";
import styles from "./certificacion.module.css";
import Link from "next/link";
import { FondoHeaderCertificacion } from "@/components/Svg/ImagenesSvg";

type propsCertificacion = {
	tituloCert: string;
	descripcionCert: string;
	linkAContenido: string;
	linkACertificado: string;
};

export const Certificacion = ({
	tituloCert,
	descripcionCert,
	linkAContenido,
	linkACertificado,
}: propsCertificacion) => {
	const [detallesAbierto, setDetallesAbierto] = useState(false);

	const handleAbrirDetalles = () => {
		setDetallesAbierto((prevState) => !prevState);
	};
	return (
		<section className={styles.certCont}>
			<header onClick={handleAbrirDetalles} className={styles.certCont__header}>
				<h3 className={styles.certCont__header__h3}>{tituloCert}</h3>
				<p className={styles.certCont__header__btnVerMas}>
					{detallesAbierto ? "-" : "+"}
				</p>
				<FondoHeaderCertificacion
					width={1000}
					height={40}
					className="fondoHeaderCertificacion"
				/>
			</header>
			<div
				className={`${styles.certCont__detallesCont} ${
					detallesAbierto ? styles.show : ""
				}`}
			>
				<p className={styles.certCont__detallesCont__p}>{descripcionCert}</p>
				<div className={styles.certCont__detallesCont__btnsCont}>
					<Link
						href={linkAContenido}
						className={styles.certCont__detallesCont__btnsCont__btn}
						target="_blank"
					>
						VER CONTENIDO
					</Link>
					<Link
						className={styles.certCont__detallesCont__btnsCont__btn}
						href={linkACertificado}
						target="_blank"
					>
						VER CERTIFICADO
					</Link>
				</div>
			</div>
		</section>
	);
};
