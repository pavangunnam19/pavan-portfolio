import { motion } from 'framer-motion'
import { useScrollProgress } from '@/hooks/useScrollProgress'

/** Thin gradient bar pinned to the top, scaled to reading progress. */
export function ScrollProgress() {
  const progress = useScrollProgress()
  return (
    <motion.div
      className="accent-rule fixed inset-x-0 top-0 z-[60] h-[3px] origin-left"
      style={{ scaleX: progress }}
      aria-hidden="true"
    />
  )
}
