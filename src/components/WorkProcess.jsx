import Reveal from './Reveal'
import PipelinePattern from './PipelinePattern'

const steps = [
  { t: 'Survey & Planning', d: 'Route survey, permissions and work planning with the client and PMC.' },
  { t: 'Excavation / HDD', d: 'Open trenching or trenchless HDD crossings, as the route demands.' },
  { t: 'Pipe Laying & Jointing', d: 'MDPE electro-fusion and steel pipe welding with quality checks.' },
  { t: 'Testing', d: 'Pressure testing and inspection before the line goes live.' },
  { t: 'Commissioning', d: 'Gas-in, tap-offs, PNG connections and handover to the operator.' },
]

export default function WorkProcess() {
  return (
    <section className="relative py-16 md:py-24 bg-brand-navy overflow-hidden">
      <PipelinePattern />
      <div className="container-x relative">
        <Reveal>
          <h2 className="text-white text-3xl md:text-4xl font-bold text-center">How We Work</h2>
          <span className="block h-[3px] w-16 bg-brand-gold mx-auto mt-4" />
        </Reveal>
        <div className="mt-14 grid md:grid-cols-5 gap-8 md:gap-4 relative">
          <span className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-white/20" />
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 110}>
              <div className="relative text-center md:px-2">
                <span className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold text-brand-navy font-extrabold shadow-[0_0_0_6px_rgba(242,169,0,0.18)]">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-white font-semibold">{s.t}</h3>
                <p className="mt-2 text-xs md:text-sm text-gray-300 leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
