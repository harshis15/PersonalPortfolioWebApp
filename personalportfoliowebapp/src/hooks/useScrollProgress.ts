import { useEffect, useState } from 'react'

const getScrollProgress = () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight
  if (maxScroll <= 0) {
    return 0
  }
  return Math.min(1, Math.max(0, window.scrollY / maxScroll))
}

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => setProgress(getScrollProgress())

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return progress
}
