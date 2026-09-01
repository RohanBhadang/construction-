import { siteInfo } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-gray-300">
      <div className="container-x grid grid-cols-1 md:grid-cols-4 gap-10 py-14">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="flex items-center justify-center h-11 w-11 rounded-sm bg-brand-gold text-brand-navy font-extrabold text-lg">
              AC
            </span>
            <span className="leading-tight">
              <span className="block font-extrabold text-white text-base tracking-wide">AKHILESH</span>
              <span className="block font-medium text-gray-400 text-[11px] tracking-widest -mt-0.5">
                CONSTRUCTION
              </span>
            </span>
          </div>
          <p className="text-sm text-gray-400">{siteInfo.formerName}</p>
          <p className="text-sm text-gray-400 mt-2">
            Founded by {siteInfo.founder} in {siteInfo.founded}.
          </p>
        </div>

        {/* Pages */}
        <div>
          <h4 className="text-white font-semibold uppercase tracking-wide mb-4 text-sm">Pages</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-brand-gold transition-colors">About us</a></li>
            <li><a href="/projects" className="hover:text-brand-gold transition-colors">Projects</a></li>
            <li><a href="/clients" className="hover:text-brand-gold transition-colors">Clients</a></li>
            <li><a href="/gallery" className="hover:text-brand-gold transition-colors">Gallery</a></li>
            <li><a href="/contact" className="hover:text-brand-gold transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold uppercase tracking-wide mb-4 text-sm">Reach Us</h4>
          <p className="text-sm mb-3">
            <span className="text-white font-medium block mb-1">Address:</span>
            {siteInfo.address}
          </p>
          <p className="text-sm mb-1">
            <span className="text-white font-medium">Phone: </span>
          </p>
          <ul className="text-sm mb-3 space-y-0.5">
            {siteInfo.phones.map((p) => (
              <li key={p}>
                <a href={`tel:${p.replace(/\s/g, '')}`} className="hover:text-brand-gold">{p}</a>
              </li>
            ))}
          </ul>
          <p className="text-sm mb-1">
            <span className="text-white font-medium">Email: </span>
          </p>
          <ul className="text-sm space-y-0.5">
            {siteInfo.emails.map((e) => (
              <li key={e}>
                <a href={`mailto:${e}`} className="hover:text-brand-gold break-all">{e}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Map */}
        <div>
          <h4 className="text-white font-semibold uppercase tracking-wide mb-4 text-sm">Our Location</h4>
          <div className="rounded-sm overflow-hidden border border-white/10">
            <iframe
              title="Akhilesh Construction location"
              src={siteInfo.mapEmbed}
              width="100%"
              height="180"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-gray-400">
        Copyright © {new Date().getFullYear()} – Akhilesh Construction. All Rights Reserved
      </div>
    </footer>
  )
}
