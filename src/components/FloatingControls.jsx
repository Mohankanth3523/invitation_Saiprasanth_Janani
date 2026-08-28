import MusicPlayer from './MusicPlayer'
import ShareButton from './ShareButton'

export default function FloatingControls() {
  return (
    <div className="fixed bottom-3 right-3 z-40 flex flex-col gap-2.5 sm:bottom-8 sm:right-8 sm:gap-3">
      <MusicPlayer />
      <ShareButton />
    </div>
  )
}
