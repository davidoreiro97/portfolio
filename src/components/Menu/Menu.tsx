"use client";
import styles from "./menu.module.css";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Preferencias } from "../index";
import {
	HamburgerIcon,
	CloseMenuIcon,
	BordeMenuDesktop,
} from "../Svg/ImagenesSvg";

export const Menu = () => {
	const [idiomaActual, setIdiomaActual] = useState("es");
	const [menuHamburguesaAbierto, setMenuHamburguesaAbierto] = useState(false);

	const handleMenuHamburguesa = () => {
		setMenuHamburguesaAbierto((prevState) => !prevState);
	};

	const pathname = usePathname();
	useEffect(() => {
		window.addEventListener("resize", handleResize);
		// Cleanup listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	const handleResize = () => {
		if (window.innerWidth > 600) {
			setMenuHamburguesaAbierto(false);
			document.body.classList.remove("no-scroll");
		}
	};
	useEffect(() => {
		if (menuHamburguesaAbierto) {
			document.body.classList.add("no-scroll");
		} else {
			document.body.classList.remove("no-scroll");
		}
		// Función para asegurarse de limpiar la clase en caso que el componente se desmote.
		return () => {
			document.body.classList.remove("no-scroll");
		};
	}, [menuHamburguesaAbierto]);
	return (
		<header
			id="mainMenu"
			className={menuHamburguesaAbierto ? styles.menu__open : styles.menu}
		>
			<div className={styles.contenedorMenuRelative}>
				<BordeMenuDesktop
					width={1024}
					height={80}
					className={
						menuHamburguesaAbierto
							? "bordeMenuDesktopHidden"
							: "bordeMenuDesktop"
					}
				/>
				<div
					className={`lineasContainer ${styles.lineasMenuContainer} ${
						menuHamburguesaAbierto ? styles.lineasMenuExtender : ""
					}`}
				>
					<div className={`lineas ${styles.lineasMenu}`} />
				</div>

				{/* Boton menu hamburguesa escondido en 660px+*/}
				<button
					onClick={handleMenuHamburguesa}
					className={styles.menu__hamburguesaBtn}
				>
					{menuHamburguesaAbierto ? (
						<CloseMenuIcon width={30} height={22} className="" />
					) : (
						<HamburgerIcon
							width={30}
							height={22}
							className="menuHamburgerIcon"
						/>
					)}
					{menuHamburguesaAbierto
						? idiomaActual === "en"
							? "CLOSE"
							: "CERRAR"
						: "MENU"}
				</button>
				{/* Boton menu hamburguesa escondido en 660px+*/}

				<div
					className={`${styles.menuNavPreferenciasContainer} ${
						menuHamburguesaAbierto && styles.visible__flex
					}`}
				>
					<nav
						className={`${styles.menu__links} ${
							menuHamburguesaAbierto ? "" : styles.hidden
						}`}
					>
						{/* INICIO */}
						<Link
							href={`/${idiomaActual === "es" ? "" : "en"}`}
							className={
								`${styles.menu__link__menuItem}` +
								`${
									pathname === "/" || pathname === "/en/"
										? ` ${styles.active}`
										: ""
								}`
							}
							onClick={() => {
								setMenuHamburguesaAbierto(false);
							}}
						>
							<div
								className={
									`${styles.fondoActivo}` +
									`${
										pathname === "/" || pathname === "/en/"
											? ` ${styles.fondoActivo__activo}`
											: ""
									}`
								}
							>
								<div className={`lineas ${styles.lineasMenuActivo}`} />
							</div>
							{idiomaActual === "es" ? "Inicio" : "Home"}
						</Link>

						{/* PROYECTOS */}
						<Link
							className={
								`${styles.menu__link__menuItem}` +
								`${
									pathname === "/proyectos/" || pathname === "/en/proyectos/"
										? ` ${styles.active}`
										: ""
								}`
							}
							href={`/${idiomaActual === "es" ? "" : "en/"}proyectos`}
							onClick={() => {
								setMenuHamburguesaAbierto(false);
							}}
						>
							<div
								className={
									`${styles.fondoActivo}` +
									`${
										pathname === "/proyectos/" || pathname === "/en/proyectos/"
											? ` ${styles.fondoActivo__activo}`
											: ""
									}`
								}
							>
								<div className={`lineas ${styles.lineasMenuActivo}`} />
							</div>
							{idiomaActual === "es" ? "Proyectos" : "Projects"}
						</Link>

						{/* HABILIDADES */}
						<Link
							className={
								`${styles.menu__link__menuItem}` +
								`${
									pathname === "/habilidades/" ||
									pathname === "/en/habilidades/"
										? ` ${styles.active}`
										: ""
								}`
							}
							href={`/${idiomaActual === "es" ? "" : "en/"}habilidades`}
							onClick={() => {
								setMenuHamburguesaAbierto(false);
							}}
						>
							<div
								className={
									`${styles.fondoActivo}` +
									`${
										pathname === "/habilidades/" ||
										pathname === "/en/habilidades/"
											? ` ${styles.fondoActivo__activo}`
											: ""
									}`
								}
							>
								<div className={`lineas ${styles.lineasMenuActivo}`} />
							</div>
							{idiomaActual === "es" ? "Habilidades" : "Skills"}
						</Link>

						{/* CERTIFICACIONES */}
						<Link
							className={
								`${styles.menu__link__menuItem}` +
								`${
									pathname === "/certificaciones/" ||
									pathname === "/en/certificaciones/"
										? ` ${styles.active}`
										: ""
								}`
							}
							href={`/${idiomaActual === "es" ? "" : "en/"}certificaciones`}
							onClick={() => {
								setMenuHamburguesaAbierto(false);
							}}
						>
							<div
								className={
									`${styles.fondoActivo}` +
									`${
										pathname === "/certificaciones/" ||
										pathname === "/en/certificaciones/"
											? ` ${styles.fondoActivo__activo}`
											: ""
									}`
								}
							>
								<div className={`lineas ${styles.lineasMenuActivo}`} />
							</div>
							{idiomaActual === "es" ? "Certificaciones" : "Certifications"}
						</Link>
					</nav>

					<div
						className={`${styles.menu__preferences} ${
							menuHamburguesaAbierto ? "" : styles.hidden
						}`}
					>
						<Preferencias
							setIdiomaActual={setIdiomaActual}
							idiomaActual={idiomaActual}
						/>
					</div>
				</div>
			</div>
		</header>
	);
};
