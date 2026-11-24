# Rediseño del portfolio de Laureano Rosales

## 1. Objetivo y criterio editorial

El portfolio debe ayudar a alguien que contrata perfiles frontend junior a entender qué problema identificó Laureano, cómo trabajó para resolverlo y qué resultado puede mostrar. DTF Sheet será la pieza principal y Gifs App quedará como proyecto secundario. El contacto priorizará la primera oportunidad en desarrollo frontend y dejará abierta la posibilidad de recibir propuestas freelance.

Laureano se presentará como desarrollador frontend en formación, con conocimientos de Excel, diseño gráfico y herramientas de inteligencia artificial. El aprendizaje autodidacta se contará a través del proceso de DTF Sheet. El sitio mantendrá el español rioplatense y usará la primera persona para las acciones confirmadas por Laureano.

## 2. Auditoría del portfolio actual

| Área | Hallazgo | Decisión |
|---|---|---|
| Arquitectura | La única página compone seis componentes con responsabilidades claras. Usa App Router, TypeScript estricto, CSS Modules y componentes de servidor. | Conservar la base. Añadir una página de caso para DTF Sheet y mantener la portada como índice breve. |
| Primera impresión | El hero ocupa al menos `88vh`. El nombre, las barras de nivel y la disponibilidad preceden a cualquier muestra de trabajo. | Acortar la presentación y llevar el título de DTF Sheet y una parte reconocible de su captura al primer viewport de escritorio. |
| Proyectos | Gifs App es el único proyecto publicado en la portada y comparte una grilla de tres columnas con dos «Próximamente». DTF Sheet existe en un repositorio local vecino. | Dar a DTF Sheet el espacio principal, conservar Gifs App y retirar los espacios vacíos. |
| Perfil | JavaScript, React, Next.js y CSS aparecen en dos secciones. Las barras sugieren una precisión que el sitio no explica. Excel, diseño gráfico, IA y aprendizaje autodidacta están ausentes. | Reunir los conocimientos en un único bloque, expresar el contexto de aprendizaje y vincular las capacidades demostradas con el caso. |
| Responsive | Proyectos mantiene tres columnas, habilidades cuatro y contacto dos. La navegación conserva separaciones amplias. La imagen declara `100vw` en móvil aunque la grilla mantiene tres columnas. | Diseñar desde 320 px, alinear `sizes` con el ancho renderizado y mantener accesibles los tres destinos de navegación. |
| Accesibilidad | Falta un landmark `main`. Hay desplazamiento suave y un pulso infinito sin adaptación a movimiento reducido. El gris `#999` sobre fondos claros afecta a textos pequeños. El indicador de apertura del proyecto aparece en hover. | Añadir salto al contenido, foco visible, enlaces con destino explícito y contraste comprobado. Retirar el pulso y comprobar el acceso por teclado y táctil. |
| Sistema visual | La serif, el apellido en cursiva y el musgo dominan la identidad. Tres módulos repiten las reglas de sección, encabezado y divisor. Las tarjetas de habilidades reaccionan al cursor aunque carecen de acción. | Crear una escala y un contenedor compartidos. Reservar el tratamiento interactivo para enlaces y controles. |
| Recursos y dependencias | Tailwind y su plugin PostCSS están instalados, pero la interfaz está escrita en CSS Modules. Los iconos llegan desde una webfont externa con `@latest`. La captura de Gifs App pesa 668.757 bytes. | Simplificar la cadena de estilos, eliminar la petición de iconos y servir imágenes responsivas con `next/image`. |
| Identidad y mantenimiento | Los metadatos son genéricos, el año del pie está fijado y el README todavía describe proyectos «próximamente». | Actualizar títulos, descripción, favicon, pie y documentación al cerrar la implementación. |

Se revisaron los componentes, sus estilos, la configuración, el inventario de recursos, la captura de Gifs App y el repositorio local de DTF Sheet. `npm run lint` y TypeScript con `--noEmit --incremental false` finalizaron correctamente. Los hallazgos de disposición provienen del código. La inspección en navegador, la compilación de producción y las mediciones de rendimiento forman parte de las fases de implementación.

## 3. Dirección artística y experiencia

Tomar la plancha de impresión como referencia compositiva. En DTF Sheet, disponer piezas de distinto tamaño sobre una misma superficie responde a una necesidad real. El portfolio aplicará esa lógica al ordenar proyecto, evidencia y perfil. El Swiss Editorial Design aparecerá en los ejes de alineación y la tipografía. El minimalismo premium vendrá del espacio, la precisión de los recortes y la legibilidad. La grilla Bento dará mayor superficie al proyecto principal.

| Elemento | Especificación |
|---|---|
| Paleta clara | Papel frío `#F5F7FA` para el fondo, blanco `#FFFFFF` para superficies, tinta `#17212B` para texto principal, gris `#465461` para texto secundario, línea `#CBD3DA` para divisiones decorativas y cobalto `#1746C8` para enlaces y foco. |
| Paleta oscura | Mesa de trabajo `#101820` para el fondo, `#192530` para superficies, `#F1F5F9` para texto principal, `#B8C6D2` para texto secundario, `#364959` para divisiones decorativas y `#92B4FF` para enlaces y foco. Conservar el color original de las capturas. |
| Tipografía | Conservar DM Sans mediante `next/font` con pesos 400, 500 y 700. Nombre entre 48 y 104 px con escala fluida, títulos de sección entre 30 y 56 px, cuerpo entre 16 y 19 px y pies de imagen desde 14 px. Alinear el texto a la izquierda y limitar los párrafos a unos 65 caracteres por línea. |
| Retícula | Contenedor máximo de 1280 px. Doce columnas desde 1024 px, seis entre 640 y 1023 px y una columna de lectura por debajo de 640 px. Márgenes exteriores fluidos de 16 a 64 px y separación entre módulos de 16 a 24 px. |
| Composición | El nombre y la presentación comparten eje con el título de DTF Sheet. Su captura domina por superficie. Gifs App tiene una imagen menor y el perfil se lee como texto editorial. Usar divisores donde cambie el grupo de información. |
| Imágenes | Usar capturas reales del editor con diseños de muestra propios o autorizados. La portada mostrará una plancha con varias piezas y margen visible. El caso incluirá una vista de contexto y un detalle legible del ajuste o resultado. Conservar proporciones y redactar textos alternativos que expliquen qué se ve. |
| Interacción | Subrayado reconocible para enlaces de texto, foco cobalto con separación y transiciones breves de color. En móvil, navegación en flujo normal con ajuste de línea. Respetar la preferencia de movimiento reducido y conservar el orden de lectura. |

### Tema y movimiento

Usar un selector de tema en la cabecera compartida, con etiqueta accesible y tres opciones: «Sistema», «Claro» y «Oscuro». «Sistema» será el valor inicial y seguirá en vivo `prefers-color-scheme`. Una selección explícita tendrá prioridad y se conservará en `localStorage`. Aplicarla antes de la primera pintura y ajustar `color-scheme` para los controles nativos. Al volver a «Sistema», retirar la sobreescritura. Si el almacenamiento está bloqueado, mantener el cambio durante la visita. Sin JavaScript, las dos paletas responderán al sistema mediante CSS.

| Momento | Comportamiento |
|---|---|
| Entrada del hero | En unos 320 ms, alinear el nombre con el borde útil de la plancha mediante un desplazamiento de hasta 8 px. Mantener las acciones disponibles desde el primer render. |
| Aparición de secciones | Animar una vez la entrada del encabezado y su imagen al llegar a la vista, durante unos 220 ms. Usar un observador compartido y mostrar el contenido de base aunque JavaScript falle. Al llegar por ancla o teclado, el destino debe ser legible de inmediato. |
| Botones y enlaces | Dar respuesta al puntero y al teclado con transiciones de color o subrayado de 140 ms. Mostrar el foco de inmediato. |
| Vistas previas | Al pasar el puntero o enfocar el enlace, ampliar la captura hasta 1,02 veces dentro de su marco durante 180 ms. Mantener los destinos visibles y directamente accesibles en pantallas táctiles. |
| Cambio de tema | Tras una elección explícita, suavizar superficies y bordes durante 180 ms. Aplicar la primera pintura de inmediato y comprobar la legibilidad durante la transición. |

Con `prefers-reduced-motion: reduce`, presentar de inmediato el estado final de las cinco interacciones y desactivar el desplazamiento suave. La captura real de DTF Sheet y el nombre comparten el gesto de alineación de la portada. El resto de los movimientos acompaña la lectura o explica una acción.

### Portada `/`

1. **Cabecera.** «Laureano Rosales» enlaza al inicio. «Proyectos», «Perfil» y «Contacto» llevan a sus secciones. Conservar `#proyectos`, `#skills` y `#contacto` para mantener los enlaces guardados.
2. **Presentación.** Usar el nombre como único `h1`. Texto base «Soy desarrollador frontend en formación. Aprendo de forma autodidacta y me interesa crear herramientas que resuelvan problemas concretos». Acción principal «Ver el caso DTF Sheet». Colocar junto a ella el botón secundario visible «Descargar CV (PDF)». Si falta el archivo, mostrar en su lugar un botón deshabilitado con el texto «CV aún no disponible».
3. **Proyectos.** En escritorio, DTF Sheet ocupa ocho columnas y Gifs App cuatro. En tablet y móvil se apilan en ese orden. El módulo principal explica en una frase qué es una plancha DTF y presenta dos enlaces independientes, «Leer el caso» y «Probar DTF Sheet». Evitar enlaces anidados dentro de la tarjeta. Gifs App conserva su descripción de búsqueda de GIFs y la acción «Ver código en GitHub».
4. **Perfil.** «Desarrollo frontend» presenta JavaScript, React, Next.js y CSS como tecnologías en formación. En «Otras herramientas», usar el texto «Uso Excel para trabajar con fórmulas, tablas y gráficos. También tengo conocimientos de diseño gráfico y utilizo OpenAI Codex y Google Antigravity como herramientas de desarrollo asistido por IA». Un enlace al proceso de DTF Sheet aporta un ejemplo concreto del uso de IA y del aprendizaje autodidacta.
5. **Contacto.** Texto base «Busco mi primera oportunidad en desarrollo frontend. También estoy abierto a propuestas freelance». LinkedIn será la acción principal y GitHub permitirá explorar el trabajo. Usar los destinos ya presentes en el proyecto.

### Caso `/proyectos/dtf-sheet`

| Orden | Contenido |
|---|---|
| 1. Problema | Explicar para alguien ajeno a la impresión textil que preparar una plancha requiere acomodar varios diseños dentro de un área imprimible, respetar tamaños y márgenes, y obtener un archivo de salida. |
| 2. Solución | Mostrar el recorrido de cargar diseños, acomodarlos en la plancha y exportar el resultado. Usar capturas del mismo ejemplo para que sea fácil seguir la relación entre entrada y salida. |
| 3. Mi participación | «Identifiqué el problema y definí los requisitos funcionales. Dirigí el desarrollo con herramientas de inteligencia artificial y tomé decisiones sobre las funciones y la experiencia de uso. Probé la aplicación manualmente, detecté errores, solicité correcciones y propuse mejoras de diseño, usabilidad y compatibilidad de imágenes. Repetí ese proceso hasta conseguir una herramienta funcional». |
| 4. Desarrollo asistido por IA | Explicar que las herramientas de IA generaron el código bajo la dirección de Laureano. Presentar Next.js, React y TypeScript como tecnologías del proyecto. Reservar la primera persona para las decisiones, pruebas y acciones confirmadas. La atribución debe reflejar el proceso real y limitar las afirmaciones de experiencia y conocimientos a lo declarado. |
| 5. Resultado y evidencia | Ofrecer «Probar DTF Sheet» junto a la introducción del caso. Añadir «Ver repositorio» cuando se confirme el acceso público sin iniciar sesión. La verificación anónima de ambos destinos queda pendiente antes de publicar. [Demo de DTF Sheet](https://dtfsheet-rosy.vercel.app/) · [Repositorio por verificar](https://github.com/Laureanorosales/DTF-SHEET). Incluir una mejora concreta si puede ilustrarse con material verificable. Las afirmaciones sobre ahorro, clientes, uso comercial o resultados de impresión requieren evidencia propia. |

## 4. Arquitectura y dependencias

- Conservar Next.js `16.2.7`, React y React DOM `19.2.4`, TypeScript, ESLint y CSS Modules. El rediseño requiere cero paquetes nuevos. Antes de escribir código, consultar las guías correspondientes de `node_modules/next/dist/docs/` y sus avisos de deprecación, según `AGENTS.md`.
- Crear un catálogo local tipado con identificador estable, título, resumen, recurso visual, texto alternativo y destinos independientes para caso, demo y repositorio público. Incluir solo los destinos disponibles para cada proyecto, sin consultar GitHub en cada visita. Gifs App enlaza a su repositorio. Mantener el relato largo en la página estática del caso. Incorporar futuros proyectos cuando haya contenido disponible.
- Conservar componentes de servidor. Usar `next/link` para rutas internas, anclas nativas para secciones y `next/image` para capturas. Compartir cabecera y pie entre ambas páginas. Los enlaces desde el caso deben resolver las secciones de la portada.
- Mantener en el cliente solo el selector de tema y la detección de entrada en pantalla. Elegir CSS nativo para keyframes y transiciones e `IntersectionObserver` para la aparición progresiva. Motion ofrece secuencias vinculadas al scroll, pero aquí basta un disparo por sección y transiciones breves. Este alcance queda cubierto con las APIs del navegador. [Guía de animaciones de Motion](https://motion.dev/docs/react-scroll-animations)
- Comprobar del lado del servidor al generar la portada si existe `public/cv.pdf`. Cuando esté presente, usar un enlace visible a `/cv.pdf` con atributo `download`. Cuando falte, renderizar el estado deshabilitado sin enlace ni petición al PDF. En la revisión local faltaba el archivo. Incorporarlo y reconstruir el sitio habilitará la descarga.
- Centralizar tokens, contenedor, ritmo vertical, foco y tipografía en la hoja global. Mantener en los módulos la composición específica. Retirar Tailwind, su plugin y la configuración PostCSS dedicada. Actualizar el lockfile en el mismo cambio y comprobar la compilación sin esas dependencias.
- Retirar DM Serif Display y la webfont Tabler. Usar nombres visibles para GitHub y LinkedIn. Reservar dimensiones de las imágenes y ajustar `sizes` a la retícula. Incorporar favicon con iniciales LR y metadatos específicos para portada y caso. Configurar un dominio canónico cuando exista una URL pública confirmada.

## 5. Fases y criterios de aceptación

| Fase | Trabajo | Criterio de salida |
|---|---|---|
| 1. Línea de base y contenido | Registrar la portada actual en escritorio y móvil. Preparar textos, comprobar los destinos de GitHub y LinkedIn y capturar un flujo reproducible de DTF Sheet. Contrastar la imagen de Gifs App con la aplicación antes de reutilizarla. | Cada afirmación del caso tiene respaldo en el producto o en el testimonio de Laureano. Las capturas corresponden al flujo descrito y son legibles en su tamaño previsto. |
| 2. Base visual y estructura | Aplicar tokens, fuente, contenedor, cabecera, `main`, enlace de salto y pie compartidos. Simplificar dependencias y comprobar la compilación. | Ambas rutas comparten la misma alineación, el foco es visible y el sitio carga sin la webfont externa. |
| 3. Portada | Construir la presentación, el Bento de dos proyectos, el perfil y el contacto. Ajustar primero a 320 px y después ampliar la composición. | Se reconoce qué hace DTF Sheet y se llega al caso con una sola acción. Excel, diseño gráfico, IA y aprendizaje autodidacta son localizables. El empleo frontend ocupa la posición principal en contacto. |
| 4. Caso DTF Sheet | Montar el recorrido visual, la explicación del problema, la contribución personal, la atribución a IA, la demo y el acceso al repositorio cuando sea público. | Una persona ajena a DTF puede explicar qué entra en la herramienta, qué sale y qué hizo Laureano. Puede volver directamente a Proyectos o Contacto. |
| 5. Verificación y cierre | Ejecutar lint, comprobación de tipos y build de producción. Revisar ambas rutas a 320, 390, 768, 1024 y 1440 px. Comprobar teclado, zoom al 200 %, movimiento reducido, contraste, enlaces directos y carga de imágenes. Actualizar el README. | Sin desbordamiento horizontal, contenido tapado, acciones exclusivas de hover ni enlaces rotos. Contraste mínimo de 4,5:1 en texto normal y 3:1 en texto grande. Registrar el rendimiento móvil sobre el build de producción y corregir saltos de diseño o descargas de imágenes sobredimensionadas. |

**Validaciones adicionales por fase**

1. Abrir la demo en una sesión anónima, comprobar por separado la visibilidad del repositorio y registrar la disponibilidad del CV.
2. Probar ambos temas en ambas rutas, incluyendo recarga, cambio de sistema en vivo, selección manual, retorno a «Sistema» y almacenamiento bloqueado. Comprobar primera pintura, contraste y foco.
3. Desde la portada, abrir el caso y la demo en una acción cada uno. Comprobar la descarga y apertura del PDF en una compilación con archivo y la ausencia de peticiones a `/cv.pdf` en una compilación sin él. Revisar el perfil con los nombres de ambas herramientas y los tres usos de Excel.
4. Verificar que la demo sea accesible desde el caso y que la visibilidad del enlace al código coincida con la del repositorio.
5. Aplicar la matriz de pantallas y accesibilidad a las dos paletas. Revisar las cinco microinteracciones con movimiento normal y reducido, también por teclado y tacto. Comparar capturas reales de escritorio y móvil para confirmar que la escala del nombre, la alineación con la plancha y el peso visual de DTF Sheet distinguen la composición.

Cerrar con un recorrido de portada a DTF Sheet y de allí a contacto. Comprobar que la evidencia visual, la atribución del trabajo y la oportunidad profesional buscada se entienden en ese orden.

## 6. Continuidad para el siguiente modelo

La planificación está aprobada y las cinco fases de implementación están completas. Consultar [PROGRESS.md](PROGRESS.md) para ver los resultados de las pruebas, las decisiones adicionales y las tareas de refinamiento.

1. Leer este `PLAN.md` y el `AGENTS.md` de la raíz. Consultar las guías pertinentes en `node_modules/next/dist/docs/` antes de escribir código y atender sus avisos de deprecación.
2. Tomar la sección 2 como línea de base. Revisar el estado de Git y utilizar las capturas de validación registradas en PROGRESS.md para continuar el refinamiento.
3. Aplicar la skill instalada `frontend-design`, consultada para esta revisión, a la jerarquía, el uso de capturas reales, las interacciones accesibles y la revisión visual. Evaluar la portada con el contenido y la escala de DTF Sheet en ambos temas.
4. Registrar en este documento las fases terminadas, las comprobaciones realizadas y los recursos pendientes para la siguiente sesión.
