import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { siteInfo, navLinks } from '../data/siteData'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container-x flex items-center justify-between py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <span className="flex items-center justify-center h-11 w-11 rounded-sm bg-brand-navy text-brand-gold font-extrabold text-lg">
            AC
          </span>
          <span className="leading-tight">
            <span className="block font-extrabold text-brand-navy text-base md:text-lg tracking-wide">
              AKHILESH
            </span>
            <span className="block font-medium text-brand-gray text-[11px] md:text-xs tracking-widest -mt-0.5">
              CONSTRUCTION
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium uppercase tracking-wide flex items-center gap-1 transition-colors ${
                    isActive ? 'text-brand-gold' : 'text-brand-navy hover:text-brand-gold'
                  }`
                }
              >
                {link.label}
                {link.children && (
                  <svg className="w-3 h-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </NavLink>

              {link.children && openDropdown === link.label && (
                <div className="absolute left-0 top-full min-w-[260px] bg-white shadow-xl border-t-2 border-brand-gold py-2">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.path}
                      className="block px-5 py-2.5 text-sm text-brand-navy hover:bg-brand-light hover:text-brand-gold transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href={`tel:${siteInfo.phone.replace(/\s/g, '')}`} className="ml-3 btn-primary text-sm">
            Call {siteInfo.phone}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className={`block h-0.5 w-7 bg-brand-navy transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-7 bg-brand-navy transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-7 bg-brand-navy transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <MobileNavItem key={link.label} link={link} onNavigate={() => setMobileOpen(false)} />
          ))}
          <a
            href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}
            className="block mx-4 my-3 text-center btn-primary"
          >
            Call {siteInfo.phone}
          </a>
        </div>
      )}
    </header>
  )
}

function MobileNavItem({ link, onNavigate }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-100">
      <div className="flex items-center justify-between px-4 py-3">
        <Link to={link.path} onClick={onNavigate} className="text-brand-navy font-medium uppercase text-sm">
          {link.label}
        </Link>
        {link.children && (
          <button onClick={() => setOpen((v) => !v)} className="p-2" aria-label="Expand submenu">
            <svg
              className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>
      {link.children && open && (
        <div className="pb-2">
          {link.children.map((child) => (
            <Link
              key={child.label}
              to={child.path}
              onClick={onNavigate}
              className="block px-8 py-2 text-sm text-brand-gray hover:text-brand-gold"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
