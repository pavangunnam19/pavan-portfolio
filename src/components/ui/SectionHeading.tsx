import { motion } from 'framer-motion'
import { fadeInUp } from '@/animations/variants'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
  className?: string
}

/** Consistent section header: small eyebrow, gradient-underlined title, optional lede. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className={cn(
        'mb-14 flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
        {title}
      </h2>
      <span className="accent-rule h-1 w-16 rounded-full" />
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          {description}
        </p>
      )}
    </motion.div>
  )
}
