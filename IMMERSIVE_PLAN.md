# Plan de evolución inmersiva del hero

## 1. Concepto artístico: órbita editorial

Una esfera irregular de puntos, como una superficie digital flexible, acompaña el nombre sin competir con él. La referencia disponible es `referencias/particles-reference` (sin extensión; no existe el archivo `.png` indicado): muestra una masa esférica blanca sobre negro, con bandas onduladas, densidad variable y vacíos interiores. Se toma su sensación de volumen y trama, no su encuadre literal ni su brillo uniforme.

Se conserva la composición editorial de `DESIGN.md`: DM Sans monumental, asimetría, espacio negativo, grises y ambos temas. El nombre sigue siendo el centro visual; la figura es un acento silencioso. No se modifican contenido profesional, proyectos, caso, CV ni destinos.

## 2. Figura de partículas

Una envolvente aproximadamente esférica, ligeramente achatada e irregular, con unas 2.500–4.000 partículas en escritorio como punto de partida medible. Distribución casi uniforme sobre una superficie tridimensional, desplazada con ondas suaves de baja frecuencia para formar pliegues y bandas; pequeñas variaciones deterministas de posición evitan una rejilla perfecta. La proyección por profundidad modula tamaño y opacidad: puntos lejanos más tenues y pequeños, sin halos, conexiones, colores ni destellos. Evitar tanto una bola sólida como una nube aleatoria sin silueta.

En oscuro: gris claro sobre `--bg`; en claro: gris oscuro sobre el fondo claro, con intensidad equivalente y sin introducir una placa negra. La densidad y opacidad finales se ajustarán frente a capturas de ambos temas. La figura no debe degradar el contraste del texto: reservar una zona de exclusión suave alrededor de letras y bloques de lectura o desplazar la figura hacia el espacio libre; priorizar la colocación antes que oscurecer el texto con efectos.

## 3. Comportamiento visual e interactivo

- Rotación lenta y continua, aproximadamente una vuelta cada 45–60 s, con deformación orgánica aún más lenta y amplitud contenida. Sin movimiento aleatorio nervioso.
- Puntero fino: inclinación global suavizada limitada a unos 5° y retorno gradual al salir; opcionalmente una repulsión local muy leve si no rompe la silueta. No interceptar clics ni foco: observar el puntero en el hero y mantener la capa decorativa con `pointer-events: none`.
- Scroll: desplazar o atenuar la figura como máximo un 10–15 % durante la salida del hero, sin fijarla ni añadir scroll artificial. Parar el bucle al quedar fuera de pantalla.
- En táctil no simular hover ni capturar gestos. La figura conserva solo movimiento idle reducido. Todo valor es una hipótesis visual que se calibrará con dispositivos reales.

## 4. Integración en el hero

Sustituir exclusivamente la capa `.art` actual de `Hero.tsx`, manteniendo el contenido semántico del servidor y su orden. La escena decorativa queda detrás de `.content`, dentro del contexto aislado existente y oculta a tecnologías de asistencia. En escritorio ocupará aproximadamente el tercio derecho, con centro cerca del 70 % del ancho; puede cruzar ligeramente la zona del nombre solo donde siga siendo legible. Disponibilidad, descripción, enlaces y scroll deben quedar despejados. Ajustar posición y escala a las proporciones reales, no imponer una esfera centrada.

Debajo de 768 px, reducir tamaño, densidad y contraste, desplazarla hacia la derecha y preferir espacios entre bloques; nunca desplazar contenido ni crear overflow. La estructura actual, tamaños, enlaces, indicador de disponibilidad y selector de tema permanecen intactos. El lienzo reserva su caja desde el primer render para evitar desplazamientos.

## 5. Animaciones por sección

- **Hero:** conservar la entrada existente por máscara del nombre (1 s, escalonada 140 ms); disponibilidad y bloque inferior mantienen su entrada. La figura aparece mediante opacidad en 600–900 ms después de iniciar el nombre, sin retrasar el contenido.
- **Idle e interacción:** aplicar los límites del apartado 3 con interpolación temporal; sin variaciones bruscas ni animaciones dependientes del frame rate.
- **Indicador de scroll:** conservar el enlace funcional y su movimiento discreto existente; detenerlo con movimiento reducido.
- **Tema:** conservar el selector, persistencia y transiciones existentes. Interpolar el color de partículas brevemente junto al cambio de variables, sin animar un fondo bajo texto de manera que comprometa el contraste.
- **Proyectos, perfil, contacto y caso:** mantener las entradas `data-reveal` y los tratamientos actuales; no añadir secuencias ni bloqueos. La figura no controla la visibilidad de ninguna sección.
- **Movimiento reducido:** mostrar inmediatamente el contenido y una figura estática; sin bucle, desplazamiento, parallax ni respuesta al puntero. Responder también a cambios de preferencia durante la sesión.

## 6. Tecnología recomendada

**Híbrida: Canvas 2D + CSS + `requestAnimationFrame`**, con proyección 3D sencilla calculada en JavaScript. Canvas dibuja puntos y profundidad; CSS mantiene composición, tema y entrada; el observador existente sigue gestionando secciones. Es suficiente para una sola figura y evita incorporar un motor 3D a un proyecto que hoy solo depende de Next 16.2.7 y React 19.2.4. A 2.500–4.000 puntos el coste en CPU debe medirse: no se presupone que Canvas 2D sea más rápido en todos los equipos.

| Alternativa | Valoración |
| --- | --- |
| WebGL + React Three Fiber | Buena opción para geometrías, efectos y grandes cantidades en GPU, pero añade Three.js y R3F, gestión de contexto y compatibilidad de versiones. Es excesiva para esta escena inicial. |
| Canvas 2D puro | Menos dependencias y fallback sencillo; la proyección y el dibujo consumen CPU y pueden limitar la densidad en móviles. |
| Híbrida recomendada | Canvas 2D para el arte y CSS para presentación y accesibilidad; conserva la arquitectura actual y permite recortar calidad sin afectar el contenido. |

Drei y shaders no son necesarios para esta propuesta. Si el prototipo medido no cumple los objetivos con una densidad visual aceptable, comparar WebGL con geometría de puntos y shader mínimo antes de adoptar Three/R3F; verificar compatibilidad real con las versiones instaladas y tamaño del bundle. No instalar nada en esta fase.

## 7. Rendimiento

- Mantener `Hero` y contenido renderizados por servidor; cargar dinámicamente un componente cliente aislado solo para el arte después del primer pintado, con fallback reservado. Consultar la documentación local de Next correspondiente a componentes cliente y carga diferida antes de implementar.
- Iniciar únicamente cuando el hero esté visible y la pestaña activa. Cancelar `requestAnimationFrame`, listeners y observers al desmontar; pausar con `visibilitychange` e `IntersectionObserver`, y reanudar sin salto temporal. Observar cambios de tamaño sin redibujar en cada evento sin control.
- Limitar DPR a 1,5 en escritorio y 1 en móvil como valores iniciales. Comenzar con 2.500–4.000 puntos en escritorio y 800–1.500 en móvil; reducir por niveles ante tiempo de frame sostenido elevado, sin detectar capacidad solo mediante user agent. No recalcular distribución ni crear objetos por punto en cada frame.
- Presupuesto inicial a validar en build de producción: 30 FPS sostenidos como mínimo en un móvil de gama media representativo, 60 FPS como objetivo en escritorio, sin tareas largas repetidas ni aumento apreciable de temperatura; comparar con la línea base en los mismos equipos. Medir LCP, CLS, tiempo de CPU y peso transferido con y sin escena y red/CPU limitadas. Objetivo CLS adicional ≤ 0,01 y LCP sin regresión superior a 200 ms en la mediana de cinco recorridos comparables. Ajustar o desactivar la escena si no se cumplen.

## 8. Fallbacks

El fallback primario es una imagen estática local y ligera de la misma figura, con versiones tonales para ambos temas, dentro de la misma caja y sin texto alternativo por ser decorativa. Mostrarla antes de cargar y mantenerla si falla la importación, el contexto 2D, el dibujo o JavaScript; sustituirla solo después del primer frame válido. Si tampoco carga la imagen, el hero queda legible sin arte. Con movimiento reducido conservar únicamente la imagen estática y evitar cargar el módulo animado. Si se optara por WebGL en una fase posterior, manejar pérdida y restauración del contexto, volviendo al fallback ante fallo. Nunca ocultar el H1 ni enlaces mientras carga la escena.

## 9. Riesgos técnicos

- Puntos detrás de letras pueden reducir contraste local o generar ruido: evaluar los dos temas, recortes y estados de movimiento; ajustar exclusión, posición o densidad.
- La proyección y miles de llamadas de dibujo pueden saturar CPU móvil: medir y bajar niveles, o revisar la tecnología si persiste.
- Hidratación y tema inicial pueden causar destellos: usar el tema efectivo existente y no leer preferencias del navegador durante el render del servidor.
- Cambios de tamaño, salida de página y montaje/desmontaje pueden dejar bucles activos: probar limpieza y cambios de ruta.
- Fallback, imports y preferencias pueden fallar independientemente: probar explícitamente JavaScript desactivado, carga fallida y cambios en vivo. Las métricas históricas de `FINAL_QA.md` son locales sin throttling, no una garantía de rendimiento real.

## 10. Fases de implementación

1. Registrar capturas y métricas de referencia del estado actual; revisar documentación local de Next y estilos del hero. Confirmar que la escena no afecta la ruta del caso.
2. Prototipar distribución, proyección y fallback estático; ajustar silueta, profundidad y densidad en ambos temas antes de integrar movimiento.
3. Integrar cliente diferido y caja estable; añadir idle, puntero fino, scroll limitado y gestión de ciclo de vida. Mantener el servidor y los enlaces intactos.
4. Implementar niveles de calidad y movimiento reducido; probar fallos de carga/contexto, suspensión y reanudación. Medir y ajustar según presupuestos.
5. Validar matriz visual, accesibilidad y rendimiento; ejecutar lint, tipos y build. Actualizar `DESIGN.md` y `PROGRESS.md` con decisiones y resultados reales, sin publicar ni hacer push sin autorización.

## 11. Criterios de aceptación

- Figura reconocible como volumen de puntos orgánico, sobria y coherente con la referencia y `DESIGN.md`; el nombre domina visualmente en ambos temas.
- H1, presentación, disponibilidad, enlaces y CV visibles y operables desde el primer render; sin cambios de contenido ni destinos. Sin superposiciones que dificulten lectura, selección o interacción.
- Revisar portada y caso en claro y oscuro a 320, 390, 768, 1024, 1440 y 1920 px; sin overflow ni desplazamiento de layout atribuible al arte. Revisar también zoom al 200 % y teclado con foco visible.
- Verificar contraste del texto sobre la escena en posiciones y frames representativos, mínimo WCAG AA: 4,5:1 para texto normal y 3:1 para texto grande. Si no se garantiza en movimiento, ampliar la exclusión o mover la figura.
- Puntero y scroll suaves sin capturar eventos; táctil desplazable; pestaña oculta y hero fuera de viewport sin bucle activo. Movimiento reducido y fallos presentan estado estático y contenido completo.
- Cumplir los presupuestos medidos del apartado 7 o documentar y resolver la regresión antes de dar por terminada la implementación. Lint, TypeScript, build, consola y pruebas de accesibilidad sin regresiones; inspección visual además de pruebas automáticas.

## 12. Instrucciones para el siguiente modelo

Leer `AGENTS.md`, `DESIGN.md`, este plan y los archivos reales del hero y tema antes de trabajar; consultar `node_modules/next/dist/docs/` para las APIs que se usen. Tratar los números de partículas, duración y posición como valores iniciales, no como resultados medidos. Prototipar y verificar en producción local; documentar las mediciones, equipo y limitaciones sin inventar resultados. Conservar proyectos, caso, CV y contenido. Evitar bibliotecas adicionales salvo que las mediciones justifiquen el cambio de arquitectura. Actualizar `PROGRESS.md` y, si cambia el diseño implementado, `DESIGN.md`. No hacer push ni desplegar sin autorización.
