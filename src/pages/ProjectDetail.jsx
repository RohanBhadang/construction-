import { Link, useParams, Navigate } from 'react-router-dom'
import { projectCategories } from '../data/siteData'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projectCategories.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/projects" replace />

  return (
    <>
      <section className="bg-brand-navy py-14 md:py-20">
        <div className="container-x">
          <Link to="/projects" className="text-brand-gold text-sm font-medium hover:underline">
            ← Back to Projects
          </Link>
          <h1 className="text-white text-3xl md:text-4xl font-extrabold mt-3">{project.title}</h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-sm overflow-hidden shadow-xl">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="section-title">{project.title}</h2>
            <p className="text-brand-gray leading-relaxed text-sm md:text-base">{project.description}</p>
            <Link to="/contact" className="btn-primary mt-8 inline-block">
              Enquire About This Service
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
