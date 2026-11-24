# Sistema de diseño implementado

Esta documentación describe los estilos que existen en el portfolio. Si el código cambia, actualizar los valores aquí. Toda modificación visual futura debe conservar esta dirección, salvo que una tarea pida expresamente otra cosa.

## Dirección y principios

- Diseño editorial monocromático, sobrio y de alto contraste, con DM Sans variable local.
- El nombre monumental ocupa el centro del hero; una forma abstracta en escala de grises se mueve detrás del texto.
- Jerarquía asimétrica, números de proyecto, líneas finas y espacio negativo organizan las secciones.
- DTF Sheet usa la composición de mayor escala; Gifs App aparece como proyecto secundario.
- Perfil, contacto y caso de estudio se presentan con tipografía, texto y columnas, sin indicadores de nivel.
- La versión clara invierte la relación entre papel y tinta y mantiene la misma estructura editorial.

## Color

Los colores están declarados como variables CSS en `app/globals.css`. La forma artística del hero usa además una mezcla de grises fija.

| Variable | Claro | Oscuro |
| --- | --- | --- |
| `--bg` | `#f0f0ed` | `#101110` |
| `--surface` | `#e5e5e1` | `#191a19` |
| `--surface-raised` | `#dadad6` | `#222321` |
| `--text` | `#111211` | `#f2f2ef` |
| `--muted` | `#51534f` | `#b6b8b2` |
| `--line` | `#b8bab5` | `#42443f` |
| `--accent` | `#111211` | `#f2f2ef` |
| `--accent-soft` | `#deded9` | `#292a27` |
| `--on-accent` | `#f0f0ed` | `#101110` |

El botón de tema alterna entre Claro y Oscuro y guarda la selección manual bajo `portfolio-theme`. Antes de la primera elección, el sitio sigue `prefers-color-scheme`; si cambia el sistema mientras no hay elección guardada, el icono y el tema efectivo se actualizan.

## Tipografía

`DM Sans` se sirve desde `app/fonts/dm-sans-latin.woff2` con pesos variables de 400 a 700 y licencia OFL. El cuerpo usa 18 px y `line-height: 1.6`. La escala implementada usa `clamp()` para adaptarse al ancho disponible.

| Uso | Regla implementada |
| --- | --- |
| Nombre del hero | `clamp(3.15rem, 12vw, 13rem)`; en móvil `clamp(3rem, 13.7vw, 6.5rem)`, line-height `.78` |
| Títulos de sección | `clamp(2.75rem, 5.5vw, 6rem)`, line-height `1` |
| Título del caso | `clamp(3rem, 6vw, 6rem)`, line-height `.98` |
| Título de contacto | `clamp(3.5rem, 8vw, 8rem)`, line-height `.85` |
| Títulos de proyecto | `clamp(2.25rem, 4vw, 4rem)` |
| Introducción del hero | `clamp(1.125rem, 1.3vw, 1.25rem)` |
| Navegación y botones | 16 px; marca 17.6 px; selector 15.2 px |
| Pies, etiquetas y numeración | 16 px en reglas de componente; algunos rótulos del hero usan 15.2 px |

Los titulares usan peso regular y tracking negativo. El cuerpo utiliza peso regular y un interlineado generoso.

## Espaciado y contenedores

- Márgenes laterales: `--gutter: clamp(1.15rem, 4vw, 5rem)`.
- Ancho máximo compartido: 100 rem (1600 px).
- Ritmo de sección general: `--section-space: clamp(4rem, 7vw, 7rem)`.
- Separación de retícula base: `--grid-gap: 1.5rem`.
- Los detalles del caso usan 3.5–5.5 rem entre secciones según la regla responsiva del componente.
- La navegación tiene una altura mínima de 5 rem en escritorio y se divide en dos filas debajo de 640 px.

## Retícula y composición

- El hero ocupa al menos `calc(100svh - 5rem)` en escritorio y `calc(100svh - 7rem)` en móvil.
- El hero alinea nombre, presentación y enlaces; el arte abstracto se posiciona detrás y no captura interacción.
- El perfil usa dos columnas y una separación horizontal de 5 rem; pasa a una columna debajo de 640 px.
- El proyecto principal usa columnas 1:2; Gifs App usa dos columnas y un ancho máximo del 75 %. Ambos pasan a una columna debajo de 768 px.
- El caso muestra la captura principal en una retícula de dos columnas desde 1024 px. El texto conserva más espacio que la imagen en la introducción.
- Las secciones se separan mediante bordes superiores de un píxel.

## Breakpoints presentes

- `639px`: navegación, perfil y espaciado de la sección de habilidades.
- `767px`: composición de proyectos y hero.
- `768px`: pasos y detalles del caso pasan a retículas de varias columnas.
- `1024px`: composición del caso en dos columnas.
- `1410px`: ajuste del tamaño de imagen del caso para su contenedor amplio.

## Enlaces y controles

- Enlaces con subrayado desplazado del texto; el grosor aumenta al pasar el puntero.
- Navegación y marca tienen altura mínima de 44 px.
- El control de tema es un botón cuadrado de 44 × 44 px, con icono lineal monocromático, etiqueta accesible dinámica y tooltip con su acción.
- Botones cuadrados, con borde fino, superficie neutra, texto de 16 px, padding de `.75rem 1.1rem` y altura mínima de 52 px.
- El botón primario invierte tinta y fondo según el tema.
- El foco visible tiene contorno sólido de 2 px y desplazamiento de 4 px.
- El enlace para saltar al contenido aparece al recibir foco.

## Movimiento

- El nombre entra por máscara y sus dos líneas se escalonan por 140 ms.
- Disponibilidad y bloque inferior aparecen con una entrada suave.
- La forma abstracta deriva lentamente durante 12 s; el indicador de scroll rebota cada 2 s.
- Los elementos marcados `data-reveal` reciben una entrada breve al entrar en el viewport mediante `IntersectionObserver`.
- Las imágenes de proyectos amplían a escala 1.025 al pasar el puntero y se revelan al aparecer.
- Los iconos de sol/luna cambian con opacidad y rotación suave dentro de la preferencia de movimiento normal.
- Los controles y enlaces tienen transiciones de 140–180 ms.
- Las animaciones CSS se limitan a `prefers-reduced-motion: no-preference`; el contenido sigue disponible cuando la preferencia reduce movimiento.

## Imágenes

- Las capturas se sirven desde `public/` en WebP y usan `next/image` con dimensiones intrínsecas, texto alternativo descriptivo y `sizes`.
- La captura inicial del caso carga eager. Las vistas de la sección de proyectos se cargan de forma diferida.
- Las imágenes conservan proporción, ocupan el ancho de su figura y no usan esquinas redondeadas.

## Accesibilidad

- El documento declara español de Argentina, landmarks de cabecera, navegación, contenido principal y pie, y un enlace para saltar el menú.
- Las secciones y rutas identifican sus títulos con `aria-labelledby`; los elementos decorativos se ocultan al lector de pantalla.
- Los enlaces tienen texto de destino; los símbolos redundantes usan `aria-hidden`.
- El botón de tema tiene etiqueta accesible dinámica y estado anunciado; los controles conservan foco visible y alturas táctiles adecuadas.
- Las imágenes de contenido tienen texto alternativo y el elemento abstracto del hero no se anuncia.
- El tema claro/oscuro y las preferencias de movimiento se exponen mediante CSS y preferencias del sistema.
- El botón de tema comunica su estado con `aria-pressed`; su nombre anuncia el tema que activará y las transiciones de los iconos se desactivan con `prefers-reduced-motion`.

## Patrones

Permitidos: fondos neutrales, texto de alto contraste, espacio negativo, divisores finos, composiciones descentradas, numeración editorial, capturas reales de los proyectos y animación breve que aporte jerarquía.

Evitar: paletas de acento saturadas, gradientes decorativos, tarjetas repetitivas con esquinas redondeadas, interfaces tipo dashboard, barras de progreso, datos de experiencia no confirmados, fotografías de personas inventadas y movimiento que oculte contenido o interfiera con lectura y controles.
