import { projects } from '../data/content.js'
import Reveal from './Reveal.jsx'

function getInitials(title) {
  return title
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

function Actions({ project }) {
  return (
    <div className="mt-2 flex flex-wrap gap-2.5">
      {project.status === 'demo' && project.demoUrl && (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-violet-600 to-violet-700 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-700/30 transition duration-200 hover:-translate-y-0.5 hover:shadow-violet-600/60"
        >
          Ver demo
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
        </a>
      )}
      {project.status === 'soon' && (
        <span
          className="inline-flex cursor-default items-center gap-2 rounded-lg border border-edge bg-white/5 px-4 py-2 text-sm font-semibold text-slate-500"
          title="Migrando de AWS a Render"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
          Demo próximamente
        </span>
      )}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-edge px-4 py-2 text-sm font-semibold text-slate-300 transition duration-200 hover:-translate-y-0.5 hover:border-violet-500/60 hover:bg-white/5 hover:text-white"
        >
          Ver código
        </a>
      )}
      {project.extraLink && (
        <a
          href={project.extraLink.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-400/20"
        >
          📄 {project.extraLink.label}
        </a>
      )}
    </div>
  )
}

const categoryStyles = {
  'Desarrollo web': 'border-cyan-400/40 bg-cyan-400/10 text-cyan-300',
  'Machine learning': 'border-violet-400/40 bg-violet-400/10 text-violet-300',
  'Videojuegos': 'border-amber-400/40 bg-amber-400/10 text-amber-300',
  'Móvil': 'border-emerald-400/40 bg-emerald-400/10 text-emerald-300',
}

const categoryIcons = {
  'Desarrollo web': '🌐',
  'Machine learning': '🤖',
  'Videojuegos': '🎮',
  'Móvil': '📱',
}

function CategoryChip({ category }) {
  if (!category) return null
  const style = categoryStyles[category] ?? 'border-edge bg-white/5 text-slate-300'
  const icon = categoryIcons[category] ?? '▸'
  return (
    <span
      className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${style}`}
    >
      {icon} {category}
    </span>
  )
}

export default function Projects() {
  return (
    <section id="proyectos" className="px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-transparent" />
            Lo que he construido
          </span>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Proyectos
          </h2>
          <p className="mb-10 mt-3 max-w-2xl text-slate-400">
            Una selección de lo que he construido: sistemas web full stack, IoT,
            machine learning, apps móviles y juegos.
          </p>
        </Reveal>

        <div className="grid gap-7 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={(index % 2) * 120}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-edge bg-panel transition duration-300 hover:-translate-y-1.5 hover:border-violet-500/60 hover:shadow-2xl hover:shadow-violet-700/20">
                {/* glow superior al hacer hover */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div
                  className={`relative flex items-center justify-center overflow-hidden ${
                    project.imageFit === 'contain' ? 'h-64' : 'h-44'
                  } ${
                    project.image
                      ? project.imageFit === 'contain'
                        ? 'bg-ink'
                        : 'bg-cover bg-center'
                      : 'bg-gradient-to-br from-violet-600/35 via-slate-900 to-cyan-400/15'
                  }`}
                  style={
                    project.image && project.imageFit !== 'contain'
                      ? { backgroundImage: `url(${project.image})` }
                      : undefined
                  }
                >
                  {project.image && project.imageFit === 'contain' && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-contain"
                    />
                  )}
                  {!project.image && (
                    <span className="text-5xl font-black tracking-widest text-white/25 transition duration-300 group-hover:scale-110 group-hover:text-white/40">
                      {getInitials(project.title)}
                    </span>
                  )}
                  {/* brillo animado al pasar el cursor */}
                  <div className="absolute -left-16 top-0 h-full w-24 -skew-x-12 bg-white/10 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="text-lg font-semibold transition-colors duration-200 group-hover:text-white">
                    {project.title}
                  </h3>
                  <CategoryChip category={project.category} />
                  <p className="flex-1 text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-0.5 text-xs text-violet-300 transition duration-200 group-hover:border-violet-400/50 group-hover:bg-violet-500/15"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <Actions project={project} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
