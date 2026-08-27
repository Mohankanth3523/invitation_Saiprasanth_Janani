import MusicPlayer from './MusicPlayer'
import ShareButton from './ShareButton'

export default function FloatingControls() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 sm:bottom-8 sm:right-8">
      <MusicPlayer />
      <ShareButton />
    </div>
  )
}
