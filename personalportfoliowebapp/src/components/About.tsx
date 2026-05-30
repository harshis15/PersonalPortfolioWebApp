import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import { useCountUp } from '../hooks/useCountUp'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import BentoCard from './ui/BentoCard'

const About = () => {
  const { about } = portfolioData
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()
  const impactCount = useCountUp(1200, isVisible)

  return (
    <section id="about" ref={ref} className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8"
      >
        <h2 className="section-heading">{about.title}</h2>
      </motion.div>

      <div className="grid gap-4 lg:grid-cols-3">
        <BentoCard className="lg:col-span-2">
          <h3 className="font-display text-3xl text-teal">Who I am</h3>
          <p className="mt-4 text-base leading-relaxed text-teal/85">{about.statement}</p>
        </BentoCard>

        <BentoCard>
          <p className="text-3xl">📍</p>
          <p className="mt-3 font-display text-2xl text-teal">Dubai, UAE</p>
          <p className="mt-1 text-sm text-muted">Based in</p>
        </BentoCard>

        <BentoCard>
          <p className="font-display text-3xl text-mint">MSc</p>
          <p className="mt-2 text-sm text-teal/85">Data Science - Heriot-Watt</p>
          <span className="mt-3 inline-flex rounded-full border border-mint/40 px-3 py-1 text-xs text-mint">On track for Distinction</span>
        </BentoCard>

        <BentoCard>
          <p className="font-display text-3xl text-mint">{impactCount}+</p>
          <p className="mt-2 text-sm text-muted">hrs saved/month</p>
        </BentoCard>

        <BentoCard>
          <p className="font-display text-3xl text-mint">2×</p>
          <p className="mt-2 text-sm text-teal/85">Hackathon Winner</p>
          <p className="text-xs text-muted">AGENTVERSE 2025</p>
        </BentoCard>

        <BentoCard className="lg:col-span-2">
          <p className="text-sm uppercase tracking-[0.2em] text-muted">Languages</p>
          <p className="mt-3 font-display text-2xl text-teal/90">English · Hindi · Kannada</p>
        </BentoCard>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {about.quickFacts.map((fact, idx) => (
          <motion.article
            key={fact.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
          >
            <p className="text-xl" aria-hidden="true">
              {fact.icon}
            </p>
            <p className="mt-2 text-sm font-semibold text-teal">{fact.title}</p>
            <p className="mt-1 text-xs text-muted">{fact.subtitle}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default About
