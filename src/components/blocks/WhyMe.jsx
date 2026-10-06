import { BadgeCheck, Combine, Gauge, KeyRound, Puzzle, RefreshCcw, Route, Sparkles, UserCheck } from 'lucide-react'
import Reveal from '../ui/Reveal.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Chip from '../ui/Chip.jsx'

const POINTS = [
  [Route, 'Process-first engineering', 'I start from how the business works, not from a tool I want to use.'],
  [Puzzle, 'Business-specific solutions', 'The system is built around your process rather than forcing the business into a predefined product.'],
  [Gauge, 'Practical implementation', 'The aim is a working solution your team can rely on, not a technology demonstration.'],
  [BadgeCheck, 'Feasibility before development', 'I check what is technically possible, and worth building, before any build starts.'],
  [Combine, 'No unnecessary platform replacement', 'Where possible I integrate with the software you already pay for and use.'],
  [UserCheck, 'Technical ownership', 'You work directly with the person who understands, designs and implements the solution.'],
  [RefreshCcw, 'Ongoing improvement', 'Start with one operational problem, then maintain and expand only when there is a real need.'],
  [Sparkles, 'AI where it adds value', 'AI is used when it genuinely helps a step, and left out when a plain rule works better.'],
]

const TOOLS = ['n8n', 'REST APIs', 'Webhooks', 'Python', 'FastAPI', 'Java', 'Spring Boot', 'SQL', 'MySQL / PostgreSQL', 'React', 'Docker', 'LLM APIs', 'RAG']

export default function WhyMe() {
  return (
    <section id="why-me" className="section">
      <div className="container why">
        <div className="why-head">
          <SectionHeading
            icon={KeyRound}
            label="Why work with me"
            line1="A technical partner who starts"
            line2="with the business problem."
            intro="Direct collaboration, practical scope and honest feasibility, with no unnecessary software to buy."
            align="left"
          />
          <Reveal className="why-tools">
            <h3 className="eyebrow">Tools I work with</h3>
            <ul className="chips" aria-label="Technology">
              {TOOLS.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </ul>
          </Reveal>
        </div>
        <ul className="why-list">
          {POINTS.map(([Icon, t, d], i) => (
            <Reveal as="li" i={i % 2} className="card why-card" key={t}>
              <span className="tile" aria-hidden="true">
                <Icon size={20} strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="card-title">{t}</h3>
                <p>{d}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
