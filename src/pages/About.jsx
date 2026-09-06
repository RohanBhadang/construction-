import ExpertiseCard from '../components/ExpertiseCard'
import ClientsSection from '../components/ClientsSection'
import { firmProfile, natureOfBusiness, visionMission, hsePolicy, siteInfo } from '../data/siteData'
import PipelinePattern from '../components/PipelinePattern'

export default function About() {
  return (
    <>
      {/* Page header */}
      <section className="relative bg-brand-navy py-14 md:py-20 overflow-hidden">
        <PipelinePattern />
        <div className="container-x relative">
          <h1 className="text-white text-3xl md:text-4xl font-extrabold">About us</h1>
          <p className="text-gray-300 mt-2 max-w-2xl">
            Founded by {siteInfo.founder} in {siteInfo.founded}, building trusted pipeline & civil infrastructure.
          </p>
        </div>
      </section>

      {/* Firm profile */}
      <section id="firm-profile" className="py-16 md:py-24 bg-white scroll-mt-24">
        <div className="container-x grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="section-title">FIRM PROFILE — BRIEF</h2>
            {firmProfile.paragraphs.map((p, i) => (
              <p key={i} className="text-brand-gray leading-relaxed mb-4 text-sm md:text-base">
                {p}
              </p>
            ))}
          </div>
          <div className="rounded-sm overflow-hidden shadow-xl">
            <img src={firmProfile.image} alt="Pipeline terminal" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Nature of Business */}
      <section id="nature-of-business" className="py-16 md:py-24 bg-brand-light scroll-mt-24">
        <div className="container-x">
          <h2 className="section-title">NATURE OF BUSINESS</h2>
          <p className="text-brand-gray mb-8 text-sm md:text-base">The nature of our business activities includes:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {natureOfBusiness.map((item, i) => (
              <ExpertiseCard key={i} text={item.text} icon={item.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Vision Mission */}
      <section id="vision-mission" className="relative py-16 md:py-24 bg-brand-navy text-white scroll-mt-24 overflow-hidden">
        <PipelinePattern />
        <div className="container-x relative grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-brand-gold font-bold text-xl mb-3 tracking-wide">OUR MISSION</h3>
            <p className="text-gray-200 leading-relaxed text-sm md:text-base">{visionMission.mission}</p>
          </div>
          <div>
            <h3 className="text-brand-gold font-bold text-xl mb-3 tracking-wide">OUR VISION</h3>
            <p className="text-gray-200 leading-relaxed text-sm md:text-base">{visionMission.vision}</p>
          </div>
        </div>
      </section>

      {/* HSE Policy */}
      <section id="hse-policy" className="py-16 md:py-24 bg-white scroll-mt-24">
        <div className="container-x">
          <h2 className="section-title">HSE POLICY</h2>
          <p className="text-brand-gray leading-relaxed text-sm md:text-base mb-8 max-w-3xl">
            {hsePolicy.intro}
          </p>
          <p className="font-semibold text-brand-navy mb-4">We are committed to:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hsePolicy.commitments.map((c, i) => (
              <ExpertiseCard key={i} text={c} />
            ))}
          </div>
        </div>
      </section>

      <ClientsSection />
    </>
  )
}
