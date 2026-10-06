import { useCallback, useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { MAILTO, SITE } from '../../config.js'
import Button from '../ui/Button.jsx'

const LINKS = [
  ['What I Do', '#what-i-do'],
  ['How I Work', '#how-i-work'],
  ['Featured Work', '#featured-work'],
  ['Why Me', '#why-me'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const panel = useRef(null)
  const toggle = useRef(null)
  const lastY = useRef(0)

  const close = useCallback(() => setOpen(false), [])

  // Hide on scroll down, show on scroll up.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 12)
      if (!open) setHidden(y > lastY.current && y > 120)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  // Highlight the section in view.
  useEffect(() => {
    const els = LINKS.map(([, h]) => document.querySelector(h)).filter(Boolean)
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive('#' + e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  // Mobile menu: lock scroll, Escape closes, Tab stays inside the panel.
  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        close()
        toggle.current?.focus()
      }
      if (e.key === 'Tab' && panel.current) {
        const f = [toggle.current, ...panel.current.querySelectorAll('a')].filter(Boolean)
        const first = f[0]
        const last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    const onResize = () => window.innerWidth >= 1200 && close()
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
      document.body.classList.remove('menu-open')
    }
  }, [open, close])

  return (
    <header className={`nav ${hidden ? 'nav-hidden' : ''} ${scrolled || open ? 'nav-solid' : ''}`}>
      <div className="container nav-bar">
        <a href="#top" className="brand" onClick={close}>
          <span className="brand-mark" aria-hidden="true">A</span>
          <span className="brand-name">{SITE.name}</span>
        </a>

        <nav aria-label="Primary" className="nav-desktop">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} className={active === href ? 'is-active' : ''}>
              {label}
            </a>
          ))}
        </nav>

        <Button href={MAILTO} className="nav-cta">Start a Conversation</Button>

        <button
          ref={toggle}
          type="button"
          className="menu-btn"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} strokeWidth={1.75} /> : <Menu size={24} strokeWidth={1.75} />}
        </button>
      </div>

      <div className={`mobile-menu ${open ? 'open' : ''}`} id="mobile-menu" ref={panel} hidden={!open}>
        <div className="mobile-backdrop" onClick={close} aria-hidden="true" />
        <nav aria-label="Mobile" className="container mobile-links">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} onClick={close}>
              {label}
            </a>
          ))}
          <Button href={MAILTO} className="mobile-cta" onClick={close}>Start a Conversation</Button>
        </nav>
      </div>
    </header>
  )
}
