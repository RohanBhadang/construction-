import { clients } from '../data/siteData'

export default function Clients() {
  return (
    <>
      <section className="bg-brand-navy py-14 md:py-20">
        <div className="container-x">
          <h1 className="text-white text-3xl md:text-4xl font-extrabold">Our Clients</h1>
          <p className="text-gray-300 mt-2 max-w-2xl">
            Trusted by leading names in India's oil & gas distribution sector.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-x grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, i) => (
            <div
              key={i}
              className="bg-brand-light rounded-sm shadow-sm hover:shadow-md transition-shadow flex items-center gap-4 p-6"
            >
              <span className="flex items-center justify-center h-12 w-12 shrink-0 rounded-full bg-brand-navy text-brand-gold font-bold">
                {client.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
              </span>
              <span className="font-semibold text-brand-navy">{client.name}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
