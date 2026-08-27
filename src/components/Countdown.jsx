import { useEffect, useState } from 'react'
import OrnamentDivider from './OrnamentDivider'

const WEDDING_DATE = new Date('2026-09-13T07:30:00+05:30').getTime()

function getTimeLeft() {
  const diff = Math.max(WEDDING_DATE - Date.now(), 0)
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const reached = timeLeft.days + timeLeft.hours + timeLeft.minutes + timeLeft.seconds <= 0

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <section className="bg-cream px-6 py-16 text-center sm:py-20">
      <p className="font-display text-xs uppercase tracking-[0.35em] text-gold sm:text-sm">
        Counting Down To
      </p>
      <h2 className="mt-4 font-display text-2xl font-semibold text-maroon sm:text-3xl">
        Our Wedding Day
      </h2>

      <OrnamentDivider className="my-8" />

      {reached ? (
        <p className="font-script text-2xl italic text-maroon sm:text-3xl">
          The celebration has begun!
        </p>
      ) : (
        <div className="mx-auto flex max-w-lg items-stretch justify-center gap-3 sm:gap-5">
          {units.map((u) => (
            <div
              key={u.label}
              className="flex flex-1 flex-col items-center rounded-xl border border-gold/50 bg-white/50 py-4 sm:py-6"
              style={{ boxShadow: '0 0 0 4px var(--color-cream), 0 0 0 5px rgba(201,162,39,0.35)' }}
            >
              <span className="font-display text-3xl font-bold text-maroon tabular-nums sm:text-4xl">
                {String(u.value).padStart(2, '0')}
              </span>
              <span className="mt-1 font-display text-[0.6rem] uppercase tracking-[0.2em] text-maroon/60 sm:text-xs">
                {u.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
