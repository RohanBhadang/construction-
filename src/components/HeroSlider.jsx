import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { heroSlides } from '../data/siteData'

export default function HeroSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (i) => setIndex(i)

  return (
    <section className="relative h-[65vh] md:h-[85vh] w-full overflow-hidden bg-brand-navy">
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={slide.image}
              alt=""
              className={`w-full h-full object-cover ${
                i === index ? 'motion-safe:animate-kenburns' : ''
              }`}
            />
          </div>
          {/* Cinematic gradient — darker on the left for text contrast, warm fade at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/95 via-brand-navy/45 to-brand-navy/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/80 via-brand-navy/10 to-transparent" />
          {/* Fine film-grain texture for a polished, premium feel */}
          <div
            className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />
          {/* Slow diagonal light sweep */}
          {i === index && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -inset-y-1/2 -left-1/3 w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent motion-safe:animate-[sweep_5s_ease-in-out_1]" />
            </div>
          )}
          <div className="relative z-10 h-full container-x flex flex-col justify-center items-start max-w-3xl">
            {i === index && (
              <>
                <span
                  key={`accent-${i}`}
                  className="h-1 w-16 bg-brand-gold rounded-full mb-5 shadow-[0_0_12px_rgba(242,169,0,0.8)] opacity-0 animate-fade-slide-up motion-reduce:opacity-100 motion-reduce:animate-none"
                  style={{ animationDelay: '60ms' }}
                />
                <h1
                  key={`title-${i}`}
                  className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.55)] opacity-0 animate-fade-slide-up motion-reduce:opacity-100 motion-reduce:animate-none"
                  style={{ animationDelay: '150ms' }}
                >
                  {slide.title}
                </h1>
                {slide.subtitle && (
                  <p
                    key={`sub-${i}`}
                    className="text-gray-200 mt-4 text-base md:text-lg max-w-xl opacity-0 animate-fade-slide-up motion-reduce:opacity-100 motion-reduce:animate-none"
                    style={{ animationDelay: '320ms' }}
                  >
                    {slide.subtitle}
                  </p>
                )}
                <Link
                  key={`cta-${i}`}
                  to="/about"
                  className="btn-primary mt-8 opacity-0 animate-fade-slide-up motion-reduce:opacity-100 motion-reduce:animate-none"
                  style={{ animationDelay: '480ms' }}
                >
                  KNOW MORE
                </Link>
              </>
            )}
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? 'w-8 bg-brand-gold' : 'w-2.5 bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
