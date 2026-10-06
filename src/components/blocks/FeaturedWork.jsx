import { useState } from 'react'
import { ArrowUpRight, Briefcase, FileText, Play, ShieldAlert } from 'lucide-react'
import { CASE_STUDY_URL, DEMO_VIDEO_EMBED, DEMO_VIDEO_URL } from '../../config.js'
import { SCENARIOS, WORKFLOWS } from '../../data/projectImages.js'
import Button from '../ui/Button.jsx'
import Chip from '../ui/Chip.jsx'
import LabelPill from '../ui/LabelPill.jsx'
import Reveal from '../ui/Reveal.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import ZoomImage from '../ui/ZoomImage.jsx'

const CAPABILITIES = [
  'Automated workflow orchestration',
  'Missing-information detection',
  'Follow-up generation',
  'Staff / coach assignment',
  'Operational state tracking',
  'Workflow event logging',
  'Operations dashboard',
]

const STACK = ['n8n', 'FastAPI', 'Python', 'MySQL', 'React', 'Vite', 'Docker Compose']

const TABS = [
  ['Payment received', 'Payment to onboarding started', 'A simulated payment event is validated and mapped to a customer record. Duplicate payments are skipped, and a new customer gets an onboarding form link.'],
  ['Validation', 'Validate the submitted information', 'The submission is checked against the required fields. Complete information moves on to coach assignment; anything missing is flagged and the customer is reminded.'],
  ['Coach assignment', 'Assign, notify and activate', 'The least-loaded coach is assigned and notified. A first-time customer is welcomed and marked active; a reassignment does not send a second welcome.'],
]

const SCENARIO_COPY = [
  ['Scenario 1', 'Complete onboarding', 'A customer pays and submits complete information. The workflow assigns a coach, notifies the coach, welcomes the customer and marks them Active.'],
  ['Scenario 2', 'Missing information', 'A customer submits an incomplete form. The system flags exactly what is missing (weight, emergency contact phone, health consent) and sends a reminder listing it. No coach is assigned yet.'],
  ['Scenario 3', 'Coach reassignment', 'An active customer is moved to a different coach. The new coach is notified, the change is logged, and the customer is not welcomed a second time.'],
]

function WorkflowViewer() {
  const [tab, setTab] = useState(0)
  return (
    <div className="viewer">
      <div className="tabs" role="tablist" aria-label="n8n workflows">
        {TABS.map(([label], i) => (
          <button
            key={label}
            role="tab"
            type="button"
            id={`wf-tab-${i}`}
            aria-selected={tab === i}
            aria-controls={`wf-panel-${i}`}
            tabIndex={tab === i ? 0 : -1}
            className={`tab ${tab === i ? 'is-active' : ''}`}
            onClick={() => setTab(i)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight') setTab((tab + 1) % TABS.length)
              if (e.key === 'ArrowLeft') setTab((tab + TABS.length - 1) % TABS.length)
            }}
          >
            <span className="tab-n">{i + 1}</span> {label}
          </button>
        ))}
      </div>
      {TABS.map(([, title, desc], i) => (
        <div
          key={title}
          role="tabpanel"
          id={`wf-panel-${i}`}
          aria-labelledby={`wf-tab-${i}`}
          hidden={tab !== i}
          className="viewer-panel"
        >
          <div className="frame">
            <ZoomImage img={WORKFLOWS[i]} sizes="(min-width: 1200px) 1080px, calc(100vw - 48px)" className="zoom-flat" />
          </div>
          <div className="viewer-caption">
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function FeaturedWork() {
  return (
    <>
      <section id="featured-work" className="section spotlight-section">
        <div className="container">
          <div className="panel spotlight">
            <div className="beams" aria-hidden="true" />
            <div className="dots" aria-hidden="true" />
            <div className="panel-inner">
              <SectionHeading
                icon={Briefcase}
                label="Featured work"
                line1="Customer Operations Automation"
                line2="Customer onboarding workflow"
                intro="A working demonstration of how a customer onboarding process can be coordinated across payment events, customer information, validation, staff assignment and customer activation."
              >
                <p className="sim-note">
                  <ShieldAlert size={16} aria-hidden="true" />
                  Portfolio demonstration using a simulated environment. No real customer data or production integrations.
                </p>
              </SectionHeading>

              <Reveal className="hero-shot">
                <div className="frame frame-lg">
                  <ZoomImage
                    img={SCENARIOS[0]}
                    sizes="(min-width: 1200px) 1100px, calc(100vw - 48px)"
                    loading="eager"
                    fit="cover"
                    position="top"
                    className="zoom-hero"
                  />
                </div>
                <p className="caption">The operations dashboard after a customer completes onboarding. Click to enlarge.</p>
              </Reveal>

              <div className="split">
                <Reveal as="article" className="card card-stack">
                  <h3 className="card-title card-title-lg">The problem</h3>
                  <p>
                    When a new customer pays, someone has to notice, send the form, check the answers, chase what is
                    missing, pick a coach and keep track of it all. In a growing business that lives in message
                    threads, spreadsheets and people&apos;s heads, and customers fall through the gaps.
                  </p>
                </Reveal>
                <Reveal as="article" i={1} className="card card-stack">
                  <h3 className="card-title card-title-lg">What the demonstration shows</h3>
                  <ul className="chips" aria-label="Capabilities demonstrated">
                    {CAPABILITIES.map((c) => (
                      <Chip tone="accent" key={c}>{c}</Chip>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight" aria-labelledby="workflows-h">
        <div className="container">
          <SectionHeading
            as="h3"
            id="workflows-h"
            label="The workflows"
            line1="Three n8n workflows"
            line2="coordinate the process."
            intro="Each workflow handles one stage and hands over to the next. The API owns the data and enforces the allowed status changes."
            icon={FileText}
          />
          <Reveal className="tray">
            <WorkflowViewer />
          </Reveal>
        </div>
      </section>

      <section className="section section-tight" aria-labelledby="scenarios-h">
        <div className="container">
          <SectionHeading
            as="h3"
            id="scenarios-h"
            label="Scenarios tested"
            line1="Three scenarios,"
            line2="run end to end."
            icon={Play}
          />
          <div className="grid-3 scenarios">
            {SCENARIOS.map((img, i) => (
              <Reveal as="article" i={i} className="card card-service" key={img.id}>
                <div className="card-top">
                  <span className="eyebrow">{SCENARIO_COPY[i][0]}</span>
                </div>
                <h4 className="card-title card-title-lg">{SCENARIO_COPY[i][1]}</h4>
                <span className="divider divider-left" />
                <p>{SCENARIO_COPY[i][2]}</p>
                <div className="frame frame-sm">
                  <ZoomImage
                    img={img}
                    sizes="(min-width: 1200px) 360px, (min-width: 810px) 45vw, calc(100vw - 100px)"
                    fit="cover"
                    position="top"
                    className="zoom-crop"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="section section-tight section-glow" aria-labelledby="demo-h">
        <div className="container">
          <SectionHeading
            as="h3"
            id="demo-h"
            icon={Play}
            label="Demo video"
            line1="See it in action."
            line2="The full flow, recorded."
            intro="The walkthrough covers onboarding, information validation, missing-information handling, coach assignment, coach reassignment and operational visibility."
          />
          <Reveal className="tray video-tray">
            <div className="video">
              <iframe
                src={DEMO_VIDEO_EMBED}
                title="Demo video: customer onboarding automation walkthrough"
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </Reveal>
          <ul className="chips chips-center video-chips" aria-label="What the video covers">
            {['Onboarding', 'Information validation', 'Missing-information handling', 'Coach assignment', 'Coach reassignment', 'Operational visibility'].map((c) => (
              <Chip key={c}>{c}</Chip>
            ))}
          </ul>
          <p className="video-alt">
            Prefer YouTube? <a href={DEMO_VIDEO_URL} target="_blank" rel="noopener noreferrer">Watch it there <ArrowUpRight size={14} aria-hidden="true" /></a>
          </p>
        </div>
      </section>

      <section className="section section-tight" aria-labelledby="case-h">
        <div className="container">
          <Reveal className="panel cta-card">
            <div className="cta-glow" aria-hidden="true" />
            <div className="dots" aria-hidden="true" />
            <div className="cta-card-inner">
              <div>
                <LabelPill icon={FileText}>Case study</LabelPill>
                <h3 id="case-h" className="cta-card-title">
                  The full write-up,
                  <br />
                  <span className="dim">problem to workflow.</span>
                </h3>
                <span className="divider divider-left" />
                <p>
                  The process, the architecture, what is simulated and how each part would connect to a
                  client&apos;s existing systems. It describes a portfolio demonstration in a simulated environment, not a
                  live client deployment.
                </p>
                <div className="cta-card-actions">
                  <Button href={CASE_STUDY_URL} target="_blank" rel="noopener noreferrer" icon={ArrowUpRight}>
                    Read the Full Case Study
                  </Button>
                  <span className="meta-note">PDF</span>
                </div>
              </div>
              <div className="cta-card-stack">
                <h4 className="eyebrow">Built with</h4>
                <ul className="chips" aria-label="Technology used in this project">
                  {STACK.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </ul>
                <p className="stack-note">
                  n8n orchestrates, FastAPI owns the data and the status rules, MySQL stores customers and the audit
                  trail, and a React dashboard shows it all. Payments and WhatsApp messages are simulated.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
