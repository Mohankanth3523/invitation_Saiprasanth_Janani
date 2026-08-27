import { useRef, useState } from 'react'

export default function MusicPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [available, setAvailable] = useState(true)

  const toggle = () => {
    const audio = audioRef.current
    if (!audio || !available) return

    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setAvailable(false))
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/wedding-bgm.mp3"
        loop
        preload="none"
        onError={() => setAvailable(false)}
      />
      <button
        type="button"
        onClick={toggle}
        disabled={!available}
        aria-label={playing ? 'Pause background music' : 'Play background music'}
        aria-pressed={playing}
        title={available ? undefined : 'Background music not available'}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-maroon text-gold-light shadow-lg shadow-maroon-dark/30 transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className={playing ? 'animate-[spin_4s_linear_infinite]' : ''}
        >
          <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
          <path
            d="M10 8.5v7.2a2 2 0 1 1-1.2-1.83V7.8l6-1.3v6.7a2 2 0 1 1-1.2-1.83V8.2Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </>
  )
}
