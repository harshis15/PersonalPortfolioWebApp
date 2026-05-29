import { useEffect, useState } from 'react'
import { useSpring } from 'framer-motion'

export const useCursorGlow = () => {
  const [isDesktop, setIsDesktop] = useState(false)
  const x = useSpring(0, { stiffness: 260, damping: 30, mass: 0.3 })
  const y = useSpring(0, { stiffness: 260, damping: 30, mass: 0.3 })

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)')
    const syncDesktop = () => setIsDesktop(media.matches)

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }

    syncDesktop()
    media.addEventListener('change', syncDesktop)
    window.addEventListener('mousemove', onMove)

    return () => {
      media.removeEventListener('change', syncDesktop)
      window.removeEventListener('mousemove', onMove)
    }
  }, [x, y])

  return { x, y, isDesktop }
}
