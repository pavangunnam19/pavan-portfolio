import { motion, useReducedMotion } from 'framer-motion'
import { Download, Menu } from 'lucide-react'
import { useState } from 'react'
import { navItems, profile } from '@/data/resume'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn, scrollToId } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { MobileMenu } from './MobileMenu'

const sectionIds = navItems.map((n) => n.href.replace('#', ''))

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection(sectionIds)
  const reduce = useReducedMotion()

  return (
    <>
      <motion.header
        initial={reduce ? false : { y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <nav className="mx-auto mt-3 flex max-w-content items-center justify-between gap-4 rounded-full border border-white/10 bg-background/60 px-4 py-2.5 backdrop-blur-xl sm:px-6"
          style={{ marginLeft: 'clamp(1rem, 4vw, 3rem)', marginRight: 'clamp(1rem, 4vw, 3rem)' }}
        >
          {/* Brand */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
            }}
            className="flex items-center gap-3"
            aria-label={`${profile.shortName} — back to top`}
          >
            <img
              src={profile.imageUrl}
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover ring-2 ring-accent/60"
            />
            <span className="hidden font-display text-sm font-bold text-foreground sm:block">
              {profile.shortName}
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = activeId === item.href.replace('#', '')
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToId(item.href)
                    }}
                    className={cn(
                      'relative rounded-full px-3.5 py-2 text-sm transition-colors',
                      isActive
                        ? 'text-white'
                        : 'text-muted hover:text-foreground',
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full bg-accent/15 ring-1 ring-accent/30"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* CV + mobile toggle */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <Button href={profile.resumeUrl} download size="md">
                <Download size={16} /> Download CV
              </Button>
            </div>
            <button
              className="rounded-full p-2 text-foreground md:hidden"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </motion.header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeId={activeId}
      />
    </>
  )
}
