"use client";
import React, { useEffect } from "react";
import "./ventanaFlotanteGmail.css";
import { CopyIcon, SendIcon } from "../Svg/ImagenesSvg";

export const VentanaFlotanteGmail = ({ idBoton }: { idBoton: string }) => {
	useEffect(() => {
		let intervalID: NodeJS.Timeout | null = null;
		const $SeeGmailButton = document.getElementById(
			`seeGmailButton_${idBoton}`
		);
		const $gmailWindow = document.getElementById(`gmailWindow_${idBoton}`);
		const $gmailWindowCloseButton = document.getElementById(
			`gmailWindowCloseButton_${idBoton}`
		);
		const $copyBtn = document.getElementById(`copyBtn_${idBoton}`);
		const $mensajeCopiado = document.getElementById(
			`mensajeCopiado_${idBoton}`
		);

		const showGmailWindow = () => {
			$gmailWindow?.classList.remove("hidden");
		};

		const hideGmailWindow = () => {
			$gmailWindow?.classList.add("hidden");
		};

		const clickOusideGmailWindow = (e: MouseEvent) => {
			if ($gmailWindow && !$gmailWindow.contains(e.target as Node)) {
				hideGmailWindow();
			}
		};

		const borrarMsj = async (ms: number) => {
			if (intervalID !== null) {
				clearInterval(intervalID);
			}
			return new Promise((resolve) => (intervalID = setInterval(resolve, ms)));
		};

		const copyToClipboardFallback = async (text: string) => {
			const textArea = document.createElement("textarea");
			textArea.value = text;

			// Evitar que el textarea sea visible
			textArea.style.position = "fixed";
			textArea.style.left = "-9999px";

			document.body.appendChild(textArea);
			textArea.focus();
			textArea.select();

			try {
				document.execCommand("copy");
				$mensajeCopiado?.classList.remove("hidden");
				if (!$mensajeCopiado?.classList.contains("hidden")) {
					await borrarMsj(2000);
					$mensajeCopiado?.classList.add("hidden");
				}
			} catch (err) {
				console.error("Error al copiar el correo:", err);
				alert("No se pudo copiar el correo. Intenta nuevamente.");
			}

			document.body.removeChild(textArea);
		};

		const copyMail = async (e: MouseEvent) => {
			if (navigator.clipboard && navigator.clipboard.writeText) {
				try {
					await navigator.clipboard.writeText("davidoreiro97@gmail.com");
					$mensajeCopiado?.classList.remove("hidden");
					if (!$mensajeCopiado?.classList.contains("hidden")) {
						await borrarMsj(2000);
						$mensajeCopiado?.classList.add("hidden");
					}
				} catch (err) {
					console.error("Error al copiar el correo:", err);
					alert("No se pudo copiar el correo. Intenta nuevamente.");
				}
			} else {
				copyToClipboardFallback("davidoreiro97@gmail.com");
			}
		};

		// Agregar eventos
		$SeeGmailButton?.addEventListener("click", showGmailWindow);
		$gmailWindowCloseButton?.addEventListener("click", hideGmailWindow);
		document.addEventListener("mousedown", clickOusideGmailWindow);
		$copyBtn?.addEventListener("click", copyMail);

		return () => {
			$SeeGmailButton?.removeEventListener("click", showGmailWindow);
			$gmailWindowCloseButton?.removeEventListener("click", hideGmailWindow);
			document.removeEventListener("mousedown", clickOusideGmailWindow);
			$copyBtn?.removeEventListener("click", copyMail);
		};
	}, [idBoton]);

	return (
		<div id={`gmailWindow_${idBoton}`} className="gmailWindow hidden">
			<div className="gmailWindow__tituloCont">
				<h4 className="gmailWindow__tituloCont__h4">GMAIL</h4>
				<button
					className="gmailWindow__tituloCont__btn"
					id={`gmailWindowCloseButton_${idBoton}`}
					title="CLOSE"
				>
					<span className="gmailWindow__tituloCont__btn__txt">X</span>
				</button>
			</div>
			<p className="gmailWindow__Txt">davidoreiro97@gmail.com</p>
			<div className="gmailWindow__btnCont">
				<div className="gmailWindow__btnCont__CopyCont">
					<div
						id={`mensajeCopiado_${idBoton}`}
						className="gmailWindow__btnCont__CopyCon__msj hidden"
					>
						<p>Copiado!</p>
					</div>
					<button
						id={`copyBtn_${idBoton}`}
						title="COPY"
						className="gmailWindow__btnCont__CopyCon__copyBtn"
					>
						<CopyIcon width={32} height={32} className="" />
					</button>
				</div>
				<a
					href="mailto:davidoreiro97@gmail.com"
					rel="noopener noreferrer"
					role="link"
					className="gmailWindow__btnCont__sendBtn"
				>
					<SendIcon width={32} height={32} className="" />
				</a>
			</div>
		</div>
	);
};
