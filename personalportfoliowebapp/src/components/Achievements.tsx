import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

const Achievements = () => {
  const { achievements } = portfolioData

  return (
    <section id="achievements" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="section-heading">{achievements.title}</h2>
      </motion.div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {achievements.items.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className={`rounded-2xl border p-6 shadow-glass ${
              item.featured
                ? 'border-mint/40 bg-gradient-to-br from-mint/10 to-white/[0.03]'
                : 'border-white/10 bg-white/[0.03]'
            }`}
          >
            <p className="text-4xl" aria-hidden="true">
              {item.icon}
            </p>
            <h3 className="mt-4 font-display text-2xl text-teal">{item.title}</h3>
            <p className="mt-2 text-xs font-mono uppercase tracking-[0.16em] text-muted">{item.event}</p>
            <p className="mt-3 text-sm leading-relaxed text-teal/85">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Achievements
