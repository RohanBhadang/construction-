import { useEffect, useRef, useState } from 'react'

export default function StatCounter({ value, suffix = '', label, duration = 1400 }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const played = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !played.current) {
          played.current = true
          const start = performance.now()
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setDisplay(Math.round(value * eased))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [value, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold text-brand-gold tabular-nums">
        {display}
        {suffix}
      </div>
      <p className="text-gray-300 text-sm mt-2 max-w-[160px] mx-auto leading-snug">{label}</p>
    </div>
  )
}
