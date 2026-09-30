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
          className="group relative flex items-center"
        >
          {/* label pill (desktop, slides out on hover) */}
          <span className="hidden md:block mr-3 max-w-0 overflow-hidden whitespace-nowrap rounded-full bg-white px-0 py-2 text-sm font-semibold text-brand-navy opacity-0 shadow-lg transition-all duration-300 group-hover:max-w-[180px] group-hover:px-4 group-hover:opacity-100">
            Chat on WhatsApp
          </span>
          <span className="relative flex h-14 w-14 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping motion-reduce:hidden" />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#2FE578] to-[#128C7E] text-white shadow-[0_8px_24px_rgba(18,140,126,0.55)] ring-2 ring-white/90 transition-transform duration-300 group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </span>
          </span>
        </a>
        <a
          href={`tel:${digits}`}
          aria-label="Call now"
          className="md:hidden flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold text-brand-navy shadow-xl ring-2 ring-white/90"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.3a1 1 0 01.95.68l1.1 3.3a1 1 0 01-.5 1.2l-1.5.8a11 11 0 005.2 5.2l.8-1.5a1 1 0 011.2-.5l3.3 1.1a1 1 0 01.68.95V19a2 2 0 01-2 2A16 16 0 013 5z" />
          </svg>
        </a>
      </div>
    </>
  )
}
