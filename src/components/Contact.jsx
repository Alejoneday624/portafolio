import { profile } from '../data/content.js'
import Reveal from './Reveal.jsx'

const channels = [
  { key: 'email', icon: '✉️', label: () => profile.email, href: () => `mailto:${profile.email}`, external: false },
  {
    key: 'phone',
    icon: '📱',
    label: () => profile.phone,
    href: () => profile.whatsapp || `tel:${profile.phone}`,
    external: Boolean(profile.whatsapp),
  },
  { key: 'github', icon: '🐙', label: () => 'GitHub', href: () => profile.github, external: true },
  { key: 'linkedin', icon: '💼', label: () => 'LinkedIn', href: () => profile.linkedin, external: true },
]

export default function Contact() {
  return (
    <section id="contacto" className="px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-transparent" />
            Hablemos
          </span>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Contacto
          </h2>
          <p className="mb-10 mt-3 max-w-2xl text-slate-400">
            ¿Tienes un proyecto o una oportunidad? Escríbeme por cualquiera de
            estos canales.
          </p>
        </Reveal>

        <ul className="grid max-w-3xl gap-4 sm:grid-cols-2">
          {channels.map((ch, index) => (
            <Reveal key={ch.key} delay={(index % 2) * 120}>
              <li>
                <a
                  href={ch.href()}
                  target={ch.external ? '_blank' : undefined}
                  rel="noreferrer"
                  className="group flex h-full items-center gap-3.5 rounded-xl border border-edge bg-panel px-5 py-4 text-slate-200 transition duration-200 hover:-translate-y-0.5 hover:border-violet-500/60 hover:bg-panel hover:text-white hover:shadow-lg hover:shadow-violet-700/20"
                >
                  <span className="text-lg transition-transform duration-200 group-hover:scale-110">
                    {ch.icon}
                  </span>
                  <span className="truncate">{ch.label()}</span>
                  <span className="ml-auto text-slate-600 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-violet-400">
                    →
                  </span>
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
