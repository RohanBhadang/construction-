import { siteInfo } from '../data/siteData'

export default function TopBar() {
  return (
    <div className="hidden md:block bg-brand-navy text-gray-300 text-xs">
      <div className="container-x flex items-center justify-between py-2">
        <p className="truncate">{siteInfo.formerName}</p>
        <div className="flex items-center gap-6 shrink-0">
          <a href={`tel:${siteInfo.phone.replace(/\s/g, '')}`} className="hover:text-brand-gold transition-colors">
            ☎ {siteInfo.phone}
          </a>
          <a href={`mailto:${siteInfo.email}`} className="hover:text-brand-gold transition-colors">
            ✉ {siteInfo.email}
          </a>
        </div>
      </div>
    </div>
  )
}
