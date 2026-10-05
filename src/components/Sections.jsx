import {
  Users, Workflow, Plug, Wrench, ArrowDown, ArrowRight, FileText, ExternalLink, Mail, Linkedin, Github,
} from 'lucide-react'
import { SITE, CASE_STUDY_URL } from '../config.js'

function Section({ id, heading, children, alt }) {
  return (
    <section id={id} className={`section ${alt ? 'alt' : ''}`}>
      <div className="container">
        <h2>{heading}</h2>
        {children}
      </div>
    </section>
  )
}

export function WhoIHelp() {
  const cards = [
    [Users, 'Customer Operations', 'Onboarding, follow-ups, check-ins, customer status and operational communication.'],
    [Workflow, 'Internal Operations', 'Task coordination, handoffs, notifications, tracking and operational visibility.'],
    [Plug, 'Workflow Integration', 'Connecting the tools a business already uses instead of unnecessarily replacing them.'],
    [Wrench, 'Custom Automation', "When an off-the-shelf tool isn't enough, I build the missing layer."],
  ]
  return (
    <Section id="about" heading="Growing businesses don't always need another software platform.">
      <div className="prose">
        <p>As businesses grow, operational complexity grows with them.</p>
        <p>Customers move through multiple steps. Teams use different tools. Information gets passed between people. Follow-ups become manual. Important operational details become harder to track.</p>
        <p>This is where I come in.</p>
        <p>I work with growing businesses that need someone who can understand the existing process, identify technical opportunities, and actually implement the solution.</p>
      </div>
      <div className="grid-4">
        {cards.map(([Icon, title, body]) => (
          <article className="card" key={title}>
            <Icon size={22} aria-hidden="true" className="card-icon" />
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

export function Process() {
  const steps = [
    ['01', 'Understand', 'I learn how your business actually operates today.'],
    ['02', 'Assess', 'I identify repetitive work, bottlenecks, manual handoffs and opportunities for automation.'],
    ['03', 'Build', 'I build or integrate the appropriate technical solution.'],
    ['04', 'Improve', 'I monitor, maintain and improve the workflow as the business evolves.'],
  ]
  return (
    <Section id="what-i-do" alt heading="I don't start with a technology. I start with your process.">
      <ol className="steps" id="how-i-work">
        {steps.map(([n, t, b]) => (
          <li key={n}>
            <span className="step-num">{n}</span>
            <h3>{t}</h3>
            <p>{b}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

function Node({ children, tone }) {
  return <div className={`node ${tone || ''}`}>{children}</div>
}

function Down() {
  return <ArrowDown className="flow-arrow" size={18} aria-hidden="true" />
}

function Flow() {
  return (
    <div
      className="flow"
      role="img"
      aria-label="Workflow: a payment or customer event creates a customer record, then onboarding, then information validation. Missing information triggers a reminder. Complete information goes to completion. Then a coach is assigned and the customer becomes active."
    >
      <Node>Payment / Customer Event</Node><Down />
      <Node>Customer Record</Node><Down />
      <Node>Onboarding</Node><Down />
      <Node tone="accent">Information Validation</Node>
      <div className="branches">
        <div className="branch">
          <span className="branch-label">Missing</span>
          <Down />
          <Node>Reminder</Node>
        </div>
        <div className="branch">
          <span className="branch-label">Complete</span>
          <Down />
          <Node>Completion</Node>
        </div>
      </div>
      <Down />
      <Node>Coach Assigned</Node><Down />
      <Node tone="accent">Customer Active</Node>
    </div>
  )
}

const SCENARIOS = [
  ['Scenerio 1.png', 'Scenario 1: Successful onboarding', 'Screenshot of the successful onboarding scenario'],
  ['Scenerio 2.png', 'Scenario 2: Missing information', 'Screenshot of the missing information scenario'],
  ['Scenerio 3.png', 'Scenario 3: Coach reassignment', 'Screenshot of the coach reassignment scenario'],
]

export function FeaturedWork() {
  const tags = [
    'Automated workflow orchestration', 'Missing-information detection', 'Follow-up generation',
    'Staff/coach assignment', 'Operational state tracking', 'Workflow event logging', 'Operations dashboard',
  ]
  return (
    <Section id="work" heading="Featured Work">
      <article className="case">
        <div className="case-text">
          <p className="meta">Fitness / Wellness · Automation &amp; Operations</p>
          <h3>Customer Operations Automation</h3>
          <p className="subtitle">Customer Onboarding Workflow — Portfolio Demonstration</p>
          <p>A working demonstration of how a customer onboarding process can be coordinated across payment events, customer information, validation, staff assignment and customer activation.</p>
          <ul className="tags">
            {tags.map(t => <li key={t}>{t}</li>)}
          </ul>
          <div className="btn-row">
            <a className="btn btn-primary" href={CASE_STUDY_URL} target="_blank" rel="noopener noreferrer">
              <FileText size={16} aria-hidden="true" /> View Case Study
            </a>
            <button type="button" className="btn btn-ghost" disabled>
              Demo Video Coming Soon
            </button>
          </div>
          <p className="disclaimer">Portfolio demonstration using a simulated environment. No real customer data or production integrations.</p>
        </div>
        <Flow />
      </article>
      <div className="scenarios">
        <h3>Three scenarios tested</h3>
        <ul className="scenario-grid">
          {SCENARIOS.map(([file, title, alt]) => (
            <li key={file}>
              <figure>
                <img src={encodeURI(`/images/${file}`)} alt={alt} loading="lazy" />
                <figcaption>{title}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export function ExistingSystems() {
  const stack = ['Your Existing Tools', 'Integration', 'Automation Layer', 'Your Team / Customers', 'Operational Visibility']
  const examples = ['Payment systems', 'Forms', 'Messaging platforms', 'CRM systems', 'Databases', 'Internal applications', 'Google Workspace', 'AI / LLM services']
  return (
    <Section id="existing-systems" heading="Your existing systems come first.">
      <div className="two-col">
        <div>
          <div className="prose">
            <p>I don't believe every business needs to replace its existing software.</p>
            <p>The goal is to connect and improve what already exists.</p>
          </div>
          <ul className="tags">
            {examples.map(e => <li key={e}>{e}</li>)}
          </ul>
          <p className="closing">The exact solution depends on your existing process.</p>
        </div>
        <ol className="layers" aria-label="How the pieces connect">
          {stack.map((s, i) => (
            <li key={s}>
              <Node tone={i === 2 ? 'accent' : ''}>{s}</Node>
              {i < stack.length - 1 && <Down />}
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}

export function Capabilities() {
  const groups = [
    ['Automation & Integrations', ['n8n', 'REST APIs', 'Webhooks', 'API integrations']],
    ['Backend & Data', ['Java', 'Spring Boot', 'Python', 'FastAPI', 'SQL', 'MySQL / PostgreSQL']],
    ['Frontend', ['React', 'Vite']],
    ['AI', ['LLM APIs', 'AI workflows', 'RAG', 'AI-assisted operational tools']],
    ['Infrastructure', ['Docker', 'Docker Compose', 'API security fundamentals', 'Deployment']],
  ]
  return (
    <Section id="technology" alt heading="The technology behind the work">
      <div className="caps">
        {groups.map(([g, items]) => (
          <div key={g}>
            <h3>{g}</h3>
            <p>{items.join(' · ')}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function WhyMe() {
  const pts = [
    ['Business process first', "I don't start by deciding which technology you should buy."],
    ['Practical implementation', 'The objective is a working solution, not a technology demonstration.'],
    ['Existing systems', 'Where possible, I integrate with what you already use.'],
    ['Direct collaboration', 'You work directly with the person understanding, designing and implementing the solution.'],
    ['Flexible engagement', "Start with a specific operational problem and expand only when there's a real need."],
  ]
  return (
    <Section id="why" heading="A technical partner who starts with the business problem.">
      <ul className="why">
        {pts.map(([t, b]) => (
          <li key={t}>
            <h3>{t}</h3>
            <p>{b}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export function FinalCTA() {
  return (
    <section className="cta">
      <div className="container narrow">
        <h2>Have an operational process that feels more complicated than it should?</h2>
        <div className="prose">
          <p>Tell me how it currently works.</p>
          <p>I'll help you identify:</p>
          <ul className="checks">
            <li>What can be automated.</li>
            <li>What should remain manual.</li>
            <li>What is technically feasible.</li>
            <li>And what is actually worth building.</li>
          </ul>
        </div>
        <a className="btn btn-light" href={`mailto:${SITE.email}`}>
          Start a Conversation <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container narrow">
        <h2>Contact</h2>
        <p className="contact-name">{SITE.name}</p>
        <p className="subtitle">{SITE.title}</p>
        <ul className="contact-list">
          <li><a href={`mailto:${SITE.email}`}><Mail size={18} aria-hidden="true" /> {SITE.email}</a></li>
          <li><a href={SITE.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18} aria-hidden="true" /> LinkedIn</a></li>
          <li><a href={SITE.github} target="_blank" rel="noopener noreferrer"><Github size={18} aria-hidden="true" /> GitHub</a></li>
        </ul>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p>© 2026 {SITE.name}</p>
          <p>{SITE.title}</p>
        </div>
        <p className="small">Built around business processes, not predefined software packages.</p>
      </div>
    </footer>
  )
}
