import { useState } from 'react'
import { siteInfo } from '../data/siteData'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend wired up — this simply confirms receipt in the UI.
    setSent(true)
  }

  return (
    <>
      <section className="bg-brand-navy py-14 md:py-20">
        <div className="container-x">
          <h1 className="text-white text-3xl md:text-4xl font-extrabold">Contact us</h1>
          <p className="text-gray-300 mt-2 max-w-2xl">
            Get in touch with Akhilesh Construction for enquiries, tenders or project discussions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-14">
          {/* Form */}
          <div>
            <h2 className="section-title">Send Us a Message</h2>
            {sent ? (
              <div className="mt-6 bg-green-50 border border-green-200 text-green-700 rounded-sm p-5 text-sm">
                Thank you, {form.name || 'there'}! Your message has been received. Our team will get back to
                you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-1.5">Full Name</label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Your name"
                      className="w-full border border-gray-300 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-1.5">Phone</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      type="tel"
                      placeholder="Phone number"
                      className="w-full border border-gray-300 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-1.5">Email</label>
                  <input
                    required
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="you@example.com"
                    className="w-full border border-gray-300 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-1.5">Message</label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your project or enquiry"
                    className="w-full border border-gray-300 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  />
                </div>
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Details */}
          <div>
            <h2 className="section-title">Reach Us</h2>
            <div className="mt-6 space-y-4 text-sm md:text-base">
              <p>
                <span className="font-semibold text-brand-navy block mb-1">Address</span>
                <span className="text-brand-gray">{siteInfo.address}</span>
              </p>
              <div>
                <span className="font-semibold text-brand-navy block mb-1">Phone</span>
                <ul className="text-brand-gray space-y-0.5">
                  {siteInfo.phones.map((p) => (
                    <li key={p}>
                      <a href={`tel:${p.replace(/\s/g, '')}`} className="hover:text-brand-gold">
                        {p}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="font-semibold text-brand-navy block mb-1">Email</span>
                <ul className="text-brand-gray space-y-0.5">
                  {siteInfo.emails.map((e) => (
                    <li key={e}>
                      <a href={`mailto:${e}`} className="hover:text-brand-gold break-all">
                        {e}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-sm overflow-hidden shadow-md border border-gray-100">
              <iframe
                title="Akhilesh Construction location large"
                src={siteInfo.mapEmbed}
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
