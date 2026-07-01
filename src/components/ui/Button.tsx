import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

interface BaseProps {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

interface ButtonAsButton extends BaseProps {
  href?: undefined
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  'aria-label'?: string
}

interface ButtonAsLink extends BaseProps {
  href: string
  target?: string
  rel?: string
  download?: boolean
  'aria-label'?: string
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-300 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-accent-from to-accent-to text-white shadow-glow hover:brightness-110',
  secondary:
    'glass text-foreground hover:bg-surface-2/70 border border-white/10',
  ghost: 'text-muted hover:text-foreground',
}

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children } = props
  const reduce = useReducedMotion()
  const hover = reduce ? undefined : { scale: 1.04, y: -2 }
  const tap = reduce ? undefined : { scale: 0.97 }
  const classes = cn(base, variants[variant], sizes[size], className)

  if ('href' in props && props.href !== undefined) {
    const { href, target, rel, download } = props
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
        download={download}
        aria-label={props['aria-label']}
        className={classes}
        whileHover={hover}
        whileTap={tap}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
      aria-label={props['aria-label']}
      className={classes}
      whileHover={props.disabled ? undefined : hover}
      whileTap={props.disabled ? undefined : tap}
    >
      {children}
    </motion.button>
  )
}
