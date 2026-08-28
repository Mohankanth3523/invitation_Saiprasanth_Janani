import OrnamentDivider from './OrnamentDivider'

export default function Footer() {
  return (
    <footer className="bg-maroon-dark px-6 py-16 text-center text-cream">
      <OrnamentDivider className="mb-8" />

      <p className="mx-auto max-w-lg font-body text-lg italic text-cream/90">
        Your presence is the greatest gift we could ask for. We look forward to celebrating
        this joyous occasion with you.
      </p>

      <p className="mt-6 font-display text-sm uppercase tracking-[0.3em] text-gold-light">
        With love &amp; gratitude
      </p>

      <p className="mt-2 font-script text-2xl text-cream">
        The families of
        <br />
        Saiprasanth &amp; Janani
      </p>

      <div className="mx-auto mt-10 h-px w-24 bg-gold/40" />

      <p className="mt-6 font-body text-sm text-cream/70">
        Digital Invitation by{' '}
        <a
          href="https://wa.me/918110020794?text=Hi%20KStudio%20Vx%2C%20I%20saw%20your%20digital%20wedding%20invitation%20and%20would%20love%20to%20know%20more%21"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 font-display font-semibold text-gold-light underline decoration-gold/50 underline-offset-4 transition-colors hover:text-cream"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12.02 22C17.54 22 22 17.52 22 12S17.54 2 12.02 2Zm0 18.15c-1.62 0-3.13-.47-4.4-1.28l-.32-.2-3 .79.8-2.92-.2-.3a8.15 8.15 0 0 1-1.27-4.24c0-4.5 3.67-8.17 8.4-8.17 4.72 0 8.4 3.67 8.4 8.17 0 4.5-3.68 8.15-8.41 8.15Zm4.6-6.1c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.13-.17.25-.65.8-.8.97-.15.17-.29.19-.54.06-.25-.12-1.06-.39-2.02-1.24-.75-.66-1.25-1.48-1.4-1.73-.14-.25-.02-.38.11-.51.12-.12.25-.3.37-.45.12-.15.16-.25.24-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.83-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.23.9 2.42 1.02 2.58.12.17 1.77 2.7 4.3 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.23-.16-.48-.28Z" />
          </svg>
          KStudio Vx
        </a>
      </p>
    </footer>
  )
}
