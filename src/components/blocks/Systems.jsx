import { ArrowDown, ArrowRight, LayoutDashboard, Network, Users, Workflow, Database } from 'lucide-react'
import Reveal from '../ui/Reveal.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import IconBadge from '../ui/IconBadge.jsx'
import Chip from '../ui/Chip.jsx'

const EXISTING = ['Payment', 'Forms', 'Messaging', 'CRM', 'Database', 'Internal applications']
const LAYER = ['Orchestration', 'Validation rules', 'Routing', 'Event logging']

export default function Systems() {
  return (
    <section id="existing-systems" className="section section-glow">
      <div className="container">
        <SectionHeading
          icon={Network}
          label="Real-world adaptation"
          line1="Your existing systems"
          line2="come first."
          intro="The automation layer coordinates the systems a business already uses. It does not require replacing everything."
        />

        <Reveal className="tray arch-tray">
          <div className="arch">
            <article className="card arch-card">
              <IconBadge icon={Database} shape="square" />
              <h3 className="card-title">Existing business systems</h3>
              <ul className="chips">
                {EXISTING.map((e) => (
                  <Chip key={e}>{e}</Chip>
                ))}
              </ul>
            </article>

            <span className="arch-arrow" aria-hidden="true">
              <ArrowRight className="arrow-h" size={22} />
              <ArrowDown className="arrow-v" size={22} />
            </span>

            <article className="card arch-card arch-core">
              <IconBadge icon={Workflow} shape="square" />
              <h3 className="card-title">Automation layer</h3>
              <ul className="chips">
                {LAYER.map((e) => (
                  <Chip tone="accent" key={e}>{e}</Chip>
                ))}
              </ul>
            </article>

            <span className="arch-arrow" aria-hidden="true">
              <ArrowRight className="arrow-h" size={22} />
              <ArrowDown className="arrow-v" size={22} />
            </span>

            <article className="card arch-card">
              <IconBadge icon={Users} shape="square" />
              <h3 className="card-title">Staff and customer workflow</h3>
              <p>Reminders, assignments and notifications reach the right person.</p>
            </article>

            <span className="arch-arrow" aria-hidden="true">
              <ArrowRight className="arrow-h" size={22} />
              <ArrowDown className="arrow-v" size={22} />
            </span>

            <article className="card arch-card">
              <IconBadge icon={LayoutDashboard} shape="square" />
              <h3 className="card-title">Operational visibility</h3>
              <p>A live view of status, ownership and what needs attention.</p>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
