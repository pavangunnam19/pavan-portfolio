import { navItems, profile, socials } from '@/data/resume'
import { scrollToId } from '@/lib/utils'
import { SocialIcon } from '@/components/common/icons'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 py-14">
      <div className="mx-auto grid max-w-content gap-10 px-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-3">
          <span className="font-display text-lg font-bold text-foreground">
            {profile.shortName}
          </span>
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            {profile.title} — building intelligent, well-crafted products.
          </p>
          <div className="flex items-center gap-4 pt-1">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.icon === 'mail' ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-muted transition-colors hover:text-foreground"
              >
                <SocialIcon icon={s.icon} size={20} />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer" className="sm:justify-self-center">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Navigate
          </h3>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToId(item.href)
                  }}
                  className="text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-3 lg:justify-self-end">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Get in touch
          </h3>
          <a
            href={`mailto:${profile.email}`}
            className="block text-sm text-muted transition-colors hover:text-foreground"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
            className="block text-sm text-muted transition-colors hover:text-foreground"
          >
            {profile.phone}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-content flex-col items-center justify-between gap-2 border-t border-white/5 px-6 pt-6 text-xs text-muted-foreground sm:flex-row">
        <p>
          © {year} {profile.fullName}. All rights reserved.
        </p>
        <p>Built with React, TypeScript, Tailwind & Framer Motion.</p>
      </div>
    </footer>
  )
}
