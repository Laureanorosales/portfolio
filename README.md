# Laureano Rosales — Portfolio

Portfolio personal de **Laureano Rosales**, frontend developer en formación. Construido con Next.js, React y CSS Modules, con tipografía y paleta de colores cuidadosamente elegidas para transmitir una estética limpia y moderna.

## 🔗 Secciones

| Sección | Descripción |
|---------|-------------|
| **Hero** | Presentación con nombre, descripción, stack actual con barras de progreso y badge de disponibilidad |
| **Proyectos** | Grilla de proyectos (próximamente) |
| **Skills** | Tarjetas de tecnologías: JavaScript, React, Next.js, CSS |
| **Contacto** | Links a GitHub y LinkedIn |
| **Footer** | Firma y año |

## 🛠️ Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Lenguaje**: TypeScript
- **Estilos**: CSS Modules + Variables CSS personalizadas
- **Tipografía**: DM Sans & DM Serif Display (Google Fonts)
- **Iconos**: [Tabler Icons](https://tabler.io/icons) (webfont)

## 📁 Estructura

```
app/
├── layout.tsx              # Root layout (fuentes, metadata)
├── page.tsx                # Página principal
├── globals.css             # Variables CSS, reset, estilos base
└── components/
    ├── Navbar/             # Barra de navegación con links de anclaje
    ├── Hero/               # Sección de presentación con stack
    ├── Projects/           # Grilla de proyectos
    ├── Skills/             # Tarjetas de tecnologías
    ├── Contact/            # Links de contacto (GitHub, LinkedIn)
    └── Footer/             # Pie de página
```

## 🎨 Design Tokens

El diseño usa una paleta cálida definida como variables CSS en `globals.css`:

| Variable | Valor | Uso |
|----------|-------|-----|
| `--bg` | `#f8f6f1` | Fondo principal |
| `--bg-card` | `#edeae3` | Fondo de tarjetas |
| `--accent` | `#6b7c5e` | Color de acento (verde musgo) |
| `--text-muted` | `#666` | Texto secundario |
| `--font-sans` | DM Sans | Cuerpo |
| `--font-serif` | DM Serif Display | Títulos / headings |

## 🚀 Correr localmente

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📬 Contacto

- **GitHub**: [Laureanorosales](https://github.com/Laureanorosales)
- **LinkedIn**: [Laureano Rosales](https://www.linkedin.com/in/laureano-rosales-6b3425239)
