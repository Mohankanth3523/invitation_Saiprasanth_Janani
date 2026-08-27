export default function CornerFlourish({ className = '' }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={`text-gold ${className}`} aria-hidden="true">
      <path d="M4 4C22 4 30 12 30 28C30 42 20 50 8 50" stroke="currentColor" strokeWidth="1.4" />
      <path d="M4 4C14 6 22 14 22 24" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <path
        d="M28 26C34 22 40 24 42 30C38 34 32 33 28 26Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M14 46C10 52 12 58 18 60C21 54 19 48 14 46Z"
        fill="currentColor"
        opacity="0.7"
      />
      <circle cx="30" cy="28" r="3" fill="currentColor" />
      <circle cx="9" cy="49" r="2.4" fill="currentColor" />
    </svg>
  )
}
