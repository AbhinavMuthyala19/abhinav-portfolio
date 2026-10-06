import { Github, Linkedin, Mail, MessageSquare } from 'lucide-react'
import { MAILTO, SITE } from '../../config.js'
import Button from '../ui/Button.jsx'
import Reveal from '../ui/Reveal.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

export default function FinalCTA() {
  return (
    <section id="contact" className="section spotlight-section final">
      <div className="container">
        <div className="panel spotlight">
          <div className="beams" aria-hidden="true" />
          <div className="dots" aria-hidden="true" />
          <div className="panel-inner final-inner">
            <SectionHeading
              icon={MessageSquare}
              label="Contact"
              line1="Have an operational process that"
              line2="feels harder than it should?"
              intro="Let's understand how your business works and see what can be improved."
            >
              <Button href={MAILTO}>Start a Conversation</Button>
            </SectionHeading>
            <Reveal as="ul" className="contact-links" i={4}>
              <li>
                <a href={MAILTO}><Mail size={17} aria-hidden="true" /> {SITE.email}</a>
              </li>
              <li>
                <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17} aria-hidden="true" /> LinkedIn</a>
              </li>
              <li>
                <a href={SITE.github} target="_blank" rel="noopener noreferrer"><Github size={17} aria-hidden="true" /> GitHub</a>
              </li>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
