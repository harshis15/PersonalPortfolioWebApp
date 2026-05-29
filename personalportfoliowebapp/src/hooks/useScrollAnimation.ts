import { useEffect, useRef, useState } from 'react'

export const useScrollAnimation = <T extends HTMLElement>(threshold = 0.2) => {
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}
