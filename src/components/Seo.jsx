import { useEffect } from 'react'

const BRAND = 'Akhilesh Construction'

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

// Sets per-page <title>, description, canonical and social tags (works with the SPA router).
export default function Seo({ title, description, image = '/og-image.jpg' }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${BRAND} Indore` : `${BRAND} Indore | CGD Pipeline, HDD & Civil Contractors in Madhya Pradesh`
    const url = window.location.origin + window.location.pathname
    const img = image.startsWith('http') ? image : window.location.origin + image

    document.title = fullTitle
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', img)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', img)

    let link = document.head.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', url)

    // Structured data for Google (business name, address, phone, services)
    const origin = window.location.origin
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'GeneralContractor',
      '@id': `${origin}/#business`,
      name: 'Akhilesh Construction',
      alternateName: ['Akhilesh Construction Indore'],
      url: origin + '/',
      logo: origin + '/favicon.png',
      image: origin + '/og-image.jpg',
      description:
        'Civil & mechanical engineering contractors in Indore for City Gas Distribution (CGD) pipelines, MDPE and steel pipe laying, HDD boring, PNG connections and plant piping.',
      foundingDate: '2012',
      founder: { '@type': 'Person', name: 'Akhilesh Singh' },
      telephone: ['+917000032606', '+919009622223', '+917000019505'],
      email: 'akhilesh.construction88@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'B-209, Veena Nagar, Sukhaliya, Near MR-10 Square',
        addressLocality: 'Indore',
        addressRegion: 'Madhya Pradesh',
        postalCode: '452010',
        addressCountry: 'IN',
      },
      areaServed: [
        { '@type': 'City', name: 'Indore' },
        { '@type': 'State', name: 'Madhya Pradesh' },
        { '@type': 'Country', name: 'India' },
      ],
      knowsAbout: [
        'City Gas Distribution pipeline',
        'MDPE pipeline laying',
        'Steel pipeline welding',
        'Horizontal Directional Drilling (HDD)',
        'PNG gas connections',
        'Plant and terminal piping',
        'Road and civil construction',
      ],
    }
    let ld = document.getElementById('ld-business')
    if (!ld) {
      ld = document.createElement('script')
      ld.id = 'ld-business'
      ld.type = 'application/ld+json'
      document.head.appendChild(ld)
    }
    ld.textContent = JSON.stringify(schema)
  }, [title, description, image])

  return null
}
