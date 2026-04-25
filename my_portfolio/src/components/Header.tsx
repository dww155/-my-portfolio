import type { ProfileInfo } from '../types/portfolio'

interface HeaderProps {
  profile: ProfileInfo
}

export function Header({ profile }: HeaderProps) {
  return (
    <header className="portfolio-card relative overflow-hidden">
      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-teal-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-20 h-40 w-40 rounded-full bg-cyan-100/70 blur-3xl" />

      <div className="relative">
        <p className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
          Developer Portfolio
        </p>
        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-base font-medium text-teal-700">{profile.role}</p>

        <div className="mt-6 grid gap-4 text-left sm:grid-cols-2">
          <div>
            <p className="meta-label">Email</p>
            <a
              href={`mailto:${profile.email}`}
              className="meta-value inline-block hover:text-teal-700"
            >
              {profile.email}
            </a>
          </div>
          <div>
            <p className="meta-label">Location</p>
            <p className="meta-value">{profile.location}</p>
          </div>
          <div>
            <p className="meta-label">University</p>
            <p className="meta-value">{profile.university}</p>
          </div>
        </div>
      </div>
    </header>
  )
}
