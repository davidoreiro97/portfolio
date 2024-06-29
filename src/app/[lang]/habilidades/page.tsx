import getDictionary from "@/functions/getDictionary";
import styles from "./page.module.css";
import { BordeBienvenidos } from "@/components/Svg/ImagenesSvg";
import { ConjuntoHabilidades } from "@/components";
import Image from "next/image";
import Link from "next/link";
export async function generateStaticParams() {
	return [{ lang: "en" }];
}
export default function Habilidades({ params }: { params: { lang: string } }) {
	const idioma = getDictionary("en");
	return (
		<div className={styles.habContainer}>
			<article className={styles.sectionsContainer}>
				<ConjuntoHabilidades
					tituloConjunto={idioma.habilidades__conj1__titulo}
					subconjuntos={[
						{
							nombreSubconjunto: idioma.habilidades__conj1__subconj1__titulo,
							contenidoSubconjunto: [
								idioma.habilidades__conj1__subconj1__item1,
								idioma.habilidades__conj1__subconj1__item2,
								idioma.habilidades__conj1__subconj1__item3,
								idioma.habilidades__conj1__subconj1__item4,
								idioma.habilidades__conj1__subconj1__item5,
								idioma.habilidades__conj1__subconj1__item6,
							],
						},
						{
							nombreSubconjunto: idioma.habilidades__conj1__subconj2__titulo,
							contenidoSubconjunto: [
								idioma.habilidades__conj1__subconj2__item1,
								idioma.habilidades__conj1__subconj2__item2,
								idioma.habilidades__conj1__subconj2__item3,
								idioma.habilidades__conj1__subconj2__item4,
								idioma.habilidades__conj1__subconj2__item5,
								idioma.habilidades__conj1__subconj2__item6,
							],
						},
						{
							nombreSubconjunto: idioma.habilidades__conj1__subconj3__titulo,
							contenidoSubconjunto: [
								idioma.habilidades__conj1__subconj3__item1,
								idioma.habilidades__conj1__subconj3__item2,
							],
						},
					]}
				/>
				<ConjuntoHabilidades
					tituloConjunto={idioma.habilidades__conj2__titulo}
					subconjuntos={[
						{
							nombreSubconjunto: idioma.habilidades__conj2__subconj1__titulo,
							contenidoSubconjunto: [
								idioma.habilidades__conj2__subconj1__item1,
							],
						},
						{
							nombreSubconjunto: idioma.habilidades__conj2__subconj2__titulo,
							contenidoSubconjunto: [
								idioma.habilidades__conj2__subconj2__item1,
							],
						},
					]}
				/>
				<ConjuntoHabilidades
					tituloConjunto={idioma.habilidades__conj3__titulo}
					subconjuntos={[
						{
							nombreSubconjunto: idioma.habilidades__conj3__subconj1__titulo,
							contenidoSubconjunto: [
								idioma.habilidades__conj3__subconj1__item1,
								idioma.habilidades__conj3__subconj1__item2,
								idioma.habilidades__conj3__subconj1__item3,
								idioma.habilidades__conj3__subconj1__item4,
								idioma.habilidades__conj3__subconj1__item5,
							],
						},
					]}
				/>
				<ConjuntoHabilidades
					tituloConjunto={idioma.habilidades__conj4__titulo}
					subconjuntos={[
						{
							nombreSubconjunto: idioma.habilidades__conj4__subconj1__titulo,
							contenidoSubconjunto: [
								idioma.habilidades__conj4__subconj1__item1,
								idioma.habilidades__conj4__subconj1__item2,
								idioma.habilidades__conj4__subconj1__item3,
								idioma.habilidades__conj4__subconj1__item4,
								idioma.habilidades__conj4__subconj1__item5,
								idioma.habilidades__conj4__subconj1__item6,
								idioma.habilidades__conj4__subconj1__item7,
							],
						},
						{
							nombreSubconjunto: idioma.habilidades__conj4__subconj2__titulo,
							contenidoSubconjunto: [
								idioma.habilidades__conj4__subconj2__item1,
								idioma.habilidades__conj4__subconj2__item2,
							],
						},
						{
							nombreSubconjunto: idioma.habilidades__conj4__subconj3__titulo,
							contenidoSubconjunto: [
								idioma.habilidades__conj4__subconj3__item1,
							],
						},
					]}
				/>
				<ConjuntoHabilidades
					tituloConjunto={idioma.habilidades__conj5__titulo}
					subconjuntos={[
						{
							nombreSubconjunto: idioma.habilidades__conj5__subconj1__titulo,
							contenidoSubconjunto: [
								idioma.habilidades__conj5__subconj1__item1,
								idioma.habilidades__conj5__subconj1__item2,
								idioma.habilidades__conj5__subconj1__item3,
							],
						},
						{
							nombreSubconjunto: idioma.habilidades__conj5__subconj2__titulo,
							contenidoSubconjunto: [
								idioma.habilidades__conj5__subconj2__item1,
								idioma.habilidades__conj5__subconj2__item2,
								idioma.habilidades__conj5__subconj2__item3,
							],
						},
					]}
				/>

				<aside className={styles.apuntesCont}>
					<header className={styles.apuntesCont__h4Cont}>
						<h4 className={styles.bienvenidaCont__h1Cont__h4}>
							{idioma.habilidades__apuntes__titulo}
						</h4>
					</header>

					<div className={`${styles.lineasBienvenidoCont} lineasContainer`}>
						{/* Este container está para poder sacar afuera el borde con el overflow*/}
						<div className="lineas" />
					</div>
					<BordeBienvenidos
						className="bordeBienvenidos"
						width={800}
						height={350}
					/>

					<Image
						className={styles.apuntesCont__img}
						width={200}
						height={245}
						src="../../images/avif/fotoPerfilBienvenida.avif"
						alt="Foto de perfil"
					/>

					<div className={styles.apuntesCont__TxtCont}>
						<p className={styles.apuntesCont__TxtCont__p}>
							{idioma.habilidades__apuntes__texto}
						</p>
						<Link
							className={styles.apuntesCont__TxtCont__btn}
							href={
								"https://drive.google.com/drive/folders/1jIoQx3DFKaEWNd3sA0mzZEkoTEiyR0EO?usp=sharing"
							}
							target="_blank"
						>
							{idioma.habilidades__apuntes__texto_btn}
						</Link>
					</div>
				</aside>
			</article>
		</div>
	);
}
