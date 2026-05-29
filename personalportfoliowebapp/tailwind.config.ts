import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0D1B3E',
        'navy-deep': '#08132A',
        teal: '#028090',
        mint: '#02C39A',
        'teal-light': '#1C7293',
        muted: '#7A8FA6',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        glass: '0 14px 35px rgba(0, 0, 0, 0.22)',
        glow: '0 0 0 1px rgba(2, 128, 144, 0.45), 0 0 18px rgba(2, 195, 154, 0.25)',
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
