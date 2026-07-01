# Premium Portfolio Redesign — Design Spec

**Date:** 2026-07-01
**Owner:** Pavan Sri Ram Gunnam
**Goal:** Elevate the existing Vite + React portfolio into an Awwwards-tier, production-ready site — premium, fast, accessible, SEO-complete — without a from-scratch rebuild.

## Decisions (locked)

- **Stack:** Vite + React 18 + **TypeScript** + Tailwind + Framer Motion + EmailJS. Minimal new deps: `lucide-react`, `clsx`, `tailwind-merge`, `@fontsource/sora`, `@fontsource/inter`.
- **Identity:** Modern minimal + accent. Deep charcoal canvas, one electric indigo→violet accent, CSS-generated aurora/mesh glow (no heavy photo background).
- **Theme:** Dark-only, perfected (no light mode / toggle).
- **Positioning:** Graduate AI/ML + Full-Stack engineer, currently **SDE-1 @ LoopLink AI**.
- **Projects vs work:** Featured Projects = GitHub repos (linked). Company POCs surfaced as Experience achievements.

## Architecture

Replace the single 339-line `App.jsx` monolith with a typed, modular structure:

```
src/
  main.tsx, App.tsx, index.css, vite-env.d.ts
  data/resume.ts            # typed single source of truth for all content
  types/index.ts            # Project, Experience, Certification, SkillGroup, Education
  lib/utils.ts              # cn() (clsx + tailwind-merge) + helpers
  hooks/
    useActiveSection.ts     # IntersectionObserver active-nav tracking
    useScrollProgress.ts    # scroll % for progress bar
  animations/variants.ts    # fadeInUp, stagger, etc. (reduced-motion aware)
  components/
    layout/    Navbar.tsx, MobileMenu.tsx, Footer.tsx
    background/ AuroraBackground.tsx
    common/    ScrollProgress.tsx, ScrollReveal.tsx, AnimatedRoles.tsx,
               MagneticButton.tsx, ErrorBoundary.tsx, BackToTop.tsx
    ui/        Section.tsx, SectionHeading.tsx, GlassCard.tsx, Button.tsx, SkillPill.tsx, TechTag.tsx
    sections/  Hero, About, Experience, Projects, Skills, Certifications, Contact
```

## Design System (dark)

- Tokens as CSS variables in `index.css` + surfaced in `tailwind.config`: `background #08080c`, layered surfaces, `foreground`, `muted`, `border`; accent indigo `#6366f1` → violet `#a855f7`; semantic `success/warning/error`.
- Typography: **Sora** (display) + **Inter** (body), self-hosted via `@fontsource`; fluid `clamp()` sizing, tuned line-height/tracking.
- Depth: consistent radii, elevation shadow scale, accent glow, restrained glass.
- Aurora background: CSS mesh gradients, subtle animation, static under `prefers-reduced-motion`. Removes the 2MB Unsplash image, `background-attachment:fixed`, and 60s pan.

## Sections

1. **Hero** — name, animated role rotator (SDE-1 @ LoopLink AI · AI/ML Engineer · Full-Stack Developer), subheadline, CTAs (View Work, Download CV → `/public` PDF, Get in Touch), social links, gradient-ring profile image, magnetic buttons, subtle parallax.
2. **About** — graduate-framed bio, quick-stat chips, education cards, GRE/IELTS, personality.
3. **Experience** — animated vertical timeline: LoopLink (SDE-1, 2026–Present), Praval (PII gateway w/ Presidio+Ollama, deprecation finder w/ Jina+Gemini, Copilot agents, ERP/SCM pharma POCs, Resource Pilot [React + C# MVC]), Deepcrafts (RAG agent), Deloitte sim, AWS + GCP programs. Tech tags per entry.
4. **Projects** — GitHub repos as cards with generated gradient covers, tech-stack tags, hover lift, GitHub links; live-demo slot wired for future URLs.
5. **Skills** — grouped cards: Languages · Frontend · AI/ML · Cloud & DevOps · Tools, staggered reveal, icons.
6. **Certifications** — grouped by provider (Google Cloud badge cluster, AWS, IIT-Bombay Spoken Tutorial, HF, etc.); condensed, animated cards.
7. **Contact** — EmailJS form with validation + loading + success/error states; **keys via `import.meta.env`**; social links.
8. **Footer** — quick links, socials, back-to-top, copyright.

## Navigation & Scroll
Sticky blurred navbar, active-section highlight, smooth scroll, working animated mobile drawer, top scroll-progress bar, reveal-on-scroll.

## Motion
Transform/opacity-only for 60fps; spring hovers, stagger reveals, magnetic CTAs, role rotator, hero parallax, animated aurora. All gated by `prefers-reduced-motion`.

## Performance / SEO / A11y
- **Perf:** remove heavy bg + double image load; self-host fonts; lazy-load below-fold sections; hero image sizing + `fetchpriority`; transform-only motion. Target Lighthouse 95+.
- **SEO:** full meta + description, OG + Twitter cards, JSON-LD Person schema, canonical, favicon, `og:image`, `robots.txt`, `sitemap.xml`, `theme-color`.
- **A11y:** semantic landmarks, skip-to-content, aria-labels, focus-visible rings, keyboard-navigable menu, AA contrast. Target 100.

## Tooling / Deploy
Add `tsconfig(.node).json`, ESLint (typescript + react-hooks + react-refresh), `.env.example`, cleaned `package.json` scripts (`dev`/`build`/`preview`/`lint`/`typecheck`), simplified modern `vercel.json` SPA rewrite. Zero TS/lint errors; clean production build.

## Constraints
- Incremental refactor on a feature branch; site buildable at each step.
- No functionality removed until its replacement works.
- Content sourced from resume PDF + user's career notes (LinkedIn not machine-accessible).

## Out of scope
Light mode, blog/CMS, project screenshots (until user provides), live-demo links (until user provides URLs), i18n.
