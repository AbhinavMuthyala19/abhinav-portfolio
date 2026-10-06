import { useRef } from 'react'
import { Maximize2, X } from 'lucide-react'

// Responsive screenshot that opens a larger copy in a native <dialog> (keyboard + Esc friendly).
export default function ZoomImage({ img, sizes, loading = 'lazy', fit, position, className = '' }) {
  const dlg = useRef(null)
  const open = () => dlg.current?.showModal()
  const close = () => dlg.current?.close()
  return (
    <>
      <button type="button" className={`zoom ${className}`} onClick={open} aria-label={`Enlarge image: ${img.alt}`}>
        <img
          src={img.src}
          srcSet={img.srcSet}
          sizes={sizes}
          width={img.width}
          height={img.height}
          alt={img.alt}
          loading={loading}
          decoding="async"
          style={{ objectFit: fit, objectPosition: position }}
        />
        <span className="zoom-hint" aria-hidden="true">
          <Maximize2 size={14} /> Enlarge
        </span>
      </button>
      <dialog
        ref={dlg}
        className="lightbox"
        aria-label={img.alt}
        onClick={(e) => e.target === dlg.current && close()}
      >
        <button type="button" className="lightbox-close" onClick={close} aria-label="Close enlarged image">
          <X size={20} />
        </button>
        <img src={img.large} alt={img.alt} loading="lazy" decoding="async" />
      </dialog>
    </>
  )
}
