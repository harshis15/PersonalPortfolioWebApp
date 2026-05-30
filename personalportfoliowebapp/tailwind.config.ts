import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#713600',
        'navy-deep': '#38240D',
        teal: '#FDFBD4',
        mint: '#C05800',
        'teal-light': '#9B4A04',
        muted: '#DCCFB8',
        cream: '#FDFBD4',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        glass: '0 14px 35px rgba(0, 0, 0, 0.22)',
        glow: '0 0 0 1px rgba(253, 251, 212, 0.35), 0 0 18px rgba(192, 88, 0, 0.35)',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.35)', opacity: '0.45' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      animation: {
        pulseDot: 'pulseDot 2.4s ease-in-out infinite',
        float: 'float 5.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
