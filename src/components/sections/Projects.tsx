import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { projects } from '@/data/resume'
import { fadeInUp } from '@/animations/variants'
import { cn } from '@/lib/utils'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TechTag } from '@/components/ui/TechTag'
import { GithubIcon } from '@/components/common/icons'

export function Projects() {
  const reduce = useReducedMotion()

  return (
    <Section id="projects" aria-label="Projects">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Work"
          title="Featured projects"
          description="A selection of things I've built — AI systems, tools, and experiments. More on GitHub."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeInUp}
              whileHover={reduce ? undefined : { y: -6 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface/50 shadow-card transition-colors hover:border-accent/40"
            >
              {/* Generated gradient cover */}
              <div
                className={cn(
                  'relative h-40 overflow-hidden bg-gradient-to-br',
                  p.gradient,
                )}
              >
                <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_30%_30%,white,transparent_60%)]" />
                <span className="absolute bottom-3 left-4 font-display text-sm font-semibold uppercase tracking-widest text-white/90">
                  {p.title.split('—')[0].trim()}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <TechTag key={t} label={t} />
                  ))}
                </div>

                {(p.github || p.demo) && (
                  <div className="mt-5 flex items-center gap-4 border-t border-white/5 pt-4">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
                      >
                        <GithubIcon size={16} /> Code
                      </a>
                    )}
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:brightness-125"
                      >
                        <ExternalLink size={16} /> Live demo
                      </a>
                    )}
                    <ArrowUpRight
                      size={18}
                      className="ml-auto text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  )
}
