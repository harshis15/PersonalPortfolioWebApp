import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiArrowUpRight, FiChevronDown, FiX } from 'react-icons/fi'
import { portfolioData } from '../data/portfolioData'

const Projects = () => {
  const { projects } = portfolioData
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const selectedProject = openIndex !== null ? projects.items[openIndex] : null

  useEffect(() => {
    document.body.style.overflow = openIndex !== null ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [openIndex])

  return (
    <section id="projects" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="section-heading">{projects.title}</h2>
      </motion.div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {projects.items.map((project, index) => {
          const isOpen = openIndex === index

          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ scale: 1.02 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-glass transition hover:shadow-glow ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="absolute right-4 top-4 translate-x-2 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
                <FiArrowUpRight className="text-mint" />
              </div>

              <button
                type="button"
                className="w-full text-left"
                onClick={() => project.details && setOpenIndex(index)}
                aria-expanded={isOpen}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-2xl text-white">{project.title}</h3>
                  {project.details && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-mint/40 bg-mint/10 px-2.5 py-1 text-[11px] font-semibold text-mint">
                      Details
                      <FiChevronDown className="-rotate-90" />
                    </span>
                  )}
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-200/90">{project.description}</p>
              </button>

              {project.highlight && (
                <p className="mt-3 inline-flex rounded-full border border-mint/40 bg-mint/10 px-3 py-1 text-xs font-semibold text-mint">
                  {project.highlight}
                </p>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/15 bg-navy px-3 py-1 text-xs font-mono text-teal">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          )
        })}
      </div>

      <AnimatePresence>
        {selectedProject?.details && (
          <motion.div
            className="fixed inset-0 z-[120] bg-navy-deep/65 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProject.title} details`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              className="mx-auto mt-10 max-h-[85vh] w-[min(920px,92vw)] overflow-y-auto rounded-2xl border border-teal/35 bg-navy p-5 shadow-[0_25px_120px_rgba(0,0,0,0.55)] md:p-6"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-3xl text-white">{selectedProject.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200/90">{selectedProject.description}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpenIndex(null)}
                  className="rounded-lg border border-white/20 p-2 text-slate-200 transition hover:border-mint/60 hover:text-mint"
                  aria-label="Close project details"
                >
                  <FiX />
                </button>
              </div>

              {selectedProject.details.executiveSummary && (
                <p className="mt-4 rounded-lg border border-mint/30 bg-mint/10 p-3 text-sm leading-relaxed text-mint">
                  {selectedProject.details.executiveSummary}
                </p>
              )}

              <div className="mt-4 space-y-4">
                {selectedProject.details.sections.map((section) => (
                  <div key={section.heading} className="rounded-lg border border-white/10 bg-white/[0.02] p-3.5">
                    <h4 className="font-semibold text-white">{section.heading}</h4>
                    <ul className="mt-2 space-y-1.5">
                      {section.points.map((point) => (
                        <li key={point} className="flex gap-2 text-sm text-slate-200">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-mint" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
