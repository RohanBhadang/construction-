import { img } from '../data/photos'
import { siteInfo } from '../data/siteData'

// Layered photo composition used beside the firm profile text (Home + About).
export default function FirmProfileVisual() {
  const years = new Date().getFullYear() - siteInfo.founded
  return (
    <div className="relative pb-10 pr-6 md:pr-10">
      <span className="absolute -top-3 -left-3 h-28 w-28 border-t-4 border-l-4 border-brand-gold pointer-events-none" />
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-2xl">
        <img
          src={img('mdpe-nala-crossing')}
          alt="CGD gas pipeline laid across a nala beside a bridge"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />
      </div>

      <div className="absolute -bottom-0 right-0 w-2/5 aspect-[3/4] overflow-hidden rounded-sm border-4 border-white shadow-2xl">
        <img
          src={img('pipe-welding-sunset')}
          alt="Steel pipeline welding at the roadside"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="absolute bottom-2 left-4 bg-brand-gold text-brand-navy px-5 py-4 shadow-xl">
        <p className="text-3xl font-extrabold leading-none">{years}+</p>
        <p className="text-[11px] font-semibold tracking-wider uppercase mt-1">Years of Pipeline Work</p>
      </div>
    </div>
  )
}
