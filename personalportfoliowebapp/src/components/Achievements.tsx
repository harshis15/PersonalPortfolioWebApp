import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi'
import { portfolioData } from '../data/portfolioData'

const Achievements = () => {
  const { achievements } = portfolioData
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null)

  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedImage])

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
            {item.image && (
              <button
                type="button"
                onClick={() => setSelectedImage({ src: item.image!, title: item.title })}
                className="mb-4 block w-full"
                aria-label={`Open ${item.title} image`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-44 w-full rounded-xl border border-white/10 object-cover transition hover:opacity-90"
                  loading="lazy"
                />
              </button>
            )}
            <p className="text-4xl" aria-hidden="true">
              {item.icon}
            </p>
            <h3 className="mt-4 font-display text-2xl text-teal">{item.title}</h3>
            <p className="mt-2 text-xs font-mono uppercase tracking-[0.16em] text-muted">{item.event}</p>
            <p className="mt-3 text-sm leading-relaxed text-teal/85">{item.description}</p>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[130] bg-navy-deep/75 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedImage.title} image preview`}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="relative mx-auto mt-8 w-[min(1100px,94vw)]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute right-3 top-3 z-10 rounded-lg border border-white/25 bg-navy/70 p-2 text-teal transition hover:border-mint/60"
                aria-label="Close image preview"
              >
                <FiX />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[86vh] w-full rounded-2xl border border-white/15 object-contain bg-[#1b1006]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Achievements
