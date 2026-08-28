import OrnamentDivider from './OrnamentDivider'

const calendarIcon = (
  <path
    d="M7 3v3M17 3v3M4 9h16M5 6h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
)

const clockIcon = (
  <>
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </>
)

const pinIcon = (
  <>
    <path
      d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.5" />
  </>
)

const receptionDetails = [
  { label: 'Date', value: '12th September 2026', icon: calendarIcon },
  { label: 'Time', value: '6:00 PM to 9:00 PM', icon: clockIcon },
]

const ceremonyDetails = [
  { label: 'Date', value: '13th September 2026', icon: calendarIcon },
  { label: 'Time', value: '7:30 AM to 9:00 AM', icon: clockIcon },
  { label: 'At', value: 'Nandhini Mahal Thirumana Mandapam', icon: pinIcon },
]

function DetailsRow({ items }) {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center divide-y divide-gold/30 sm:flex-row sm:items-stretch sm:justify-center sm:divide-x sm:divide-y-0">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex w-full items-center justify-center gap-3 px-8 py-5 sm:w-auto"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="shrink-0 text-maroon">
            {item.icon}
          </svg>
          <p className="font-body text-base text-maroon-dark sm:text-lg">
            <span className="font-display text-sm uppercase tracking-[0.15em] text-maroon/70">
              {item.label}:
            </span>{' '}
            {item.value}
          </p>
        </div>
      ))}
    </div>
  )
}

export default function EventDetails() {
  return (
    <section className="bg-cream px-6 py-20 text-center sm:py-28">
      <p className="font-display text-xs uppercase tracking-[0.35em] text-gold sm:text-sm">
        Save the Date
      </p>
      <h2 className="mt-4 font-display text-3xl font-semibold text-maroon sm:text-4xl">
        Wedding Events
      </h2>

      <OrnamentDivider className="my-8" />

      <h3 className="font-display text-lg font-semibold uppercase tracking-[0.25em] text-gold sm:text-xl">
        Reception
      </h3>
      <div className="mt-6">
        <DetailsRow items={receptionDetails} />
      </div>

      <div className="mx-auto my-14 h-px w-24 bg-gold/40" />

      <h3 className="font-display text-lg font-semibold uppercase tracking-[0.25em] text-gold sm:text-xl">
        Wedding Ceremony
      </h3>
      <div className="mt-6">
        <DetailsRow items={ceremonyDetails} />
      </div>

      <div className="mx-auto mt-14 flex max-w-md flex-col items-center">
        <p className="font-display text-xl font-bold text-maroon sm:text-2xl">
          Nandhini Mahal Thirumana Mandapam
        </p>
        <p className="mt-2 font-body text-base text-maroon-dark/80 sm:text-lg">
          Tirupattur &ndash; Vaniyambadi Main Road, Palnankuppam, Tirupattur.
        </p>
      </div>

      <a
        href="https://www.google.com/maps/search/?api=1&query=Nandhini+Mahal+Thirumana+Mandapam%2C+Tirupattur+Vaniyambadi+Main+Road%2C+Palnankuppam%2C+Tirupattur"
        target="_blank"
        rel="noreferrer"
        className="mt-10 inline-block rounded-full border-2 border-maroon px-8 py-3 font-display text-sm uppercase tracking-[0.2em] text-maroon transition-colors hover:bg-maroon hover:text-cream"
      >
        Get Directions
      </a>
    </section>
  )
}
