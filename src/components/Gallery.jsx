import { useCallback, useEffect, useRef, useState } from 'react'
import OrnamentDivider from './OrnamentDivider'

const ALL = [3, 1, 12].map((id) => ({
  id,
  alt: 'Saiprasanth and Janani, pre-wedding photograph',
}))

function thumbSrc(id) {
  return `/gallery/thumb/gallery-${String(id).padStart(2, '0')}.jpg`
}

function fullSrc(id) {
  return `/gallery/full/gallery-${String(id).padStart(2, '0')}.jpg`
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const touchStartX = useRef(null)

  const isOpen = lightboxIndex !== null

  const close = useCallback(() => setLightboxIndex(null), [])
  const showPrev = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i - 1 + ALL.length) % ALL.length)),
    [],
  )
  const showNext = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i + 1) % ALL.length)),
    [],
  )

  useEffect(() => {
    if (!isOpen) return

    document.body.style.overflow = 'hidden'
    const onKeyDown = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, close, showPrev, showNext])

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 45) {
      if (delta > 0) showPrev()
      else showNext()
    }
    touchStartX.current = null
  }

  const current = isOpen ? ALL[lightboxIndex] : null

  return (
    <section className="bg-cream-dark px-6 py-20 text-center sm:py-28">
      <p className="font-display text-xs uppercase tracking-[0.35em] text-gold sm:text-sm">
        Our Story In Pictures
      </p>
      <h2 className="mt-4 font-display text-3xl font-semibold text-maroon sm:text-4xl">
        Cherished Moments
      </h2>

      <OrnamentDivider className="my-8" />

      <p className="mx-auto max-w-md font-body text-base italic text-maroon-dark/80 sm:text-lg">
        Every picture tells a story, every moment becomes a memory.
      </p>

      <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-3 sm:gap-6">
        {ALL.map((photo, i) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setLightboxIndex(i)}
            className="group block w-full overflow-hidden rounded-2xl border border-gold bg-cream-dark/40"
            style={{ boxShadow: '0 0 0 5px var(--color-cream), 0 0 0 6px var(--color-gold)' }}
            aria-label="Open photograph"
          >
            <img
              src={thumbSrc(photo.id)}
              alt={photo.alt}
              className="aspect-[2/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-maroon-dark/95 p-4 backdrop-blur-sm animate-[lightbox-fade_0.25s_ease-out]"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 text-gold-light transition-colors hover:bg-cream/10 sm:right-6 sm:top-6"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              showPrev()
            }}
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/50 text-gold-light transition-colors hover:bg-cream/10 sm:left-6"
            aria-label="Previous photograph"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              showNext()
            }}
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/50 text-gold-light transition-colors hover:bg-cream/10 sm:right-6"
            aria-label="Next photograph"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <img
            key={current.id}
            src={fullSrc(current.id)}
            alt={current.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl animate-[lightbox-scale-in_0.3s_ease-out]"
          />

          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 font-display text-xs uppercase tracking-[0.3em] text-gold-light/80">
            {lightboxIndex + 1} / {ALL.length}
          </p>
        </div>
      )}
    </section>
  )
}
