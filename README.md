# Laureano Rosales · Portfolio frontend

Portfolio personal en español rioplatense. La portada presenta proyectos, perfil y contacto. El caso de DTF Sheet describe el problema, el flujo del editor y mi participación en su desarrollo asistido por IA.

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
- Para habilitar «Descargar CV (PDF)», agregá el documento a `public/cv.pdf` antes de compilar. La portada muestra el estado «CV aún no disponible» mientras falte.
- El selector ofrece Sistema, Claro y Oscuro. La selección explícita se guarda en este navegador.
- La implementación usa Next.js, React, TypeScript y CSS Modules. Las transiciones de CSS y las apariciones al entrar en pantalla respetan la preferencia de movimiento reducido.

El plan y el registro para la siguiente sesión están en [PLAN.md](PLAN.md) y [PROGRESS.md](PROGRESS.md).
