import { useEffect, useRef } from 'react'
import { Layers3, Repeat2, Users } from 'lucide-react'
import LabelPill from '../ui/LabelPill.jsx'
import Reveal from '../ui/Reveal.jsx'
import IconBadge from '../ui/IconBadge.jsx'
import Chip from '../ui/Chip.jsx'

const STATEMENT =
  'Growing fitness, nutrition, wellness and other customer-facing businesses where operational complexity is increasing faster than internal technical capability.'

// Words fill from dim to white as the statement scrolls through the viewport.
function Statement({ text }) {
  const wrap = useRef(null)
  const words = text.split(' ')

  useEffect(() => {
    const el = wrap.current
    const spans = el.querySelectorAll('.word')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      spans.forEach((s) => s.classList.add('on'))
      return
    }
    let raf = 0
    const update = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (vh * 0.5 + r.height * 0.6)))
      const n = Math.round(p * spans.length)
      spans.forEach((s, i) => s.classList.toggle('on', i < n))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <p className="statement" ref={wrap}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((w, i) => (
          <span className="word" key={i}>{w} </span>
        ))}
      </span>
    </p>
  )
}

const FRICTION = [
  [Users, 'Customers move through many steps', 'Payment, forms, check-ins and follow-ups, each owned by someone different.'],
  [Layers3, 'Teams work across different tools', 'Information gets passed between people and systems by hand.'],
  [Repeat2, 'Follow-ups stay manual', 'Important operational details get harder to track as volume grows.'],
]

export default function WhoIHelp() {
  return (
    <section id="who-i-help" className="section who">
      <div className="who-glow" aria-hidden="true" />
      <div className="container">
        <div className="who-head">
          <Reveal>
            <LabelPill icon={Users}>Who I help</LabelPill>
          </Reveal>
          <h2 className="sr-only">Who I help</h2>
          <Statement text={STATEMENT} />
        </div>
        <Reveal as="ul" className="chips chips-center" aria-label="Types of business">
          <Chip tone="accent">Fitness</Chip>
          <Chip tone="accent">Nutrition</Chip>
          <Chip tone="accent">Wellness</Chip>
          <Chip>Other customer-facing businesses</Chip>
        </Reveal>

        <div className="friction">
          {FRICTION.map(([Icon, t, d], i) => (
            <Reveal as="article" i={i} className="card card-center" key={t}>
              <IconBadge icon={Icon} />
              <h3 className="card-title">{t}</h3>
              <span className="divider" />
              <p>{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
