import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { SiMedium } from 'react-icons/si'
import { portfolioData } from '../data/portfolioData'
import GlowButton from './ui/GlowButton'

const iconMap = {
  linkedin: FiLinkedin,
  github: FiGithub,
  email: FiMail,
  medium: SiMedium,
} as const

const Hero = () => {
  const { hero, brand } = portfolioData
  const [index, setIndex] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const resumeUrl = new URL('../assets/Harshitha Srikanth Resume.pdf', import.meta.url).href

  const role = useMemo(() => hero.roleTicker[index], [hero.roleTicker, index])

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % hero.roleTicker.length)
    }, 2200)

    return () => window.clearInterval(id)
  }, [hero.roleTicker.length])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return
    }

    const ctx = canvas.getContext('2d')
    if (!ctx) {
      return
    }

    let animationFrame = 0
    const particles = Array.from({ length: 72 }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 2 + 0.8,
      vx: (Math.random() - 0.5) * 0.0009,
      vy: (Math.random() - 0.5) * 0.0009,
      alpha: Math.random() * 0.5 + 0.2,
    }))

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x <= 0 || particle.x >= 1) particle.vx *= -1
        if (particle.y <= 0 || particle.y >= 1) particle.vy *= -1

        ctx.beginPath()
        ctx.fillStyle = `rgba(253, 251, 212, ${particle.alpha})`
        ctx.arc(particle.x * canvas.width, particle.y * canvas.height, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrame = window.requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="hero" className="hero-mesh relative min-h-screen overflow-hidden px-5 pb-16 pt-28 md:px-8 md:pt-32">
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.45fr_1fr]">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="space-y-6"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-teal/50 bg-white/[0.03] px-4 py-1.5 text-xs font-mono uppercase tracking-[0.14em] text-teal">
              <span className="h-2 w-2 animate-pulse rounded-full bg-mint" />
              {hero.availability}
            </span>
          </motion.div>

          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="text-sm uppercase tracking-[0.2em] text-muted">
            {brand.roleLine}
          </motion.p>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="max-w-3xl font-display text-5xl font-bold leading-tight md:text-7xl"
          >
            <span className="hero-title-gradient">{hero.heading}</span>
          </motion.h1>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="h-9 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={role}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -24, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="font-display text-2xl text-mint"
              >
                {role}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="max-w-2xl text-base leading-relaxed text-teal/90 md:text-lg">
            {hero.subheading} {hero.bio}
          </motion.p>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="flex flex-wrap items-center gap-4">
            <GlowButton href={`#${hero.ctaPrimary.target}`} onClick={(event) => {
              event.preventDefault()
              const target = document.getElementById(hero.ctaPrimary.target)
              target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}>
              {hero.ctaPrimary.label}
            </GlowButton>
            <a
              href={resumeUrl}
              className="inline-flex items-center rounded-full border border-teal px-5 py-2.5 text-sm font-semibold text-teal transition hover:bg-teal/10"
              download
            >
              {hero.ctaSecondary.label}
            </a>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="flex items-center gap-4">
            {hero.socialLinks.map((link) => {
              const Icon = iconMap[link.type]
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.type === 'email' ? undefined : '_blank'}
                  rel={link.type === 'email' ? undefined : 'noreferrer'}
                  aria-label={link.label}
                  className="rounded-full border border-white/15 bg-white/[0.03] p-2.5 text-muted transition hover:scale-110 hover:border-mint/60 hover:text-teal"
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto flex w-full max-w-sm justify-center"
        >
          <div className="relative grid h-72 w-72 place-content-center rounded-full border border-[#C05800]/40 bg-[#713600]/20 shadow-[0_0_60px_rgba(113,54,0,0.3)] md:h-80 md:w-80">
            <div className="absolute inset-5 rounded-full border border-[#C05800]/40" />
            <div className="orbit-ring absolute inset-[-14px] rounded-full border border-[#713600]/60" />
            <div className="animate-float rounded-full border border-[#FDFBD4]/20 bg-navy px-8 py-8 text-center shadow-glass">
              <p className="font-display text-6xl font-bold text-mint">{brand.initials}</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-xs uppercase tracking-[0.26em] text-muted"
      >
        <span>{hero.scrollHint}</span>
        <BsChevronDown className="animate-bounce text-mint" />
      </motion.div>
    </section>
  )
}

export default Hero
