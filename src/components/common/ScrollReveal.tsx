import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeInUp, viewportOnce } from '@/animations/variants'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  /** Extra delay in seconds before the reveal begins. */
  delay?: number
}

/** Reveals its children with a fade-up as they scroll into view (once). */
export function ScrollReveal({
  children,
  className,
  delay = 0,
}: ScrollRevealProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
