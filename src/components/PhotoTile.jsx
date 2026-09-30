import { useEffect, useRef, useState } from 'react'

// One gallery tile: lazy-loaded image with fade-in, scroll reveal, and a 3D tilt on hover.
export default function PhotoTile({ photo, index, onOpen }) {
  const wrap = useRef(null)
  const card = useRef(null)
  const imgRef = useRef(null)
  const [seen, setSeen] = useState(false)
  const [loaded, setLoaded] = useState(false)

  // Scroll reveal (fires once, a little before the tile enters the screen)
  useEffect(() => {
    const node = wrap.current
    if (!node) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { rootMargin: '120px 0px' }
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  // Image may already be cached
  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true)
  }, [seen])

  const onMove = (e) => {
    if (e.pointerType === 'touch') return
    const el = card.current
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `rotateX(${(-y * 10).toFixed(2)}deg) rotateY(${(x * 12).toFixed(2)}deg) translateZ(18px) scale(1.03)`
    el.style.setProperty('--gx', `${(x + 0.5) * 100}%`)
    el.style.setProperty('--gy', `${(y + 0.5) * 100}%`)
  }
  const onLeave = () => {
    const el = card.current
    if (el) el.style.transform = ''
  }

  return (
    <div
      ref={wrap}
      style={{ perspective: '900px', transitionDelay: `${(index % 4) * 70}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        seen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <button
        ref={card}
        onClick={() => onOpen(index)}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={{ transformStyle: 'preserve-3d' }}
        className="group relative block w-full aspect-[4/3] overflow-hidden rounded-md bg-brand-navy/10 shadow-md hover:shadow-[0_22px_40px_-12px_rgba(11,35,64,0.55)] transition-[transform,box-shadow] duration-200 ease-out will-change-transform"
      >
        {/* shimmer placeholder until the image arrives */}
        {!loaded && <span className="absolute inset-0 animate-pulse bg-gradient-to-br from-gray-200 to-gray-300" />}
        {seen && (
          <img
            ref={imgRef}
            src={photo.thumb}
            alt={photo.caption}
            loading="lazy"
            decoding="async"
            width={photo.w}
            height={photo.h}
            onLoad={() => setLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          />
        )}
        {/* moving light glare that follows the pointer */}
        <span
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'radial-gradient(circle at var(--gx,50%) var(--gy,50%), rgba(255,255,255,0.28), transparent 55%)' }}
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="pointer-events-none absolute bottom-3 left-4 right-4 text-left text-white text-xs md:text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300" style={{ transform: 'translateZ(30px)' }}>
          {photo.caption}
        </span>
        <span className="pointer-events-none absolute inset-0 rounded-md ring-0 group-hover:ring-2 ring-brand-gold/80 transition-all duration-300" />
      </button>
    </div>
  )
}
