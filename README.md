# Kamsali Vamshi Krishna — Portfolio

Personal portfolio website for **Kamsali Vamshi Krishna** — Data Analyst (Power BI & SQL) and Flutter Developer based in Hyderabad, India.

🔗 **Live:** [vamshikrishna.xyz](https://www.vamshikrishna.xyz/)

---

## ✨ Features

- **Fully responsive** — looks great on desktop, tablet, and mobile
- **Dark-mode design** with glassmorphism effects and curated color palette
- **Micro-interactions** — hover glows, staggered scroll reveals, nav underline animations, floating hero photo, back-to-top button
- **Accessibility-first** — respects `prefers-reduced-motion`, semantic HTML, ARIA labels
- **SEO-optimised** — Open Graph meta tags, proper heading hierarchy, descriptive title/meta
- **Performance-tuned** — lazy-loaded images, preloaded hero asset, GPU-accelerated animations, passive scroll listeners, deferred module script

## 🛠 Tech Stack

| Layer     | Technology                    |
| --------- | ----------------------------- |
| Structure | HTML5 (semantic)              |
| Styling   | Vanilla CSS (custom properties, media queries) |
| Logic     | Vanilla JavaScript (ES modules) |
| Fonts     | Google Fonts — Manrope, DM Mono |
| Build     | [Vite](https://vitejs.dev/)   |
| Node      | v26+                          |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **v18+** (v26 recommended)
- npm **v9+**

### Install

```bash
git clone https://github.com/dumbun/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Opens a local dev server with **hot module replacement** at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

Outputs optimised, minified, hash-stamped assets to the `dist/` folder — ready to deploy.

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally to verify everything before deploying.

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets (photo, favicon)
│   ├── vamshikrishna.png
│   └── favicon.ico
├── index.html              # Main HTML document
├── style.css               # All styles (design system + components + interactions)
├── script.js               # All JS (scroll handling, reveal animations, nav, back-to-top)
├── package.json            # npm config + Vite scripts
└── README.md               # This file
```

## 🎨 Design Decisions

- **Color palette:** Dark background (`#090b10`) with accent green (`#c7ff68`), soft blue (`#8db6ff`), and warm gold (`#ffca63`)
- **Typography:** Manrope (body/headings) + DM Mono (labels/code/kickers)
- **Animations:** Scroll-triggered reveals with staggered delays, subtle hero photo float, card hover lifts, nav link underline slides
- **No frameworks:** Pure HTML/CSS/JS for maximum control and zero runtime overhead

## ⚡ Performance

- Hero image **preloaded** with `fetchpriority="high"`
- Gallery images use **native lazy loading** (`loading="lazy"`)
- Scroll handler uses **`requestAnimationFrame`** throttling with **passive listeners**
- CSS animations use **`transform`** and **`opacity`** only (compositor-friendly, no layout thrashing)
- **`will-change`** hints on animated elements
- Vite build produces **hashed, minified** bundles with tree-shaking
- `@media (prefers-reduced-motion: reduce)` kills all animations for users who prefer it

## 📄 Sections

1. **Hero** — Name, tagline, CTA buttons, photo
2. **Story** — Background, quote, service cards
3. **Experience** — Timeline of roles (Client Server, Amazon UK, RedParrot)
4. **Selected Work** — Self-Finance (flagship), EPT, Divine Duty, + smaller projects
5. **Data & BI** — Power BI dashboards, SQL warehouse, EDA scripts
6. **Toolkit** — Skills grouped by domain
7. **Credentials** — Education, certifications, languages
8. **Contact** — Email, phone, GitHub, LinkedIn

## 📬 Contact

- **Email:** vamshikrishna8289@gmail.com
- **Phone:** +91 96660 13375
- **LinkedIn:** [linkedin.com/in/vamshi-krishna-kamsali-b38709155](https://www.linkedin.com/in/vamshi-krishna-kamsali-b38709155/)
- **GitHub:** [github.com/dumbun](https://github.com/dumbun)

## 📝 License

© 2026 Kamsali Vamshi Krishna. All rights reserved.
