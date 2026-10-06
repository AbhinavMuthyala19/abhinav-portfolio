import useReveal from '../../hooks/useReveal.js'

// Wraps any element with the blur-fade-up entrance. `i` staggers siblings.
export default function Reveal({ as: Tag = 'div', i = 0, className = '', style, children, ...rest }) {
  const ref = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ '--i': i, ...style }} {...rest}>
      {children}
    </Tag>
  )
}
