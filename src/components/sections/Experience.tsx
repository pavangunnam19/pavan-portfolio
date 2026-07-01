import { motion } from 'framer-motion'
import { experiences } from '@/data/resume'
import { fadeInUp } from '@/animations/variants'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TechTag } from '@/components/ui/TechTag'

export function Experience() {
  return (
    <Section id="experience" aria-label="Experience">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Career"
          title="Professional experience"
          description="From RAG research and LLM safety tooling to full-stack product work."
        />

        <div className="relative">
          {/* Timeline spine */}
          <span
            aria-hidden="true"
            className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent-from/60 via-white/10 to-transparent sm:left-1/2"
          />

          <ol className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.li
                key={`${exp.company}-${exp.period}`}
                variants={fadeInUp}
                className="relative sm:grid sm:grid-cols-2 sm:gap-x-12"
              >
                {/* Node */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-2 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-background sm:left-1/2 sm:-translate-x-1/2"
                >
                  <span
                    className={`h-3 w-3 rounded-full ${exp.current ? 'bg-gradient-to-r from-accent-from to-accent-to shadow-glow' : 'bg-surface-2 ring-2 ring-accent/40'}`}
                  />
                </span>

                {/* Card — alternates sides on desktop */}
                <div
                  className={`ml-8 sm:ml-0 ${
                    i % 2 === 0
                      ? 'sm:col-start-1 sm:text-right'
                      : 'sm:col-start-2'
                  }`}
                >
                  <div className="glass rounded-2xl p-6 shadow-card transition-colors hover:border-accent/40">
                    <div
                      className={`flex flex-wrap items-center gap-2 ${i % 2 === 0 ? 'sm:justify-end' : ''}`}
                    >
                      <h3 className="text-lg font-bold text-foreground">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="rounded-full bg-success/15 px-2 py-0.5 text-xs font-medium text-success">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm font-medium text-accent">
                      {exp.company}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {exp.period} · {exp.location}
                    </p>

                    <ul
                      className={`mt-4 space-y-2 text-sm text-muted ${i % 2 === 0 ? 'sm:text-right' : ''}`}
                    >
                      {exp.highlights.map((h, idx) => (
                        <li key={idx}>{h}</li>
                      ))}
                    </ul>

                    <div
                      className={`mt-4 flex flex-wrap gap-2 ${i % 2 === 0 ? 'sm:justify-end' : ''}`}
                    >
                      {exp.tech.map((t) => (
                        <TechTag key={t} label={t} />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  )
}
