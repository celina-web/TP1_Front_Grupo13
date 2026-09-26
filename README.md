# ϟ WebFest 2026 — Grupo 13

> Trabajo Práctico Grupal 1 · Desarrollo de Sistemas Web (Front End) · 2026, 2do cuatrimestre

**WebFest 2026** es el sitio web del Grupo 13, pensado como el afiche de un festival de música. Cada integrante del equipo es un "artista" del **line up**: la portada presenta al grupo y cada tarjeta lleva a su página de perfil. La **bitácora** se diseñó como un "World Tour", donde cada fecha de la gira es una reunión o avance del proyecto.

**Propósito del equipo:** aprender a construir un sitio en equipo con HTML, CSS y JavaScript, repartiendo tareas, versionando con Git y documentando cada decisión.

🔗 **Sitio publicado en Vercel:** https://tp1-front-grupo13.vercel.app

📁 **Repositorio:** https://github.com/celina-web/TP1_Front_Grupo13

---

## 📑 Índice

1. [Integrantes](#-integrantes)
2. [Tecnologías](#️-tecnologías-utilizadas)
3. [Estructura de archivos](#-estructura-de-archivos-y-carpetas)
4. [Guía de estilos](#-guía-de-estilos)
5. [Diseño adaptable](#-diseño-adaptable-breakpoints)
6. [Funciones JavaScript](#-funciones-javascript)
7. [Bitácora](#-bitácora)
8. [Uso de IA](#-uso-de-inteligencia-artificial)
9. [Evolución](#-evolución-del-proyecto)

---

## 👥 Integrantes

| # | Integrante | Perfil en el sitio | GitHub |
|---|------------|--------------------|--------|
| 01 | Sebastián | [sebastian.html](sebastian.html) | [@DevJaSeb](https://github.com/DevJaSeb) |
| 02 | Valentina | [valentina.html](valentina.html) | [@ValentinaBS](https://github.com/ValentinaBS) |
| 03 | Agustín | [agustin.html](agustin.html) | [@aguscp](https://github.com/aguscp) |
| 04 | Celina | [celina.html](celina.html) | [@celina-web](https://github.com/celina-web) |

---

## 🛠️ Tecnologías utilizadas

- **HTML5** semántico (`header`, `nav`, `main`, `section`, `article`, `dl`, `figure`).
- **CSS3** propio: Flexbox, Grid, variables CSS (custom properties), `clip-path`, transformaciones 3D y media queries.
- **JavaScript** vanilla (sin librerías): eventos, manipulación del DOM, `IntersectionObserver`.
- **Google Fonts**: Bebas Neue, Permanent Marker y Poppins.
- **Git + GitHub** para el trabajo colaborativo (una rama por integrante).
- **Vercel** para la publicación.

---

## 📂 Estructura de archivos y carpetas

```
TP1_Front_Grupo13/
├── index.html          # Portada: nombre, propósito y line up con los 4 integrantes
├── sebastian.html      # Perfil de Sebastián
├── valentina.html      # Perfil de Valentina
├── agustin.html        # Perfil de Agustín
├── celina.html         # Perfil de Celina
├── bitacora.html       # Bitácora del proceso ("World Tour")
├── css/
│   ├── style.css       # Estilos globales: navbar, portada, cards, bitácora, store
│   └── perfil.css      # Layout compartido de los perfiles individuales
├── js/
│   ├── main.js         # Menú hamburguesa, flip de cards y animaciones de scroll
│   └── valentina.js    # Función dinámica del perfil de Valentina
├── img/                # Fotos, avatares e imágenes del sitio
└── README.md
```

---

## 🎨 Guía de estilos

### Paleta de colores

| Muestra | Hex | Uso |
|---------|-----|-----|
| ![#f5efd9](https://placehold.co/20x20/f5efd9/f5efd9.png) | `#F5EFD9` | Fondo general (papel de afiche) |
| ![#111111](https://placehold.co/20x20/111111/111111.png) | `#111111` | Texto, bordes y botones |
| ![#65D98B](https://placehold.co/20x20/65D98B/65D98B.png) | `#65D98B` | Card de Sebas |
| ![#FF4F81](https://placehold.co/20x20/FF4F81/FF4F81.png) | `#FF4F81` | Card y perfil de Valen |
| ![#FF7A45](https://placehold.co/20x20/FF7A45/FF7A45.png) | `#FF7A45` | Card de Agus |
| ![#FFD447](https://placehold.co/20x20/FFD447/FFD447.png) | `#FFD447` | Card de Celi |
| ![#e83268](https://placehold.co/20x20/e83268/e83268.png) | `#E83268` | Acentos: subtítulos, comentarios de bitácora, hover |
| ![#ff7a18](https://placehold.co/20x20/ff7a18/ff7a18.png) | `#FF7A18` | Hover de los enlaces del menú |
| ![#e32f2f](https://placehold.co/20x20/e32f2f/e32f2f.png) | `#E32F2F` | Subrayado del enlace activo |

### Tipografías (Google Fonts)

| Fuente | Uso |
|--------|-----|
| [Permanent Marker](https://fonts.google.com/specimen/Permanent+Marker) | Títulos grandes y nombres de artistas (estilo marcador) |
| [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue) | Logo, año, números de las cards y fechas de la gira |
| [Poppins](https://fonts.google.com/specimen/Poppins) (400–800) | Texto general, menú y botones |

### Iconografía y recursos visuales

- **ϟ** rayo tipográfico como ícono del festival.
- **Manchas de pintura** hechas con `clip-path` (rosa y verde) en la portada.
- **Fotos a color enmarcadas** con el color de cada artista y borde negro grueso, para que todas las cards y perfiles se vean uniformes.
- Leves rotaciones (`rotate(-1deg)`) que imitan afiches pegados a mano.
- Emojis puntuales como íconos de acción.

---

## 📱 Diseño adaptable (breakpoints)

| Breakpoint | Comportamiento |
|------------|----------------|
| **≥ 1200 px** | Line up en 4 columnas; perfil en 2 columnas (póster + datos). |
| **≤ 1200 px** | Se reducen los espacios entre columnas. |
| **≤ 900 px** | Line up en 2 columnas; el perfil pasa a 1 columna con el póster arriba. |
| **≤ 700 px** | Aparece el menú hamburguesa. |
| **≤ 400 px** | Cards en 1 columna; datos, skills y botones del perfil a ancho completo. |

---

## ⚡ Funciones JavaScript

### Portada (`js/main.js`)

| Función | Descripción |
|---------|-------------|
| **Flip de las cards del line up** | Al hacer clic (o Enter/Espacio con el teclado) sobre una card, gira en 3D y muestra el dorso con información del artista. Sólo puede haber una card abierta a la vez. Actualiza `aria-pressed`, `aria-label` y `aria-hidden` para lectores de pantalla. |
| **Menú hamburguesa** | Debajo de 700 px el menú se colapsa en un botón. Al tocarlo se despliega con transición; se cierra al elegir un enlace o con la tecla `Esc`. |
| **Aparición al hacer scroll** | Con `IntersectionObserver`, las cards y las fechas de la bitácora aparecen con un fundido escalonado a medida que entran en pantalla. Respeta `prefers-reduced-motion`. |

### Perfiles

#### Valentina — Recomendador aleatorio (`js/valentina.js`)

El botón **"🎲 ¿Qué escucho / veo hoy?"** elige al azar una de las películas o discos favoritos (los lee directamente de las listas del HTML), la resalta en la lista con una animación y muestra el resultado debajo del botón (por ejemplo: *"Hoy toca disco: Clics Modernos — Charly García"*). Nunca repite la elección anterior. El mensaje está en una región `aria-live` para que también lo anuncien los lectores de pantalla.

![Captura: recomendador en el perfil de Valentina](img/perfil-valentina.png)

#### Sebastián — *(completar)*

#### Agustín — *(completar)*

#### Celina — *(completar)*

---

## 📓 Bitácora

La bitácora está en [bitacora.html](bitacora.html), accesible desde el menú principal en todas las páginas. Cada "fecha de la gira" registra una reunión del equipo con las decisiones tomadas, los problemas encontrados y cómo se resolvieron. Algunos hitos:

- **22/09** — Primera reunión: lectura de la consigna y propuestas de temática.
- **23/09** — Se elige la temática de festival de música, la paleta, las tipografías y se crea el repositorio.
- **25/09** — Estructura de archivos en la raíz, menú hamburguesa y animaciones de la portada.
- **26/09** — Flip de las cards y perfiles individuales.

---

## 🤖 Uso de Inteligencia Artificial

| Herramienta | Modelo | Plan | Para qué se usó |
|-------------|--------|------|-----------------|
| Claude Code (app de escritorio) | Claude Opus 5.5 (Anthropic) | Pago | Perfil de Valentina y README |
| *(completar por cada integrante)* | | | |

**Cómo ayudó (perfil de Valentina):**
- **Código:** propuesta del layout compartido de perfiles (`css/perfil.css`), del recomendador aleatorio (`js/valentina.js`) y del ajuste en `main.js` para que el enlace "VER PERFIL" dentro de la card no dispare el giro.
- **Contenido:** redacción del README a partir de la consigna y del código existente.
- **Revisión propia:** se revisaron y probaron los cambios en el navegador en los tres breakpoints, se adaptaron los textos y se verificó que no haya errores en consola antes de hacer commit.

**Imágenes:** la foto del perfil es una foto real de una mascota (no generada con IA), elegida para no publicar fotos personales, como sugiere la consigna.

**Experiencia previa del equipo:** *(completar)*

---

## 🚀 Evolución del proyecto

Ideas para los próximos trabajos prácticos:

- [ ] Modo oscuro ("modo noche de festival") con un botón en la navbar.
- [ ] Reproductor con fragmentos de los discos favoritos.
- [ ] Mejorar la accesibilidad (contraste, foco visible) y medir con Lighthouse.