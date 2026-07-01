import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import { certificationGroups } from '@/data/resume'
import { fadeInUp } from '@/animations/variants'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Certifications() {
  return (
    <Section id="certifications" aria-label="Certifications">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications & badges"
          description="Grouped by provider — from Google Cloud's 22-badge program to AI agent courses."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {certificationGroups.map((group) => (
            <motion.div
              key={group.provider}
              variants={fadeInUp}
              className="glass rounded-2xl p-6 shadow-card transition-colors hover:border-accent/40"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent">
                    <Award size={18} />
                  </span>
                  <h3 className="font-display font-semibold text-foreground">
                    {group.provider}
                  </h3>
                </div>
                {group.count && (
                  <span className="rounded-full bg-accent/15 px-2.5 py-1 text-xs font-semibold text-accent">
                    {group.count} badges
                  </span>
                )}
              </div>

              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item.name}>
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
                      >
                        <span className="h-1 w-1 rounded-full bg-accent/60" />
                        {item.name}
                        <ExternalLink
                          size={13}
                          className="opacity-0 transition-opacity group-hover:opacity-100"
                        />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                        <span className="h-1 w-1 rounded-full bg-accent/60" />
                        {item.name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              {group.profileUrl && (
                <a
                  href={group.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:brightness-125"
                >
                  View full profile <ExternalLink size={14} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
