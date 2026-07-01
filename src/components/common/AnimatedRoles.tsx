import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AnimatedRolesProps {
  roles: string[]
  /** ms each role stays on screen. */
  interval?: number
  className?: string
}

/** Cycles through role strings with a smooth vertical swap. */
export function AnimatedRoles({
  roles,
  interval = 2600,
  className,
}: AnimatedRolesProps) {
  const [index, setIndex] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce || roles.length <= 1) return
    const id = setInterval(
      () => setIndex((i) => (i + 1) % roles.length),
      interval,
    )
    return () => clearInterval(id)
  }, [roles.length, interval, reduce])

  return (
    <span
      className={className}
      aria-live="polite"
      style={{ display: 'inline-block', position: 'relative' }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={roles[index]}
          initial={reduce ? false : { y: '0.6em', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduce ? undefined : { y: '-0.6em', opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block text-gradient"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
