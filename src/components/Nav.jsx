import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { SITE } from '../config.js'

const LINKS = [
  ['About', '#about'],
  ['What I Do', '#what-i-do'],
  ['How I Work', '#how-i-work'],
  ['Work', '#work'],
  ['Contact', '#contact'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand" onClick={close}>{SITE.name}</a>
        <nav aria-label="Primary" className={`nav-links ${open ? 'open' : ''}`}>
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} onClick={close}>{label}</a>
          ))}
          <a href="#contact" className="btn btn-primary btn-sm" onClick={close}>Let's Talk</a>
        </nav>
        <button
          className="menu-btn"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}
