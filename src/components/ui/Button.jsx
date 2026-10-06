export default function Button({ variant = 'primary', href, children, className = '', icon: Icon, ...rest }) {
  const cls = `btn btn-${variant} ${className}`
  const content = (
    <>
      {children}
      {Icon && <Icon size={17} strokeWidth={1.9} aria-hidden="true" />}
    </>
  )
  if (href) {
    return (
      <a className={cls} href={href} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <button className={cls} type="button" {...rest}>
      {content}
    </button>
  )
}
