import { useState } from 'react'

export default function CoupleIllustration() {
  const [errored, setErrored] = useState(false)

  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -inset-5 rounded-full opacity-70 sm:-inset-6"
        style={{
          background: 'radial-gradient(circle, rgba(201,162,39,0.35), transparent 70%)',
          filter: 'blur(14px)',
        }}
        aria-hidden="true"
      />

      <div
        className="relative aspect-[4/5] w-64 shrink-0 overflow-hidden rounded-t-[9999px] rounded-b-2xl border border-gold bg-cream-dark/70 shadow-xl shadow-maroon-dark/20 sm:w-72"
        style={{
          boxShadow: '0 0 0 5px var(--color-cream), 0 0 0 6px var(--color-gold)',
        }}
      >
        {!errored ? (
          <img
            src="/gallery/thumb/gallery-05.jpg"
            alt="Dr. V. Saiprasanth and Dr. N. Janani"
            className="h-full w-full object-cover"
            onError={() => setErrored(true)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center text-maroon/50">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 12.5c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4Z M4.5 20c1-3.6 4-5.5 7.5-5.5s6.5 1.9 7.5 5.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="font-display text-[0.6rem] uppercase tracking-[0.2em]">
              Your illustration here
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
