import { useState } from 'react'

export default function ShareButton() {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    const shareData = {
      title: 'Dr. V. Saiprasanth & Dr. N. Janani | Wedding Invitation',
      text: 'You are invited to celebrate the wedding of Dr. V. Saiprasanth & Dr. N. Janani on 13th September 2026.',
      url: window.location.href,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch {
        /* user cancelled the share sheet */
      }
      return
    }

    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(window.location.href)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch {
        /* clipboard unavailable */
      }
    }
  }

  return (
    <div className="relative">
      {copied && (
        <span className="absolute -top-9 right-0 whitespace-nowrap rounded-full bg-maroon-dark px-3 py-1 font-display text-[0.65rem] uppercase tracking-wide text-gold-light shadow-lg">
          Link copied
        </span>
      )}
      <button
        type="button"
        onClick={handleShare}
        aria-label="Share this invitation"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-gold bg-maroon text-gold-light shadow-lg shadow-maroon-dark/30 transition-transform hover:scale-105 sm:h-12 sm:w-12"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="18" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="6" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="18" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.4" />
          <path d="M8.2 10.7 15.8 6.8M8.2 13.3l7.6 3.9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  )
}
