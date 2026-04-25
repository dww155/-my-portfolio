import type { ProjectItem } from '../types/portfolio'

interface ProjectsProps {
  projects: ProjectItem[]
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section className="portfolio-card">
      <h2 className="section-title">Projects</h2>
      <p className="mt-2 text-sm text-slate-600">
        Selected work focused on backend-heavy web systems and practical
        product use cases.
      </p>

      <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group rounded-xl border border-slate-200/80 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:shadow-[0_16px_35px_-28px_rgba(15,23,42,0.7)]"
          >
            <h3 className="text-lg font-semibold tracking-tight text-slate-900">
              {project.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {project.description}
            </p>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 transition group-hover:text-teal-600"
            >
              View on GitHub <span aria-hidden="true">{'->'}</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
