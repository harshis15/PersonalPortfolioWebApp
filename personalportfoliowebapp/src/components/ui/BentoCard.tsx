import { motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

type BentoCardProps = PropsWithChildren<{
  className?: string
  delay?: number
}>

const BentoCard = ({ children, className = '', delay = 0 }: BentoCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -2 }}
      className={`rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-glass backdrop-blur-md transition-all duration-300 ${className}`}
    >
      {children}
    </motion.article>
  )
}

export default BentoCard
