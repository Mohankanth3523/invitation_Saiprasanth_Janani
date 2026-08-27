export default function OrnamentDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-12 bg-gold sm:w-20" />
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-gold">
        <path
          d="M14 2c2.5 3.5 2.5 7-0 10-2.5-3-2.5-6.5 0-10Z M14 26c2.5-3.5 2.5-7 0-10-2.5 3-2.5 6.5 0 10Z M2 14c3.5-2.5 7-2.5 10 0-3 2.5-6.5 2.5-10 0Z M26 14c-3.5 2.5-7 2.5-10 0 3-2.5 6.5-2.5 10 0Z"
          fill="currentColor"
        />
        <circle cx="14" cy="14" r="3" fill="currentColor" />
      </svg>
      <span className="h-px w-12 bg-gold sm:w-20" />
    </div>
  )
}
