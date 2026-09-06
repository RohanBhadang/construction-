import { clients } from '../data/siteData'
import ClientBadge from './ClientBadge'

export default function ClientsSection({ title = 'OUR CLIENTS' }) {
  const track = [...clients, ...clients]

  return (
    <section className="py-16 bg-brand-light overflow-hidden">
      <div className="container-x">
        <h2 className="section-title mx-auto text-center block w-fit">{title}</h2>
      </div>

      <div className="mt-10 group [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max gap-5 px-5 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {track.map((client, i) => (
            <div key={i} className="w-64 shrink-0">
              <ClientBadge client={client} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
