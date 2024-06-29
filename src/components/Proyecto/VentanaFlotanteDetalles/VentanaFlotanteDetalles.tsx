"use client";
import { useEffect, useRef } from "react";
import React from "react";
import styles from "./ventanaflotante.module.css";

type VentanaFlotanteDetalles = {
	detalles: string;
	textoHeader: string;
	detallesAbierta: boolean;
	setDetallesAbierta: (arg: boolean) => void;
};

export const VentanaFlotanteDetalles = ({
	detalles,
	textoHeader,
	detallesAbierta,
	setDetallesAbierta,
}: VentanaFlotanteDetalles) => {
	const detailsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (detallesAbierta) {
			document.body.classList.add("no-scroll");

			const handleClickOutside = (event: MouseEvent) => {
				if (
					detailsRef.current &&
					!detailsRef.current.contains(event.target as Node)
				) {
					setDetallesAbierta(false);
				}
			};

			document.addEventListener("mousedown", handleClickOutside);
			return () => {
				document.removeEventListener("mousedown", handleClickOutside);
			};
		} else {
			document.body.classList.remove("no-scroll");
		}
	}, [detallesAbierta, setDetallesAbierta]);

	return (
		<section
			className={`${styles.ventanaFlotanteDetallesFondo} ${
				detallesAbierta ? styles.show : ""
			}`}
		>
			<div
				ref={detailsRef}
				className={styles.ventanaFlotanteDetallesFondo__detallesCont}
			>
				<header
					className={styles.ventanaFlotanteDetallesFondo__detallesCont__header}
				>
					<h3
						className={
							styles.ventanaFlotanteDetallesFondo__detallesCont__header__h3
						}
					>
						{textoHeader}
					</h3>
					<button
						className={
							styles.ventanaFlotanteDetallesFondo__detallesCont__header_closeBtn
						}
						onClick={() => {
							setDetallesAbierta(false);
						}}
					>
						X
					</button>
				</header>
				<div
					className={styles.ventanaFlotanteDetallesFondo__detallesCont__texto}
					dangerouslySetInnerHTML={{ __html: detalles }}
				/>
			</div>
		</section>
	);
};
