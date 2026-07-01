import { cn } from '@/lib/utils'

interface TechTagProps {
  label: string
  className?: string
}

/** Small pill for a technology / tool name. */
export function TechTag({ label, className }: TechTagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-muted',
        className,
      )}
    >
      {label}
    </span>
  )
}
