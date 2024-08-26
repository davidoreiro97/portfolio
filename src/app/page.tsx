//Saque page.tsx fuera de [lang] para no hacer una redireccion a /es al ingresar a la página.
import styles from "./page.module.css";
import Image from "next/image";
import getDictionary from "../functions/getDictionary";
import {
	BordeBienvenidos,
	BordeRectangular,
	BordeSobreMi,
	ExpIcon,
	GitHub,
	Gmail,
	LinkedIn,
	ProyIcon,
	UniIcon,
	Whatsapp,
} from "@/components/Svg/ImagenesSvg";
import { VentanaFlotanteGmail } from "@/components/VentanaFlotanteGmail/VentanaFlotanteGmail";
import Link from "next/link";
import { ExpProyUni } from "@/components";
export default function Home() {
	const idioma = getDictionary("es");
	return (
		<main className={styles.main}>
			<section id="Home" className={styles.bienvenidaCont}>
				<div className={`${styles.lineasBienvenidoCont} lineasContainer`}>
					{/* Este container está para poder sacar afuera el borde con el overflow*/}
					<div className="lineas" />
				</div>
				<BordeBienvenidos
					className="bordeBienvenidos"
					width={800}
					height={350}
				/>

				<header className={styles.bienvenidaCont__h1Cont}>
					<h1 className={styles.bienvenidaCont__h1Cont__h1}>
						{idioma.inicio_titulo_bienvenidos}
					</h1>
				</header>
				<div className={styles.bienvenidaCont__ImgTxtCont}>
					<Image
						className={styles.bienvenidaCont__ImgTxtCont__Img}
						width={200}
						height={245}
						src="/portfolio/images/avif/fotoPerfilBienvenida.avif"
						alt="Foto de perfil"
					/>
					{/* Github pages tiene problema con las rutas relativas, se cambio : 
					../../images/avif/fotoPerfilBienvenida.avif
					a /portfolio/images/avif/fotoPerfilBienvenida.avif*/}
					<div className={styles.bienvenidaCont__ImgTxtCont__TxtCont}>
						<p className={styles.bienvenidaCont__ImgTxtCont__TxtCont__p}>
							<strong
								className={
									styles.bienvenidaCont__ImgTxtCont__TxtCont__p__strong
								}
							>
								{idioma.inicio_texto_bienvenidos_1} <br />
								{idioma.inicio_texto_bienvenidos_2}
							</strong>{" "}
							{idioma.inicio_texto_bienvenidos_3}
						</p>

						<nav className={styles.bienvenidaCont__ImgTxtCont__TxtCont__footer}>
							<a
								className={
									styles.bienvenidaCont__ImgTxtCont__TxtCont__footer__item
								}
								href="https://www.linkedin.com/in/davidoreiro97/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Enlace a LinkedIn"
								title="Enlace a LinkedIn"
							>
								<LinkedIn width={48} height={48} className="contactIcon" />
								<span
									className={
										styles.bienvenidaCont__ImgTxtCont__TxtCont__footer__item__text
									}
								>
									LinkedIn
								</span>
							</a>
							<a
								className={
									styles.bienvenidaCont__ImgTxtCont__TxtCont__footer__item
								}
								href="https://github.com/davidoreiro97"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Enlace a Github"
								title="Enlace a Github"
							>
								<GitHub width={48} height={48} className="contactIcon" />
								<span
									className={
										styles.bienvenidaCont__ImgTxtCont__TxtCont__footer__item__text
									}
								>
									GitHub
								</span>
							</a>

							<a
								className={
									styles.bienvenidaCont__ImgTxtCont__TxtCont__footer__item
								}
								href="https://wa.me/+5493417533746"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Enlace a chat de Whatsapp"
								title="Enlace a chat de Whatsapp"
							>
								<Whatsapp width={48} height={48} className="contactIcon" />
								<span
									className={
										styles.bienvenidaCont__ImgTxtCont__TxtCont__footer__item__text
									}
								>
									WhatsApp
								</span>
							</a>

							<div
								className={
									styles.bienvenidaCont__ImgTxtCont__TxtCont__footer__gmailContainer
								}
							>
								<VentanaFlotanteGmail idBoton="1" />
								<button
									className={
										styles.bienvenidaCont__ImgTxtCont__TxtCont__footer__item
									}
									id="seeGmailButton_1"
									title="davidoreiro97@gmail.com - Ver"
								>
									<Gmail width={48} height={48} className="contactIcon" />
									<span
										className={
											styles.bienvenidaCont__ImgTxtCont__TxtCont__footer__item__text
										}
									>
										Gmail
									</span>
								</button>
							</div>
						</nav>
					</div>
				</div>
			</section>

			<section id="Stack" className={styles.stackCont}>
				<div className="lineasContainer">
					<div className={`lineas ${styles.lineasStack}`} />
				</div>
				<header className={styles.stackCont__tituloCont}>
					<BordeRectangular width={500} height={40} className="bordeRect" />
					<h2 className={styles.stackCont__tituloCont__h1}>Stack</h2>
				</header>
				<p className={styles.stackCont__p}>
					<span className={styles.stackCont__p__simbolo}> ▲ </span>React -
					NextJS : Frontend
				</p>
				<p className={styles.stackCont__p}>
					<span className={styles.stackCont__p__simbolo}> ▲ </span>Node -
					Express : Backend
				</p>
				<p className={styles.stackCont__p}>
					<span className={styles.stackCont__p__simbolo}> ▲ </span>MySQL :{" "}
					{idioma.inicio_texto_MySQL}
				</p>
				<div className={styles.stackCont__otrasTecCont}>
					<p className={styles.stackCont__p}>
						<span className={styles.stackCont__p__simbolo}> ▲ </span>
						{idioma.inicio_texto_stack}
					</p>
					<Link
						className={styles.stackCont__otrasTecCont__VER}
						href="/habilidades"
					>
						<div className={`lineas ${styles.lineasBtn}`} />
						<span className={styles.stackCont__otrasTecCont__VER__texto}>
							{idioma.inicio_texto_stack_btn}
						</span>
					</Link>
				</div>
			</section>

			<section
				id="Projects_Experience_University"
				className={styles.proyExpUniSectionCont}
			>
				<ExpProyUni
					titulo={idioma.inicio_titulo_proyExpUni_exp}
					svg={<ExpIcon width={100} height={100} className="expProyUniIcon" />}
					texto={[idioma.inicio_text_proyExpUni_exp]}
					textoBoton={idioma.inicio_text_proyExpUni_exp_btn}
					linkBoton={idioma.inicio_url_proyExpUni_exp}
				/>
				<ExpProyUni
					titulo={idioma.inicio_titulo_proyExpUni_proy}
					svg={<ProyIcon width={100} height={100} className="expProyUniIcon" />}
					texto={[
						idioma.inicio_text_proyExpUni_proy_1,
						idioma.inicio_text_proyExpUni_proy_2,
					]}
					textoBoton={idioma.inicio_text_proyExpUni_proy_btn}
					linkBoton={idioma.inicio_url_proyExpUni_proy}
				/>
				<ExpProyUni
					titulo={idioma.inicio_titulo_proyExpUni_uni}
					svg={<UniIcon width={100} height={100} className="expProyUniIcon" />}
					texto={[idioma.inicio_text_proyExpUni_uni]}
					textoBoton={idioma.inicio_text_proyExpUni_uni_btn}
					linkBoton={idioma.inicio_url_proyExpUni_uni}
				/>
			</section>
			<section id="About_me" className={styles.sobremi}>
				<div className={`${styles.lineasBienvenidoCont} lineasContainer`}>
					{/* Este container está para poder sacar afuera el borde con el overflow*/}
					<div className="lineas" />
				</div>
				<BordeSobreMi className="bordeSobreMi" width={800} height={350} />
				<header className={styles.sobremi__h1Cont}>
					<h2 className={styles.sobremi__h1Cont__h1}>
						{idioma.inicio_titulo_sobreMi}
					</h2>
				</header>
				<p className={styles.sobremi__p}>
					<strong className={styles.sobremi__p__strong}>
						{idioma.inicio_text_sobreMi_1}{" "}
						<span className="textoResaltado">
							{idioma.inicio_text_sobreMi_2}
						</span>{" "}
						{idioma.inicio_text_sobreMi_3} <br />
						{idioma.inicio_text_sobreMi_4}{" "}
						<span className="textoResaltado">
							{idioma.inicio_text_sobreMi_5}
						</span>{" "}
						{idioma.inicio_text_sobreMi_6}
					</strong>{" "}
					<span className="textoResaltado">{idioma.inicio_text_sobreMi_7}</span>{" "}
					{idioma.inicio_text_sobreMi_8}
					<br />
					<span className="textoResaltado">
						{idioma.inicio_text_sobreMi_9}
					</span>{" "}
					{idioma.inicio_text_sobreMi_10} <br />
					<span className="textoResaltado">
						{idioma.inicio_text_sobreMi_11}
					</span>
					{idioma.inicio_text_sobreMi_12}
				</p>
			</section>
		</main>
	);
}
