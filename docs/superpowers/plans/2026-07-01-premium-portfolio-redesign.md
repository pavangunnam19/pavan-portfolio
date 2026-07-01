# Premium Portfolio Redesign Implementation Plan

> **For agentic workers:** Steps use checkbox (`- [ ]`) syntax for tracking. Executed inline this session.

**Goal:** Refactor the single-file Vite/React portfolio into a typed, modular, Awwwards-tier dark portfolio with premium motion, full SEO, and strong accessibility/performance.

**Architecture:** Vite + React 18 + TypeScript. Content lives in a typed `data/resume.ts`. Presentation is split into `layout / background / common / ui / sections` components consuming reusable animation variants and hooks. A CSS aurora replaces the heavy photo background. Site stays buildable at each task.

**Tech Stack:** Vite, React 18, TypeScript, Tailwind 3, Framer Motion 10, EmailJS, lucide-react, clsx + tailwind-merge, @fontsource (Sora + Inter).

## Global Constraints
- Dark theme only. Accent indigo `#6366f1` → violet `#a855f7`. Background `#08080c`.
- All motion transform/opacity-only; must respect `prefers-reduced-motion`.
- No secrets in source: EmailJS keys via `import.meta.env.VITE_*`.
- Zero TypeScript errors (`tsc --noEmit`), zero ESLint errors, clean `vite build`.
- Minimal new deps only (listed above). No Next.js, no shadcn.
- Verification per task = `npm run typecheck` + (where UI) dev-server render with no console errors.

---

### Task 1: Tooling & project config
**Files:** Create `tsconfig.json`, `tsconfig.node.json`, `.eslintrc.cjs`, `.env.example`, `src/vite-env.d.ts`; Modify `package.json`, `vercel.json`, `vite.config.js`→`vite.config.ts`.
- [ ] Install deps: `typescript @types/node lucide-react clsx tailwind-merge @fontsource/sora @fontsource/inter eslint @typescript-eslint/{parser,eslint-plugin} eslint-plugin-react-hooks eslint-plugin-react-refresh`
- [ ] Add tsconfig (strict, bundler moduleResolution, `@/*` path alias to `src/*`), tsconfig.node.
- [ ] Add ESLint flat/legacy config for TS + react-hooks + react-refresh.
- [ ] `vite.config.ts` with `@` alias.
- [ ] Scripts: `dev`, `build` (`tsc -b && vite build`), `preview`, `lint`, `typecheck`.
- [ ] `.env.example` documents `VITE_EMAILJS_SERVICE_ID/TEMPLATE_ID/PUBLIC_KEY`.
- [ ] Simplify `vercel.json` to modern `{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }`.
- [ ] Verify: `npm run typecheck` passes on empty TS surface.

### Task 2: Design system (CSS tokens + Tailwind + fonts)
**Files:** Rewrite `src/index.css`; Modify `tailwind.config.js`→`.ts`.
- [ ] CSS variables: colors (bg, surfaces, foreground, muted, border, accent-from/to, success/warning/error), radii, shadows/glow.
- [ ] Import `@fontsource/sora` (600/700/800) + `@fontsource/inter` (400/500/600/700).
- [ ] Base layer: html smooth-scroll (guarded), body bg + Inter, `:focus-visible` ring, selection color, custom scrollbar, `prefers-reduced-motion` reset.
- [ ] Tailwind theme.extend maps CSS vars → `colors`, `fontFamily` (display=Sora, sans=Inter), `boxShadow`, `borderRadius`, keyframes (aurora, shimmer, float, gradient-x).
- [ ] Verify: dev server boots, body shows dark bg + fonts.

### Task 3: Types + data layer
**Files:** Create `src/types/index.ts`, `src/data/resume.ts`.
**Produces:** `profile`, `socials`, `education[]`, `experiences[]`, `projects[]`, `skillGroups[]`, `certificationGroups[]`, `testScores`, `navItems[]`.
- [ ] Define interfaces: `SocialLink`, `Education`, `Experience {role,company,location,period,current?,summary,bullets[],tech[]}`, `Project {title,description,tech[],github?,demo?,accent}`, `SkillGroup {label,icon,skills[]}`, `CertificationGroup {provider,logo?,count?,items[{name,url}]}`, `TestScore`.
- [ ] Populate `resume.ts` from PDF + user notes: LoopLink (SDE-1, current), Praval (POCs incl. PII gateway, deprecation finder, Copilot agents, ERP/SCM pharma, Resource Pilot), Deepcrafts, Deloitte, AWS/GCP; 6 GitHub projects; grouped certs (GCP cluster, AWS, IIT-Bombay Spoken Tutorial, HF, Deloitte); skills grouped.
- [ ] Verify: `npm run typecheck` passes.

### Task 4: Utilities, hooks, animation variants
**Files:** Create `src/lib/utils.ts`, `src/hooks/useActiveSection.ts`, `src/hooks/useScrollProgress.ts`, `src/animations/variants.ts`.
**Produces:** `cn(...)`; `useActiveSection(ids): string`; `useScrollProgress(): number` (0–1); variants `fadeInUp, fadeIn, staggerContainer, scaleIn` + `viewportOnce`.
- [ ] `cn` = twMerge(clsx()).
- [ ] `useActiveSection` IntersectionObserver over section ids → active id.
- [ ] `useScrollProgress` rAF-throttled scroll ratio.
- [ ] Variants file (reduced-motion handled at component level via Framer's reduced-motion).
- [ ] Verify: typecheck passes.

### Task 5: UI + common primitives
**Files:** Create `src/components/ui/{Section,SectionHeading,GlassCard,Button,SkillPill,TechTag}.tsx`, `src/components/common/{ScrollReveal,MagneticButton,AnimatedRoles,ErrorBoundary,BackToTop}.tsx`.
**Produces:** typed props for each; `Button` (variants primary/secondary/ghost, optional `as` anchor); `MagneticButton` wrapper; `AnimatedRoles({roles})`; `ScrollReveal({children,delay})`; `Section({id,children})`; `SectionHeading({title,eyebrow})`.
- [ ] Implement each as focused component with proper aria + reduced-motion.
- [ ] Verify: typecheck passes.

### Task 6: Background, scroll progress, error boundary wiring
**Files:** Create `src/components/background/AuroraBackground.tsx`, `src/components/common/ScrollProgress.tsx`.
- [ ] AuroraBackground: fixed, `aria-hidden`, layered radial mesh gradients + blurred blobs animated via CSS keyframes; static under reduced-motion.
- [ ] ScrollProgress: fixed top gradient bar scaled by `useScrollProgress`.
- [ ] Verify: typecheck passes.

### Task 7: Layout — Navbar, MobileMenu, Footer
**Files:** Create `src/components/layout/{Navbar,MobileMenu,Footer}.tsx`.
- [ ] Navbar: sticky, blurred, logo+name, desktop nav with active highlight (`useActiveSection`), Download CV button, smooth-scroll handlers, mobile hamburger toggles MobileMenu.
- [ ] MobileMenu: animated drawer/overlay, focus trap basics, closes on nav/Escape, `aria-modal`.
- [ ] Footer: quick links, socials, copyright, BackToTop.
- [ ] Verify: typecheck passes.

### Task 8: Hero section
**Files:** Create `src/components/sections/Hero.tsx`.
- [ ] Two-column layout; animated name + `AnimatedRoles`; subheadline; CTA MagneticButtons (View Work / Download CV / Get in Touch); social row; profile image with gradient ring + `fetchpriority="high"`, explicit width/height; subtle parallax; reduced-motion safe.
- [ ] Verify: typecheck + render.

### Task 9: About + Experience
**Files:** Create `src/components/sections/{About,Experience}.tsx`.
- [ ] About: bio, stat chips, education cards, GRE/IELTS, extracurricular.
- [ ] Experience: vertical timeline, staggered reveal, role/company/period/current badge, bullets, tech tags.
- [ ] Verify: typecheck + render.

### Task 10: Projects + Skills + Certifications
**Files:** Create `src/components/sections/{Projects,Skills,Certifications}.tsx`.
- [ ] Projects: responsive grid, generated gradient cover per `accent`, tech tags, GitHub link (+ demo when present), hover lift.
- [ ] Skills: grouped cards w/ icons + staggered pills.
- [ ] Certifications: grouped-by-provider cards; GCP badge cluster shows count; external links.
- [ ] Verify: typecheck + render.

### Task 11: Contact
**Files:** Create `src/components/sections/Contact.tsx`.
- [ ] Controlled form, client-side validation (name/email/message), EmailJS via env, states: idle/sending/success/error with accessible status (`aria-live`), social links, graceful fallback if env missing (mailto).
- [ ] Verify: typecheck + render; form validates.

### Task 12: App assembly + lazy-load
**Files:** Rewrite `src/main.jsx`→`src/main.tsx`, `src/App.jsx`→`src/App.tsx`; delete old `.jsx`.
- [ ] App: skip-link, AuroraBackground, ScrollProgress, Navbar, `<main>` with sections (below-fold lazy via `React.lazy` + Suspense fallbacks), Footer, ErrorBoundary wrapper.
- [ ] Verify: `npm run build` succeeds; dev render whole page, no console errors.

### Task 13: SEO & static assets
**Files:** Modify `index.html`; Create `public/robots.txt`, `public/sitemap.xml`, favicon, `public/og-image` (generated/simple).
- [ ] index.html: lang, description, keywords, canonical, theme-color, OG + Twitter tags, JSON-LD Person, preconnect not needed (fonts self-hosted), favicon links.
- [ ] robots.txt + sitemap.xml (single URL) + favicon.svg.
- [ ] Verify: build includes assets; validate JSON-LD shape.

### Task 14: Final verification & docs
- [ ] `npm run typecheck` → 0 errors.
- [ ] `npm run lint` → 0 errors.
- [ ] `npm run build` → success; note bundle size.
- [ ] Manual dev render pass: all sections, mobile menu, active nav, form validation, no console errors.
- [ ] Write `README.md` (architecture, structure, run/deploy, env, future work).
- [ ] Commit.

## Self-Review
- **Coverage:** foundation(T1), design system(T2), data(T3), utils/hooks/motion(T4), primitives(T5), bg/scroll(T6), nav(T7), all 8 sections(T8–T12), SEO/a11y/perf woven through + T13, deploy/tooling(T1/T14). All spec sections mapped.
- **Types:** `Experience`/`Project`/`CertificationGroup`/`SkillGroup` names consistent between T3 (defined) and T8–T12 (consumed).
- **No placeholders:** each task has concrete files + deliverable + verification.
