export default function HangingDiya({ className = '' }) {
  return (
    <svg viewBox="0 0 40 92" className={`text-gold ${className}`} aria-hidden="true">
      <line x1="20" y1="0" x2="20" y2="28" stroke="currentColor" strokeWidth="1.25" strokeDasharray="1 4" />

      <path
        d="M20 17c3.2 3.6 3.2 8.4 0 12.5-3.2-4.1-3.2-8.9 0-12.5Z"
        fill="currentColor"
        opacity="0.85"
      />

      <circle cx="20" cy="30" r="2" fill="currentColor" />

      <path
        d="M5 33C5 33 12 47 20 47C28 47 35 33 35 33C35 42.5 28.5 51 20 51C11.5 51 5 42.5 5 33Z"
        fill="currentColor"
      />
      <path
        d="M6.5 33.5C9 41 14 46.5 20 46.5C26 46.5 31 41 33.5 33.5"
        stroke="var(--color-cream)"
        strokeWidth="1"
        opacity="0.5"
        fill="none"
      />

      <path d="M13 51C12 56 13 60 15.5 62.5" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M20 51.5C20 57 20 61 20 64" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M27 51C28 56 27 60 24.5 62.5" stroke="currentColor" strokeWidth="1" fill="none" />

      <circle cx="15.5" cy="64" r="1.8" fill="currentColor" />
      <circle cx="20" cy="66.5" r="1.8" fill="currentColor" />
      <circle cx="24.5" cy="64" r="1.8" fill="currentColor" />
    </svg>
  )
}
