import { machinery } from '../data/siteData'

// Photo cards for the machines that have a site photo (HDD, welding, JCB, hydra ...)
export default function MachineryShowcase() {
  const featured = machinery.filter((m) => m.image)
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {featured.map((m) => (
        <div key={m.name} className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
          <div className="relative h-52 overflow-hidden bg-brand-light">
            <img
              src={m.image}
              alt={m.name}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute top-3 right-3 bg-brand-gold text-brand-navy text-xs font-bold px-3 py-1 rounded-full">
              {m.qty}
            </span>
          </div>
          <div className="p-5">
            <h3 className="font-bold text-brand-navy">{m.name}</h3>
            <p className="text-xs text-brand-gray mt-1 leading-relaxed">{m.note}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
