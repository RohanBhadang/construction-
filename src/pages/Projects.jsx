import { Link } from 'react-router-dom'
import { projectCategories, jobsExecuted, machinery } from '../data/siteData'
import { CheckBadgeIcon, CraneIcon } from '../components/Icons'
import PipelinePattern from '../components/PipelinePattern'

export default function Projects() {
  return (
    <>
      <section className="relative bg-brand-navy py-14 md:py-20 overflow-hidden">
        <PipelinePattern />
        <div className="container-x relative">
          <h1 className="text-white text-3xl md:text-4xl font-extrabold">Projects</h1>
          <p className="text-gray-300 mt-2 max-w-2xl">
            From CGD networks to HDD crossings — the work we do, the jobs we've completed, and the fleet
            behind it.
          </p>
        </div>
      </section>

      {/* Project categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectCategories.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group block bg-brand-light rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-brand-navy text-lg mb-2 group-hover:text-brand-gold transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-brand-gray leading-relaxed">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Jobs executed in past years */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container-x">
          <h2 className="section-title">JOBS EXECUTED / COMPLETED IN PAST YEARS</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {jobsExecuted.map((job, i) => (
              <div
                key={i}
                className="group flex items-center gap-4 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow p-5"
              >
                <span className="flex items-center justify-center h-10 w-10 shrink-0 rounded-sm bg-brand-navy/5 text-brand-navy group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
                  <CheckBadgeIcon className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-semibold text-brand-navy text-sm">{job.title}</p>
                  {job.year !== '—' && <p className="text-xs text-brand-gray mt-0.5">{job.year}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machinery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-x">
          <h2 className="section-title">LIST OF IMPORTANT MACHINERIES</h2>
          <div className="mt-8 overflow-x-auto rounded-sm shadow-sm border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-navy text-white text-left">
                  <th className="px-5 py-3 font-semibold">Machinery</th>
                  <th className="px-5 py-3 font-semibold text-right">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {machinery.map((m, i) => (
                  <tr key={m.name} className={i % 2 === 0 ? 'bg-brand-light' : 'bg-white'}>
                    <td className="px-5 py-3 text-brand-navy font-medium">
                      <span className="inline-flex items-center gap-3">
                        <CraneIcon className="w-4 h-4 text-brand-gold shrink-0" />
                        {m.name}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-right text-brand-gray">{m.qty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
