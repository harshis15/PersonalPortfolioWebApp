import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { portfolioData } from '../data/portfolioData'

const Projects = () => {
  const { projects } = portfolioData

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
        {projects.items.map((project, index) => (
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

            <h3 className="font-display text-2xl text-white">{project.title}</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-200/90">{project.description}</p>

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
        ))}
      </div>
    </section>
  )
}

export default Projects
