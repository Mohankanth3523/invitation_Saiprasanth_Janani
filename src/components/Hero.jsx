import OrnamentDivider from './OrnamentDivider'
import Thoranam from './Thoranam'
import CornerFlourish from './CornerFlourish'
import CoupleIllustration from './CoupleIllustration'
import NamesAnnouncement from './NamesAnnouncement'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-cream px-6 pb-20 pt-10 text-center sm:pt-14">
      <div className="pointer-events-none absolute inset-3 rounded-[2rem] border-2 border-gold/60 sm:inset-6" />
      <div className="pointer-events-none absolute inset-5 rounded-[1.75rem] border border-gold/30 sm:inset-8" />

      <Thoranam className="absolute left-1/2 top-6 w-[85%] max-w-lg -translate-x-1/2 sm:top-9" />

      <CornerFlourish className="pointer-events-none absolute left-4 top-4 h-14 w-14 sm:left-7 sm:top-7 sm:h-20 sm:w-20" />
      <CornerFlourish className="pointer-events-none absolute right-4 top-4 h-14 w-14 -scale-x-100 sm:right-7 sm:top-7 sm:h-20 sm:w-20" />

      <div className="relative z-10 mt-20 flex max-w-2xl flex-col items-center sm:mt-24">
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" className="text-maroon">
          <circle cx="23" cy="23" r="21" stroke="currentColor" strokeWidth="1.5" />
          <text x="23" y="30" textAnchor="middle" fontSize="22" fill="currentColor" fontFamily="serif">
            ॐ
          </text>
        </svg>

        <p className="mt-6 font-display text-sm uppercase tracking-[0.35em] text-maroon/80">
          With the blessings of our families
        </p>

        <OrnamentDivider className="my-8" />

        <h1 className="font-display text-lg font-medium uppercase tracking-[0.3em] text-gold sm:text-xl">
          Together with our families
        </h1>

        <p className="mt-6 max-w-md font-body text-lg italic text-maroon-dark/90 sm:text-xl">
          we joyfully invite you to celebrate the union of
        </p>

        <div className="mt-12 flex flex-col items-center gap-6 sm:mt-16 sm:flex-row sm:justify-center sm:gap-8">
          <p className="max-w-[10rem] font-script text-xl italic leading-snug text-maroon/80 sm:text-right sm:text-2xl">
            Two Hearts,
            <br />
            One Promise
          </p>

          <CoupleIllustration />

          <p className="max-w-[10rem] font-script text-xl italic leading-snug text-maroon/80 sm:text-left sm:text-2xl">
            A Beautiful
            <br />
            Beginning
          </p>
        </div>

        <NamesAnnouncement />
      </div>
    </section>
  )
}
