# Tanishq Homepage Clone — Vite + React + SCSS

A pixel-accurate recreation of the Tanishq homepage built with **Vite + React (no TypeScript) + SCSS**.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## 📦 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server (HMR) |
| `npm run build` | Build for production → `/dist` |
| `npm run preview` | Preview production build locally |

## 🗂 Project Structure

```
tanishq-homepage/
├── index.html                    ← Vite root HTML
├── vite.config.js                ← Vite config with React plugin
├── package.json
├── src/
│   ├── main.jsx                  ← Vite entry point
│   ├── App.jsx                   ← Root component
│   ├── components/
│   │   ├── Navbar.jsx            ← Sticky nav + mega-menu dropdowns
│   │   ├── HeroSlider.jsx        ← Auto-playing 5-slide banner carousel
│   │   ├── Collections.jsx       ← 3-column collections grid
│   │   ├── ShopByCategory.jsx    ← Circular category thumbnails
│   │   ├── TrendingNow.jsx       ← Trending editorial cards
│   │   ├── TanishqWorld.jsx      ← Wedding / Gold / Diamond / Dailywear
│   │   ├── Assurance.jsx         ← Maroon trust strip
│   │   ├── ExchangeProgram.jsx   ← Stats + CTA section
│   │   ├── GenderShop.jsx        ← Women / Men / Kids cards
│   │   ├── TanishqExperience.jsx ← Service cards (Store, Appointment…)
│   │   └── Footer.jsx            ← Full footer
│   └── styles/
│       ├── _variables.scss       ← Brand colors, fonts, breakpoints
│       ├── _global.scss          ← Reset, base styles, animations
│       ├── _navbar.scss          ← Navbar + mega-menu
│       ├── _hero.scss            ← Hero slider
│       ├── _sections.scss        ← All homepage sections
│       ├── _footer.scss          ← Footer
│       └── main.scss             ← SCSS entry (imports all partials)
```

## 🎨 Design Tokens

| Token | Value |
|---|---|
| Brand maroon | `#7B1C1C` |
| Gold accent | `#C8A96E` |
| Serif font | Cormorant Garamond |
| Sans font | Jost |

## ✨ Features
- Sticky navbar with hover mega-menu (all Tanishq nav items)
- Auto-playing hero slider — 5 banners, 5s interval, dot + arrow controls
- Scroll-triggered fade-in-up on every section (IntersectionObserver)
- Hover zoom on all image cards
- Real Tanishq CDN images with Unsplash fallbacks
- Fully responsive (desktop / tablet / mobile)
