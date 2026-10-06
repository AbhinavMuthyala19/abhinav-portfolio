export default function IconBadge({ icon: Icon, shape = 'circle' }) {
  return (
    <span className={`badge badge-${shape}`} aria-hidden="true">
      <Icon size={21} strokeWidth={1.75} />
    </span>
  )
}
