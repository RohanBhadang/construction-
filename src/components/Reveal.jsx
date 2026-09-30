import { useEffect, useRef, useState } from 'react'

// Fades + slides children up once they scroll into view.
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </Tag>
  )
}
