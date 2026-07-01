import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { profile, socials } from '@/data/resume'
import { fadeInUp } from '@/animations/variants'
import { cn } from '@/lib/utils'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SocialIcon } from '@/components/common/icons'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const emailjsConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

type Status = 'idle' | 'sending' | 'success' | 'error'

interface FormValues {
  name: string
  email: string
  message: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values: FormValues) {
  const errors: Partial<Record<keyof FormValues, string>> = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!EMAIL_RE.test(values.email)) errors.email = 'Enter a valid email address.'
  if (values.message.trim().length < 10)
    errors.message = 'Message should be at least 10 characters.'
  return errors
}

const fieldClass =
  'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-foreground placeholder:text-muted-foreground transition-colors focus:border-accent focus:outline-none'

export function Contact() {
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormValues, string>>
  >({})
  const [status, setStatus] = useState<Status>('idle')

  function update<K extends keyof FormValues>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }))
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    // Graceful fallback when EmailJS isn't configured.
    if (!emailjsConfigured) {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        `Portfolio message from ${values.name}`,
      )}&body=${encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`)}`
      return
    }

    setStatus('sending')
    try {
      await emailjs.send(
        SERVICE_ID as string,
        TEMPLATE_ID as string,
        {
          user_name: values.name,
          user_email: values.email,
          message: values.message,
        },
        PUBLIC_KEY as string,
      )
      setStatus('success')
      setValues({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <Section id="contact" aria-label="Contact">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="Open to full-time roles and interesting collaborations. Drop a message and I'll get back to you."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <div className="glass h-full rounded-2xl p-6">
              <p className="text-foreground/90">
                Prefer email or socials? Reach me directly:
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-4 block text-accent transition-colors hover:brightness-125"
              >
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
                className="mt-1 block text-muted transition-colors hover:text-foreground"
              >
                {profile.phone}
              </a>
              <div className="mt-6 flex items-center gap-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.icon === 'mail' ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted transition-colors hover:border-accent/50 hover:text-foreground"
                  >
                    <SocialIcon icon={s.icon} size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit}
            noValidate
            className="glass rounded-2xl p-6 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={values.name}
                  onChange={(e) => update('name', e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={cn(fieldClass, errors.name && 'border-error')}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-error">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={(e) => update('email', e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={cn(fieldClass, errors.email && 'border-error')}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-error">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={values.message}
                onChange={(e) => update('message', e.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={cn(fieldClass, 'resize-y', errors.message && 'border-error')}
                placeholder="Tell me about the role or project…"
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-xs text-error">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-from to-accent-to px-6 py-3 font-medium text-white shadow-glow transition-[filter] hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    <Send size={18} /> Send message
                  </>
                )}
              </button>

              <div aria-live="polite" className="text-sm">
                {status === 'success' && (
                  <span className="inline-flex items-center gap-1.5 text-success">
                    <CheckCircle2 size={16} /> Message sent — thank you!
                  </span>
                )}
                {status === 'error' && (
                  <span className="inline-flex items-center gap-1.5 text-error">
                    <AlertCircle size={16} /> Something went wrong. Try again or
                    email me.
                  </span>
                )}
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </Section>
  )
}
