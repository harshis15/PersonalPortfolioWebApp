import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'page-bg': '#110700',
        navy: '#1C0E03',
        'navy-deep': '#110700',
        surface: '#241206',
        raised: '#2E1608',
        border: '#3A2010',
        teal: '#FDFBD4',
        mint: '#C05800',
        'teal-light': '#E8873A',
        muted: '#D4B090',
        cream: '#B08060',
        'label-muted': '#8A6040',
        'accent-muted': '#8C3E00',
        'accent-border': '#5C2E0A',
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        glass: '0 14px 35px rgba(0, 0, 0, 0.22)',
        glow: '0 0 0 1px #5C2E0A, 0 0 18px rgba(192, 88, 0, 0.35)',
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
