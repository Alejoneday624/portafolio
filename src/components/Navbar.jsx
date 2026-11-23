import { useState } from 'react'
import { navLinks, profile } from '../data/content.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-edge/70 bg-ink/80 backdrop-blur-md">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a
          href="#inicio"
          className="group flex items-center gap-2.5 text-lg font-bold text-white"
          onClick={() => setOpen(false)}
        >
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 shadow-md shadow-violet-500/40 transition-transform duration-200 group-hover:scale-125" />
          {profile.name}
        </a>

        <button
          className="rounded-lg border border-edge px-3 py-1.5 text-slate-200 transition hover:border-violet-500/60 hover:bg-white/5 md:hidden"
          aria-label="Abrir menú"
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>

        <nav
          className={`${
            open ? 'flex' : 'hidden'
          } absolute left-0 right-0 top-16 flex-col border-b border-edge bg-panel md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="relative border-t border-edge px-5 py-3.5 text-slate-400 transition hover:text-white md:border-0 md:px-0 md:py-0"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
