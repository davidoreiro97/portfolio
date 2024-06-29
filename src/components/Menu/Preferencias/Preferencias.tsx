"use client";
import styles from "./preferencias.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { PreferencesIcon } from "@/components/Svg/ImagenesSvg";
export const Preferencias = ({
	setIdiomaActual,
	idiomaActual,
}: {
	setIdiomaActual: (lang: string) => void;
	idiomaActual: string;
}) => {
	//setIdiomaActual viene desde el Menu para cambiar su idioma y enlaces.
	const pathname = usePathname();
	const [pathnameES, setPathnameES] = useState("/");
	const [pathnameEN, setPathnameEN] = useState("/en");
	const [menuPreferenciasAbierto, setMenuPreferenciasAbierto] = useState(false);
	//Tema
	const [temaGlobal, setTemaGlobal] = useState("light");

	//Para el idioma
	useEffect(() => {
		let pathSegments = pathname.split("/").filter(Boolean);
		if (pathSegments[0] === "en") {
			//Si esta en ingles se omite el primer "en" y se une el resto de la url que es en español
			setPathnameES("/" + pathSegments.slice(1).join("/"));
			setPathnameEN(pathname);
			setIdiomaActual("en");
		} else {
			//Si esta en español se le agrega el /en al principio del pathname.
			setPathnameES(pathname);
			setPathnameEN("/en" + pathname);
			setIdiomaActual("es");
		}
	}, [pathname]);

	//Para el tema
	useEffect(() => {
		// Obtener el tema guardado en localStorage
		const temaGuardado = localStorage.getItem("temaGlobal");
		if (temaGuardado) {
			setTemaGlobal(temaGuardado);
			document.documentElement.setAttribute("data-theme", temaGuardado);
		}
	}, []);
	useEffect(() => {
		//Guardar en local storage cada vez que cambia el tema
		document.documentElement.setAttribute("data-theme", temaGlobal);
		localStorage.setItem("temaGlobal", temaGlobal);
	}, [temaGlobal]);
	const cambiarTema = (tema: string) => {
		setTemaGlobal(tema === "light" ? "light" : "dark");
	};
	//Para cerrar el menu al clickear fuera
	useEffect(() => {
		//Agregando el evento para cerrar el menú al clickear fuera del contenedor de preferencias.
		const handleClickOutside = (event: MouseEvent) => {
			const $menuPreferencias = document.getElementById("menuPreferencias");
			if (
				$menuPreferencias &&
				!$menuPreferencias.contains(event.target as Node)
			) {
				//Si existe el elemento y si el elemento que disparo el evento (event.target) fue dentro de dropdownElement
				setMenuPreferenciasAbierto(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handlePreferenciasMenu = () => {
		//Abre o cierra el menu de Preferencias.
		setMenuPreferenciasAbierto((prevState) => !prevState);
	};

	return (
		<div id="menuPreferencias" className={styles.preferenciasContainer}>
			{/* Menu preferencias en responsive > 600px */}
			<div
				className={
					styles.preferenciasContainer__menu__opcionesContainer__responsive
				}
			>
				<span className={styles.preferencesText__responsive}>
					{idiomaActual === "en" ? "- PREFERENCES -" : "- PREFERENCIAS -"}
				</span>
				<div
					className={
						styles.preferenciasContainer__menu__opcionesContainer__opcion
					}
				>
					<p
						className={
							styles.preferenciasContainer__menu__opcionesContainer__opcion__texto
						}
					>
						<span>▲</span> {idiomaActual === "en" ? "THEME" : "TEMA"} :{" "}
					</p>
					<button
						className={`${
							styles.preferenciasContainer__menu__opcionesContainer__opcion__btn
						} ${temaGlobal === "light" ? styles.btn__elegido : ""}`}
						onClick={() => {
							cambiarTema("light");
						}}
					>
						<div className={`lineas ${styles.lineasBtn}`} />
						<span
							className={
								styles.preferenciasContainer__menu__opcionesContainer__opcion__btn__texto
							}
						>
							{idiomaActual === "en" ? "LIGHT" : "CLARO"}
						</span>
					</button>
					<button
						className={`${
							styles.preferenciasContainer__menu__opcionesContainer__opcion__btn
						} ${temaGlobal === "dark" ? styles.btn__elegido : ""}`}
						onClick={() => {
							cambiarTema("dark");
						}}
					>
						<div className={`lineas ${styles.lineasBtn}`} />
						<span
							className={
								styles.preferenciasContainer__menu__opcionesContainer__opcion__btn__texto
							}
						>
							{idiomaActual === "en" ? "DARK" : "OSCURO"}
						</span>
					</button>
				</div>

				<div
					className={
						styles.preferenciasContainer__menu__opcionesContainer__opcion
					}
				>
					<p
						className={
							styles.preferenciasContainer__menu__opcionesContainer__opcion__texto
						}
					>
						<span>▲</span> {idiomaActual === "en" ? "LANGUAGE" : "IDIOMA"} :{" "}
					</p>
					<Link
						className={`${
							styles.preferenciasContainer__menu__opcionesContainer__opcion__btn
						} ${idiomaActual === "es" ? styles.btn__elegido : ""}`}
						href={`${pathnameES}`}
						onClick={() => setMenuPreferenciasAbierto(false)}
					>
						<div className={`lineas ${styles.lineasBtn}`} />
						<span
							className={
								styles.preferenciasContainer__menu__opcionesContainer__opcion__btn__texto
							}
						>
							Español
						</span>
					</Link>
					<Link
						className={`${
							styles.preferenciasContainer__menu__opcionesContainer__opcion__btn
						} ${idiomaActual === "en" ? styles.btn__elegido : ""}`}
						href={`${pathnameEN}`}
						onClick={() => setMenuPreferenciasAbierto(false)}
					>
						<div className={`lineas ${styles.lineasBtn}`} />
						<span
							className={
								styles.preferenciasContainer__menu__opcionesContainer__opcion__btn__texto
							}
						>
							English
						</span>
					</Link>
				</div>
			</div>
			{/*--FIN-- Menu preferencias en responsive > 600px --FIN--*/}

			<h4
				className={`${styles.preferenciasContainer__boton} ${
					menuPreferenciasAbierto
						? styles.preferenciasContainer__boton__Abierto
						: ""
				}`}
				onClick={handlePreferenciasMenu}
			>
				<span className={styles.preferencesText}>
					{idiomaActual === "en" ? "PREFERENCES" : "PREFERENCIAS"}
				</span>
				<PreferencesIcon width={36} height={36} className="preferencesIcon" />
			</h4>

			<div
				className={`${styles.preferenciasContainer__menu} ${
					menuPreferenciasAbierto
						? styles.preferenciasContainer__menu__abierto
						: ""
				}`}
			>
				<div className={`lineas ${styles.lineasMenuPreferencias}`} />
				<div className={styles.preferenciasContainer__menu__tituloContainer}>
					<h5
						className={
							styles.preferenciasContainer__menu__tituloContainer__titulo
						}
					>
						{idiomaActual === "en" ? "PREFERENCES" : "PREFERENCIAS"}
					</h5>
					<button
						className={
							styles.preferenciasContainer__menu__tituloContainer__cerrar
						}
						onClick={() => setMenuPreferenciasAbierto(false)}
					>
						<span
							className={
								styles.preferenciasContainer__menu__tituloContainer__cerrar__x
							}
						>
							X
						</span>
					</button>
				</div>
				<div className={styles.preferenciasContainer__menu__opcionesContainer}>
					<div
						className={
							styles.preferenciasContainer__menu__opcionesContainer__opcion
						}
					>
						<p
							className={
								styles.preferenciasContainer__menu__opcionesContainer__opcion__texto
							}
						>
							<span>▲</span> {idiomaActual === "en" ? "THEME" : "TEMA"} :{" "}
						</p>
						<button
							className={`${
								styles.preferenciasContainer__menu__opcionesContainer__opcion__btn
							} ${temaGlobal === "light" ? styles.btn__elegido : ""}`}
							onClick={() => {
								cambiarTema("light");
							}}
						>
							<div className={`lineas ${styles.lineasBtn}`} />
							<span
								className={
									styles.preferenciasContainer__menu__opcionesContainer__opcion__btn__texto
								}
							>
								{idiomaActual === "en" ? "LIGHT" : "CLARO"}
							</span>
						</button>
						<button
							className={`${
								styles.preferenciasContainer__menu__opcionesContainer__opcion__btn
							} ${temaGlobal === "dark" ? styles.btn__elegido : ""}`}
							onClick={() => {
								cambiarTema("dark");
							}}
						>
							<div className={`lineas ${styles.lineasBtn}`} />
							<span
								className={
									styles.preferenciasContainer__menu__opcionesContainer__opcion__btn__texto
								}
							>
								{idiomaActual === "en" ? "DARK" : "OSCURO"}
							</span>
						</button>
					</div>

					<div
						className={
							styles.preferenciasContainer__menu__opcionesContainer__opcion
						}
					>
						<p
							className={
								styles.preferenciasContainer__menu__opcionesContainer__opcion__texto
							}
						>
							<span>▲</span> {idiomaActual === "en" ? "LANGUAGE" : "IDIOMA"} :{" "}
						</p>
						<Link
							className={`${
								styles.preferenciasContainer__menu__opcionesContainer__opcion__btn
							} ${idiomaActual === "es" ? styles.btn__elegido : ""}`}
							href={`${pathnameES}`}
							onClick={() => setMenuPreferenciasAbierto(false)}
						>
							<div className={`lineas ${styles.lineasBtn}`} />
							<span
								className={
									styles.preferenciasContainer__menu__opcionesContainer__opcion__btn__texto
								}
							>
								Español
							</span>
						</Link>
						<Link
							className={`${
								styles.preferenciasContainer__menu__opcionesContainer__opcion__btn
							} ${idiomaActual === "en" ? styles.btn__elegido : ""}`}
							href={`${pathnameEN}`}
							onClick={() => setMenuPreferenciasAbierto(false)}
						>
							<div className={`lineas ${styles.lineasBtn}`} />
							<span
								className={
									styles.preferenciasContainer__menu__opcionesContainer__opcion__btn__texto
								}
							>
								English
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
