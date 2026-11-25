# Laureano Rosales · Portfolio frontend

Portfolio personal en español rioplatense. Presenta a Laureano como **Frontend Developer & AI Enthusiast**, Técnico Superior en Desarrollo de Software y con aprendizaje autodidacta continuo. Reúne su práctica en desarrollo frontend, creatividad digital y desarrollo asistido por IA. El caso de DTF Sheet describe el problema, el flujo del editor y su participación en el desarrollo.


## Portfolio V4 · Immersive Edition

La portada conserva la identidad editorial monocromática e incorpora «Órbita editorial», una esfera de partículas en Canvas 2D con densidad adaptativa, pausa fuera de pantalla, fallback estático y soporte para movimiento reducido. La portada extiende el motion mediante CSS y el observador de revelado existente; no necesita GSAP ni Three.js.

La revisión QA enfocada de V4, sus límites de medición y capturas están documentados en [FINAL_QA.md](FINAL_QA.md). El móvil se midió mediante emulación de Pixel 7 con CPU 4×; no hay mediciones en dispositivos móviles físicos.

## Desarrollo local

```sh
npm ci
npm run dev
```

Abrí `http://localhost:3000`. La portada está en `/` y el caso de estudio en `/proyectos/dtf-sheet`.

```sh
npm run lint
npx tsc --noEmit
npm run build
npm start
```

## Contenido y recursos

- El catálogo de proyectos está en `app/projects.ts`. Los destinos de la demo y del repositorio público se mantienen por separado.
- Las capturas WebP en `public/` provienen del editor de DTF Sheet y del buscador publicado de Gifs App.
- El CV disponible está en `public/Laureano_Rosales_CV.pdf` y se ofrece desde el hero. La ruta se centraliza en `app/cv.ts`.
- La ubicación profesional indicada en la portada es Mendoza, Argentina.
- El selector ofrece Sistema, Claro y Oscuro. La selección explícita se guarda en este navegador.
- La implementación usa Next.js, React, TypeScript y CSS Modules. Las transiciones de CSS y las apariciones al entrar en pantalla respetan la preferencia de movimiento reducido.

La dirección visual implementada está documentada en [DESIGN.md](DESIGN.md). El plan, el registro y el informe QA están en [PLAN.md](PLAN.md), [PROGRESS.md](PROGRESS.md) y [FINAL_QA.md](FINAL_QA.md).
