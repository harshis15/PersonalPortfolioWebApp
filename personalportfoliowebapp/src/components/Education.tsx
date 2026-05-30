import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

const Education = () => {
  const { education } = portfolioData

  return (
    <section id="education" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="section-heading">{education.title}</h2>
      </motion.div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <div className="space-y-4">
          {education.educationItems.map((item, index) => (
            <motion.article
              key={item.degree}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <h3 className="font-display text-2xl text-teal">{item.degree}</h3>
              <p className="mt-1 text-sm text-teal/85">{item.institution}</p>
              <p className="mt-3 text-xs font-mono uppercase tracking-[0.16em] text-muted">{item.period}</p>
              <p className="mt-2 inline-flex rounded-full border border-mint/40 px-3 py-1 text-xs text-teal">{item.note}</p>
            </motion.article>
          ))}
        </div>

        <div className="space-y-3">
          {education.certifications.map((certification, index) => (
            <motion.div
              key={certification}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:translate-x-1"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-mint" />
              <p className="text-sm text-teal/85">{certification}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
