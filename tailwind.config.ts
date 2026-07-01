import type { Config } from 'tailwindcss'

const withOpacity = (variable: string) => `rgb(var(${variable}) / <alpha-value>)`

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: withOpacity('--bg'),
        'background-elevated': withOpacity('--bg-elevated'),
        surface: withOpacity('--surface'),
        'surface-2': withOpacity('--surface-2'),
        foreground: withOpacity('--foreground'),
        muted: withOpacity('--muted'),
        'muted-foreground': withOpacity('--muted-foreground'),
        border: withOpacity('--border'),
        accent: {
          DEFAULT: withOpacity('--accent'),
          from: withOpacity('--accent-from'),
          to: withOpacity('--accent-to'),
        },
        success: withOpacity('--success'),
        warning: withOpacity('--warning'),
        error: withOpacity('--error'),
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // fluid display sizes
        'display-sm': ['clamp(2rem, 5vw, 3rem)', { lineHeight: '1.1' }],
        display: ['clamp(2.5rem, 7vw, 4.5rem)', { lineHeight: '1.05' }],
        'display-lg': ['clamp(3rem, 9vw, 5.5rem)', { lineHeight: '1.02' }],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        elevated: 'var(--shadow-elevated)',
        glow: 'var(--glow-accent)',
      },
      maxWidth: {
        content: '72rem',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(4%, -6%, 0) scale(1.1)' },
          '66%': { transform: 'translate3d(-4%, 4%, 0) scale(0.95)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        aurora: 'aurora 18s ease-in-out infinite',
        'aurora-slow': 'aurora 26s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'gradient-x': 'gradient-x 6s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
