import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { ArrowRight, Download, Sparkles } from 'lucide-react'
import { useRef } from 'react'
import { profile, socials } from '@/data/resume'
import { scrollToId } from '@/lib/utils'
import { fadeInUp, staggerContainer } from '@/animations/variants'
import { AnimatedRoles } from '@/components/common/AnimatedRoles'
import { MagneticButton } from '@/components/common/MagneticButton'
import { SocialIcon } from '@/components/common/icons'
import { Button } from '@/components/ui/Button'

export function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80])

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen items-center pt-28 pb-16"
    >
      <div className="mx-auto grid w-full max-w-content items-center gap-12 px-6 lg:grid-cols-12">
        {/* Copy */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7"
        >
          <motion.span
            variants={fadeInUp}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            Open to opportunities
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 font-display text-display font-extrabold leading-[1.05] text-foreground"
          >
            {profile.headlineLead}
            <br />
            <span className="text-gradient">{profile.headlineAccent}</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-5 flex flex-wrap items-center gap-x-2 text-xl font-medium text-foreground/90 sm:text-2xl"
          >
            <span className="text-muted">I'm {profile.shortName}, a</span>
            <AnimatedRoles roles={profile.roles} className="font-semibold" />
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <MagneticButton>
              <Button onClick={() => scrollToId('#projects')} size="lg">
                View my work <ArrowRight size={18} />
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button
                href={profile.resumeUrl}
                download
                variant="secondary"
                size="lg"
              >
                <Download size={18} /> Download CV
              </Button>
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex items-center gap-5"
          >
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Find me
            </span>
            <div className="flex items-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.icon === 'mail' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-muted transition-colors hover:text-foreground"
                >
                  <SocialIcon icon={s.icon} size={22} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: imageY }}
          className="relative mx-auto hidden w-full max-w-sm lg:col-span-5 lg:block"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-accent-from/40 to-accent-to/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 shadow-elevated">
              <img
                src={profile.imageUrl}
                alt={`Portrait of ${profile.fullName}`}
                width={480}
                height={600}
                fetchPriority="high"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            {/* Floating accent chip */}
            <motion.div
              animate={reduce ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="glass absolute -bottom-4 -left-4 flex items-center gap-2 rounded-2xl px-4 py-3 shadow-card"
            >
              <Sparkles size={18} className="text-accent" />
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">
                  AI + Full-Stack
                </p>
                <p className="text-xs text-muted">RAG · LLMs · React</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
