import { Hammer, Map, RefreshCw, Route, Search, ShieldCheck } from 'lucide-react'
import Reveal from '../ui/Reveal.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import IconBadge from '../ui/IconBadge.jsx'

const STEPS = [
  ['01', Search, 'Discover', 'Understand the existing process.'],
  ['02', Map, 'Map', 'Map the customer and internal workflow.'],
  ['03', ShieldCheck, 'Assess', 'Identify repetitive work and check technical feasibility.'],
  ['04', Hammer, 'Build', 'Build or integrate the appropriate solution.'],
  ['05', RefreshCw, 'Run', 'Deploy, maintain and improve.'],
]

export default function HowIWork() {
  return (
    <section id="how-i-work" className="section section-glow">
      <div className="container">
        <SectionHeading
          icon={Route}
          label="How I work"
          line1="I start with your process,"
          line2="not with a technology."
          intro="Feasibility comes before development. Each step is checked with you before the next one begins."
        />
        <Reveal className="tray steps-tray">
          <ol className="steps">
            {STEPS.map(([n, Icon, t, d], i) => (
              <li className="card card-center step" key={n}>
                <span className="step-num">{n}</span>
                <IconBadge icon={Icon} />
                <h3 className="card-title card-title-lg">{t}</h3>
                <p>{d}</p>
                {i < STEPS.length - 1 && <span className="step-link" aria-hidden="true" />}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
