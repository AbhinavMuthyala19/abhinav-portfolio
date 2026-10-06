export default function Chip({ tone = 'neutral', children }) {
  return <li className={`chip chip-${tone}`}>{children}</li>
}
