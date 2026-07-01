import { Suspense, lazy } from 'react'
import { AuroraBackground } from '@/components/background/AuroraBackground'
import { ScrollProgress } from '@/components/common/ScrollProgress'
import { BackToTop } from '@/components/common/BackToTop'
import { ErrorBoundary } from '@/components/common/ErrorBoundary'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'

// Below-the-fold sections are code-split so the hero paints as fast as possible.
const About = lazy(() =>
  import('@/components/sections/About').then((m) => ({ default: m.About })),
)
const Experience = lazy(() =>
  import('@/components/sections/Experience').then((m) => ({
    default: m.Experience,
  })),
)
const Projects = lazy(() =>
  import('@/components/sections/Projects').then((m) => ({
    default: m.Projects,
  })),
)
const Skills = lazy(() =>
  import('@/components/sections/Skills').then((m) => ({ default: m.Skills })),
)
const Certifications = lazy(() =>
  import('@/components/sections/Certifications').then((m) => ({
    default: m.Certifications,
  })),
)
const Contact = lazy(() =>
  import('@/components/sections/Contact').then((m) => ({ default: m.Contact })),
)

/** Minimal placeholder while a lazy section chunk loads. */
function SectionFallback() {
  return <div className="min-h-[40vh]" aria-hidden="true" />
}

export default function App() {
  return (
    <ErrorBoundary>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <AuroraBackground />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </Suspense>
      </main>

      <Footer />
      <BackToTop />
    </ErrorBoundary>
  )
}
