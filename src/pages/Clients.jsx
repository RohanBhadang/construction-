import { clients } from '../data/siteData'
import ClientBadge from '../components/ClientBadge'
import PipelinePattern from '../components/PipelinePattern'

export default function Clients() {
  return (
    <>
      <section className="relative bg-brand-navy py-14 md:py-20 overflow-hidden">
        <PipelinePattern />
        <div className="container-x relative">
          <h1 className="text-white text-3xl md:text-4xl font-extrabold">Our Clients</h1>
          <p className="text-gray-300 mt-2 max-w-2xl">
            Trusted by leading names in India's oil & gas distribution sector.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-x grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, i) => (
            <ClientBadge key={i} client={client} />
          ))}
        </div>
      </section>
    </>
  )
}
