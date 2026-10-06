import { MAILTO } from '../../config.js'
import Button from '../ui/Button.jsx'
import LabelPill from '../ui/LabelPill.jsx'
import Reveal from '../ui/Reveal.jsx'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <Reveal i={0}>
          <LabelPill chip="Fractional">AI &amp; Automation Engineer</LabelPill>
        </Reveal>
        <Reveal as="h1" i={1} className="hero-title">
          <span className="hero-lead">AI &amp; Automation Engineering</span>
          <span className="hero-display">for Growing Businesses</span>
        </Reveal>
        <Reveal as="p" i={2} className="hero-copy">
          I help growing businesses turn repetitive operational work into reliable systems — by understanding how
          the business already works and building the technology around it.
        </Reveal>
        <Reveal i={3} className="hero-actions">
          <Button href={MAILTO}>Start a Conversation</Button>
          <Button href="#how-i-work" variant="glass">See How I Work</Button>
        </Reveal>
      </div>
    </section>
  )
}
