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
