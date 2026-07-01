import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view using IntersectionObserver.
 * Returns the id of the most prominent visible section.
 *
 * Sections may be lazy-loaded, so the observer re-attaches (via a
 * MutationObserver) until every target element exists in the DOM.
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const visible = new Map<string, number>()
    let io: IntersectionObserver | null = null

    const handle: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          visible.set(entry.target.id, entry.intersectionRatio)
        } else {
          visible.delete(entry.target.id)
        }
      }
      let best: string | null = null
      let bestRatio = -1
      for (const [id, ratio] of visible) {
        if (ratio > bestRatio) {
          best = id
          bestRatio = ratio
        }
      }
      if (best) setActive(best)
    }

    const attach = (): number => {
      const elements = ids
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null)

      io?.disconnect()
      visible.clear()
      io = new IntersectionObserver(handle, {
        // Bias detection toward the upper-middle of the viewport.
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      })
      elements.forEach((el) => io!.observe(el))
      return elements.length
    }

    // Re-attach as lazy sections mount, until all targets are present.
    let found = attach()
    const mo = new MutationObserver(() => {
      if (found >= ids.length) {
        mo.disconnect()
        return
      }
      found = attach()
      if (found >= ids.length) mo.disconnect()
    })
    if (found < ids.length) {
      mo.observe(document.body, { childList: true, subtree: true })
    }

    return () => {
      io?.disconnect()
      mo.disconnect()
    }
  }, [ids])

  return active
}
