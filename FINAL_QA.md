# Informe de QA final

**Fecha:** 24 de noviembre de 2026  
**Resultado:** la compilación local está lista para producción. La URL pública está desactualizada y bloquea considerar completada la publicación de esta versión. No se hizo push ni despliegue.

## Alcance y correcciones

- Se documentó en `DESIGN.md` la dirección visual y los valores CSS presentes. `AGENTS.md`, `PLAN.md` y `README.md` ahora remiten a esa guía y reflejan el CV y perfil profesional actuales.
- Se reemplazó el desplegable de tema por un botón con SVG inline. En oscuro muestra el sol y en claro la luna; alterna con clic o teclado, guarda la preferencia manual, sigue la preferencia del sistema antes de la primera elección, mantiene un espacio invisible durante la hidratación y respeta movimiento reducido. Tiene etiqueta dinámica, estado `aria-pressed`, tooltip, foco y área de 44 × 44 px.
- Se verificó el CV sin modificarlo y se alineó el perfil: Técnico Superior en Desarrollo de Software, aprendizaje autodidacta continuo, práctica con OpenAI Codex, Google Antigravity, skills, ChatGPT y Gemini. La ubicación mostrada es Mendoza, Argentina.
- Se completaron canonical, Open Graph y Twitter para portada y caso. Se añadieron sitemap y robots con las rutas públicas existentes.
- Se configuró `vercel.json` para omitir únicamente despliegues de `redesign/portfolio-v2`; otras ramas, incluida `main`, conservan el comportamiento predeterminado.
- No se añadieron dependencias al proyecto.

## Pruebas ejecutadas

| Prueba | Resultado |
| --- | --- |
| `npm run lint` | Correcto |
| `npx tsc --noEmit --incremental false` | Correcto |
| `npm run build` | Correcto; Next.js 16.2.7 prerenderizó portada, caso, sitemap y robots |
| `git diff --check` | Correcto antes del cambio final del control de tema; no se repitió después para limitar las comprobaciones a lint, TypeScript y build |
| Playwright en `next start` | 32 combinaciones (2 rutas × 2 temas × 8 tamaños), sin overflow, imágenes rotas, `alt` faltante, controles sin nombre ni H1 faltante/duplicado |
| Reflujo equivalente a 200 % | Sin overflow a 720 px CSS en ambas rutas y temas; representa aproximadamente una ventana de 1440 px ampliada al 200 % |
| Botón de tema | Alternancia por Enter, cambio de icono/etiqueta/estado, persistencia tras recarga, inicialización clara del sistema y actualización cuando el sistema cambia a oscuro; 44 × 44 px |
| Navegación y CV | Salto al contenido por teclado, entrada al caso y vuelta a proyectos; CV responde 200 con `application/pdf` |
| axe-core | Cero infracciones WCAG 2 A/AA y 2.1 A/AA en las dos rutas y temas. Dos iconos decorativos marcados `aria-hidden` quedaron sin evaluación automática de contraste; el contenido legible sí pasó |
| Movimiento reducido | Las animaciones de entrada quedan desactivadas con `prefers-reduced-motion: reduce` |
| Consola e hidratación | Sin errores de consola ni excepciones de página en los recorridos probados |
| Rendimiento local | LCP orientativo: portada 52 ms, caso 20 ms; CLS 0 en ambas. DM Sans local y las imágenes de cada ruta cargaron |
| Sitemap, robots, favicon y PDF locales | Todos responden 200 con tipos `application/xml`, `text/plain`, `image/x-icon` y `application/pdf` |

Las ocho resoluciones fueron 1920×1080, 1440×900, 1366×768, 1024×768, 768×1024, 390×844, 360×800 y 320×800. Las capturas finales de portada/caso, escritorio/móvil y tema claro/oscuro están en `build/final-*.png`.

## Enlaces externos

- Producción, demo de DTF Sheet y ambos enlaces de GitHub respondieron 200 durante la comprobación.
- LinkedIn respondió HTTP 999, una restricción del servidor anti-bots. El enlace se conserva porque el bloqueo automatizado no demuestra que el destino sea inválido.
- `gifsapp.io` no resolvió por DNS en este entorno. La captura comprobable disponible muestra el formulario de búsqueda y el encabezado de búsquedas previas sin resultados; no se reemplazó con una imagen de procedencia no confirmada.

## Bloqueante de publicación

La URL pública `https://laureanorosalesportfolio.vercel.app/` responde 200, pero sirve una versión anterior con título «Laureano Rosales — Frontend Developer». En esa versión, `/proyectos/dtf-sheet`, `/sitemap.xml` y `/robots.txt` responden 404 y la portada no incluye canonical ni Open Graph. El build local sí contiene esos recursos y pasa las pruebas. Hace falta publicar el estado actual del repositorio mediante el proceso autorizado para que la URL pública coincida con él; no se realizó ese paso por la restricción de no desplegar.

## Seguridad, archivos y límites

- `.env*` está ignorado por Git; la revisión de archivos versionados no encontró tokens, claves ni credenciales. `build/` también está ignorado.
- El CV no se modificó. La revisión confirma que el título de Técnico Superior en Desarrollo de Software coincide con la presentación del portfolio.
- La captura de Gifs App con resultados reales queda como mejora opcional al recuperar acceso verificable a la aplicación publicada.
- Las métricas LCP/CLS son mediciones locales sin throttling y no representan datos de usuarios. LinkedIn y Gifs App no se pudieron verificar en una sesión autenticada.
- No se añadieron dependencias de QA al proyecto; Playwright y axe se usaron desde herramientas locales ya instaladas. `pypdf` fue temporal para leer el CV y no forma parte del proyecto.
- El servidor iniciado para QA se cerró y el puerto 3100 quedó sin listeners. La herramienta bloqueó el comando de limpieza de los ayudantes de QA y el paquete temporal `pypdf`; permanecen dentro de `build/`, carpeta ignorada por Git y ajena al build de producción.

## Verificaciones pendientes y tiempos

- Las matrices de Playwright superaron el tiempo inicial de espera de 30 segundos del comando, pero se reanudaron como procesos activos y completaron con código 0. No hubo timeout de la prueba final.
- Se detuvieron nuevos intentos de navegador según la instrucción posterior. Quedó pendiente medir de forma directa el estado `:focus-visible` del botón de tema; la prueba completada sí confirmó activación del botón con Enter, etiqueta/estado dinámicos y foco del enlace «Saltar al contenido» mediante Tab.
- `git diff --check` no se repitió tras el control de tema por la misma restricción. Lint, TypeScript y build sí se volverán a ejecutar como las únicas comprobaciones finales.
- No se verificó el comportamiento con sesión autenticada de LinkedIn ni se capturaron resultados nuevos de Gifs App porque su dominio no resolvió en este entorno.

## Archivos de este control

`AGENTS.md`, `DESIGN.md`, `FINAL_QA.md`, `PLAN.md`, `PROGRESS.md`, `README.md`, `app/components/Hero/Hero.tsx`, `app/components/Navbar/ThemeSelect.tsx`, `app/components/Navbar/Navbar.module.css`, `app/components/Skills/Skills.tsx`, `app/layout.tsx`, `app/projects.ts`, `app/proyectos/dtf-sheet/page.tsx`, `app/robots.ts`, `app/sitemap.ts` y `vercel.json`.
