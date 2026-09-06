import { Link } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider'
import ClientsSection from '../components/ClientsSection'
import StatCounter from '../components/StatCounter'
import ExpertiseCard from '../components/ExpertiseCard'
import PipelinePattern from '../components/PipelinePattern'
import { firmProfile, natureOfBusiness, stats, siteInfo } from '../data/siteData'

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* Firm profile snapshot */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">{firmProfile.heading}</h2>
            <p className="text-brand-gray leading-relaxed mb-4 text-sm md:text-base">
              {firmProfile.paragraphs[0]}
            </p>
            <p className="text-brand-gray leading-relaxed mb-6 text-sm md:text-base">
              {firmProfile.paragraphs[1]}
            </p>
            <Link to="/about" className="btn-primary">
              READ MORE
            </Link>
          </div>
          <div className="rounded-sm overflow-hidden shadow-xl">
            <img src={firmProfile.image} alt="Terminal piping work" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="relative py-16 bg-brand-navy overflow-hidden">
        <PipelinePattern />
        <div className="container-x relative grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </section>

      {/* Nature of business snapshot */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container-x">
          <h2 className="section-title mx-auto text-center block w-fit">NATURE OF BUSINESS</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {natureOfBusiness.slice(0, 6).map((item, i) => (
              <ExpertiseCard key={i} text={item.text} icon={item.icon} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/about#nature-of-business" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="relative py-14 bg-brand-navy overflow-hidden">
        <PipelinePattern />
        <div className="container-x relative flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-white text-2xl font-bold">Have a pipeline or civil project in mind?</h3>
            <p className="text-gray-300 mt-1">Talk to our team today — {siteInfo.phones[0]}</p>
          </div>
          <Link to="/contact" className="btn-primary">
            Get In Touch
          </Link>
        </div>
      </section>

      <ClientsSection />
    </>
  )
}
