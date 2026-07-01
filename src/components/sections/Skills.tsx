import { motion } from 'framer-motion'
import {
  Brain,
  Cloud,
  Code2,
  LayoutGrid,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { skillGroups } from '@/data/resume'
import { fadeInUp, staggerFast } from '@/animations/variants'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SkillPill } from '@/components/ui/SkillPill'

const iconMap: Record<string, LucideIcon> = {
  code: Code2,
  layout: LayoutGrid,
  brain: Brain,
  cloud: Cloud,
  wrench: Wrench,
}

export function Skills() {
  return (
    <Section id="skills" aria-label="Skills">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Toolkit"
          title="Skills & technologies"
          description="The languages, frameworks and platforms I reach for."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = iconMap[group.icon] ?? Code2
            return (
              <motion.div
                key={group.label}
                variants={fadeInUp}
                className="glass rounded-2xl p-6 shadow-card transition-colors hover:border-accent/40"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-display font-semibold text-foreground">
                    {group.label}
                  </h3>
                </div>
                <motion.div
                  variants={staggerFast}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2"
                >
                  {group.skills.map((skill) => (
                    <SkillPill key={skill} label={skill} />
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
