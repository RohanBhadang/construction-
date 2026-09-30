import Seo from '../components/Seo'
import { siteInfo } from '../data/siteData'
import PipelinePattern from '../components/PipelinePattern'

function InfoCard({ title, icon, children }) {
  return (
    <div className="bg-brand-light rounded-sm p-7 border-t-2 border-brand-gold shadow-sm hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-brand-navy text-brand-gold">{icon}</span>
        <h3 className="font-bold text-brand-navy">{title}</h3>
      </div>
      <div className="text-sm md:text-base text-brand-gray leading-relaxed">{children}</div>
    </div>
  )
}

const svg = (d) => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
)

export default function Contact() {
  return (
    <>
      <Seo title="Contact Us" description="Contact Akhilesh Construction, B-209 Veena Nagar, Sukhaliya, Indore 452010. Call 70000 32606 for CGD pipeline, HDD and civil contracting enquiries." />
      <section className="relative bg-brand-navy py-14 md:py-20 overflow-hidden">
        <PipelinePattern />
        <div className="container-x relative">
          <h1 className="text-white text-3xl md:text-4xl font-extrabold">Contact us</h1>
          <p className="text-gray-300 mt-2 max-w-2xl">
            Get in touch with Akhilesh Construction for enquiries, tenders or project discussions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-x">
          <div className="grid md:grid-cols-3 gap-6">
            <InfoCard title="Address" icon={svg('M12 21s-7-6.2-7-11a7 7 0 1114 0c0 4.8-7 11-7 11zm0-8.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z')}>
              {siteInfo.address}
            </InfoCard>

            <InfoCard title="Phone" icon={svg('M3 5a2 2 0 012-2h2.3a1 1 0 01.95.68l1.1 3.3a1 1 0 01-.5 1.2l-1.5.8a11 11 0 005.2 5.2l.8-1.5a1 1 0 011.2-.5l3.3 1.1a1 1 0 01.68.95V19a2 2 0 01-2 2A16 16 0 013 5z')}>
              <ul className="space-y-1">
                {siteInfo.phones.map((p) => (
                  <li key={p}>
                    <a href={`tel:${p.replace(/\s/g, '')}`} className="hover:text-brand-gold transition-colors">
                      {p}
                    </a>
                  </li>
                ))}
              </ul>
            </InfoCard>

            <InfoCard title="Email" icon={svg('M3 7l9 6 9-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z')}>
              <ul className="space-y-1">
                {siteInfo.emails.map((e) => (
                  <li key={e}>
                    <a href={`mailto:${e}`} className="hover:text-brand-gold break-all transition-colors">
                      {e}
                    </a>
                  </li>
                ))}
              </ul>
            </InfoCard>
          </div>

          <div className="mt-10 rounded-sm overflow-hidden shadow-md border border-gray-100">
            <iframe
              title="Akhilesh Construction location"
              src={siteInfo.mapEmbed}
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
