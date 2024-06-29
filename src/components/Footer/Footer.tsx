import React from "react";
import styles from "./footer.module.css";
import {
	Bordefooter,
	GitHub,
	Gmail,
	LinkedIn,
	Whatsapp,
} from "../Svg/ImagenesSvg";
import { VentanaFlotanteGmail } from "../VentanaFlotanteGmail/VentanaFlotanteGmail";
export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={`${styles.lineasBienvenidoCont} lineasContainer`}>
				{/* Este container está para poder sacar afuera el borde con el overflow*/}
				<div className={`lineas ${styles.lineasFooter}`} />
			</div>
			<Bordefooter width={320} height={15} className="bordeFooter" />
			<nav className={styles.footer__nav}>
				<a
					className={styles.footer__nav__item}
					href="#"
					target="_blank"
					rel="noopener noreferrer"
				>
					<LinkedIn width={48} height={48} className="contactIcon" />
				</a>
				<a
					className={styles.footer__nav__item}
					href="https://github.com/davidoreiro97"
					target="_blank"
					rel="noopener noreferrer"
				>
					<GitHub width={48} height={48} className="contactIcon" />
				</a>
				<a
					className={styles.footer__nav__item}
					href="https://wa.me/+5493417533746"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Whatsapp width={48} height={48} className="contactIcon" />
				</a>
				<div className={styles.footer__nav__gmailContainer}>
					<VentanaFlotanteGmail idBoton="2" />
					<button
						className={styles.footer__nav__item}
						id="seeGmailButton_2"
						title="davidoreiro97@gmail.com - Ver"
					>
						<Gmail width={48} height={48} className="contactIcon" />
					</button>
				</div>
			</nav>
		</footer>
	);
};
