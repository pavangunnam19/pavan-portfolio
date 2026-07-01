/**
 * Fixed, purely decorative background. Layered radial "aurora" blobs plus a
 * fine grid and grain. No images, no scroll listeners — cheap to paint. Blobs
 * animate via CSS keyframes, which the reduced-motion media query freezes.
 */
export function AuroraBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base wash */}
      <div className="absolute inset-0 bg-background" />

      {/* Aurora blobs */}
      <div className="absolute -left-[10%] -top-[10%] h-[45vw] w-[45vw] rounded-full bg-accent-from/25 blur-[120px] animate-aurora" />
      <div className="absolute right-[-5%] top-[10%] h-[40vw] w-[40vw] rounded-full bg-accent-to/20 blur-[120px] animate-aurora-slow" />
      <div className="absolute bottom-[-10%] left-[25%] h-[38vw] w-[38vw] rounded-full bg-indigo-600/15 blur-[130px] animate-aurora" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(255 255 255 / 0.6) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        }}
      />

      {/* Vignette to keep content legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
    </div>
  )
}
