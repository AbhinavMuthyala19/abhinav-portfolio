import LabelPill from './LabelPill.jsx'
import Reveal from './Reveal.jsx'

// The repeated header block: pill, two-tone heading, intro, optional CTA slot.
export default function SectionHeading({ icon, label, line1, line2, intro, align = 'center', as: Tag = 'h2', id, children }) {
  return (
    <div className={`sh sh-${align}`}>
      <Reveal i={0}>
        <LabelPill icon={icon}>{label}</LabelPill>
      </Reveal>
      <Reveal as={Tag} i={1} className="sh-title" id={id}>
        {line1}
        {line2 && (
          <>
            <br />
            <span className="dim">{line2}</span>
          </>
        )}
      </Reveal>
      {intro && (
        <Reveal as="p" i={2} className="sh-intro">
          {intro}
        </Reveal>
      )}
      {children && (
        <Reveal i={3} className="sh-cta">
          {children}
        </Reveal>
      )}
    </div>
  )
}
