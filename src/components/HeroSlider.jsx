import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { heroSlides } from '../data/siteData'

export default function HeroSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length)
    }, 5500)
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
          <img src={slide.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/95 via-brand-navy/50 to-brand-navy/30" />
          <div className="relative z-10 h-full container-x flex flex-col justify-center items-start max-w-3xl">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
              {slide.title}
            </h1>
            {slide.subtitle && (
              <p className="text-gray-200 mt-4 text-base md:text-lg max-w-xl">{slide.subtitle}</p>
            )}
            <Link to="/about" className="btn-primary mt-8">
              KNOW MORE
            </Link>
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
