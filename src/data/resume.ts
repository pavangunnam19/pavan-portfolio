import type {
  CertificationGroup,
  Education,
  Experience,
  NavItem,
  Profile,
  Project,
  SkillGroup,
  SocialLink,
  TestScore,
} from '@/types'

export const profile: Profile = {
  fullName: 'Gunnam Pavan Sri Ram Manikanta',
  shortName: 'Pavan Gunnam',
  title: 'AI/ML & Full-Stack Engineer',
  roles: [
    'SDE-1 @ LoopLink AI',
    'AI / ML Engineer',
    'Full-Stack Developer',
    'RAG & LLM Builder',
  ],
  headlineLead: 'Engineering intelligent products,',
  headlineAccent: 'end to end.',
  tagline:
    'Software engineer building production AI systems and full-stack products — from RAG pipelines and LLM safety gateways to polished React interfaces.',
  bio: "I'm a Computer Science graduate (VIT Chennai, AI & ML) turned software engineer. I've shipped Retrieval-Augmented Generation agents, an LLM PII-masking gateway, autonomous agents, and full-stack apps across React and C#/.NET. I care about turning ambitious AI ideas into reliable, well-crafted products.",
  location: 'India',
  email: 'pavansriramgunnam@gmail.com',
  phone: '+91 7386887566',
  imageUrl: '/pavan-img.jpg',
  resumeUrl: '/Pavan_Gunnam_Resume.pdf',
  stats: [
    { label: 'Years building', value: '2+' },
    { label: 'Projects & POCs', value: '10+' },
    { label: 'Cloud badges', value: '22' },
    { label: 'CGPA', value: '8.2' },
  ],
}

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/pavangunnam19', icon: 'github' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pavan-gunnam-5a790a235/',
    icon: 'linkedin',
  },
  { label: 'Email', href: 'mailto:pavansriramgunnam@gmail.com', icon: 'mail' },
]

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export const experiences: Experience[] = [
  {
    role: 'Software Development Engineer (SDE-1)',
    company: 'LoopLink AI',
    location: 'India',
    period: '2026 — Present',
    current: true,
    summary:
      'Building production AI-powered product features across the full stack.',
    highlights: [
      'Engineering AI-driven product surfaces end to end, from backend logic to polished React interfaces.',
    ],
    tech: ['React', 'TypeScript', 'Python', 'LLMs', 'Azure AI'],
  },
  {
    role: 'Associate Software Developer',
    company: 'Praval Infotech',
    location: 'Hyderabad, India',
    period: 'Aug 2025 — May 2026',
    summary:
      'Built and deployed a range of AI and full-stack proof-of-concepts using Python, C#, Azure AI and React.',
    highlights: [
      'Built an LLM PII-safety gateway that masks sensitive data before it reaches any LLM and unmasks responses — using Microsoft Presidio with a local Ollama model.',
      'Developed a deprecated-package finder POC using a hybrid Jina AI + Gemini retrieval approach.',
      'Created autonomous agents with Microsoft Copilot Studio for internal workflows.',
      'Prototyped ERP & SCM flows (e.g. lead creation) for pharmaceutical clients, exploring DHR open-source systems.',
      'Delivered Resource Pilot — an end-to-end project & resource-management app built on React and C#/.NET MVC.',
    ],
    tech: [
      'React',
      'C# / .NET MVC',
      'Python',
      'Azure AI',
      'Presidio',
      'Ollama',
      'Jina AI',
      'Gemini',
      'Copilot Studio',
    ],
  },
  {
    role: 'RAG Development Intern',
    company: 'Deepcrafts',
    location: 'Bangalore, India (On-site)',
    period: 'Jan 2025 — Jul 2025',
    summary:
      'Built a Retrieval-Augmented Generation agent with a hybrid local-data + Gemini approach.',
    highlights: [
      'Developed a RAG agent combining local JSON text data with the Gemini API for a conversational chat interface.',
      'Implemented context-aware retrieval, embedding indexing, and the chat UI.',
    ],
    tech: ['Python', 'Gemini API', 'RAG', 'Embeddings'],
  },
  {
    role: 'Data Analytics Job Simulation',
    company: 'Deloitte Australia · Forage',
    location: 'Virtual',
    period: 'May 2025',
    summary:
      'Completed a Deloitte simulation in data analysis and forensic technology.',
    highlights: [
      'Built an interactive Tableau dashboard to visualise key business metrics.',
      'Used Excel to classify data and draw business conclusions.',
    ],
    tech: ['Tableau', 'Excel', 'Data Analysis'],
  },
  {
    role: 'AWS Solutions Architect — Associate Intern',
    company: 'Ethnus',
    location: 'Virtual, India',
    period: 'Aug 2023 — Nov 2023',
    summary:
      'Designed cost-effective, scalable and secure AWS cloud architectures.',
    highlights: [
      'Honed cloud skills through certification and project collaboration, designing solutions for customer needs.',
    ],
    tech: ['AWS', 'Cloud Architecture'],
  },
  {
    role: 'Google Cloud Computing Foundations',
    company: 'Google Cloud Program',
    location: 'Virtual, India',
    period: 'Aug 2023 — Nov 2023',
    summary:
      'Completed the foundations program, earning 22 skill badges.',
    highlights: [
      'Earned 22 skill badges across AI/ML, cloud infrastructure, and Kubernetes.',
    ],
    tech: ['GCP', 'Kubernetes', 'BigQuery'],
  },
]

export const projects: Project[] = [
  {
    title: 'DocTalk — AI PDF Query App',
    description:
      'Chat with any PDF. Embeds document text with SentenceTransformers, retrieves with nearest-neighbours search, and answers precisely via the Gemini API.',
    tech: ['Streamlit', 'SentenceTransformers', 'scikit-learn', 'Gemini API'],
    github: 'https://github.com/pavangunnam19/DocTalk',
    gradient: 'from-indigo-500 to-violet-600',
  },
  {
    title: 'Symptomap AI — 3D Anatomy Explorer',
    description:
      'An interactive anatomy learning tool combining a procedurally generated 3D human model with an AI that answers detailed questions on demand.',
    tech: ['Three.js', 'JavaScript', 'AI'],
    github: 'https://github.com/pavangunnam19/Symptomap-AI',
    gradient: 'from-sky-500 to-indigo-600',
  },
  {
    title: 'Codex Historica — RAG Research Assistant',
    description:
      'An industry-grade research assistant that lets you upload and chat with historical documents through a sophisticated RAG pipeline.',
    tech: ['Python', 'RAG', 'LLM', 'Vector Search'],
    github: 'https://github.com/pavangunnam19/Codex-Historica',
    gradient: 'from-violet-500 to-fuchsia-600',
  },
  {
    title: 'Project Prometheus — RL Maze Solver',
    description:
      'A web app that visualises Reinforcement Learning: an agent learns to solve a randomly generated maze from scratch using Q-learning, in the browser.',
    tech: ['JavaScript', 'Q-Learning', 'Reinforcement Learning'],
    github: 'https://github.com/pavangunnam19/Project-Prometheus-Maze-Solver-',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Advanced Waste Classification',
    description:
      'A high-accuracy CNN for multi-class waste detection, built with transfer learning, data augmentation, and fine-tuning.',
    tech: ['TensorFlow', 'CNN', 'Transfer Learning'],
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    title: 'JEE College Admission Predictor',
    description:
      'A supervised ML model that predicts college-admission chances from Joint Entrance Examination performance data.',
    tech: ['Python', 'scikit-learn', 'Machine Learning'],
    gradient: 'from-rose-500 to-pink-600',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    icon: 'code',
    skills: ['Python', 'JavaScript', 'TypeScript', 'C#', 'SQL', 'Java', 'HTML', 'CSS'],
  },
  {
    label: 'Frontend',
    icon: 'layout',
    skills: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
  },
  {
    label: 'AI / ML',
    icon: 'brain',
    skills: [
      'RAG',
      'LLMs',
      'Gemini API',
      'TensorFlow',
      'PyTorch',
      'Embeddings',
      'Presidio',
      'Ollama',
      'Copilot Studio',
    ],
  },
  {
    label: 'Cloud & DevOps',
    icon: 'cloud',
    skills: ['AWS', 'GCP', 'Azure AI', 'Docker', 'Kubernetes'],
  },
  {
    label: 'Tools & Data',
    icon: 'wrench',
    skills: ['Git', '.NET MVC', 'Tableau', 'Streamlit', 'BigQuery'],
  },
]

export const education: Education[] = [
  {
    institution: 'Vellore Institute of Technology, Chennai',
    credential: 'B.Tech — Computer Science (AI & ML)',
    period: '2021 — 2025',
    score: 'CGPA 8.20',
  },
  {
    institution: 'The Future Kids School',
    credential: 'ICSE — Class XII',
    period: '2021',
    score: '88.6%',
    location: 'Rajahmundry',
  },
  {
    institution: 'The Future Kids School',
    credential: 'ICSE — Class X',
    period: '2019',
    score: '79.8%',
    location: 'Rajahmundry',
  },
]

export const testScores: TestScore[] = [
  { label: 'GRE', detail: 'Verbal 162 · Quant 156 · AWA 3.0' },
  { label: 'IELTS', detail: 'Overall 6.5 · CEFR B2' },
]

export const certificationGroups: CertificationGroup[] = [
  {
    provider: 'Google Cloud',
    count: 22,
    profileUrl:
      'https://www.cloudskillsboost.google/public_profiles/6e7d2ea4-cb8c-45a1-847b-9c8cec506000',
    items: [
      { name: 'Cloud Computing Foundations Program' },
      { name: 'Intro to Large Language Models' },
      { name: 'Intro to Generative AI' },
      { name: 'Manage Kubernetes in Google Cloud' },
      { name: 'Digital Transformation with Google Cloud' },
    ],
  },
  {
    provider: 'Amazon Web Services',
    items: [
      {
        name: 'AWS Academy Cloud Architecting',
        url: 'https://www.credly.com/badges/648700bb-9189-4cb3-9dbf-0126f8e6b48f/linked_in_profile',
      },
      {
        name: 'AWS Academy Cloud Foundations',
        url: 'https://www.credly.com/badges/84c707ab-bd55-4ded-97e0-62d2cec7ecec/linked_in_profile',
      },
      {
        name: 'Solutions Architect — Associate Internship',
        url: 'https://ethnus.com/certverify',
      },
    ],
  },
  {
    provider: 'AI & LLMs',
    items: [
      {
        name: 'Hugging Face — AI Agents Course',
        url: 'https://huggingface.co/datasets/agents-course/certificates/resolve/main/certificates/Pavangunnam/2025-05-07.png',
      },
      { name: 'Google — 5-Day AI Agents Intensive' },
      {
        name: 'Deloitte — Data Analytics Simulation',
        url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_cfZ8y8qR3LaCb9hey_1746167363981_completion_certificate.pdf',
      },
    ],
  },
  {
    provider: 'Spoken Tutorial · IIT Bombay',
    items: [
      { name: 'Advanced C++' },
      { name: 'Python 3.4.3' },
      { name: 'C Programming' },
      { name: 'Java' },
      { name: 'SQL' },
      { name: 'PHP' },
    ],
  },
]
