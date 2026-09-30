import Seo from '../components/Seo'
import { useMemo, useState } from 'react'
import { photos, photoCategories } from '../data/photos'
import PhotoGrid from '../components/PhotoGrid'
import PipelinePattern from '../components/PipelinePattern'

export default function Gallery() {
  const [cat, setCat] = useState('all')
  const visible = useMemo(() => (cat === 'all' ? photos : photos.filter((p) => p.cat === cat)), [cat])

  return (
    <>
      <Seo title="Photo Gallery" description="Real site photos of Akhilesh Construction: HDD rigs, MDPE pipeline laying, tap-offs, PNG meter connections and city gas station works in Madhya Pradesh." />
      <section className="relative bg-brand-navy py-14 md:py-20 overflow-hidden">
        <PipelinePattern />
        <div className="container-x relative">
          <h1 className="text-white text-3xl md:text-4xl font-extrabold">Gallery</h1>
          <p className="text-gray-300 mt-2 max-w-2xl">
            Real photos from our machinery, sites and pipeline & civil works — {photos.length} and counting.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="container-x">
          <div className="flex flex-wrap gap-2 mb-8">
            {photoCategories.map((c) => {
              const n = c.key === 'all' ? photos.length : photos.filter((p) => p.cat === c.key).length
              return (
                <button
                  key={c.key}
                  onClick={() => setCat(c.key)}
                  className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors ${
                    cat === c.key
                      ? 'bg-brand-navy text-white border-brand-navy'
                      : 'bg-white text-brand-navy border-gray-200 hover:border-brand-gold hover:text-brand-gold'
                  }`}
                >
                  {c.label} <span className="opacity-60">({n})</span>
                </button>
              )
            })}
          </div>
          <PhotoGrid key={cat} photos={visible} />
        </div>
      </section>
    </>
  )
}
