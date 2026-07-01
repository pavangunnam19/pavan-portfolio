import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { staggerContainer, viewportOnce } from '@/animations/variants'
import { cn } from '@/lib/utils'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
  'aria-label'?: string
}

/**
 * A page section: provides the scroll anchor, consistent vertical rhythm,
 * and a stagger context so child ScrollReveals cascade.
 */
export function Section({ id, children, className, ...rest }: SectionProps) {
  return (
    <motion.section
      id={id}
      aria-label={rest['aria-label']}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn('scroll-mt-24 py-20 sm:py-28', className)}
    >
      {children}
    </motion.section>
  )
}
