import { Suspense, lazy, useEffect, useMemo, useState } from 'react'
import { motion, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { portfolioData } from './data/portfolioData'
import { useScrollProgress } from './hooks/useScrollProgress'
import { useCursorGlow } from './hooks/useCursorGlow'

const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy(() => import('./components/Projects'))
const Achievements = lazy(() => import('./components/Achievements'))
const Education = lazy(() => import('./components/Education'))
const Contact = lazy(() => import('./components/Contact'))

function App() {
  const [activeSection, setActiveSection] = useState<string>('hero')
  const scrollProgress = useScrollProgress()
  const smoothProgress = useSpring(scrollProgress, { stiffness: 130, damping: 26 })
  const { x, y, isDesktop } = useCursorGlow()

  const sectionIds = useMemo(
    () => ['hero', ...portfolioData.navLinks.map((link) => link.id), 'education'],
    [],
  )

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.75],
        rootMargin: '-12% 0px -45% 0px',
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [sectionIds])

  return (
    <div className="relative min-h-screen bg-navy-deep text-white font-body">
      <motion.div
        className="fixed left-0 top-0 z-[80] h-px w-full origin-left bg-gradient-to-r from-mint to-teal"
        style={{ scaleX: smoothProgress }}
      />
      {isDesktop && (
        <>
          <motion.div
            className="pointer-events-none fixed z-[60] hidden h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(2,195,154,0.12)_0%,rgba(2,195,154,0.02)_42%,transparent_72%)] md:block"
            style={{ x: x - 150, y: y - 150 }}
          />
          <motion.div
            className="pointer-events-none fixed z-[70] hidden h-2.5 w-2.5 rounded-full border border-mint/85 bg-teal shadow-[0_0_12px_rgba(2,195,154,0.7)] md:block"
            style={{ x: x - 5, y: y - 5 }}
          />
        </>
      )}

      <Navbar activeSection={activeSection} navLinks={portfolioData.navLinks} />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-24" aria-hidden="true" />}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Education />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
