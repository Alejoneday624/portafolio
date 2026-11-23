import { experience } from '../data/content.js'
import Reveal from './Reveal.jsx'

export default function Experience() {
  return (
    <section id="experiencia" className="px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-transparent" />
            Trayectoria
          </span>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Experiencia
          </h2>
          <p className="mb-10 mt-3 max-w-2xl text-slate-400">
            Proyectos de prestación de servicios y trabajo full stack.
          </p>
        </Reveal>

        <ul className="relative ml-2 border-l-2 border-edge">
          {experience.map((item, index) => (
            <Reveal key={index} delay={index * 130}>
              <li className="group relative pb-10 pl-8 last:pb-0">
                <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-ink bg-violet-600 shadow-md shadow-violet-600/40 transition-transform duration-300 group-hover:scale-125" />
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  {item.period}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{item.role}</h3>
                <p className="mb-3 text-sm text-slate-400">{item.org}</p>

                {item.highlights ? (
                  <ul className="flex max-w-3xl flex-col gap-2">
                    {item.highlights.map((point, i) => (
                      <li
                        key={i}
                        className="flex gap-2.5 text-sm leading-relaxed text-slate-400"
                      >
                        <span className="mt-0.5 text-violet-500">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="max-w-3xl text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                )}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
