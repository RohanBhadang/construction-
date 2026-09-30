import { useEffect } from 'react'

// Full-screen photo viewer with prev / next, keyboard arrows and Esc to close.
export default function Lightbox({ photos, index, onClose, onChange }) {
  const photo = photos[index]
  const count = photos.length

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onChange((index + 1) % count)
      if (e.key === 'ArrowLeft') onChange((index - 1 + count) % count)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, count, onClose, onChange])

  if (!photo) return null

  return (
    <div
      className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <img
        key={photo.slug}
        src={photo.src}
        alt={photo.caption}
        className="max-h-[82vh] max-w-full rounded-sm object-contain motion-safe:animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      />
      <p className="absolute bottom-6 left-0 right-0 text-center text-white text-sm px-16" onClick={(e) => e.stopPropagation()}>
        {photo.caption} <span className="text-gray-400 ml-2">{index + 1} / {count}</span>
      </p>

      <button
        className="absolute top-5 right-6 text-white text-4xl leading-none hover:text-brand-gold transition-colors"
        onClick={onClose}
        aria-label="Close preview"
      >
        &times;
      </button>
      {count > 1 && (
        <>
          <button
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white text-5xl px-3 hover:text-brand-gold transition-colors"
            onClick={(e) => { e.stopPropagation(); onChange((index - 1 + count) % count) }}
            aria-label="Previous photo"
          >
            &#8249;
          </button>
          <button
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white text-5xl px-3 hover:text-brand-gold transition-colors"
            onClick={(e) => { e.stopPropagation(); onChange((index + 1) % count) }}
            aria-label="Next photo"
          >
            &#8250;
          </button>
        </>
      )}
    </div>
  )
}
