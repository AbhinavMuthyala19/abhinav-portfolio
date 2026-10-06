export default function LabelPill({ icon: Icon, chip, children }) {
  return (
    <span className="pill">
      {Icon && (
        <span className="pill-icon" aria-hidden="true">
          <Icon size={14} strokeWidth={1.9} />
        </span>
      )}
      {chip && <span className="pill-chip">{chip}</span>}
      {children}
    </span>
  )
}
