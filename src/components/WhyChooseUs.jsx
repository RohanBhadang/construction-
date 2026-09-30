import Reveal from './Reveal'
import * as Icons from './Icons'

const points = [
  { icon: Icons.DrillIcon, title: 'Own HDD Rigs', text: '02 in-house HDD machines for trenchless road, rail and canal crossings.' },
  { icon: Icons.PipelineIcon, title: 'End-to-End Execution', text: 'Laying, fusion/welding, testing and commissioning under one roof.' },
  { icon: Icons.ShieldBoltIcon, title: 'Safety First (HSE)', text: 'Committed to recognised health, safety and environment standards on every site.' },
  { icon: Icons.CraneIcon, title: 'Full Machinery Fleet', text: 'JCB, Hydra, DG sets, welding and electro-fusion machines ready to mobilise.' },
  { icon: Icons.NetworkIcon, title: 'Trusted by Gas Companies', text: 'Working with leading City Gas Distribution companies across India.' },
  { icon: Icons.CheckBadgeIcon, title: 'Since 2012', text: 'More than a decade of pipeline and civil experience led by Mr. Akhilesh Singh.' },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-x">
        <Reveal>
          <h2 className="section-title mx-auto text-center block w-fit">WHY CHOOSE US</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 90}>
              <div className="group h-full bg-brand-light rounded-sm p-7 border-b-4 border-transparent hover:border-brand-gold hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <span className="flex h-14 w-14 items-center justify-center rounded-sm bg-brand-navy text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors duration-300">
                  <p.icon className="w-7 h-7" />
                </span>
                <h3 className="mt-5 font-bold text-brand-navy text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-brand-gray leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
