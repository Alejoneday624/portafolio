import { profile } from '../data/content.js'

export default function Hero() {
  return (
    <section id="inicio" className="hero-glow relative overflow-hidden px-5 py-24 md:py-32">
      {/* líneas decorativas de fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet-600/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-12 md:flex-row md:items-center md:gap-16">
        {/* Foto con halo */}
        <div className="group relative shrink-0">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 opacity-70 blur-md transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-violet-600/30 to-cyan-400/20 blur-xl" />
          <img
            src={profile.photo}
            alt={profile.fullName}
            className="relative h-48 w-48 rounded-full border-2 border-ink object-cover shadow-2xl md:h-60 md:w-60"
          />
        </div>

        <div>
          <span className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            <span className="h-px w-10 bg-gradient-to-r from-cyan-400 to-transparent" />
            {profile.location}
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
            Soy{' '}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(139,92,246,0.4)]">
              {profile.name}
            </span>
          </h1>

          <p className="mb-6 text-lg font-medium text-slate-300 md:text-xl">
            {profile.role}
          </p>

          <div className="mb-8 h-px w-24 bg-gradient-to-r from-violet-500 via-cyan-400 to-transparent" />

          <p className="mb-9 max-w-2xl text-base leading-relaxed text-slate-400">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#proyectos"
              className="group relative rounded-xl bg-gradient-to-br from-violet-600 to-violet-700 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-violet-700/40 transition duration-200 hover:-translate-y-0.5 hover:shadow-violet-600/60"
            >
              <span className="relative z-10">Ver proyectos →</span>
              <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            </a>
            <a
              href="#contacto"
              className="group rounded-xl border border-edge bg-panel/60 px-7 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:text-white hover:shadow-lg hover:shadow-cyan-400/10"
            >
              Contáctame
            </a>
            {profile.cvUrl && (
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-edge px-7 py-3.5 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-violet-500/60 hover:bg-white/5"
              >
                Descargar CV
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
