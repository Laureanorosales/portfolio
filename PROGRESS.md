# Progreso del rediseño

## Refinamiento visual posterior

- Se revisaron `PLAN.md`, `AGENTS.md` y la skill `frontend-design`. La dirección actual combina una base grafito o gris claro, superficies diferenciadas y acentos violeta. El hero incorpora disponibilidad, nombre a gran escala y una composición digital inspirada en piezas sobre un lienzo.
- Se rediseñaron la navegación, botones, tarjetas de proyectos y perfil. DTF Sheet domina la grilla y Gifs App utiliza una superficie secundaria. El perfil reúne frontend, inteligencia artificial, Excel y diseño gráfico en una composición adaptable. El caso conserva su contenido y recibió ajustes de ritmo y presentación de imágenes.
- Se generaron tres ilustraciones originales para una plancha de demostración y se capturó la aplicación real en ejecución. Las imágenes `public/dtf-editor-final.webp`, `public/dtf-plancha-final.webp` y `public/dtf-exportacion-final.webp` corresponden al mismo ejemplo. Los diseños se generaron a resolución suficiente para evitar las advertencias de resolución en la exportación. Son piezas de muestra, no proyectos adicionales.
- Archivos modificados en esta etapa: `app/globals.css`, `app/projects.ts`, los componentes y estilos de Hero y Skills, estilos de Navbar y Projects, `Projects.tsx`, y la página y estilos del caso. Se sustituyeron las tres capturas de DTF Sheet. Las capturas de revisión se guardaron en `build/final-{home,case}-{light,dark}-{390,1440}.png`, carpeta local ignorada por Git.
- Se evaluó Motion. Las entradas, interacciones y transiciones previstas se resuelven con CSS y el observador existente, por lo que no se instalaron dependencias. Se respeta `prefers-reduced-motion`. La imagen principal utiliza `loading="eager"` y las secundarias mantienen carga diferida, siguiendo la documentación local de Next.js 16.
- Verificación con Playwright y axe en ambas rutas, ambos temas y 320, 390, 768, 1024 y 1440 px, sin desbordamientos ni infracciones detectadas. Se inspeccionaron capturas de escritorio y móvil y se ajustaron la grilla del perfil, el recorte de Gifs App y la vista de la plancha. Se verificaron persistencia y seguimiento del tema, navegación al caso, demo, estado del CV, carga de imágenes y movimiento reducido. La revisión de consola en desarrollo terminó sin errores ni advertencias en el recorrido probado. Lint, TypeScript y compilación de producción correctos.
- El CV real sigue pendiente en `public/cv.pdf`. El repositorio de DTF Sheet continúa oculto hasta confirmar su acceso público y el enlace de LinkedIn conserva la limitación de verificación anónima registrada abajo.

Las cinco fases de [PLAN.md](PLAN.md) están implementadas y comprobadas sobre una compilación de producción local. El refinamiento visual queda para la siguiente sesión.

## Fases completadas

| Fase | Resultado |
|---|---|
| 1. Línea de base y contenido | Capturas de la portada anterior a 1440 y 390 px guardadas en `build/`. Capturas reales del editor de DTF Sheet con sus archivos de prueba y de la pantalla inicial de Gifs App publicada. Se verificó la demo pública de DTF Sheet y la visibilidad de los repositorios. |
| 2. Base visual y estructura | Cabecera, pie, salto al contenido, retícula y foco compartidos. Paletas de papel frío y mesa de trabajo con tema persistente y soporte del sistema. Favicon LR y DM Sans alojada localmente. |
| 3. Portada | Nombre y presentación, Bento 8/4, enlaces independientes al caso y la demo, perfil actualizado, contacto y estado del CV. La captura destacada empieza dentro del primer viewport de escritorio en las medidas probadas. |
| 4. Caso DTF Sheet | Problema, tres pasos con evidencia del mismo ejemplo, atribución del trabajo y enlace a la demo. La descarga real del ejemplo generó un PNG de 3543 × 3543 px con canal alfa. |
| 5. Verificación | Lint, tipos, build, matriz visual, accesibilidad, navegación y dos estados del CV. README actualizado. |

## Archivos

- Modificados `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `app/favicon.ico` y los componentes y estilos de Navbar, Hero, Projects, Skills, Contact y Footer en `app/components/`.
- Creados `app/projects.ts`, `app/theme.ts`, `app/components/Navbar/ThemeSelect.tsx` y `app/components/Reveal.tsx`.
- Creado el caso en `app/proyectos/dtf-sheet/page.tsx` con `Case.module.css`.
- Añadidos `app/fonts/dm-sans-latin.woff2`, `app/fonts/OFL.txt` y cuatro capturas en `public/` (`dtf-editor.webp`, `dtf-plancha.webp`, `dtf-exportacion.webp` y `gifs-buscador.webp`).
- Actualizados `package.json`, `package-lock.json`, `README.md` y el estado de continuidad de `PLAN.md`. Eliminado `postcss.config.mjs`.

## Decisiones y dependencias

- Conservamos Next.js 16.2.7, React 19.2.4, TypeScript y CSS Modules. Retiramos Tailwind y `@tailwindcss/postcss`, además de las referencias a Tabler y DM Serif Display. El portfolio incorpora cero paquetes nuevos.
- El build falló al pedir DM Sans a Google Fonts. Ahora `next/font/local` sirve la fuente variable que ya usaba el proyecto, con la licencia OFL oficial y pesos 400–700.
- El selector guarda la preferencia explícita en el navegador y un script en el encabezado la aplica antes de pintar. El cambio suaviza bordes y franjas decorativas. El fondo bajo texto cambia junto con el texto para mantener su contraste. CSS y `IntersectionObserver` cubren las interacciones.
- Al navegar desde una URL con fragmento, Next llegó a producir `/#contenido#contacto`. Se usan anclas nativas para los destinos de sección y `next/link` para rutas sin fragmentos. Se documentó la excepción de lint en los dos archivos afectados.
- El README público de Gifs App confirma React, TypeScript y Giphy. La captura anterior no correspondía al sitio publicado, por lo que la tarjeta usa un recorte real del buscador. El caso de DTF usa recortes WebP de una captura con una plancha de muestra organizada y del cuadro de exportación de esa misma sesión.

## Pruebas y resultados

- `npm run lint`, `tsc --noEmit --incremental false`, `npm run build` y `git diff --check` correctos. Next prerenderizó `/` y `/proyectos/dtf-sheet`.
- Playwright y axe en Chrome para las dos rutas, dos paletas y cinco anchos de 320, 390, 768, 1024 y 1440 px. Las 20 combinaciones pasaron sin desbordamiento horizontal ni infracciones de axe. Capturas `build/qa-*.png` en la carpeta local ignorada por Git.
- Comprobados salto al contenido, foco, enlaces de sección, navegación táctil y reflujo equivalente a 200 % mediante un viewport de 640 px CSS a escala 2. Se comprobó tema del sistema con JavaScript deshabilitado, persistencia tras recarga, cambio en vivo del sistema, almacenamiento bloqueado y aplicación del tema antes de hidratar.
- Comprobadas entrada del nombre, aparición de secciones, ampliación de las vistas previas y transiciones con movimiento normal y reducido.
- Compilación con PDF temporal, descarga correcta en Chromium de Playwright y apertura con un lector PDF. Compilación final sin CV, botón deshabilitado y ausencia de enlace a `/cv.pdf`. El PDF temporal fue retirado.
- Medición orientativa local en Chrome con viewport móvil de 390 px, sin limitación de red. Portada con FCP de 80 ms y LCP de 88 ms. Caso con FCP y LCP de 32 ms. CLS de 0 en ambas rutas. Se comprobó la selección de tamaños de imagen frente al ancho mostrado y la densidad de píxeles emulada.
- Demo de DTF Sheet y perfil GitHub respondieron 200. El repositorio de Gifs App está disponible. La consulta anónima al repositorio de DTF Sheet devolvió 404, por lo que el caso ofrece la demo. LinkedIn devolvió 999 en Chrome y curl. El enlace existente sigue siendo el destino de contacto y su acceso anónimo queda sin confirmar.

## Pendientes y refinamiento

- Añadir el CV real a `public/cv.pdf` cuando esté disponible. Confirmar el acceso al perfil de LinkedIn desde una sesión normal. Añadir el repositorio de DTF Sheet al catálogo si más adelante se confirma su acceso público.
- Valorar un recorte alternativo para la portada que muestre más de la plancha sin retrasar la entrada de la imagen en el primer viewport.
- Revisar el equilibrio del bloque cobalto de Gifs App frente a la captura de DTF en oscuro y el espaciado vertical del caso en escritorio.


## Rediseño editorial monocromático ? 24 de noviembre de 2026

- Se reemplazó el hero por una composición inmersiva con el nombre a gran escala, dos líneas enmascaradas y una forma abstracta de capas difuminadas animadas detrás del texto. El archivo solicitado `referencias/hero-reference.png` no estaba presente; se usó la imagen PNG disponible en la carpeta, que coincide con la referencia descrita.
- Proyectos pasí a composiciones editoriales numeradas; DTF Sheet conserva la mayor escala, sus imágenes reales, caso y demo. El perfil usa columnas y divisores, y contacto cierra con tipografía de gran tamaño. Se conservan las dos paletas y el selector persistente.
- Se mantuvo DM Sans local con licencia OFL, aprovechando su peso regular y ajustando escala y espaciado. Se evaluó Motion/GSAP: las secuencias de esta propuesta se resuelven con CSS y el observador existente, sin añadir dependencias. Movimiento reducido muestra el estado final.
- La imagen de DTF Sheet ahora está fuera del primer viewport y carga diferida; el nombre es el elemento dominante inicial. Se conservaron dimensiones y tamaños responsivos de imágenes.
- Validación sobre build de producción: lint, TypeScript y build correctos. Playwright y axe revisaron portada y caso en temas claro y oscuro a 320, 390, 768, 1024, 1440 y 1920 px, sin infracciones automáticas ni desbordamientos detectados. Se revisó la consola y se guardaron capturas finales en `build/editorial-*.png`.
- Pendientes anteriores: incorporar el CV real, verificar LinkedIn en sesión normal y confirmar el acceso público al repositorio DTF Sheet antes de ofrecerlo.


## Ajuste de escala y legibilidad

- Se elevó el texto base a 18 px con interlineado 1,6 y se ajustaron enlaces, controles, indicadores y pies a unos 15-16 px. Se redujo la escala de titulares secundarios y el espacio entre secciones; el contenedor tiene márgenes fluidos y ancho máximo de 100 rem.
- La introducción del caso DTF Sheet incorpora la captura real del editor, con carga inmediata y dimensiones responsivas. Se conservan las vistas de detalle y exportación.
- Lint, TypeScript y build de producción correctos. Revisión visual al 100 % en 1920×1080, 1440×900 y 390×844; Playwright y axe revisaron ambas rutas y temas sin desbordamientos ni infracciones automáticas, y sin errores de consola detectados. Capturas en `build/scale-*.png`.


## CV disponible

- Se conectó `public/Laureano_Rosales_CV.pdf` al enlace de descarga de la portada, conservando el estado alternativo si el archivo falta. Se actualizó la documentación.

## Presentación profesional

- Se actualizó el hero con el título «Frontend Developer & AI Enthusiast» y una descripción que mantiene explícita la formación autodidacta. El perfil destaca la práctica con Codex, Google Antigravity, skills y flujos con múltiples modelos de IA; también se ajustaron el contacto y los metadatos de portada. Se conservan el diseño, las animaciones y el CV.


## QA y preparación para producción

- Se creó `DESIGN.md` a partir de las hojas de estilo implementadas y se actualizó `AGENTS.md` para exigir que las futuras modificaciones visuales respeten esa guía. `PLAN.md` y `README.md` ahora identifican el título de Técnico Superior en Desarrollo de Software que aparece en el CV.
- Tras leer el PDF real sin modificarlo, se afinó la presentación: el hero identifica la formación técnica y el aprendizaje continuo; el perfil menciona Codex, Antigravity, skills y los modelos ChatGPT y Gemini. Se añadió Mendoza, Argentina, junto al indicador profesional. El CV existente se sirve en `/Laureano_Rosales_CV.pdf`; se corrigió la documentación que todavía lo ubicaba en `/cv.pdf` o lo marcaba pendiente.
- Se completaron los metadatos canónicos y Open Graph/Twitter de portada y caso. Se añadieron `app/sitemap.ts` y `app/robots.ts`. Favicon: `app/favicon.ico`.
- En Playwright con `next start`, las 32 combinaciones de dos rutas, dos temas y ocho resoluciones (1920×1080, 1440×900, 1366×768, 1024×768, 768×1024, 390×844, 360×800 y 320×800) pasaron sin desbordamiento, imágenes rotas, texto alternativo faltante, controles sin nombre, área táctil pequeña del tema ni jerarquía incorrecta de H1. Se guardaron capturas completas en `build/final-*.png`.
- axe-core en producción local reportó cero infracciones WCAG 2 A/AA y 2.1 A/AA en portada/caso y ambos temas, después de completar la animación de entrada. La prueba adicional a 720 px CSS (reflujo comparable a una ventana de 1440 px con zoom al 200 %) tampoco desbordó. Se comprobó foco del salto al contenido, activación por teclado, persistencia del tema, preferencia del sistema y `prefers-reduced-motion`.
- Navegación local, enlaces a caso y demo, enlace CV (HTTP 200 y `application/pdf`), enlaces GitHub (HTTP 200), LinkedIn (HTTP 999 del servidor anti-bots), metadatos, favicon, sitemap y robots. No se quitó ningún destino válido por la respuesta de LinkedIn.
- Medición local orientativa en Chromium, sin limitación de red: portada LCP 52 ms y CLS 0; caso LCP 20 ms y CLS 0. DM Sans y las imágenes de ambas rutas cargaron. Consola y errores de página limpios.
- Auditoría del destino público: la portada de Vercel responde 200, pero es una versión anterior (título «Laureano Rosales — Frontend Developer»). `/proyectos/dtf-sheet`, `/sitemap.xml` y `/robots.txt` responden 404. No se hizo push ni despliegue. La compilación local está lista; la URL pública necesita recibir esta versión por el proceso de publicación autorizado.
- La captura actual de Gifs App representa el buscador y sus búsquedas previas sin resultados. No se sustituyó por la imagen local de procedencia no verificable: `gifsapp.io` no resuelve por DNS en este entorno. La imagen conserva texto alternativo que describe lo visible; conseguir una captura verificada con resultados queda como mejora opcional.
- El estado de riesgos, limitaciones y archivos modificados está en `FINAL_QA.md`. No se encontraron archivos `.env`, claves, tokens o credenciales versionados; `.env*` está ignorado. `build/` está ignorado y conserva capturas de sesiones anteriores junto con las nuevas capturas finales; no se versiona.

## Control de tema con iconos

- Se reemplazó el selector por un botón monocromático con sol en tema oscuro y luna en tema claro. El control alterna temas, mantiene la elección manual en `localStorage`, sigue el tema del sistema antes de la primera elección y responde a cambios del sistema mientras la preferencia siga automática.
- El botón conserva el espacio reservado durante la hidratación para evitar cambios de layout, usa iconos SVG inline, `aria-label` dinámico, `aria-pressed`, tooltip y foco visible. Las transiciones están limitadas a `prefers-reduced-motion: no-preference`; el área interactiva mide 44 × 44 px.
- Lint, TypeScript, build, axe, `git diff --check`, alternancia/persistencia/preferencia del sistema/movimiento reducido y la matriz completa de escritorio/móvil finalizaron correctamente. El estado público desactualizado y la captura de Gifs App quedan documentados en `FINAL_QA.md`.

## Publicación de la rama

- Se agregó una regla de Vercel específica para `redesign/portfolio-v2` que omite previews al hacer push, respetando la restricción vigente de no desplegar. No afecta la rama `main`.

## Portfolio V4 · Órbita editorial

- El hero incorpora una esfera irregular de partículas mediante Canvas 2D, CSS y `requestAnimationFrame`. Las bandas de la superficie se pliegan con dos ondas y se proyectan en perspectiva. Ocho variantes precalculadas modulan tamaño y opacidad por profundidad. La primera línea del nombre y los pliegues de la figura comparten el espacio derecho en escritorio. En móvil la caja queda anclada al nombre para despejar disponibilidad, presentación y enlaces.
- El contenido del hero se sigue prerenderizando. El módulo de dibujo se importa cuando el hero está visible, la pestaña está activa y la preferencia permite movimiento. Se precarga solo la imagen WebP correspondiente al ancho, con la geometría de la escena y la tinta CSS del tema. El lienzo se muestra tras el primer cuadro válido y vuelve a la imagen estática si pierde el contexto o se detecta un fallo de dibujo.
- En escritorio los niveles apuntan a 3.400, 2.500 o 1.650 partículas y limitan DPR a 1,5, 1,25 o 1. En móvil apuntan a 1.350, 1.000 o 800, con DPR de 1, 1 o 0,85. El ajuste usa ventanas de tiempo de dibujo y cadencia, sin depender del navegador declarado. Se pausa fuera del viewport, con la pestaña oculta y con movimiento reducido. El puntero fino controla suavemente la inclinación y el scroll atenúa y desplaza la figura. El gesto táctil conserva la navegación nativa.
- Playwright en Chrome sobre el build local verificó ambos temas a 1440 y 390 px, y desbordamiento adicional a 320, 768 y 1920 px. Comprobó rotación, respuesta al puntero con cuadros equivalentes, scroll, toque en el acceso a proyectos, cambio de tema por teclado, destino del CV y suspensión y reanudación. Se comprobó el estado estático con JavaScript desactivado, importación bloqueada, contexto no disponible o perdido y preferencia de movimiento reducido inicial y en vivo. Axe no detectó infracciones en el hero de las cuatro combinaciones principales.
- Capturas en `build/immersive-hero-{light,dark}-{1440,390}.png` y `build/immersive-hero-fallback-390.png`.
- Lint, TypeScript, build de producción y `git diff --check` correctos. El build prerenderizó la portada y el caso. La prueba de carga sintética en móvil observó los tres niveles de densidad, 1.350 → 1.000 → 800.
- Rendimiento local en Chrome con AMD Ryzen 5 7600. Cinco navegaciones con caché fría por variante y perfil. Escritorio con red de 10 Mb/s y 40 ms. Móvil emulado con CPU 4× más lenta y red de 3 Mb/s y 90 ms. Se comparó el build anterior con el nuevo.

| Mediana | Escritorio | Móvil emulado |
| --- | ---: | ---: |
| LCP anterior → nuevo | 208 → 224 ms | 512 → 560 ms |
| CLS anterior → nuevo | 0 → 0 | 0 → 0 |
| Cadencia de dibujo | 59,9 FPS | 30,2 FPS |
| Datos transferidos de la portada | 244.827 → 277.926 B | 244.827 → 264.524 B |
| Tiempo de tareas del hilo principal durante 2,3 s en reposo | 6 → 712 ms | 24 → 896 ms |

- Chrome seleccionó la imagen visible de la órbita como LCP. La precarga por ancho y la compresión de las dos imágenes dejaron la diferencia dentro de +200 ms. La ventana medida de 2,3 s no registró tareas largas en la mediana de ningún perfil. Datos en `build/immersive-hero-performance.json`. Queda por medir la temperatura, el consumo y la cadencia en un móvil físico de gama media.
- Para la siguiente fase artística, revisar la definición de los puntos en pantallas móviles de alta densidad, el balance de intensidad entre ambas paletas y la silueta durante una vuelta completa, especialmente cuando los pliegues se acercan a los bordes. Comparar la pose estática y la primera animada para afinar la transición.

## Refinamiento de órbita y motion de portada

- Se aumentó moderadamente la opacidad y el contraste de profundidad. La deformación radial es menor y el eje vertical más redondo, conservando bandas y pliegues. Las imágenes estáticas se regeneraron con la misma geometría, cantidad y pose inicial del lienzo, y ambos estados usan un fundido de 650 ms.
- Se evaluó la repulsión localizada. Se conservó la inclinación existente para evitar cálculo adicional por partícula y mantener la silueta estable. Los niveles de calidad, suspensión y preferencia de movimiento reducido siguen activos.
- Proyectos, perfil y contacto incorporan máscaras, entradas breves y escalonadas y una línea animada en proyectos. Las imágenes enlazan al caso o repositorio, con indicador accesible por teclado y visible en táctil. El parallax se aplica progresivamente mediante CSS donde se admite `animation-timeline: view()`. El contenido permanece disponible sin JavaScript y con movimiento reducido.
- Se evaluaron GSAP y ScrollTrigger. Las entradas se resuelven con el observador existente y CSS, y el parallax tiene mejora progresiva, por lo que no se añadieron dependencias.
- Lint, TypeScript y build correctos. Playwright revisó los cuatro pares de tema y tamaño 1440/390, enlaces de imagen, desbordamiento, errores de página y movimiento reducido. Se revisaron las capturas `build/motion-*.png` y la disponibilidad del contenido sin JavaScript.
- Medición puntual en Chrome local con Ryzen 5 7600 durante 2,3 s. Escritorio: 60 FPS y 924 ms de tareas de hilo principal. Móvil emulado con CPU 4× más lenta: 30 FPS y 1.099 ms. Es una sola muestra y no permite concluir una comparación estadística con las medianas anteriores. El coste sigue siendo relevante y queda pendiente medirlo en móvil físico.


## QA final V4 · 24 de noviembre de 2026

- Revisión enfocada de partículas, suspensión por viewport y pestaña, densidad adaptativa, fallback, movimiento reducido, scroll/parallax, temas, enlaces de proyecto y móvil. No hubo cambios en la arquitectura ni en los estilos durante esta auditoría.
- En cuatro combinaciones de escritorio/móvil emulado y claro/oscuro: lienzo activo, pausa fuera del hero, reanudación al volver, enlaces correctos y sin overflow (1440/390 px). El fallback WebP móvil se mantuvo al simular fallo de Canvas; con movimiento reducido, el H1 quedó disponible y el loop no inició. Se simuló visibilitychange; no se presenta como prueba de cambio real de pestaña.
- Capturas actuales en `build/final-v4-desktop-light.png`, `build/final-v4-desktop-dark.png`, `build/final-v4-mobile-light.png` y `build/final-v4-mobile-dark.png`.
- Muestra única Chrome/CDP de 2,3 s: 60,0 FPS y 827 ms de tareas en escritorio local sin limitación; 30,2 FPS y 1.005 ms con Pixel 7 emulado y CPU 4×. No se midió teléfono físico. El tiempo de tareas confirma consumo significativo bajo CPU restringida; no se aplicó un recorte que afectara la apariencia y no se encontró una optimización sencilla con mejora cuantificable.
- Lint, TypeScript, build y git diff --check correctos. Ver detalles, límites y entorno en `FINAL_QA.md`.

## Evolución motion creativa

- Intro LR decorativa por máscara, entradas existentes del hero, tilt de proyecto con perspectiva, enlaces magnéticos de contacto y revelado escalonado del titular. Se mantienen parallax CSS, observador existente y la órbita Canvas. Las interacciones de puntero se restringen a puntero fino y movimiento normal; listeners se limpian al desmontar o cambiar ruta.
- GSAP y ScrollTrigger evaluados: los efectos implementados se resuelven mediante CSS y el observador existente, sin nueva dependencia ni bucle continuo adicional. La transición CSS entre documentos usa View Transitions como mejora progresiva; la navegación cliente de Next conserva la transición normal, sin prometer una animación entre rutas cliente.
- Lint, TypeScript y build correctos. Playwright en Chrome revisó 1440 y 390 px con ambos temas: sin overflow, tilt activo en escritorio y contenido visible sin JavaScript con movimiento reducido. Capturas del hero en `build/creative-*.png`. No se midió consumo ni se probó un dispositivo móvil físico durante esta fase.

## Transición editorial entre portada y DTF Sheet

- Se añadió una cortina de 700 ms, con «01 / DTF SHEET» al entrar y «LR.» al volver, detectando cambios de ruta con `usePathname`. No retrasa ni intercepta navegación, no captura eventos y tiene limpieza al terminar o por timeout. Respeta movimiento reducido y no aparece en carga directa.
- Se evaluó la documentación local de Next 16: la integración de React ViewTransition sigue siendo experimental. Se eligieron `Link` y `usePathname`, APIs del App Router, sin dependencias ni flag experimental. Los enlaces de la imagen DTF y de retorno al listado usan navegación cliente y conservan `/#proyectos`.
- Pruebas enfocadas en Chrome sobre build de producción: activación con Enter, imagen de proyecto, regreso mediante historial, enlace de regreso con fragmento, entrada directa y movimiento reducido. Los textos y estados de la cortina fueron correctos; lint, TypeScript y build pasaron. No se realizó auditoría general.

## Scramble tipográfico y perspectiva de proyectos

- Se incorporó un texto reutilizable con capa visual `aria-hidden`, revelado progresivo de 560 ms, ancho reservado por el texto original y una sola animación activa. Se aplica a navegación, numeración, presentación profesional y contacto. Los observers, eventos y cuadros pendientes se limpian; el contenido permanece disponible sin JavaScript y con movimiento reducido.
- Se ajustó la implementación existente de tilt a 7° por eje, perspectiva de 1200 px, escala de 1,01 y retorno suave, conservando la capa de profundidad del indicador. No se agregó un segundo loop de perspectiva ni iluminación que altere las capturas.
- Playwright en Chrome sobre producción: escritorio y móvil emulado a 1440/390 en ambos temas, sin overflow ni errores de página; scramble y tilt activos en escritorio, retorno de tilt, selección del texto original, navegación por teclado y clic de proyecto. Movimiento reducido no inició scramble. Capturas en `build/scramble-*.png`; no se midió en móvil físico.
- Lint, TypeScript y build correctos. No se añadieron dependencias.

## Spotlight, morphing y relleno editorial

- Luz radial sutil en el hero mediante el controlador de interacciones existente, sin capturar eventos y desactivada en táctil y movimiento reducido. Dos títulos usan scroll timelines CSS como mejora progresiva; el texto permanece semántico y visible sin soporte.
- La órbita interpola entre esfera, toroide y hélice con coordenadas precalculadas, sin aumentar la cantidad de partículas ni incorporar otro loop. Se conservan los niveles adaptativos, pausa y fallback originales.
- Playwright con Chrome en build de producción: escritorio 1440 px y Pixel 7 emulado 390 px, ambos temas, sin overflow ni errores de página; spotlight activo solo en escritorio, Canvas activo y movimiento reducido con fallback estático y tinta completa. Se inspeccionaron capturas de las tres formas y de los títulos. Capturas en `build/effects-*.png` y `build/fill-*.png`. No se probó un móvil físico ni se realizó una medición comparativa de rendimiento.
- Lint, TypeScript y build correctos. No se incorporaron dependencias.


## Refinamiento visual móvil

- Se acercó el contenido a la navegación, se aumentó y desplazó la órbita detrás del nombre y se limitó la altura mínima del hero para adelantar proyectos en pantallas altas. Los enlaces disponen de 44 px de altura táctil. Se mantuvieron visibles los tres enlaces de navegación en vez de ocultarlos tras una hamburguesa. Los cambios están restringidos a los breakpoints móviles; la escena Canvas no cambió.
- Playwright en Chrome sobre build de producción, con móvil emulado de 320, 360, 390 y 430 px en ambos temas: sin desbordamiento ni errores de página; órbita activa y enlace a proyectos funcional por toque. Se verificó también el fallback con movimiento reducido. Capturas en `build/mobile-refine-*.png`. No se probó en dispositivos físicos.
- Lint, TypeScript y build correctos. No se instalaron dependencias.


## Spotlight global

- La luz local del hero se sustituyó por una única capa fija al viewport. La posición sigue coordenadas del cursor con interpolación CSS de 180 ms, sin loop permanente ni cálculos durante scroll. Intensidad monocromática menor en claro; capa decorativa con `pointer-events: none`, oculta en táctil y movimiento reducido. Se limpian listeners al cambiar de ruta y desmontar.
- Playwright con Chrome en producción revisó hero, proyectos y contacto en ambos temas, con coordenadas estables durante scroll, clic a proyectos, foco de teclado y selección de texto. Pixel 7 emulado en ambos temas y preferencia de movimiento reducido mantuvieron la capa oculta; sin errores de página en la prueba de escritorio. Capturas en `build/global-spot-*.png`. No se midió rendimiento ni se probó un dispositivo físico.
- Lint, TypeScript y build correctos; sin dependencias nuevas.


## Ajuste del spotlight en tema claro

- Se reforzó la sombra ambiental gris en claro y se conservaron los valores de luz blanca en oscuro. Variables CSS independientes controlan color, intensidad y opacidad por tema; el cambio se refleja sin recarga. La composición usa `mix-blend-mode: normal`, capa fija sobre el contenido y `pointer-events: none`.
- Revisión visual de ambos temas en Chrome y prueba de cambio de tema en ambas direcciones. El efecto permanece oculto en Pixel 7 emulado y con movimiento reducido. Capturas `build/spot-correct-light.png` y `build/spot-correct-dark.png`. Lint, TypeScript y build correctos; sin nuevas dependencias.

## Movimiento móvil inmersivo — 25 de noviembre de 2026

- Auditoría acotada a activación y compatibilidad: intro, máscaras, entradas, líneas, contacto y cortina de ruta ya funcionaban sin depender de hover; órbita y morphing ya se ejecutaban en móvil con densidad adaptable. Spotlight y magnetismo se excluyen intencionalmente del táctil. El scramble de enlaces dependía de hover, el desplazamiento de la órbita de puntero fino y el relleno y parallax de scroll timelines sin alternativa animada.
- Scramble de enlaces al entrar en viewport táctil; fallback de relleno y parallax por scroll/resize con un único frame pendiente y sin loop continuo; perspectiva móvil de hasta 2° por scroll, sin listeners táctiles ni bloqueo de gestos; órbita sensible al scroll móvil. Se mantienen fallback estático, contenido legible y movimiento reducido. No se añadieron dependencias.
- Compatibilidad evaluada mediante detección de características: Chrome Android y Samsung Internet compatibles usan la ruta CSS cuando soportan las propiedades; Safari iOS anterior al soporte de scroll timelines usa la alternativa. La disponibilidad exacta depende de la versión. IntersectionObserver ausente deja contenido visible y la órbita estática.
- Chrome de escritorio con móvil emulado (360, 390 y 430 px): comprobados Canvas, scramble, entrada de imagen, perspectiva, ausencia de spotlight y overflow, fallback forzado y cambio a movimiento reducido. Las pruebas son emuladas; no se probaron dispositivos físicos, Samsung Internet ni Safari iOS reales, ni se midió consumo o fluidez en ellos. Capturas en `build/mobile-motion-*.png`.
