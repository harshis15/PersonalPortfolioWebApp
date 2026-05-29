import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { portfolioData } from '../data/portfolioData'
import MintBadge from './ui/MintBadge'

const Experience = () => {
  const { experience } = portfolioData
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="experience" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="section-heading">{experience.title}</h2>
      </motion.div>

      <div className="relative mt-8 space-y-4 before:absolute before:left-3 before:top-0 before:h-full before:w-px before:bg-teal/60">
        {experience.items.map((item, index) => {
          const isOpen = openIndex === index

          return (
            <motion.article
              key={`${item.company}-${item.role}`}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 pl-10 shadow-glass"
            >
              <span className="timeline-node absolute left-[6px] top-7 h-3.5 w-3.5 rounded-full border border-mint bg-teal" />

              <button
                type="button"
                className="w-full text-left"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-2xl text-white">{item.company}</h3>
                  <MintBadge label={item.role} />
                </div>
                <p className="mt-2 text-xs font-mono uppercase tracking-[0.16em] text-muted">{item.dateRange}</p>
                <p className="mt-1 text-sm text-slate-200">{item.location}</p>
                <p className="mt-3 text-sm text-slate-300">{item.summary}</p>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.28 }}
                    className="overflow-hidden"
                  >
                    {item.projects?.map((project) => (
                      <div key={project.title} className="mt-4 rounded-xl border border-white/10 bg-navy/70 p-4">
                        <h4 className="font-semibold text-mint">{project.title}</h4>
                        <ul className="mt-2 space-y-2">
                          {project.points.map((point) => (
                            <li key={point} className="flex gap-2 text-sm text-slate-200">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-mint" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {item.bullets && (
                      <ul className="mt-4 space-y-2">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-2 text-sm text-slate-200">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-mint" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

export default Experience
