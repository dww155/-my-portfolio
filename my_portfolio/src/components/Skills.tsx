import type { SkillCategory } from '../types/portfolio'

interface SkillsProps {
  categories: SkillCategory[]
}

export function Skills({ categories }: SkillsProps) {
  return (
    <section className="portfolio-card">
      <h2 className="section-title">Skills</h2>
      <p className="mt-2 text-sm text-slate-600">
        Core languages and technologies I use to build backend systems.
      </p>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {categories.map((category) => (
          <article
            key={category.title}
            className="rounded-xl border border-slate-200/80 bg-slate-50 p-4"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-700">
              {category.title}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
