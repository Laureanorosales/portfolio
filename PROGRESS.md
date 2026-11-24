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
