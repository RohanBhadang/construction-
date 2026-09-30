import { useEffect, useState } from 'react'
import { siteInfo } from '../data/siteData'

const digits = siteInfo.phone.replace(/\D/g, '')

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0)
      setShowTop(h.scrollTop > 600)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* reading progress bar */}
      <div className="fixed top-0 left-0 h-[3px] bg-brand-gold z-[70]" style={{ width: `${progress}%` }} />

      <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3">
        {showTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="h-11 w-11 rounded-full bg-brand-navy text-white shadow-lg hover:bg-brand-gold hover:text-brand-navy transition-colors"
          >
            ↑
          </button>
        )}
        <a
          href={`https://wa.me/91${digits}?text=${encodeURIComponent('Hello Akhilesh Construction, I would like to discuss a project.')}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 transition-transform"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 20l1.3-4.2A8 8 0 1112 20a8 8 0 01-3.8-1L4 20z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.5c0 3 2.500 5.500 5.500 5.500l1-1.500-1.800-.9-.8.800a4 4 0 01-1.800-1.800l.8-.8L10.100 8.500 9 9.500z" />
          </svg>
        </a>
        <a
          href={`tel:${digits}`}
          aria-label="Call now"
          className="md:hidden flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold text-brand-navy shadow-xl text-xl"
        >
          ☎
        </a>
      </div>
    </>
  )
}
