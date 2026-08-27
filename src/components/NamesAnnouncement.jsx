export default function NamesAnnouncement() {
  return (
    <div className="mt-14 flex flex-col items-center text-center sm:mt-20">
      <p className="font-display text-xs uppercase tracking-[0.3em] text-maroon/70 sm:text-sm">
        You Are Invited To Celebrate The Wedding Of
      </p>

      <div className="mt-7 flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 sm:mt-9">
        <h2 className="font-display text-3xl font-bold leading-tight text-maroon sm:text-5xl">
          Dr. V. Saiprasanth
        </h2>
        <span className="font-display text-xs uppercase tracking-[0.2em] text-maroon/60 sm:text-sm">
          MBBS.
        </span>
      </div>

      <div className="my-6 flex items-center gap-4 sm:my-8">
        <span className="h-px w-10 bg-gold sm:w-16" />
        <span className="font-script text-xl italic text-gold sm:text-2xl">With</span>
        <span className="h-px w-10 bg-gold sm:w-16" />
      </div>

      <div className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1">
        <h2 className="font-display text-3xl font-bold leading-tight text-maroon sm:text-5xl">
          Dr. N. Janani
        </h2>
        <span className="font-display text-xs uppercase tracking-[0.2em] text-maroon/60 sm:text-sm">
          MBBS.
        </span>
      </div>
    </div>
  )
}
