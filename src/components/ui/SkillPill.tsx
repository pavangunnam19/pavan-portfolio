import { motion, useReducedMotion } from 'framer-motion'
import { fadeInUp } from '@/animations/variants'

interface SkillPillProps {
  label: string
}

/** Interactive skill chip used inside the Skills grid. */
export function SkillPill({ label }: SkillPillProps) {
  const reduce = useReducedMotion()
  return (
    <motion.span
      variants={fadeInUp}
      whileHover={
        reduce
          ? undefined
          : { y: -3, scale: 1.05, transition: { duration: 0.2 } }
      }
      className="cursor-default rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-foreground/90 transition-colors hover:border-accent/50 hover:bg-accent/15 hover:text-white"
    >
      {label}
    </motion.span>
  )
}
