import { useState } from 'react'
import { galleryImages } from '../data/siteData'
import PipelinePattern from '../components/PipelinePattern'

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <>
      <section className="relative bg-brand-navy py-14 md:py-20 overflow-hidden">
        <PipelinePattern />
        <div className="container-x relative">
          <h1 className="text-white text-3xl md:text-4xl font-extrabold">Gallery</h1>
          <p className="text-gray-300 mt-2 max-w-2xl">
            A look at our machinery, sites and completed pipeline & civil works.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-x grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(img)}
              className="group relative aspect-[4/3] w-full block rounded-md overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-300 bg-brand-light"
            >
              <img
                src={img}
                alt={`Akhilesh Construction work ${i + 1}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-3 left-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                View photo
              </span>
            </button>
          ))}
        </div>
      </section>

      {active && (
        <div
          className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActive(null)}
        >
          <img
            src={active}
            alt="Gallery preview"
            className="max-h-[90vh] max-w-full rounded-sm object-contain motion-safe:animate-fade-slide-up"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-6 right-6 text-white text-3xl leading-none hover:text-brand-gold transition-colors"
            onClick={() => setActive(null)}
            aria-label="Close preview"
          >
            &times;
          </button>
        </div>
      )}
    </>
  )
}
