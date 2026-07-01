import { useEffect, useState } from 'react'

/**
 * Returns document scroll progress as a value between 0 and 1.
 * rAF-throttled so it stays cheap during scroll.
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0

    const update = () => {
      const scrollTop = window.scrollY
      const height =
        document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? Math.min(scrollTop / height, 1) : 0)
      frame = 0
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return progress
}
