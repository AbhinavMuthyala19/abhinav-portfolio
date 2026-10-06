import { DEMO_VIDEO_URL, SITE } from '../../config.js'

const NAV = [
  ['What I Do', '#what-i-do'],
  ['How I Work', '#how-i-work'],
  ['Featured Work', '#featured-work'],
  ['Why Me', '#why-me'],
  ['Contact', '#contact'],
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-light" aria-hidden="true" />
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="brand">
              <span className="brand-mark" aria-hidden="true">A</span>
              <span className="brand-name">{SITE.name}</span>
            </span>
            <p>{SITE.title}</p>
            <p className="footer-note">Built around business processes, not predefined software packages.</p>
          </div>
          <nav aria-label="Footer">
            <h2 className="footer-h">Explore</h2>
            <ul>
              {NAV.map(([l, h]) => (
                <li key={h}><a href={h}>{l}</a></li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="footer-h">Connect</h2>
            <ul>
              <li><a href={`mailto:${SITE.email}`}>Email</a></li>
              <li><a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href={SITE.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href={DEMO_VIDEO_URL} target="_blank" rel="noopener noreferrer">Demo video</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 {SITE.name}</p>
          <p>{SITE.title}</p>
        </div>
      </div>
    </footer>
  )
}
