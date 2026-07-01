import { AnimatePresence, motion } from 'framer-motion'
import { Download, X } from 'lucide-react'
import { useEffect } from 'react'
import { navItems, profile, socials } from '@/data/resume'
import { scrollToId } from '@/lib/utils'
import { cn } from '@/lib/utils'
import { SocialIcon } from '@/components/common/icons'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  activeId: string
}

const panel = {
  hidden: { x: '100%' },
  visible: { x: 0 },
}

export function MobileMenu({ open, onClose, activeId }: MobileMenuProps) {
  // Lock body scroll and close on Escape while open.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  function handleNav(href: string) {
    onClose()
    // Wait for the menu to close before scrolling for a smoother feel.
    setTimeout(() => scrollToId(href), 150)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] md:hidden"
          initial="hidden"
          animate="visible"
          exit="hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            onClick={onClose}
          />
          <motion.nav
            className="glass absolute right-0 top-0 flex h-full w-[80%] max-w-xs flex-col gap-2 border-l border-white/10 p-6 pt-8"
            variants={panel}
            transition={{ type: 'spring', stiffness: 320, damping: 34 }}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="font-display text-lg font-bold text-foreground">
                {profile.shortName}
              </span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="rounded-full p-2 text-muted hover:text-foreground"
              >
                <X size={22} />
              </button>
            </div>

            {navItems.map((item) => {
              const isActive = activeId === item.href.replace('#', '')
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNav(item.href)
                  }}
                  className={cn(
                    'rounded-lg px-3 py-3 text-lg font-medium transition-colors',
                    isActive
                      ? 'bg-accent/15 text-white'
                      : 'text-muted hover:bg-white/5 hover:text-foreground',
                  )}
                >
                  {item.label}
                </a>
              )
            })}

            <a
              href={profile.resumeUrl}
              download
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-from to-accent-to px-5 py-3 font-medium text-white"
            >
              <Download size={18} /> Download CV
            </a>

            <div className="mt-auto flex items-center gap-4 pt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.icon === 'mail' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-muted transition-colors hover:text-foreground"
                >
                  <SocialIcon icon={s.icon} size={22} />
                </a>
              ))}
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
