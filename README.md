# Laureano Rosales · Portfolio

Portfolio personal en español rioplatense. Presenta a Laureano como **Frontend Developer & AI Enthusiast** y Técnico Superior en Desarrollo de Software, con aprendizaje autodidacta continuo. Reúne proyectos de desarrollo frontend, creatividad digital y desarrollo asistido por IA, sin atribuir experiencia senior ni especialización en inteligencia artificial.

## Desarrollo local

Requiere Node.js y npm.

```sh
npm ci
npm run dev
```

Abrí `http://localhost:3000`.

## Rutas

- `/`: portada, proyectos seleccionados, perfil y contacto.
- `/proyectos/dtf-sheet`: caso de estudio de DTF Sheet y enlace a la demo.
- `/robots.txt` y `/sitemap.xml`: directivas para crawlers y rutas indexables.

## Comprobaciones

```sh
npm run lint
npx tsc --noEmit --incremental false
npm run build
npm start
```

El sistema usa Next.js, React, TypeScript y CSS Modules. Las fuentes se sirven localmente. Las animaciones respetan `prefers-reduced-motion`.

## Contenido y recursos

- El catálogo, las descripciones y los enlaces de proyectos están en `app/projects.ts`.
- Las capturas WebP de `public/` documentan el editor de DTF Sheet y la interfaz de búsqueda de Gifs App.
- El CV disponible es `public/Laureano_Rosales_CV.pdf`; la ruta se centraliza en `app/cv.ts`.
- La portada indica Mendoza, Argentina, y enlaza a GitHub, LinkedIn y al CV.
- El botón de tema alterna entre claro y oscuro, guarda la selección manual en el navegador y usa la preferencia del sistema si todavía no se eligió un tema.

## Dirección visual y QA

[DESIGN.md](DESIGN.md) describe los estilos implementados y sirve como guía para futuros cambios visuales. [PLAN.md](PLAN.md) registra el enfoque del proyecto, [PROGRESS.md](PROGRESS.md) el historial y [FINAL_QA.md](FINAL_QA.md) las verificaciones, los pendientes y el estado de la URL pública.

Las capturas visuales de QA se guardan en `build/`, carpeta ignorada por Git.

## Publicación

La rama `redesign/portfolio-v2` está configurada para omitir despliegues automáticos de Vercel. La regla está en `vercel.json`; la configuración de otras ramas, incluida `main`, no cambia. La publicación de producción debe hacerse por el flujo autorizado.
