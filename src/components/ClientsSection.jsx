import { clients } from '../data/siteData'

export default function ClientsSection({ title = 'OUR CLIENTS' }) {
  return (
    <section className="py-16 bg-brand-light">
      <div className="container-x">
        <h2 className="section-title mx-auto text-center block w-fit">{title}</h2>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {clients.map((client, i) => (
            <div
              key={i}
              className="bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow flex items-center justify-center text-center p-5 h-28"
            >
              <span className="text-sm font-semibold text-brand-navy leading-snug">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
