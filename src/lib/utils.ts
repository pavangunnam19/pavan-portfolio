import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Merge conditional class names, de-duplicating conflicting Tailwind utilities. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Smooth-scroll to an in-page anchor (e.g. "#about"), honouring reduced motion. */
export function scrollToId(hash: string) {
  const id = hash.replace('#', '')
  const el = document.getElementById(id)
  if (!el) return
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' })
  // Keep the URL hash in sync without a jump.
  history.replaceState(null, '', hash)
}
