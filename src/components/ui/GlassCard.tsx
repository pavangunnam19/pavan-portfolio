import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeInUp } from '@/animations/variants'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: ReactNode
  className?: string
  /** Lift + glow on hover. */
  interactive?: boolean
  /** Participate in a parent stagger via the fadeInUp variant. */
  reveal?: boolean
}

/** Frosted surface card with optional hover lift and reveal-on-scroll. */
export function GlassCard({
  children,
  className,
  interactive = false,
  reveal = true,
}: GlassCardProps) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      variants={reveal ? fadeInUp : undefined}
      whileHover={
        interactive && !reduce ? { y: -6, transition: { duration: 0.25 } } : undefined
      }
      className={cn(
        'glass rounded-2xl p-6 shadow-card transition-shadow duration-300',
        interactive && 'hover:border-accent/40 hover:shadow-glow',
        className,
      )}
    >
      {children}
    </motion.div>
  )
}
