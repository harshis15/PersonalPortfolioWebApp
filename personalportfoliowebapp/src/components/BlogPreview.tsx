import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { SiMedium } from 'react-icons/si'
import { portfolioData } from '../data/portfolioData'

const BlogPreview = () => {
  const { blog } = portfolioData

  return (
    <section id="blog" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="section-heading">{blog.title}</h2>
        <p className="mt-3 text-muted">{blog.subtitle}</p>
      </motion.div>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-glass"
      >
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted">
          <SiMedium className="text-teal" />
          <span>{blog.postPlatform}</span>
        </div>

        <h3 className="mt-3 font-display text-2xl text-teal">{blog.postTitle}</h3>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-teal/85">{blog.postDescription}</p>

        <a
          href={blog.postLink}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-mint/40 bg-mint/10 px-4 py-2 text-sm font-semibold text-mint transition hover:border-mint/70"
        >
          Read article
          <FiArrowUpRight />
        </a>
      </motion.article>
    </section>
  )
}

export default BlogPreview
