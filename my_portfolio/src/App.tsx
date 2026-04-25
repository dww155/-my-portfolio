import { AvatarUpload } from './components/AvatarUpload'
import { Header } from './components/Header'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { profile, projects, skillCategories } from './data/portfolio'

function App() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <main className="space-y-6">
        <Header profile={profile} />

        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <section className="portfolio-card">
            <h2 className="section-title">About</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              {profile.about}
            </p>
          </section>

          <AvatarUpload />
        </div>

        <Skills categories={skillCategories} />
        <Projects projects={projects} />
      </main>
    </div>
  )
}

export default App
