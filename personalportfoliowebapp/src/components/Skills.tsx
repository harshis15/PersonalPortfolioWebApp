import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import MarqueeRow from './ui/MarqueeRow'

const Skills = () => {
  const { skills } = portfolioData

  return (
    <section id="skills" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="section-heading">{skills.title}</h2>
        <p className="mt-3 text-muted">{skills.subtitle}</p>
      </motion.div>

      <div className="mt-8 space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:p-5">
        <MarqueeRow items={skills.marqueeRows[0]} />
        <MarqueeRow items={skills.marqueeRows[1]} reverse />
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {skills.categories.map((category, index) => (
          <motion.article
            key={category.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-glass"
          >
            <h3 className="border-l-2 border-teal pl-3 font-display text-xl text-teal">{category.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="skill-tag rounded-full border border-teal/50 bg-navy px-3 py-1 text-xs font-mono text-teal">
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Skills
