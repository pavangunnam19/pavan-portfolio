import { motion } from 'framer-motion'
import { GraduationCap, Sparkles } from 'lucide-react'
import { education, profile, testScores } from '@/data/resume'
import { fadeInUp } from '@/animations/variants'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'

export function About() {
  return (
    <Section id="about" aria-label="About">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading eyebrow="About" title="A bit about me" />

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Bio + stats */}
          <motion.div variants={fadeInUp} className="lg:col-span-3">
            <GlassCard reveal={false} className="h-full">
              <p className="text-lg leading-relaxed text-foreground/90">
                {profile.bio}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {profile.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-3xl font-bold text-gradient">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Test scores */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <GlassCard reveal={false} className="h-full">
              <div className="mb-4 flex items-center gap-2 text-accent">
                <Sparkles size={18} />
                <h3 className="text-sm font-semibold uppercase tracking-widest">
                  Test Scores
                </h3>
              </div>
              <ul className="space-y-3">
                {testScores.map((t) => (
                  <li
                    key={t.label}
                    className="rounded-xl border border-white/5 bg-white/5 p-4"
                  >
                    <span className="font-semibold text-foreground">
                      {t.label}
                    </span>
                    <p className="mt-1 text-sm text-muted">{t.detail}</p>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        </div>

        {/* Education */}
        <motion.div variants={fadeInUp} className="mt-6">
          <GlassCard reveal={false}>
            <div className="mb-5 flex items-center gap-2 text-accent">
              <GraduationCap size={20} />
              <h3 className="text-sm font-semibold uppercase tracking-widest">
                Education
              </h3>
            </div>
            <ul className="grid gap-4 md:grid-cols-3">
              {education.map((e) => (
                <li
                  key={`${e.institution}-${e.credential}`}
                  className="rounded-xl border-l-2 border-accent/60 bg-white/5 p-4"
                >
                  <p className="font-semibold text-foreground">{e.credential}</p>
                  <p className="mt-1 text-sm text-muted">{e.institution}</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {e.period} · {e.score}
                  </p>
                </li>
              ))}
            </ul>
          </GlassCard>
        </motion.div>
      </div>
    </Section>
  )
}
