/**
 * Shared content types for the portfolio.
 * Every section reads from a single typed data source (`src/data/resume.ts`).
 */

export type SocialIcon = 'github' | 'linkedin' | 'mail' | 'phone'

export interface SocialLink {
  label: string
  href: string
  icon: SocialIcon
}

export interface Stat {
  label: string
  value: string
}

export interface Profile {
  fullName: string
  shortName: string
  title: string
  /** Rotated in the hero role animation. */
  roles: string[]
  headlineLead: string
  headlineAccent: string
  tagline: string
  bio: string
  location: string
  email: string
  phone: string
  imageUrl: string
  resumeUrl: string
  stats: Stat[]
}

export interface Education {
  institution: string
  credential: string
  period: string
  score: string
  location?: string
}

export interface Experience {
  role: string
  company: string
  location: string
  period: string
  current?: boolean
  summary: string
  highlights: string[]
  tech: string[]
}

export interface Project {
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
  /** Tailwind gradient classes used for the generated cover, e.g. "from-indigo-500 to-violet-600". */
  gradient: string
}

export interface SkillGroup {
  label: string
  /** Key resolved to a lucide icon in the Skills component. */
  icon: string
  skills: string[]
}

export interface CertificationItem {
  name: string
  url?: string
}

export interface CertificationGroup {
  provider: string
  /** Optional badge count shown as a pill (e.g. Google Cloud's 22 badges). */
  count?: number
  profileUrl?: string
  items: CertificationItem[]
}

export interface TestScore {
  label: string
  detail: string
}

export interface NavItem {
  label: string
  href: string
}
