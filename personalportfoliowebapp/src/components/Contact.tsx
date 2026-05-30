import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'
import { portfolioData } from '../data/portfolioData'

const iconMap = {
  email: FiMail,
  location: FiMapPin,
  linkedin: FiLinkedin,
  github: FiGithub,
} as const

const Contact = () => {
  const { contact } = portfolioData

  return (
    <section id="contact" className="hero-mesh section-shell rounded-t-[2.5rem] border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="text-center"
      >
        <h2 className="font-display text-4xl text-teal md:text-5xl">{contact.title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-teal/85">{contact.subtitle}</p>
      </motion.div>

      <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {contact.methods.map((method) => {
          const Icon = iconMap[method.icon as keyof typeof iconMap]
          return (
            <a
              key={method.label}
              href={method.href}
              target={method.icon === 'email' ? undefined : '_blank'}
              rel={method.icon === 'email' ? undefined : 'noreferrer'}
              className="group flex min-w-0 items-start gap-3 rounded-2xl border border-white/15 bg-white/[0.04] px-4 py-3 transition hover:border-mint/60 hover:shadow-glow"
            >
              <span className="mt-0.5 rounded-full bg-navy p-2 text-teal">
                <Icon size={16} />
              </span>
              <span className="min-w-0 text-left">
                <span className="block text-xs uppercase tracking-[0.16em] text-muted">{method.label}</span>
                <span className="mt-0.5 block break-all text-sm leading-snug text-teal">{method.value}</span>
              </span>
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default Contact
