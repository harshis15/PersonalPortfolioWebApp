import { useEffect, useState } from 'react'

export const useCountUp = (target: number, shouldStart: boolean, duration = 1400) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!shouldStart) {
      return
    }

    let frameId = 0
    let start: number | null = null

    const tick = (timestamp: number) => {
      if (start === null) {
        start = timestamp
      }

      const elapsed = timestamp - start
      const progress = Math.min(1, elapsed / duration)
      setValue(Math.floor(target * progress))

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick)
      }
    }

    frameId = window.requestAnimationFrame(tick)

    return () => window.cancelAnimationFrame(frameId)
  }, [target, shouldStart, duration])

  return value
}
