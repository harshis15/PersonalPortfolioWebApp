import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import GlowButton from './ui/GlowButton'
import type { NavItem } from '../data/portfolioData'

type NavbarProps = {
  activeSection: string
  navLinks: NavItem[]
}

const scrollToSection = (id: string) => {
  const target = document.getElementById(id)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const Navbar = ({ activeSection, navLinks }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', onEscape)
    return () => window.removeEventListener('keydown', onEscape)
  }, [isOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <button
          type="button"
          onClick={() => scrollToSection('hero')}
          className="rounded-full border border-white/10 bg-navy/70 px-3 py-1 font-display text-base font-bold tracking-[0.2em] text-teal backdrop-blur-xl transition hover:border-mint/60"
          aria-label="Go to hero section"
        >
          HS
        </button>

        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: isScrolled ? 1 : 0, y: isScrolled ? 0 : -8 }}
          className="pointer-events-none absolute left-1/2 hidden -translate-x-1/2 md:block"
          aria-label="Primary navigation"
        >
          <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 backdrop-blur-xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className="nav-link relative px-3 py-1.5 text-sm text-teal/90"
                  aria-current={isActive ? 'page' : undefined}
                >
                  {isActive && <span className="absolute -top-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-mint" />}
                  {link.label}
                </button>
              )
            })}
            <GlowButton
              type="button"
              onClick={() => scrollToSection('contact')}
              className="px-4 py-1.5 text-xs"
            >
              Hire Me
            </GlowButton>
          </div>
        </motion.nav>

        <button
          type="button"
          className="rounded-lg border border-white/10 bg-navy/60 p-2 text-teal md:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-5 bg-current" />
          <span className="mt-1 block h-0.5 w-5 bg-current" />
          <span className="mt-1 block h-0.5 w-5 bg-current" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-navy-deep/95 p-8 backdrop-blur-2xl md:hidden"
          >
            <button
              type="button"
              className="ml-auto block rounded-md border border-white/15 px-3 py-1.5 text-sm"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
            <nav className="mt-16 flex flex-col items-center gap-7" aria-label="Mobile navigation">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  type="button"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index }}
                  className="font-display text-3xl text-white"
                  onClick={() => {
                    scrollToSection(link.id)
                    setIsOpen(false)
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
