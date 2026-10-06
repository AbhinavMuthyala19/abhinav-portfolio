import { ArrowRight, ClipboardList, LayoutDashboard, MessagesSquare, UserPlus, Workflow } from 'lucide-react'
import Reveal from '../ui/Reveal.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import IconBadge from '../ui/IconBadge.jsx'

// Small illustrative panels (generic examples, not data).
function Flow({ steps }) {
  return (
    <div className="mini mini-flow" aria-hidden="true">
      {steps.map((s, i) => (
        <span className="mini-step" key={s}>
          <span className="mini-node">{s}</span>
          {i < steps.length - 1 && <ArrowRight size={13} className="mini-arrow" />}
        </span>
      ))}
    </div>
  )
}

function Rows({ rows }) {
  return (
    <div className="mini mini-rows" aria-hidden="true">
      {rows.map(([a, b, tone]) => (
        <div className="mini-row" key={a}>
          <span>{a}</span>
          <span className={`mini-tag ${tone || ''}`}>{b}</span>
        </div>
      ))}
    </div>
  )
}

const ITEMS = [
  {
    n: '01',
    icon: UserPlus,
    title: 'Customer Onboarding Automation',
    sub: 'From first payment to first session',
    copy: 'New customers are recorded, sent the right forms and checked for missing details, without staff chasing each step.',
    panel: <Flow steps={['Paid', 'Form sent', 'Checked', 'Coach']} />,
  },
  {
    n: '02',
    icon: Workflow,
    title: 'Customer Operations Automation',
    sub: 'Follow-ups that do not depend on memory',
    copy: 'Reminders, check-ins and status changes are coordinated across the tools your team already uses.',
    panel: (
      <Rows
        rows={[
          ['Reminder', 'Sent', 'ok'],
          ['Check-in', 'Scheduled'],
          ['Status', 'Updated', 'ok'],
        ]}
      />
    ),
  },
  {
    n: '03',
    icon: MessagesSquare,
    title: 'Internal Operations & Customer Support',
    sub: 'The right person, with the context',
    copy: 'Requests, handoffs and notifications are routed to the person who owns them, with the customer details attached.',
    panel: <Flow steps={['Request', 'Routed', 'Owner notified']} />,
  },
  {
    n: '04',
    icon: LayoutDashboard,
    title: 'Coach / Operations Visibility',
    sub: 'One view of who is where',
    copy: 'See who is at which step, who is stuck and why, and which coach or team member owns each customer.',
    panel: (
      <Rows
        rows={[
          ['Active', 'Coach assigned', 'ok'],
          ['Information missing', 'Reminder sent', 'warn'],
          ['Onboarding pending', 'Form sent'],
        ]}
      />
    ),
  },
]

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="section">
      <div className="container">
        <SectionHeading
          icon={ClipboardList}
          label="What I do"
          line1="Systems that remove"
          line2="operational friction."
          intro="I find where manual work slows the business down, and build the automation around the way you already operate."
        />
        <div className="grid-2 wid-grid">
          {ITEMS.map((it, i) => (
            <Reveal as="article" i={i % 2} className="card card-stack" key={it.n}>
              <div className="card-top">
                <IconBadge icon={it.icon} shape="square" />
                <span className="card-num">{it.n}</span>
              </div>
              <h3 className="card-title card-title-lg">{it.title}</h3>
              <p className="card-sub">{it.sub}</p>
              <span className="divider divider-left" />
              <p>{it.copy}</p>
              {it.panel}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
