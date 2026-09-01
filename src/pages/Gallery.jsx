import { useState } from 'react'
import { galleryImages } from '../data/siteData'

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <>
      <section className="bg-brand-navy py-14 md:py-20">
        <div className="container-x">
          <h1 className="text-white text-3xl md:text-4xl font-extrabold">Gallery</h1>
          <p className="text-gray-300 mt-2 max-w-2xl">
            A look at our machinery, sites and completed pipeline & civil works.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-x columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {galleryImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(img)}
              className="mb-6 w-full block rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-shadow break-inside-avoid"
            >
              <img
                src={img}
                alt={`Akhilesh Construction work ${i + 1}`}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </button>
          ))}
        </div>
      </section>

      {active && (
        <div
          className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <img src={active} alt="Gallery preview" className="max-h-[90vh] max-w-full rounded-sm" />
          <button
            className="absolute top-6 right-6 text-white text-3xl leading-none"
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
