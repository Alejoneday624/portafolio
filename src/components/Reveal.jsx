import { Children, cloneElement, useEffect, useRef, useState } from 'react'

/**
 * Reveal: hace que el elemento aparezca suavemente al hacer scroll.
 * Acepta UN hijo (lo anima directo) o VARIOS (los envuelve en un div y anima).
 * Respeta prefers-reduced-motion.
 */
export default function Reveal({ children, delay = 0 }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setShown(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const classes = ['reveal', shown && 'is-visible'].filter(Boolean).join(' ')
  const style = { transitionDelay: shown ? `${delay}ms` : '0ms' }

  // Un solo hijo directo: se le aplican las clases/ref sin envolver
  if (Children.count(children) === 1) {
    const child = Children.only(children)
    if (typeof child === 'object' && child !== null && child.props) {
      return cloneElement(child, {
        ref,
        className: [child.props.className, classes].filter(Boolean).join(' '),
        style: { ...child.props.style, ...style },
      })
    }
  }

  // Varios hijos (o no-objeto): envolver en un div
  return (
    <div ref={ref} className={classes} style={style}>
      {children}
    </div>
  )
}
