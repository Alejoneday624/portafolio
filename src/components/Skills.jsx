import { skillGroups } from '../data/content.js'
import Reveal from './Reveal.jsx'

export default function Skills() {
  return (
    <section id="stack" className="border-y border-edge bg-deep px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-transparent" />
            Con qué trabajo
          </span>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Stack tecnológico
          </h2>
          <p className="mb-10 mt-3 max-w-2xl text-slate-400">
            Tecnologías que he manejado en mis proyectos y formación.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={(index % 3) * 100}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-edge bg-panel p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-700/15">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <h3 className="mb-4 flex items-center gap-2.5 text-base font-semibold">
                  <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 shadow-md shadow-violet-500/40" />
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-edge bg-white/5 px-3 py-1.5 text-sm text-slate-400 transition duration-200 hover:border-cyan-400/40 hover:text-slate-200"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
