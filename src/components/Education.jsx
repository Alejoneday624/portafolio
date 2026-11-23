import { education } from '../data/content.js'
import Reveal from './Reveal.jsx'

export default function Education() {
  return (
    <section id="educacion" className="border-y border-edge bg-deep px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-transparent" />
            Formación
          </span>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Educación
          </h2>
          <p className="mb-10 mt-3 max-w-2xl text-slate-400">
            Mi formación académica.
          </p>
        </Reveal>

        <ul className="relative ml-2 border-l-2 border-edge">
          {education.map((item, index) => (
            <Reveal key={index} delay={index * 130}>
              <li className="group relative pb-10 pl-8 last:pb-0">
                <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-ink bg-cyan-500 shadow-md shadow-cyan-500/40 transition-transform duration-300 group-hover:scale-125" />
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  {item.period}
                  <span className="ml-2 rounded-full border border-edge bg-white/5 px-2 py-0.5 normal-case text-slate-400">
                    🎓 Educación
                  </span>
                </span>
                <h3 className="mt-2 text-lg font-semibold">{item.role}</h3>
                <p className="mb-2 text-sm text-slate-400">{item.org}</p>
                <p className="max-w-3xl text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
