import { useState } from 'react'
import { Link } from 'react-router-dom'
import { hddShowcase } from '../data/siteData'
import PipelinePattern from './PipelinePattern'

const highlights = [
  { value: '02 Nos', label: 'Own HDD rigs' },
  { value: 'XZ200', label: 'XCMG rig model' },
  { value: '0 cutting', label: 'Trenchless crossings' },
]

const capabilities = [
  'Crossings below roads, railway tracks & canals',
  'In-house rigs, operators and support equipment',
  'Minimal traffic disruption and road restoration',
  'Deployed across city gas distribution projects',
]

const Tick = () => (
  <svg className="w-4 h-4 shrink-0 mt-0.5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

export default function HddSpotlight() {
  const [active, setActive] = useState(0)
  const current = hddShowcase[active]

  return (
    <section className="relative py-16 md:py-24 bg-brand-navy overflow-hidden">
      <PipelinePattern />
      <div className="container-x relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Copy */}
        <div>
          <span className="inline-block text-xs font-semibold tracking-[0.25em] text-brand-gold mb-3">
            TRENCHLESS TECHNOLOGY
          </span>
          <h2 className="text-white text-3xl md:text-4xl font-extrabold leading-tight">
            Our Own HDD Machines
          </h2>
          <span className="block h-[3px] w-16 bg-brand-gold mt-4 mb-6" />
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            We own and operate Horizontal Directional Drilling rigs, so crossings under roads, railways and
            canals are completed without open cutting. That means faster CGD roll-out, safer sites and less
            disruption for the public.
          </p>

          <div className="grid grid-cols-3 gap-3 mt-8">
            {highlights.map((h) => (
              <div key={h.label} className="border border-white/15 bg-white/5 backdrop-blur-sm rounded-sm px-3 py-4 text-center">
                <p className="text-brand-gold text-lg md:text-2xl font-extrabold leading-none">{h.value}</p>
                <p className="text-gray-300 text-[11px] md:text-xs mt-2 leading-snug">{h.label}</p>
              </div>
            ))}
          </div>

          <ul className="mt-8 space-y-3">
            {capabilities.map((c) => (
              <li key={c} className="flex gap-3 text-sm text-gray-200">
                <Tick />
                {c}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/projects/hdd-boring" className="btn-primary">
              SEE HDD WORK
            </Link>
            <Link
              to="/contact"
              className="inline-block border border-white/40 text-white hover:border-brand-gold hover:text-brand-gold font-semibold px-7 py-3 rounded-sm transition-colors tracking-wide"
            >
              ENQUIRE NOW
            </Link>
          </div>
        </div>

        {/* Photo viewer */}
        <div>
          <div className="relative">
            <span className="absolute -top-3 -left-3 h-24 w-24 border-t-4 border-l-4 border-brand-gold pointer-events-none" />
            <span className="absolute -bottom-3 -right-3 h-24 w-24 border-b-4 border-r-4 border-brand-gold pointer-events-none" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-2xl bg-brand-navy2">
              <img
                key={current.slug}
                src={current.src}
                alt={current.caption}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover animate-fade-in"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4 pt-12">
                <p className="text-white text-sm font-medium">{current.caption}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3 mt-6">
            {hddShowcase.map((p, i) => (
              <button
                key={p.slug}
                onClick={() => setActive(i)}
                aria-label={p.caption}
                className={`relative aspect-[4/3] overflow-hidden rounded-sm border-2 transition-all ${
                  i === active ? 'border-brand-gold opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={p.thumb} alt="" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
