import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion'
import { useRef, type ReactNode } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  /** How far the element drifts toward the cursor, in px. */
  strength?: number
  className?: string
}

/**
 * Wraps children so they subtly follow the cursor on hover — a tasteful
 * "magnetic" effect. Disabled entirely under prefers-reduced-motion and on
 * touch devices (no hover).
 */
export function MagneticButton({
  children,
  strength = 14,
  className,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 })

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    x.set((relX / rect.width) * strength * 2)
    y.set((relY / rect.height) * strength * 2)
  }

  function reset() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
