# Pavan Gunnam — Portfolio

A premium, production-ready developer portfolio built with **Vite + React + TypeScript**, styled with **Tailwind CSS**, and animated with **Framer Motion**. Dark, minimal, fast, accessible.

**Live:** https://pavangunnam.vercel.app/ · **Owner:** Gunnam Pavan Sri Ram Manikanta

---

## Tech stack

| Concern      | Choice |
|--------------|--------|
| Build tool   | Vite 4 |
| Framework    | React 18 + TypeScript (strict) |
| Styling      | Tailwind CSS 3 (token-driven, TS config) |
| Motion       | Framer Motion 10 |
| Icons        | lucide-react (+ inline brand SVGs) |
| Fonts        | Self-hosted Sora + Inter via `@fontsource` |
| Contact      | EmailJS (env-configured, mailto fallback) |
| Hosting      | Vercel (SPA) |

## Getting started

```bash
npm install
npm run dev        # start dev server
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run build      # typecheck + production build → dist/
npm run preview    # preview the production build
```

## Environment variables

The contact form uses [EmailJS](https://www.emailjs.com/). Copy `.env.example` to `.env` and fill in:

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

The EmailJS template should expose `user_name`, `user_email`, and `message` variables. **If these are unset, the form gracefully falls back to opening the visitor's mail client** (`mailto:`), so the site never ships a broken form.

## Project structure

```
src/
  data/resume.ts            # single typed source of truth for all content
  types/index.ts            # content types (Profile, Experience, Project, …)
  lib/utils.ts              # cn() + smooth scroll helper
  hooks/                    # useActiveSection, useScrollProgress
  animations/variants.ts    # shared Framer Motion variants
  components/
    background/  AuroraBackground        # CSS mesh-gradient backdrop
    common/      ScrollProgress, ScrollReveal, MagneticButton, AnimatedRoles,
                 ErrorBoundary, BackToTop, icons (brand + social resolver)
    ui/          Section, SectionHeading, GlassCard, Button, TechTag, SkillPill
    layout/      Navbar, MobileMenu, Footer
    sections/    Hero, About, Experience, Projects, Skills, Certifications, Contact
  App.tsx                   # composition: skip-link, bg, nav, lazy sections, footer
  main.tsx                  # entry
public/                     # resume PDF, favicon, og-image, robots.txt, sitemap.xml
docs/superpowers/           # design spec + implementation plan
```

**Editing content:** everything visible on the site lives in [`src/data/resume.ts`](src/data/resume.ts). Update text, experience, projects, skills, and certifications there — no component edits required.

## Design system

Tokens are defined once as CSS variables in [`src/index.css`](src/index.css) (colors as RGB channels for Tailwind opacity support) and surfaced through [`tailwind.config.ts`](tailwind.config.ts): `background`, `surface`, `foreground`, `muted`, `border`, `accent` (indigo→violet), and semantic `success/warning/error`. Typography pairs **Sora** (display) with **Inter** (body).

## Highlights

- **Performance:** removed the old ~2 MB remote background photo and `background-attachment: fixed` pan in favor of a cheap CSS aurora; self-hosted fonts; below-the-fold sections are code-split via `React.lazy`; hero image uses `fetchpriority="high"` + explicit dimensions.
- **Motion:** stagger reveals, spring hovers, magnetic CTAs, an animated role rotator, hero parallax, and an animated scroll-progress bar — all transform/opacity based and fully gated by `prefers-reduced-motion`.
- **Navigation:** sticky blurred navbar with IntersectionObserver-based active-section highlighting (resilient to lazy mounts), smooth scroll, and an animated accessible mobile drawer.
- **Accessibility:** semantic landmarks, skip-to-content link, `aria-label`s, visible focus rings, keyboard-navigable menu (Escape to close, scroll lock), and a live-region form status.
- **SEO:** description, Open Graph + Twitter cards, JSON-LD `Person` schema, canonical URL, `theme-color`, favicon, `robots.txt`, and `sitemap.xml`.
- **Resilience:** an `ErrorBoundary` wraps the app so a render error shows a friendly fallback instead of a blank page.

## Deployment (Vercel)

1. Push to GitHub and import the repo in Vercel (framework preset: **Vite**).
2. Add the three `VITE_EMAILJS_*` environment variables in Vercel project settings.
3. Deploy. [`vercel.json`](vercel.json) already handles SPA routing (rewrites all paths to `index.html`).

> **Update before going live:** the canonical/OG/sitemap URLs in [`index.html`](index.html), [`public/sitemap.xml`](public/sitemap.xml), and [`public/robots.txt`](public/robots.txt) use `https://pavangunnam.vercel.app/` as a placeholder. Change them to your real production domain.

## Future enhancements

- Add real project screenshots / live-demo URLs (cards already support a `demo` field).
- Swap the SVG `og-image` for a rasterized PNG (some crawlers don't render SVG social images).
- Optional light theme (the token system is ready for a second palette).
- A blog or writing section, and analytics.
```
