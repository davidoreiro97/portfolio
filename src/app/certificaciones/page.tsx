import { ConjuntoCertificaciones } from "@/components/ConjuntoCertificaciones/ConjuntoCertificaciones";
import styles from "./page.module.css";
import getDictionary from "@/functions/getDictionary";
export default function Certificaciones() {
	const idioma = getDictionary("es");
	return (
		<div className={styles.certContainer}>
			<article className={styles.sectionsContainer}>
				<ConjuntoCertificaciones
					tituloConjunto={idioma.certificaciones_titulo_1}
					certificaciones={[
						{
							tituloCert: "Web Development Fundamentals - IBM SkillsBuild",
							descripcionCert:
								"Esta persona que obtiene la credencial demuestra conocimiento de los conceptos de desarrollo web, los procesos para desarrollar, implementar y probar sitios web, y las herramientas y lenguajes de programación que utilizan los desarrolladores web. El individuo tiene una comprensión conceptual de cómo desarrollar un sitio web interactivo utilizando HTML, CSS y JavaScript en un entorno de desarrollo integrado (IDE) simulado. Quien gana conoce las perspectivas laborales en el desarrollo web y está familiarizado con las habilidades necesarias para tener éxito en diversos roles.",
							linkAContenido:
								"https://skills.yourlearning.ibm.com/credential/CREDLY-ce744ad1-ca21-498e-a9ea-8c01f792977d",
							linkACertificado:
								"https://www.credly.com/badges/234211d5-9a20-480c-ac52-3bc16e647408/public_url",
						},
						{
							tituloCert:
								"Desarrollo web inicial - UTN : Argentina Programa 4.0",
							descripcionCert:
								"- Módulo 1: Concepto de Lenguajes de programación. - Módulo 2: Datos estructurados JSON y Formatos. Intercambio de datos con JavaScript. - Módulo 3: Order Wrap. Reverse. Shrink. Align-slef. Grid System. HTML aplicado a web mobile. Maquetación web multiplataforma. - Módulo 4: Definición de HTML. DOCTYPE y estructura básica. Introducción a etiquetas. -Módulo 5: Introducción e interfaz. Principales comandos. Trabajando en local y primeros commits. Github: PULL y PUSH",
							linkAContenido:
								"https://www.argentina.gob.ar/sites/default/files/ok._introduccion_desarrollador_web_inicial_-_universidad_tecnologica_nacional_utn.pdf",
							linkACertificado:
								"https://drive.google.com/file/d/1Yef76SZYgDS8yp50SLmzUhcB0H-82ZEb/view?usp=drive_link",
						},
						{
							tituloCert: "Programacion Web - Aprendizaje virtual",
							descripcionCert:
								"El curso Programación Web es una introducción a los conceptos básicos de programación y propone un recorrido que va integrando los lenguajes de HTML y CSS. También permite profundizar en qué es HTML, cómo usarlo, cómo programar con CSS con HTML y en la creación de un formulario con HTML. ",
							linkAContenido:
								"https://www.argentina.gob.ar/jefatura/innovacion-publica/servicios-y-pais-digital/plataforma-de-aprendizaje-virtual/curso-de",
							linkACertificado:
								"https://drive.google.com/file/d/15hCLiK4nBNoRePVM_T8PmOCM2QsFOpLI/view",
						},
						{
							tituloCert: "Diseño web - Fundaula",
							descripcionCert:
								"Fundamentos del diseño web,Nociones de HTML, CSS y Bootstrap,Inspeccionando una web",
							linkAContenido:
								"https://fundaula-lms.cclearning.accenture.com/course/view.php?id=455",
							linkACertificado:
								"https://drive.google.com/file/d/1vHPG6p38JiVkBx_WuDU4fAKzB3xm8_yD/view?usp=drive_link",
						},
						{
							tituloCert: "HTML5 y CSS3 parte 1: Mi primera página web - Alura",
							descripcionCert:
								"Aprenda lo que es HTML y CSS,Entienda la estructura básica de un archivo HTML,Utilice el navegador para inspeccionar elementos,Aprenda a definir estilos para elementos usando CSS,Desarrolle una página Web desde cero",
							linkAContenido:
								"https://app.aluracursos.com/course/html5-css3-primera-pagina-web",
							linkACertificado:
								"https://drive.google.com/file/d/1SJ6WPTsBI-quZsQeD--uFIP9ny6it8Nu/view?usp=drive_link",
						},
						{
							tituloCert:
								"HTML5 y CSS3 parte 2: Posicionamiento, listas y navegación - Alura",
							descripcionCert:
								"Aprenda la estructura de la página HTML.Navegue entre páginas Web.Conozca el reset.css y el prosicionamiento por el CSS.Entienda las diferencias entre inline-block.Aprenda a lidiar con bordes y capturar eventos con CSS.Cree encabezado, cuerpo y pié de página de una página Web",
							linkAContenido:
								"https://app.aluracursos.com/course/html5-css3-posicionamiento-listas-navegacion",
							linkACertificado:
								"https://drive.google.com/file/d/1hDyh_-RL-4X2nKeM7SK0a_Ypc_qEMVEA/view?usp=drive_link",
						},
						{
							tituloCert:
								"HTML5 y CSS3 parte 3: Trabajando con formularios y tablas - Alura",
							descripcionCert:
								"Cree formularios complejos.Trabaje con campos para dispositivos móviles.Presente informacioes en tablas.Use estilos para formularios, campos y tablas.Entienda la jerarquía en el CSS.Trabaje con transformaciones y transiciones",
							linkAContenido:
								"https://app.aluracursos.com/course/html5-css3-formularios-tablas",
							linkACertificado:
								"https://drive.google.com/file/d/1TbzBYY2MfZhzVoz-9OttgK1Ti7mgyBkT/view?usp=drive_link",
						},
						{
							tituloCert: "HTML5 y CSS3 parte 4: Avanzando en CSS - Alura",
							descripcionCert:
								"Importe contenido externo a tu página HTML, como fuentes, videos y mapas.Conozca las pseudoclases y los pseudoelementos.Utilice selectores CSS avanzados.Aprenda a lidiar con la opacidad y la sombra.Comprenda Viewport y design responsivo",
							linkAContenido:
								"https://app.aluracursos.com/course/html5-css3-avanzando-css",
							linkACertificado:
								"https://drive.google.com/file/d/1Yjd9z4EUbBjIuGTdkNP27LL-8wfeqmK1/view?usp=drive_link",
						},
						{
							tituloCert: "CSS: Flexbox y layouts responsivos - Alura",
							descripcionCert:
								"Aprenda a utilizar las propiedades de Flexbox en la práctica creando un proyecto responsivo.Alterar el eje de los elementos a horizontal o vertical.Aplicar videos de manera responsiva usando las propiedades de Flexbox.Conocer las características de Flexbox.Integre las propiedades de Flexbox con otras propiedades de CSS",
							linkAContenido:
								"https://app.aluracursos.com/course/css-flexbox-layouts-responsivos",
							linkACertificado:
								"https://drive.google.com/file/d/1pc_6KpgoLwcjWjV1MVTxKAPsQZiUWKak/view?usp=drive_link",
						},
						{
							tituloCert: "Diseño web con HTML5 + CSS - Telefonica",
							descripcionCert:
								"- Módulo 1. Principios, accesibilidad y usabilidad de páginas web. - Módulo 2. Introducción a HTML y CSS.  - Módulo 3. Etiquetas, formularios y hojas de estilo CSS en HTML. -Módulo 4. Novedades HTML 5 y multimedia. - Módulo 5 - Posicionamiento SEO y trabajo en equipo.",
							linkAContenido:
								"https://conectaempleo-formacion.fundaciontelefonica.com/web/es-diseno-web-con-html5-css-ft-ed-2",
							linkACertificado:
								"https://drive.google.com/file/d/1A-sEfdFx0B58YtctD2WN9VDupbO6g9X0/view?usp=drive_link",
						},
						{
							tituloCert: "JavaScript Essentials 1(JSE) - Cisco",
							descripcionCert:
								"Aprenderá estas habilidades básicas: Piense algorítmicamente y analice los problemas.Diseñar, desarrollar y mejorar programas JavaScript.Comprender el trabajo de un programador en el proceso de desarrollo de software y el papel de las herramientas fundamentales de desarrollo.Saber cómo se interpreta y ejecuta un programa en un entorno informático real local y remoto.Crea y desarrolla tu propio portafolio de programación.",
							linkAContenido:
								"https://www.netacad.com/courses/programming/javascript-essentials-1",
							linkACertificado:
								"https://drive.google.com/file/d/1o2RA_jfmysAtQWKnnMVh3fzqrZ8zkgKl/view?usp=drive_link",
						},
						{
							tituloCert: "Programación con javascript - Telefonica",
							descripcionCert:
								"Introducción. Transformación Digital. Módulo 1. Páginas dinámicas. Módulo 2. Sintaxis del lenguaje JavaScript. Módulo 3. Control de flujo. Módulo 4. Eventos y objetos. Módulo 5. Ajax y JQuery. Módulo 6. AngularJS y NodeJS.",
							linkAContenido:
								"https://conectaempleo-formacion.fundaciontelefonica.com/web/programacion-con-javascript-ed-5",
							linkACertificado:
								"https://drive.google.com/file/d/1Dj0xMaxyQ1sjdMct1-Cu3SzRfv288pA3/view?usp=drive_link",
						},
						{
							tituloCert:
								"Curso javascript para web: Crea páginas dinámicas. - Alura",
							descripcionCert:
								"Realice este curso para JavaScript y: -Identificar las funciones de cada tecnología web para la creación de páginas.-Asociar JavaScript con HTML a través del DOM.-Implementar funciones con JavaScript.-Investigar posibilidades para resolver problemas de código.-Seleccionar operadores lógicos apropiados para diferentes situaciones.-Produzca soluciones simples para páginas dinámicas",
							linkAContenido:
								"https://app.aluracursos.com/course/javascript-web-paginas-dinamicas",
							linkACertificado:
								"https://drive.google.com/file/d/1bw5UXidNDq1PgSAfyyRUkxodyXU5YNnZ/view?usp=drive_link",
						},
						{
							tituloCert:
								"Javascript: consumiendo y manejando datos de una API - Alura",
							descripcionCert:
								"Realice este curso para JavaScript y:-Comprenda cómo funciona JavaScript síncrono y asíncrono.-Utilize la API de NASA con la API fetch.-Familiarízate con las Promises y sus métodos.-Aprenda a utilizar then y catch y async/await para crear funciones asíncronas.-Maneja posibles errores de solicitud devueltos por la API",
							linkAContenido:
								"https://app.aluracursos.com/course/javascript-consumiendo-manejando-datos-api",
							linkACertificado:
								"https://drive.google.com/file/d/1KTAzE8QfJUzrSZL1jemy_Cy2098qCksJ/view?usp=drive_link",
						},
						{
							tituloCert: "JavaScript: creando solicitudes - Alura",
							descripcionCert:
								"Realice este curso para JavaScript y:-Aprende a simular una API.-Realizar solicitudes GET para devolver datos de una API.-Cree solicitudes POST para registrar datos en una API.-Refuerza tus conocimientos de javascript asíncrono.-Manejar posibles errores de solicitud devueltos por la API.-Aprende a convertir una página estática en una dinámica",
							linkAContenido:
								"https://app.aluracursos.com/course/javascript-creando-solicitudes",
							linkACertificado:
								"https://drive.google.com/file/d/1_T7PqzXgk-j0gwPtYSdUQRybf1L_NxNc/view?usp=drive_link",
						},
						{
							tituloCert: "JavaScript: manipulando elementos en el DOM - Alura",
							descripcionCert:
								"Realice este curso para JavaScript y:-Construye una aplicación de temporizador al estilo Pomodoro desde cero.-Aprende en la práctica métodos de manipulación de elementos en el DOM, como estilos CSS, imágenes y textos.-Modifica atributos y clases de manera dinámica con JavaScript.-Crea eventos de interacción con el usuario.-Utiliza objetos utilitarios de JavaScript",
							linkAContenido:
								"https://app.aluracursos.com/course/javascript-manipulando-elementos-en-el-dom",
							linkACertificado:
								"https://drive.google.com/file/d/1-MTnrP3DTYPEft8K4Lxv-TCkirVaBDsU/view?usp=drive_link",
						},
						{
							tituloCert: "JavaScript: validando formularios - Alura",
							descripcionCert:
								"Realice este curso para JavaScript y:-Aprenda a aplicar atributos de validación de formularios con HTML5.-Validaciones de compilación para dígitos de control CPF.-Implementar validaciones mayoritarias comparando fechas.-Personalice los mensajes de error para cada tipo de campo de formulario.-Integre la cámara web del usuario en la pantalla de un navegador.-Capturar fotografías a través de la cámara web.-Guardar y editar datos guardados en el navegador",
							linkAContenido:
								"https://app.aluracursos.com/course/javascript-validando-formularios",
							linkACertificado:
								"https://drive.google.com/file/d/1yW3cE8QCOSKvbL6pW7K3PNco2rUeGu3z/view?usp=drive_link",
						},
						{
							tituloCert: "React: practicando React con JS - Alura",
							descripcionCert:
								"Realice este curso para React y:Iniciar un proyecto de React.-Construir componentes y páginas.-Implementar rutas normales, dinámicas y anidadas.-Aplicar los ganchos useState, useParams, useEffect y useContext.-Comprender cómo funcionan los contextos de React.-Consumir una API.-Implementar el proyecto en Vercel",
							linkAContenido:
								"https://app.aluracursos.com/course/react-practicando-react-js",
							linkACertificado:
								"https://drive.google.com/file/d/1oAyVOOB5abUt9T9NLIRWiKHXFSuHXkZr/view?usp=drive_link",
						},
						{
							tituloCert: "React: desarrollando con JavaScript - Alura",
							descripcionCert:
								"Realice este curso para React y:-Describir las ventajas de usar React.-Implementar componentes reactivos.-Investigar y analizar mensajes de error.-Modificar y evolucionar componentes según las necesidades del proyecto.-Prototipo de una aplicación desde cero para implementar",
							linkAContenido:
								"https://app.aluracursos.com/course/react-desarrollando-javascript",
							linkACertificado:
								"https://drive.google.com/file/d/13HTATPMrREevPpGOu6cWFwLfoo6oCqIg/view?usp=drive_link",
						},
						{
							tituloCert: "React: como los componentes funcionan - Alura",
							descripcionCert:
								"Realice este curso para React y:-Aprenda a clonar un proyecto existente en GitHub, instale las dependencias necesarias y ejecute el código.-Comprender qué son las dependencias y cómo instalar nuevas dependencias.-Compare cómo React ve un componente, así como sus accesorios y estados.-Realice cambios en el código, como la creación de nuevas funciones y la refactorización del código existente.-Aprenda qué es el enlace de datos unidireccional y qué tiene que ver con VirtualDOM (y por qué React está hecho de esta manera)",
							linkAContenido:
								"https://app.aluracursos.com/course/react-como-componentes-funcionan",
							linkACertificado:
								"https://drive.google.com/file/d/14zfFclR9XhHBin2HB1JQW2HA5KxYV_To/view?usp=drive_link",
						},
						{
							tituloCert:
								"Hooks en ReactJS: conociendo su potencial y utilidad - Alura",
							descripcionCert:
								"Realice este curso para React y:-Conoce los hooks de ReactJS y entiende su importancia.-Aprende como gestionar el estado de un componente con useState.-Identifica como acceder al DOM virtual de ReactJS con useRef.-Explora y comprende el ciclo de vida de un componente usando useEffect.-Implementa estados globales en aplicaciones usando contextAPI.-Analiza y comprueba como useReducer nos ayuda en la gestión de aplicaciones complejas.-Construye tus propios hooks y aprovecha toda su funcionalidad",
							linkAContenido:
								"https://app.aluracursos.com/course/hooks-reactjs-conociendo-potencial-utilidad",
							linkACertificado:
								"https://drive.google.com/file/d/1pj_vi2YQP1akZmo_uvjBQ1qILCD264pH/view?usp=drive_link",
						},
						{
							tituloCert:
								"React: Styled Components y manipulando archivos estáticos - Alura",
							descripcionCert:
								"Realice este curso para React y:-Montar un servidor de desarrollo con Vite.-Utilizar Styled-components para crear y estilizar un navbar, un banner y más.-Diseña e implementa componentes React para mostrar imágenes y leyendas.-Aplica estilos personalizados y accesibles a una galería de fotos.-Agrega una barra lateral de imágenes populares y un pie de página",
							linkAContenido:
								"https://app.aluracursos.com/course/react-styled-components-manipulando-archivos-estaticos",
							linkACertificado:
								"https://drive.google.com/file/d/1GdTKVgYytGGYiXK5By-Dw9LGvzKtwaKs/view?usp=drive_link",
						},
						{
							tituloCert: "React Router: Navegación en una SPA - Alura",
							descripcionCert:
								"Realice este curso para React y:-Crea la navegación de una aplicación en React utilizando la biblioteca React Router Dom.-Establece rutas en tu proyecto para tener una SPA.-Haz tu aplicación dinámica con peticiones a una Rest API del blog de Petshop.-Crea filtros para buscar posts de manera más eficiente",
							linkAContenido:
								"https://app.aluracursos.com/course/react-router-navegacion-spa",
							linkACertificado:
								"https://drive.google.com/file/d/1lPGFJ5im8NUJ2qCJqgV6JLwg_i4XfqUF/view?usp=drive_link",
						},
						{
							tituloCert:
								"User Experience Design Fundamentals - IBM SkillsBuild",
							descripcionCert:
								"This credential earner demonstrates knowledge of UX design concepts, processes, and tools that UX designers use. The individual has a conceptual understanding of user personas, wireframes, prototypes, usability testing, working collaboratively with a UX design team, and has experience reviewing a UX design case study to make conclusions about redesigning a website. The earner is aware of the job outlook in UX design and is familiar with the skills required for success in various roles.",
							linkAContenido:
								"https://skills.yourlearning.ibm.com/credential/CREDLY-ae2e453d-5311-41a0-be95-b217e0c4670f",
							linkACertificado:
								"https://www.credly.com/badges/4e56bd7e-8dd9-434f-9413-f6c0c497726b/public_url",
						},
						{
							tituloCert: "Diseño UX/UI - Fundaula",
							descripcionCert:
								"Descubre por qué es importante el diseño UX y cuáles son sus principales técnicas. Conoce algunas metodologías para el diseño UX y diseño UI. Aprende a diseñar, maquetar y crear prototipos con Adobe XD, y a transferir material de diseño de interfaz de usuario a los desarrolladores, con Zeplin.",
							linkAContenido:
								"https://fundaula-lms.cclearning.accenture.com/course/view.php?id=458",
							linkACertificado:
								"https://drive.google.com/file/d/1mhvye7OiSre8rnq0PRG6bkXWkk0k0Zqh/view?usp=drive_link",
						},
						{
							tituloCert: "Introducción a UX y UI - Telefonica",
							descripcionCert:
								"	Conceptos e introducción UX y UI.-Metodologías y Marcos de Trabajo.-El proceso de diseño y sus herramientas.-Herramientas que apoyan los diseños de UX y UI",
							linkAContenido:
								"https://conectaempleo-formacion.fundaciontelefonica.com/web/co-introduccion-a-ux-y-ui-ft-ed-2",
							linkACertificado:
								"https://drive.google.com/file/d/1SKM4tXnrIfQYlAhvlFGcDVs6H9axIM8-/view?usp=drive_link",
						},
						{
							tituloCert: "Fundamentos de UX - Telefonica",
							descripcionCert:
								"En este curso te mostraremos qué es UX y abordaremos temas como el diseño centrado en el usuario, la importancia del UX, sus elementos, sus principios básicos y fundamentales para aplicar una buena UX en los servicios o productos que se ofrecen y cuáles son los factores clave que influyen en el diseño UX, entre otros temas.",
							linkAContenido:
								"https://conectaempleo-formacion.fundaciontelefonica.com/web/ar-fundamentos-de-ux-ftm-ed-2",
							linkACertificado:
								"https://drive.google.com/file/d/1FmxS_gn5Fhdf8JQjSkUXnAQ-90tyRNqH/view?usp=drive_link",
						},
						{
							tituloCert:
								"Diseño centrado en las personas - Aprendizaje virtual",
							descripcionCert:
								"El diseño centrado en las personas (DCP) es una aproximación al diseño que sitúa a la persona en el centro de todo el proceso. El objetivo del diseño centrado en el usuario es crear productos o soluciones que las personas encuentren útiles y usables; es decir, que satisfagan sus necesidades teniendo en cuenta sus características.",
							linkAContenido:
								"https://cursos.innovacion.gob.ar/course/index.php?categoryid=129",
							linkACertificado:
								"https://drive.google.com/file/d/1oE9j-toc3ziO0DoqWXSfFD3W54brCr58/view?usp=drive_link",
						},
						{
							tituloCert: "Diseño gráfico y tecnología - Fundaula",
							descripcionCert:
								"Adéntrate en el mundo de las herramientas digitales de Adobe donde los diseñadores gráficos funden su creatividad con la tecnología. Descubre Adobe Creative Cloud y dos de sus herramientas más importantes: Photoshop para la edición de imágenes digitales e Illustrator para la creación de gráficos vectoriales.",
							linkAContenido:
								"https://fundaula-lms.cclearning.accenture.com/course/view.php?id=456",
							linkACertificado:
								"https://drive.google.com/file/d/1RVYaue1-qiSPFS77Te-DERIe4KeQ9QxL/view?usp=drive_link",
						},
						{
							tituloCert: "Practicando Front End: Challenge AluraGeek - Alura",
							descripcionCert:
								"En éste desafío desarrollarás una aplicación para listar, registrar y eliminar productos usando HTML, CSS y JAVASCRIPT",
							linkAContenido:
								"https://app.aluracursos.com/course/challenge-alurageek-one",
							linkACertificado:
								"https://drive.google.com/file/d/1EZLPHLcXSO7bfXxkpMhxzG9w7yh3kGDh/view?usp=drive_link",
						},
						{
							tituloCert: "Practicando Front End: Challenge Portafolio - Alura",
							descripcionCert:
								"Este desafío está dirigido a ti que estás dando los primeros pasos en el área de programación Front End y quieres poner a prueba los conocimientos adquiridos hasta el momento!",
							linkAContenido:
								"https://app.aluracursos.com/course/challenge-portafolio-one",
							linkACertificado:
								"https://drive.google.com/file/d/1lGqxCUoeJfJ0c6UDJIowSw1ejPi-fnfM/view?usp=drive_link",
						},
						{
							tituloCert: "Practicando React: Challenge Aluraflix - Alura",
							descripcionCert:
								"En éste desafío construirás tu propia plataforma de videos usando React con javascript",
							linkAContenido:
								"https://app.aluracursos.com/course/challenge-aluraflix",
							linkACertificado:
								"https://drive.google.com/file/d/1EZLPHLcXSO7bfXxkpMhxzG9w7yh3kGDh/view?usp=drive_link",
						},
						{
							tituloCert: "Analítica Web - Telefonica",
							descripcionCert:
								"A través de actividades de tipo resolutivo (práctica y análisis), en este curso entenderás que la analítica web no es sólo extraer datos sino interpretarlos correctamente. Queremos mostrarte las herramientas que te ayuden a rescatar todos los datos necesarios para interpretarlos y extraer las conclusiones que te ayuden a mejorar los productos digitales.",
							linkAContenido:
								"https://conectaempleo-formacion.fundaciontelefonica.com/web/co-analitica-web-ft-ed-1",
							linkACertificado:
								"https://drive.google.com/file/d/1UFfZlE6kgU618OI9seqnqRG3RiMkhfV2/view?usp=drive_link",
						},
					]}
				/>
				<ConjuntoCertificaciones
					tituloConjunto={idioma.certificaciones_titulo_2}
					certificaciones={[
						{
							tituloCert: "Introducción a SQL - Fundaula",
							descripcionCert:
								"Adéntrate en el mundo de las Bases de Datos, conoce los tipos que existen y sus características. Aprenderás cómo se crean y se gestionan Bases de Datos Relacionales y a manejar comandos de SQL para ello.",
							linkAContenido:
								"https://fundaula-lms.cclearning.accenture.com/course/view.php?id=387",
							linkACertificado:
								"https://drive.google.com/file/d/1RCxca5hxfZfAVzvE70yC1gKHgs5lsWKp/view?usp=drive_link",
						},
						{
							tituloCert: "Manejo de Base de Dato - Aprendizaje virtual",
							descripcionCert:
								"Cursos completados : Evaluación y Big Data, Desde Cero con MySQL, Visualización de Datos",
							linkAContenido:
								"https://cursos.innovacion.gob.ar/course/index.php?categoryid=129",
							linkACertificado:
								"https://drive.google.com/file/d/1NziqYaQe9N29Bb3bmR8ic92gvHl54S7-/view?usp=drive_link",
						},
						{
							tituloCert: "Cloud Computing Fundamentals - IBM SkillsBuild",
							descripcionCert:
								"This credential earner demonstrates knowledge of cloud computing, including cloud services, deployment models, virtualization, orchestration, and cloud security. The individual is aware of cloud benefits for users and businesses. The individual has a conceptual understanding of how to create a container, deploy a web app to the cloud, and analyze security in a simulated environment. The earner is aware of the job outlook in cloud computing and the skills required for success in various roles.",
							linkAContenido:
								"https://skills.yourlearning.ibm.com/credential/CREDLY-fd600bd9-7565-458c-b5d2-7b5b8b856eeb",
							linkACertificado:
								"https://www.credly.com/badges/9b034b77-a682-4b2f-ad46-8827c6471e29/public_url",
						},
						{
							tituloCert: "HTTP: La base de internet - Alura",
							descripcionCert:
								"Realice este curso para HTML y CSS y:-Aumenta tu conocimiento como desarrollador web.-Entiende los detalles del protocolo HTTP.-Aprende el uso de los métodos GET y POST.-Conoce el uso de HTTPS.-Web stateful y web stateless.-Conoce las mejoras de HTTP/2",
							linkAContenido:
								"https://app.aluracursos.com/course/http-base-internet",
							linkACertificado:
								"https://drive.google.com/file/d/1qN01gn8Pnira9hvm8BA8GXzIRuSidUE7/view?usp=drive_link",
						},
					]}
				/>
				<ConjuntoCertificaciones
					tituloConjunto={idioma.certificaciones_titulo_3}
					certificaciones={[
						{
							tituloCert:
								"Git y GitHub: repositorio, commit y versiones - Alura",
							descripcionCert:
								"Realice este curso para Builds y Control de versiones y:-Comprende las diferencias entre Git y GitHub.-Aprende los principales comandos que se utilizan a diario en esta herramienta.-Aprende a controlar las versiones de tus proyectos.-Descubre cómo crear estrategias de ramificaciones.-Aprende a navegar en el tiempo a través del comando git log",
							linkAContenido:
								"https://app.aluracursos.com/course/git-github-repositorio-commit-versiones",
							linkACertificado:
								"https://drive.google.com/file/d/1u2FgxOM4xT_ad2ivkMP6rkLZ3rLl6NAY/view?usp=drive_link",
						},
					]}
				/>
				<ConjuntoCertificaciones
					tituloConjunto={idioma.certificaciones_titulo_4}
					certificaciones={[
						{
							tituloCert:
								"Working in a Digital World : Professional SKills - IBM SkillsBuild",
							descripcionCert:
								"This credential earner understands key skills for professional success and core soft skills needed in the information technology workforce. This includes creating and delivering presentations; using agile approaches for working professionally to deliver quality work and experiences to customers; collaborating effectively with teams; communicating with impact; dealing with challenges in a controlled and focused manner; and solving problems and implementing solutions.",
							linkAContenido:
								"https://skills.yourlearning.ibm.com/credential/CREDLY-dafd91d2-b4fa-46e2-a1fe-c9b0428d6ea7",
							linkACertificado:
								"https://www.credly.com/badges/f574c4aa-e8e0-41da-9d51-2279b8f9774f/public_url",
						},
						{
							tituloCert:
								"Aprender a aprender: tecnicas para tu autodesarrollo - Alura",
							descripcionCert:
								"Realice este curso para Aprendizajes y:-Descubre tu proposito y tus razones para aprender.-Conoce y aproveha de tu estilo de aprendizaje, creando planes efectivos.-Aprende a como utilizar diferentes formatos, metodologias y experiencias para aprender de manera efectiva.-Define y acompaña tu metas y evolución de manera simples y efectiva.-Crea rutina productivas, eliminando distracciones.-Desvenda y utiliza el poder de la neurociencia para alcanzar todo tu potencial.-Utiliza las mejores tecnicas y herramientas trabajando a tu favor para un aprendizaje de alta performance",
							linkAContenido:
								"https://app.aluracursos.com/course/aprender-a-aprender-tecnicas-autodesarrollo",
							linkACertificado:
								"https://drive.google.com/file/d/17LlFG-yp1gPVsJxuOZoABWqW6ajgcmgt/view?usp=drive_link",
						},
						{
							tituloCert:
								"Foco: Enfocarse trae más resultados para el día a día - Alura",
							descripcionCert:
								"Conozca herramientas para promover su foco.-Descubra cuáles son los principales villanos que perjudican su foco.-Sepa como evitar distracciones.-Ejercite su motivación.-Aprenda a usar el poder del hábito a favor de su foco",
							linkAContenido:
								"https://app.aluracursos.com/course/foco-habito-dia-a-dia",
							linkACertificado:
								"https://drive.google.com/file/d/1Ve-frZjVOKraE3gnxctsiIR6nVQ4pPRC/view?usp=drive_link",
						},
						{
							tituloCert:
								"Hábitos: Ser productivo para cumplir sus metas personales - Alura",
							descripcionCert:
								"Realice este curso para Productividad y Calidad de Vida y:-Sepa como crear metas que se adecuen a sus objetivos.-Aprenda que es el Loop del Hábito y como usarlo para crear nuevos hábitos.-Cree metas más efectivas con el método S.M.A.R.T.-Descubra lo que son hábitos-clave y el motivo por el cual son tan importantes para su vida.-Conozca la metodología GTD (Getting Things Done) y mejore su organización.",
							linkAContenido:
								"https://app.aluracursos.com/course/habitos-productivo-metas-personales",
							linkACertificado:
								"https://drive.google.com/file/d/1qle29RSQfU1EuQ1mVr12gOrHh-KUWHYQ/view?usp=drive_link",
						},
						{
							tituloCert:
								"Propósito profesional: ser el protagonista de tu carrera - Alura",
							descripcionCert:
								"Realice este curso para Productividad y Calidad de Vida y:-Conoce tu razón de ser y cómo el ikigai puede ayudarte a alinear tus talentos, vocación y carrera.-Aprende una técnica sencilla sobre cómo escribir tu propósito.-Comprenda la importancia del propósito para su carrera.-Comprenda cuáles son sus motivaciones y por qué la felicidad es importante para alcanzar el éxito.-Descubre que tus valores tienen todo que ver con tu propósito y la importancia de reflexionar sobre lo que significa el éxito para ti.-Descubra por qué a veces no se siente motivado y cómo puede estar relacionado con su entorno laboral.-Comprenda cómo elegir la empresa adecuada para trabajar.-Aprende cómo no dejar que la vida te lleve, manteniendo tu propósito siempre a la vista.-Aprenda cómo puede apuntar y mejorar su propósito con el tiempo",
							linkAContenido:
								"https://app.aluracursos.com/course/proposito-profesional-protagonista-carrera",
							linkACertificado:
								"https://drive.google.com/file/d/1Fcop6n-1FL_4HxEnS3h1teCaEh1Tgpzd/view?usp=drive_link",
						},
						{
							tituloCert:
								"Desarrollo de carrera: cómo llegar a la posición deseada - Alura",
							descripcionCert:
								"Realice este curso para Habilidades interpersonales y:-Aprende a identificar tu ventaja competitiva.-Comprender el papel del liderazgo en el desarrollo profesional de los empleados.-Reconsidere sus escenarios de desarrollo profesional.-Aprende a desarrollar estrategias de desarrollo.-Aprenda a evaluar mejor el mercado y las vacantes",
							linkAContenido:
								"https://app.aluracursos.com/course/desarrollo-carrera-llegar-posicion-deseada",
							linkACertificado:
								"https://drive.google.com/file/d/14_6vYgUdVRy2NyoDd-ylr4E0UwsdMnjH/view?usp=drive_link",
						},
						{
							tituloCert: "Desarrollo de carrera: demanda del mercado - Alura",
							descripcionCert:
								"Realice este curso para Habilidades interpersonales y:-Descubre las principales estrategias para encaminar tu carrera.-Identifique en qué medida sus valores y motivaciones impulsan su trayectoria profesional.-Descubra las principales habilidades que busca el mercado.-Comprender la importancia de la motivación en nuestra vida profesional y personal.-Descubre cuáles son las principales habilidades que busca el mercado",
							linkAContenido:
								"https://app.aluracursos.com/course/desarrollo-carrera-demanda-mercado",
							linkACertificado:
								"https://drive.google.com/file/d/1c7lmxo8W7sC2t-8X_0A1HaymdKAcJElX/view?usp=drive_link",
						},
						{
							tituloCert:
								"LinkedIn: Como hacer que tu perfil trabaje por ti - Alura",
							descripcionCert:
								"Realice este curso para Marketing Personal y:-Descubre las mejores prácticas para destacar tu perfil.-Aprende a como dejar tu perfil más atractivo.-Conoce los principales recursos de LinkedIn y utilízalos a favor de tu carrera.-Descubre el poder de los contenidos a través de Pulse.-Aprende a como LinkedIn evalúa un perfil y mejora tus chances de aparecer en las búsquedas.-Crea una red de contactos de valor",
							linkAContenido:
								"https://app.aluracursos.com/course/linkedin-hacer-perfil-trabaje-por-ti",
							linkACertificado:
								"https://drive.google.com/file/d/15RD9dlQE5e_ljZ0sepLoH4B60QfAqEEC/view?usp=drive_link",
						},
						{
							tituloCert:
								"Transición de carrera: una guía al campo de tecnología - Alura",
							descripcionCert:
								"Realice este curso para Habilidades interpersonales y:-Realizar capacitaciones para el nuevo mercado laboral.-Aprenda sobre el empoderamiento de las mujeres y las comunidades para hacer un cambio tecnológico seguro.-Edúquese para la 'nueva normalidad' en el mundo de TI.-Entiende y conoce los perfiles que quieren las startups.-Capacite la forma moderna de pensar en su aplicación para trabajos de tecnología.-Aprenda cómo acceder a reclutadores y entrevistadores.-Comprender las mejores prácticas de entrevistas en el mercado tecnológico.-Entrene su tono para ser utilizado en cualquier entrevista de trabajo.-Sepa cómo construir su currículum enfocado en lo que realmente interesa a los reclutadores.-Aprende a ganar dinero digitalmente.-Conoce las profesiones que surgieron con lo digital",
							linkAContenido:
								"https://app.aluracursos.com/course/transicion-carrera-guia-campo-tecnologia",
							linkACertificado:
								"https://drive.google.com/file/d/1f8_xK1RIP2_lgLd6dv9Ju1IXpj-eNmO8/view?usp=drive_link",
						},
					]}
				/>
				<ConjuntoCertificaciones
					tituloConjunto={idioma.certificaciones_titulo_5}
					certificaciones={[
						{
							tituloCert: "Project Management Fundamentals - IBM SkillsBuild",
							descripcionCert:
								"This badge earner demonstrates a foundational understanding of project management concepts and processes. This includes knowledge about the value of project management, approaches to project management, and the role and responsibilities of the project manager across the project lifecycle to initiate and plan, execute, and close a project. Badge earners can use this knowledge to pursue further education.",
							linkAContenido:
								"https://skills.yourlearning.ibm.com/credential/CREDLY-4196f1eb-4ce2-4032-a0cb-3f728fb9da0d",
							linkACertificado:
								"https://www.credly.com/badges/6c9968bc-b606-4759-9039-00aa7a8aff56/public_url",
						},
						{
							tituloCert: "Agile Explorer - IBM SkillsBuild",
							descripcionCert:
								"This credential earner has a foundational understanding of the Agile values, principles, and practices that help change culture and behaviors in the way that people work. The individual can initiate an Agile conversation with team members and colleagues, and can apply the Agile method to the operations and programs work they do in a family, academic, or work environment.",
							linkAContenido:
								"https://skills.yourlearning.ibm.com/credential/CREDLY-dc3b5213-b2dd-4760-b45e-c9a95032bda7",
							linkACertificado:
								"https://www.credly.com/badges/a45f6790-49fc-46a9-90fb-302fc8ab9785/public_url",
						},
						{
							tituloCert:
								"Fundamentos de Agilidad: Primeros pasos para la transformación ágil - Alura",
							descripcionCert:
								"Realice este curso para Transformación Ágil y:-Entienda porque surgió el Método Ágil.-Descubra las diferencias entre el Método Ágil y el Waterfall.-Aprenda sobre la priorización de tareas y flujos.-Sepa porque el feedback debe ser el más rápido posible.-Conozca el Manifesto Ágil",
							linkAContenido:
								"https://app.aluracursos.com/course/fundamentos-agilidad-primeros-pasos-transformacion-agil",
							linkACertificado:
								"https://drive.google.com/file/d/1zokyOI_DIX1emEZBHJG7Gd3ADjcc7oM7/view?usp=drive_link",
						},
						{
							tituloCert: "Agile Mindset - IBM SkillsBuild",
							descripcionCert:
								"Conocerás de principio a fin en qué consiste el agile mindset y sus fundamentos, cuáles son las características del framework Scrum y en qué casos es posible aplicar la agilidad a escala. Aprende a implementar las prácticas del agile mindset en tu día a día. Sigue tu capacitación con Scrum para la gestión de equipos.",
							linkAContenido:
								"https://conectaempleo-formacion.fundaciontelefonica.com/web/pe-agile-mindset-ft-ed-1",
							linkACertificado:
								"https://drive.google.com/file/d/1IGJbcZOH5vbEqfAIf9atBatMmu9bAakA/view?usp=drive_link",
						},
						{
							tituloCert:
								"Gestión de Proyectos con Metodologías Ágiles y Enfoques Lean - Telefonica",
							descripcionCert:
								"Descubre las metodologías ágiles para gestionar proyectos y convertirte así en ese profesional capaz de adaptarse rápidamente a nuevos entornos de trabajo.Vivimos en un mundo de continuos cambios en todos los niveles, sobre todo, en lo relacionado con los negocios y la tecnología. Por ello, la manera en la que gestionamos los proyectos y la manera de generar nuevos modelos de negocio tienen que cambiar para adecuarse a esta nueva era digital. ",
							linkAContenido:
								"https://conectaempleo-formacion.fundaciontelefonica.com/web/co-gestion-de-proyectos-con-metodologias-agiles-y-enfoques-lean-ft-ed-1",
							linkACertificado:
								"https://drive.google.com/file/d/1uTgCmAZomJ6RynL4ePUATaC7OKiKPkKj/view?usp=drive_link",
						},
						{
							tituloCert:
								"Emprendimiento: De la idea al plan de negocios - Alura",
							descripcionCert:
								"Realice este curso para Startups y Emprendimiento y:-Entiende qué es emprender.-Conozca la mentalidad emprendedora.-Descubra si es posible emprender como empleado de la empresa.-Construya tu modelo de negocio.-Crea tu plan de negocios.-Valide una idea de negocio.-Verifique el atractivo del mercado",
							linkAContenido:
								"https://app.aluracursos.com/course/emprendimiento-idea-plan-negocios",
							linkACertificado:
								"https://drive.google.com/file/d/1fsSH2bwzLrLHdDDhgCNn7eOKs0EXygg8/view?usp=drive_link",
						},
						{
							tituloCert:
								"Herramientas en acción: 'Trello para la gestión de proyectos ágiles'. - Aprendizaje virtual",
							descripcionCert:
								"En este curso aprenderás a reconocer las características principales de las metodologías ágiles y el beneficio del uso de Trello como herramienta de gestión de proyectos para organizar mejor tus tareas.Tiene una duración de 18 horas y cuenta con certificado de participación.",
							linkAContenido:
								"https://cursos.innovacion.gob.ar/enrol/index.php?id=1332",
							linkACertificado:
								"https://drive.google.com/file/d/1ZRMgkm29W--XdCaUtKNeVDNwT5hrTWFL/view?usp=drive_link",
						},
					]}
				/>
				<ConjuntoCertificaciones
					tituloConjunto={idioma.certificaciones_titulo_6}
					certificaciones={[
						{
							tituloCert: "Big Data (Ciencia de datos) - Codo a codo 4.0",
							descripcionCert:
								"Inicia tú recorrido en el análisis de datos y Big Data en 20 semanas. Aprendé a manejar grandes volúmenes de información, crear informes para tomar decisiones en forma práctica y con aplicación laboral. Desarrollá habilidades en data analytics y convertite en un experto en este campo en continuo crecimiento.",
							linkAContenido:
								"https://inscripcionesagencia.bue.edu.ar/codoacodo/doc/Plan%20de%20estudios-%20estudiantes-%20Big%20Data-Data%20Analytics%202023.pdf",
							linkACertificado:
								"https://drive.google.com/file/d/1YIKalXMgamTA1zCv99UF0JWhh5H3trIU/view?usp=drive_link",
						},
					]}
				/>
				<ConjuntoCertificaciones
					tituloConjunto={idioma.certificaciones_titulo_7}
					certificaciones={[
						{
							tituloCert: "CCNAv7: Introducción a redes - Cisco",
							descripcionCert:
								"Configurar los switch y dispositivos finales para proporcionar acceso a : recursos de redes locales y remotos. ->Explicar cómo los protocolos físicos y de capa de enlace de datos admiten el funcionamiento de Ethernet en una red conmutada. ->Configurar los routers para habilitar la conectividad de extremo a extremo entre dispositivos remotos. -> Crear esquemas de direccionamiento IPv4 e IPv6 y verificar la conectividad de red entre dispositivos. -> Explicar cómo las capas superiores del modelo OSI admiten aplicaciones de red. -> Configurar una red pequeña con prácticas recomendadas de seguridad. ->Solucionar problemas de conectividad en una red pequeña.",
							linkAContenido:
								"https://unr.edu.ar/redes-de-computadoras-nivel-inicial/",
							linkACertificado:
								"https://www.credly.com/badges/6d26cf23-d338-4902-b90d-e103a0db5acd/public_url",
						},
						{
							tituloCert:
								"Network Addressing and Basic Troubleshooting - Cisco",
							descripcionCert:
								"This course explores key concepts for Internet Protocol (IP) addressing and basic network troubleshooting. Learn about the physical, data link, and network layers and how they work together to provide end-to-end connectivity. Understand how IP addresses are calculated and assigned. Then practice your troubleshooting skills to keep a network up and running.",
							linkAContenido:
								"https://skillsforall.com/course/network-addressing-and-basic-troubleshooting?courseLang=en-US",
							linkACertificado:
								"https://www.credly.com/badges/9d979c99-be20-4bd5-8fcd-77b1cb780cc4/public_url",
						},
						{
							tituloCert: "Operating Systems Basics - Cisco",
							descripcionCert:
								"Operating Systems Basics teaches the fundamentals of operating systems. It covers basic concepts and skills needed to understand the purpose and characteristics of operating systems, the implementation of basic OS security, and how to configure mobile device network connectivity and email.",
							linkAContenido:
								"https://skillsforall.com/course/operating-systems-basics?courseLang=en-US",
							linkACertificado:
								"https://www.credly.com/badges/ceeabe20-bcfd-4162-a1b5-0d7ddade5624/public_url",
						},
						{
							tituloCert: "Computer Hardware Basics - Cisco",
							descripcionCert:
								"Computer Hardware Basics explores the fundamentals of computers and mobile devices, the components that comprise them, how they work, and basic troubleshooting tools and techniques.",
							linkAContenido:
								"https://skillsforall.com/course/computer-hardware-basics?courseLang=en-US",
							linkACertificado:
								"https://www.credly.com/badges/6401aa02-7c28-4cf8-a63a-1e72eb6044eb/public_url",
						},
						{
							tituloCert:
								"Armado y reparación de PC (2012) - Proyecto santafesino educativo laboral",
							descripcionCert:
								"Armado y reparación de PC, notebooks, instalación de sistemas operativos y diversos programas, identificación de fallos en componentes. --> El instituto no existe más al día de hoy o cambio de nombre. <--",
							linkAContenido:
								"https://drive.google.com/file/d/1YIKalXMgamTA1zCv99UF0JWhh5H3trIU/view?usp=drive_link",
							linkACertificado:
								"https://drive.google.com/file/d/1YIKalXMgamTA1zCv99UF0JWhh5H3trIU/view?usp=drive_link",
						},
					]}
				/>
				<ConjuntoCertificaciones
					tituloConjunto={idioma.certificaciones_titulo_8}
					certificaciones={[
						{
							tituloCert: "1° Etapa de #SeProgramar - Municipalidad",
							descripcionCert:
								"Lógica básica de programación como estructuras de datos, bucles, etc. El programa se cancelo y ahora se cambió por Codo a Codo 4.0 .",
							linkAContenido:
								"https://drive.google.com/file/d/13juPvtgDzio-JFL3VU05qe53hztmOdB9/view?usp=drive_link",
							linkACertificado:
								"https://drive.google.com/file/d/13juPvtgDzio-JFL3VU05qe53hztmOdB9/view?usp=drive_link",
						},
						{
							tituloCert:
								"Lógica de programación: explorar funciones y listas - Alura",
							descripcionCert:
								"Realice este curso para Lógica de Programación y:-Aprenda qué son las funciones y cómo utilizar JavaScript para manipular elementos en la pantalla.-Desarrolla aún más tu lógica de programación inspirándote en un proyecto real.-Aprende a usar Github para publicar tus proyectos.-Descubre cómo utilizar las listas, una de las principales estructuras de datos en el mundo de la programación.-Cree manipulaciones de palabras y números dinámicamente con JavaScript",
							linkAContenido:
								"https://app.aluracursos.com/course/logica-programacion-explorar-funciones-listas",
							linkACertificado:
								"https://drive.google.com/file/d/184lrY9DJkLGdRoTGNKsZbfyGf_8RiBSQ/view?usp=drive_link",
						},
						{
							tituloCert:
								"Lógica de programación: sumérgete en la programación con JavaScript - Alura",
							descripcionCert:
								"Realice este curso para Lógica de Programación y:-Muestra mensajes en pantalla de forma interactiva.-Utiliza variables en el desarrollo de software.-Adéntrate en el mundo del desarrollo siguiendo buenas prácticas de programación.-Desarrolla una aplicación de principio a fin, inspirada en el mundo real.-Aprende a adaptar soluciones proporcionadas por el lenguaje en tus programas",
							linkAContenido:
								"https://app.aluracursos.com/course/logica-programacion-sumergete-programacion-javascript",
							linkACertificado:
								"https://drive.google.com/file/d/1TJILs4y7MfXz8B_x8jej-9UBhIAOrYdv/view?usp=drive_link",
						},
						{
							tituloCert: "Introducción a la programación - Fundaula",
							descripcionCert:
								"Aprende los conceptos básicos de programación, los principios de desarrollo de un programa, sus fases y los diferentes lenguajes de programación. Además, explora el mundo de los algoritmos, sus características, estructura y formas de representación.",
							linkAContenido:
								"https://fundaula-lms.cclearning.accenture.com/course/view.php?id=385",
							linkACertificado:
								"https://drive.google.com/file/d/1ikvTdIgsXHehVbfaKZsPjbB9PU9UoqFw/view?usp=drive_link",
						},
						{
							tituloCert: "Introducción a PSeInt - Fundaula",
							descripcionCert:
								"Facilita tu comienzo en Programación construyendo algoritmos o programas mediante PSeInt. Aprende en qué consiste esta útil herramienta a la que podrás acudir siempre que quieras. ¡Es un Software Libre!",
							linkAContenido:
								"https://fundaula-lms.cclearning.accenture.com/course/view.php?id=386",
							linkACertificado:
								"https://drive.google.com/file/d/18GXc3Z9Q3fh4o2nBapMrIJ9kxRehlewc/view?usp=drive_link",
						},
						{
							tituloCert: "Introducción a Java - Fundaula",
							descripcionCert:
								"Descubre cómo nace el lenguaje de programación Java y conoce sus conceptos básicos: cómo funciona, las nomenclaturas y los tipos de datos con los que trabaja.",
							linkAContenido:
								"https://fundaula-lms.cclearning.accenture.com/course/view.php?id=384",
							linkACertificado:
								"https://drive.google.com/file/d/1CqvXr3utDdhBOJNOdM9juOJBJ4cwR1Db/view?usp=drive_link",
						},
						{
							tituloCert:
								"Cursos introductorios a : programación, ingles y ciberseguridad - Software as a future",
							descripcionCert:
								"En alianza estratégica entre el programa Software As A Future de Cámara de la Industria Argentina del Software - CESSI con Cisco Networking Academy CISCO SYSTEMS ARGENTINA S.A. y Edutek Latam llega la segunda edición de los programas introductorios de JavaScript, Python y Ciberseguridad, además, agregamos Inglés IT B1.",
							linkAContenido: "https://saaf.org.ar/noticia-detalle.php?id=51",
							linkACertificado:
								"https://drive.google.com/file/d/1GH0tc0d_2pa8gcb2V3WlaitnVB5NvJt4/view?usp=drive_link",
						},
					]}
				/>
				<ConjuntoCertificaciones
					tituloConjunto={idioma.certificaciones_titulo_9}
					certificaciones={[
						{
							tituloCert:
								"Information Technology Fundamentals - IBM SkillsBuild",
							descripcionCert:
								"This credential earner demonstrates knowledge of information technology (IT) basics, methodologies of troubleshooting, and the tools and resources that IT professionals use. The individual has a conceptual understanding of computer basics, networking, hardware, software, computer security, and has experience supporting a customer with a simulated remote connection tool. The earner is aware of the job outlook in IT and is familiar with the skills required for success in various roles.",
							linkAContenido:
								"https://skills.yourlearning.ibm.com/credential/CREDLY-3419c178-70ff-4f57-8d51-e92d646186ad",
							linkACertificado:
								"https://www.credly.com/badges/b6609aef-58a6-4206-8a7d-177d49826e65",
						},
						{
							tituloCert: "Office intermedio - Telefonica",
							descripcionCert:
								"Aquí seguiremos avanzando y profundizando en las diversas funciones y operaciones de los programas Word, Excel y Power Point para que puedas utilizarlos de manera más eficaz y eficiente.",
							linkAContenido:
								"https://conectaempleo-formacion.fundaciontelefonica.com/web/pe-office-intermedio-ft-ed-1",
							linkACertificado:
								"https://drive.google.com/file/d/17bANjlT5Uquljp0GV7GioXPJIJG7zEkm/view?usp=drive_link",
						},
					]}
				/>
				<ConjuntoCertificaciones
					tituloConjunto={idioma.certificaciones_titulo_10}
					certificaciones={[
						{
							tituloCert:
								"Educación secundaria : Modalidad economía y gestión de la organización. - Angela Peralta Pino",
							descripcionCert:
								"Titulo secundario orientado a economía y gestión de la organización. También se adjunta el titulo al mejor promedio.",
							linkAContenido:
								"https://drive.google.com/file/d/1SznQ9fiZmbpwVSkCW887uFW0OK2Gp3jp/view?usp=drive_link",
							linkACertificado:
								"https://drive.google.com/file/d/1SznQ9fiZmbpwVSkCW887uFW0OK2Gp3jp/view?usp=drive_link",
						},
					]}
				/>
			</article>
		</div>
	);
}
