# Sistema de diseño implementado

Esta documentación describe los estilos que existen en el portfolio. Si el código cambia, actualizar los valores aquí. Toda modificación visual futura debe conservar esta dirección, salvo que una tarea pida expresamente otra cosa.

## Dirección y principios

- Diseño editorial monocromático, sobrio y de alto contraste, con DM Sans variable local.
- El nombre monumental ocupa el centro del hero. Órbita editorial, una esfera irregular de partículas en escala de grises, ocupa el espacio a su derecha.
- Jerarquía asimétrica, números de proyecto, líneas finas y espacio negativo organizan las secciones.
- DTF Sheet usa la composición de mayor escala; Gifs App aparece como proyecto secundario.
- Perfil, contacto y caso de estudio se presentan con tipografía, texto y columnas, sin indicadores de nivel.
- La versión clara invierte la relación entre papel y tinta y mantiene la misma estructura editorial.

## Color

Los colores están declarados como variables CSS en `app/globals.css`. La órbita comparte un dibujo monocromático transparente para los dos temas. CSS lo tiñe de gris claro sobre oscuro y de gris oscuro sobre claro.

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

- El hero ocupa al menos `calc(100svh - 5rem)` en escritorio; en móvil su altura mínima usa `min(calc(100svh - 7rem), 36rem)` y crece cuando el contenido lo necesita.
- El hero alinea nombre, presentación y enlaces. La órbita es decorativa y queda detrás del contenido, sin capturar clics ni gestos. Debajo de 768 px su tamaño queda ligado al bloque del nombre para despejar disponibilidad y presentación.
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
- La órbita gira una vez cada 54 s con el perfil de escritorio y más despacio en el móvil. Las ondas pliegan las bandas y la profundidad cambia el tamaño y la opacidad de los puntos.
- Con puntero fino, la órbita se inclina hasta 5° por eje y el scroll la desplaza hasta un 7 % de su caja y reduce su opacidad hasta un 13 %. En táctil se conserva el movimiento autónomo. La tinta cambia en 180 ms y el lienzo entra en 650 ms.
- El indicador de scroll mantiene su rebote de 2 s.
- Los títulos de portada se revelan por máscara y los textos de proyectos, perfil y contacto entran con desplazamientos breves y escalonados mediante el observador existente. El contenido está disponible antes de que el observador actúe.
- Las líneas superiores de proyectos se dibujan al entrar. Las capturas se revelan y, donde el navegador admite animaciones vinculadas al viewport, tienen un desplazamiento vertical leve con escala de 1,06.
- Las imágenes de proyectos son enlaces con indicador «Ver proyecto», visible al pasar el puntero o al recibir foco y permanente en dispositivos táctiles. El destino de DTF Sheet es su caso y el de Gifs App es su repositorio.
- La órbita tiene mayor contraste y menor amplitud de deformación radial. La imagen estática y el primer cuadro comparten geometría, densidad y pose, con un fundido de 650 ms.
- Los iconos de sol/luna cambian con opacidad y rotación suave dentro de la preferencia de movimiento normal.
- Los controles y enlaces tienen transiciones de 140–180 ms.
- Las animaciones CSS se limitan a `prefers-reduced-motion: no-preference`; el contenido sigue disponible cuando la preferencia reduce movimiento.

## Imágenes

- Las capturas se sirven desde `public/` en WebP y usan `next/image` con dimensiones intrínsecas, texto alternativo descriptivo y `sizes`.
- La captura inicial del caso carga eager. Las vistas de la sección de proyectos se cargan de forma diferida.
- Las imágenes conservan proporción, ocupan el ancho de su figura y no usan esquinas redondeadas.
- El hero muestra primero una imagen estática WebP generada con la misma geometría del lienzo. CSS selecciona la variante de escritorio o móvil y aplica la tinta del tema. La imagen permanece visible con movimiento reducido y ante fallos de carga o de Canvas.

## Accesibilidad

- El documento declara español de Argentina, landmarks de cabecera, navegación, contenido principal y pie, y un enlace para saltar el menú.
- Las secciones y rutas identifican sus títulos con `aria-labelledby`; los elementos decorativos se ocultan al lector de pantalla.
- Los enlaces tienen texto de destino; los símbolos redundantes usan `aria-hidden`.
- El botón de tema tiene etiqueta accesible dinámica y estado anunciado; los controles conservan foco visible y alturas táctiles adecuadas.
- Las imágenes de contenido tienen texto alternativo. La órbita se oculta a tecnologías de asistencia.
- El tema claro/oscuro y las preferencias de movimiento se exponen mediante CSS y preferencias del sistema.
- El botón de tema comunica su estado con `aria-pressed`; su nombre anuncia el tema que activará y las transiciones de los iconos se desactivan con `prefers-reduced-motion`.

## Patrones

Permitidos: fondos neutrales, texto de alto contraste, espacio negativo, divisores finos, composiciones descentradas, numeración editorial, capturas reales de los proyectos y animación breve que aporte jerarquía.

Evitar: paletas de acento saturadas, gradientes decorativos, tarjetas repetitivas con esquinas redondeadas, interfaces tipo dashboard, barras de progreso, datos de experiencia no confirmados, fotografías de personas inventadas y movimiento que oculte contenido o interfiera con lectura y controles.

## Motion creativo incremental

- Una marca LR decorativa aparece y desaparece por máscara en el hero, sin bloquear interacción ni ocultar el contenido. Las líneas del nombre, la disponibilidad y la presentación conservan sus entradas escalonadas; la órbita mantiene su carga y suspensión existentes.
- Las imágenes de proyectos reciben perspectiva y tilt limitado a 7° con puntero fino. El indicador conserva su funcionamiento por foco y en táctil. Los enlaces de contacto responden con desplazamiento magnético máximo de 4 px; se restauran al salir o cambiar preferencias.
- El titular de contacto revela sus dos líneas con ritmos diferenciados. Se conservan las entradas, líneas y parallax progresivo de las secciones. Con movimiento reducido o sin JavaScript el contenido permanece disponible.
- CSS declara una transición editorial entre documentos donde el navegador admite View Transitions; la navegación cliente de Next no queda cubierta por esta mejora y conserva su comportamiento normal. No se fuerza ni retrasa la navegación.

## Transición entre portada y caso

- Al cambiar entre la portada y DTF Sheet mediante navegación cliente, una cortina de tinta y papel se desplaza verticalmente durante 700 ms. Presenta «01 / DTF SHEET» al entrar y «LR.» al regresar. El cambio de ruta no espera a la animación; la capa es decorativa, no captura eventos y se retira también mediante un límite de seguridad de 900 ms.
- La cortina se omite con movimiento reducido y en la carga directa de una página. Los enlaces mantienen destinos y fragmentos; el historial y el botón Atrás conservan su comportamiento nativo.

## Scramble y perspectiva interactiva

- Los enlaces de navegación y contacto revelan su texto en 560 ms al pasar un puntero fino; la presentación profesional y los números de proyecto lo hacen al entrar en pantalla. El texto original mantiene el espacio y la semántica; una capa decorativa oculta a lectores de pantalla muestra los caracteres temporales. Se ejecuta una animación de texto a la vez y se respeta movimiento reducido.
- La perspectiva de las imágenes conserva 1200 px, con rotación hasta 7° por eje y escala máxima de 1,01. El indicador de proyecto avanza 22 px en profundidad; la interpolación CSS y el retorno duran 420 ms. El efecto de puntero se desactiva en táctil y con movimiento reducido. No se añadió iluminación para proteger la lectura de las capturas.

## Luz ambiental, morphing y tinta editorial

- Una sola luz radial fija al viewport acompaña al puntero por toda la página con interpolación CSS de 180 ms. Su capa mide 400 px; usa gris oscuro al 11 % con opacidad de capa del 95 % en claro y blanco al 5,5 % con opacidad del 100 % en oscuro. Color, intensidad y opacidad se controlan mediante variables CSS por tema y se actualizan al cambiarlo. Solo aparece con puntero fino y movimiento normal, es decorativa y no intercepta eventos.
- La órbita conserva la esfera inicial y evoluciona lentamente hacia un toroide y una hélice abstracta antes de regresar. Las posiciones de destino se precalculan; se reutilizan la densidad adaptativa, el loop, la suspensión y el fallback existentes.
- Los títulos de proyectos y perfil reciben un relleno progresivo de tinta con scroll timelines CSS cuando están disponibles. El tono inicial mantiene alta legibilidad; sin soporte o con movimiento reducido se muestra tinta completa.


## Composición móvil del hero

- Hasta 767 px el contenido comienza cerca de la navegación y la altura se limita de forma fluida para acercar proyectos. La órbita mide hasta 72 vw (máximo 20 rem), se desplaza hacia la derecha y se superpone parcialmente detrás del nombre; mantiene la tinta, animación y fallback existentes.
- En la navegación móvil los tres destinos permanecen visibles y distribuidos en una segunda fila. Se evaluó un menú hamburguesa: no se adoptó porque ocultaría tres enlaces que ya caben y requieren acceso directo. Las acciones del hero y la indicación de scroll ofrecen 44 px de altura mínima.

## Movimiento móvil y compatibilidad

- En táctil, los textos con scramble se activan una vez al entrar en pantalla; en escritorio conservan el hover. Los textos originales siguen siendo accesibles y el efecto se omite con movimiento reducido.
- Los títulos y las imágenes usan scroll timelines cuando están disponibles. Si faltan, un cálculo ligado a eventos de scroll y resize actualiza el relleno y el desplazamiento de las imágenes; sin JavaScript o sin recorte de texto queda el contenido legible. Las imágenes móviles reciben además una perspectiva vertical de hasta 2° según el scroll, sin escuchar ni bloquear gestos.
- La órbita mantiene su morphing, rotación, deformación, densidad adaptable y suspensión existentes. Su desplazamiento y atenuación responden ahora también al scroll táctil. Spotlight, magnetismo y tilt del cursor permanecen restringidos al puntero fino. La transición de rutas, las entradas y las líneas conservan sus condiciones originales y respetan movimiento reducido.
