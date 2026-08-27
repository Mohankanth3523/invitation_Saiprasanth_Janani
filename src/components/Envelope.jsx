import { useState } from 'react'

const OPEN_MS = 900
const EMERGE_MS = 700
const ZOOM_MS = 650

const SPARKLES = [
  { top: '6%', left: '14%', delay: '0s' },
  { top: '10%', left: '82%', delay: '0.18s' },
  { top: '78%', left: '20%', delay: '0.34s' },
  { top: '72%', left: '85%', delay: '0.12s' },
]

function Sparkle({ top, left, delay }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="absolute h-4 w-4 text-gold-light sm:h-5 sm:w-5"
      style={{ top, left, animation: `sparkle-pop 1.1s ease-out ${delay} 1 both` }}
      aria-hidden="true"
    >
      <path
        d="M12 1c.8 4.8 2.2 6.2 7 7-4.8.8-6.2 2.2-7 7-.8-4.8-2.2-6.2-7-7 4.8-.8 6.2-2.2 7-7Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Envelope({ onComplete }) {
  const [phase, setPhase] = useState('closed')

  const handleOpen = () => {
    if (phase !== 'closed') return
    setPhase('opening')
    setTimeout(() => setPhase('emerging'), OPEN_MS)
    setTimeout(() => setPhase('zooming'), OPEN_MS + EMERGE_MS)
    setTimeout(() => {
      setPhase('done')
      onComplete()
    }, OPEN_MS + EMERGE_MS + ZOOM_MS)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleOpen()
    }
  }

  const isClosed = phase === 'closed'
  const flapOpen = phase !== 'closed'
  const cardOut = phase === 'emerging' || phase === 'zooming' || phase === 'done'
  const zoomOut = phase === 'zooming' || phase === 'done'

  return (
    <div
      className="floral-backdrop fixed inset-0 z-[100] flex flex-col items-center justify-center px-6"
      style={{
        transform: zoomOut ? 'scale(1.2)' : 'scale(1)',
        opacity: zoomOut ? 0 : 1,
        transition: 'transform 0.7s ease, opacity 0.6s ease',
      }}
    >
      <div
        role="button"
        tabIndex={0}
        aria-label="Tap to open the wedding invitation"
        onClick={handleOpen}
        onKeyDown={handleKeyDown}
        className="cursor-pointer select-none outline-none"
      >
        <div
          className="relative mx-auto"
          style={{ width: 'min(84vw, 340px)', aspectRatio: '3 / 2', perspective: '1400px' }}
        >
          {/* envelope back / pocket */}
          <div
            className="absolute inset-0 rounded-md border border-gold"
            style={{ background: 'linear-gradient(155deg, #fbf6ec 0%, #efe2c8 100%)' }}
          />

          {/* decorative static folds */}
          <div
            className="absolute inset-0 rounded-md"
            style={{
              clipPath: 'polygon(0% 100%, 50% 42%, 100% 100%)',
              background: 'linear-gradient(0deg, rgba(122,12,30,0.08), rgba(122,12,30,0))',
            }}
          />
          <div
            className="absolute inset-0 rounded-md"
            style={{ clipPath: 'polygon(0% 0%, 46% 42%, 0% 100%)', background: 'rgba(122,12,30,0.05)' }}
          />
          <div
            className="absolute inset-0 rounded-md"
            style={{ clipPath: 'polygon(100% 0%, 54% 42%, 100% 100%)', background: 'rgba(122,12,30,0.05)' }}
          />

          {/* golden glow from inside */}
          <div
            className="absolute left-1/2 top-[6%] h-[55%] w-[72%] -translate-x-1/2 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(226,199,102,0.85), rgba(226,199,102,0) 70%)',
              filter: 'blur(16px)',
              opacity: flapOpen ? 1 : 0,
              transition: 'opacity 1s ease',
            }}
          />

          {/* sparkles */}
          {cardOut && SPARKLES.map((s, i) => <Sparkle key={i} {...s} />)}

          {/* the invitation card emerging from the envelope */}
          <div
            className="absolute left-1/2 top-[8%] flex h-[80%] w-[80%] -translate-x-1/2 flex-col items-center justify-center gap-2 rounded-sm border border-gold bg-cream text-center shadow-2xl"
            style={{
              zIndex: 5,
              transform: cardOut ? 'translateY(-34%) scale(1.03)' : 'translateY(10%) scale(0.92)',
              opacity: cardOut ? 1 : 0,
              transition: 'transform 0.75s cubic-bezier(.22,1,.36,1), opacity 0.5s ease',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 28 28" fill="none" className="text-gold">
              <path
                d="M14 2c2.5 3.5 2.5 7-0 10-2.5-3-2.5-6.5 0-10Z M14 26c2.5-3.5 2.5-7 0-10-2.5 3-2.5 6.5 0 10Z M2 14c3.5-2.5 7-2.5 10 0-3 2.5-6.5 2.5-10 0Z M26 14c-3.5 2.5-7 2.5-10 0 3-2.5 6.5-2.5 10 0Z"
                fill="currentColor"
              />
              <circle cx="14" cy="14" r="3" fill="currentColor" />
            </svg>
            <p className="font-script text-sm italic text-maroon-dark/80 sm:text-base">
              Saiprasanth &amp; Janani
            </p>
          </div>

          {/* animated top flap */}
          <div
            className="absolute inset-x-0 top-0"
            style={{
              height: '58%',
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              background: 'linear-gradient(160deg, #f3e6c8 0%, #d9c48f 100%)',
              transformOrigin: '50% 0%',
              transformStyle: 'preserve-3d',
              transform: flapOpen ? 'rotateX(-160deg)' : 'rotateX(0deg)',
              transition: 'transform 0.9s cubic-bezier(.45,0,.2,1)',
              zIndex: 8,
            }}
          >
            <div className="absolute bottom-[6%] left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-gold bg-maroon shadow sm:h-9 sm:w-9">
              <svg width="14" height="14" viewBox="0 0 28 28" fill="none" className="text-gold-light">
                <path
                  d="M14 2c2.5 3.5 2.5 7-0 10-2.5-3-2.5-6.5 0-10Z M14 26c2.5-3.5 2.5-7 0-10-2.5 3-2.5 6.5 0 10Z M2 14c3.5-2.5 7-2.5 10 0-3 2.5-6.5 2.5-10 0Z M26 14c-3.5 2.5-7 2.5-10 0 3-2.5 6.5-2.5 10 0Z"
                  fill="currentColor"
                />
                <circle cx="14" cy="14" r="3" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* names shown on the closed envelope face */}
          <div
            className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-[8%] text-center"
            style={{ opacity: isClosed ? 1 : 0, transition: 'opacity 0.35s ease' }}
          >
            <p className="font-display text-sm font-semibold text-maroon sm:text-base">
              Dr. V. Saiprasanth
            </p>
            <p className="font-script text-sm italic text-gold">&amp;</p>
            <p className="font-display text-sm font-semibold text-maroon sm:text-base">
              Dr. N. Janani
            </p>
          </div>
        </div>

        <p
          className="mt-8 text-center font-display text-xs uppercase tracking-[0.4em] text-gold-light sm:text-sm"
          style={{
            opacity: isClosed ? 1 : 0,
            animation: isClosed ? 'tap-pulse 2s ease-in-out infinite' : 'none',
            transition: 'opacity 0.35s ease',
          }}
        >
          Tap to Open
        </p>
      </div>
    </div>
  )
}
