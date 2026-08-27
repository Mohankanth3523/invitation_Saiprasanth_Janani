import { useEffect, useState } from 'react'
import Envelope from './components/Envelope'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import EventDetails from './components/EventDetails'
import Gallery from './components/Gallery'
import BlessingLine from './components/BlessingLine'
import Footer from './components/Footer'
import HangingDiya from './components/HangingDiya'
import FloatingControls from './components/FloatingControls'

export default function App() {
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [opened])

  return (
    <>
      {!opened && <Envelope onComplete={() => setOpened(true)} />}
      {opened && <FloatingControls />}

      <div
        className="floral-backdrop min-h-screen px-4 py-10 sm:px-10 sm:py-16"
        aria-hidden={!opened}
      >
        <div className="ornate-frame relative mx-auto max-w-4xl shadow-2xl shadow-maroon-dark/40">
          <HangingDiya className="pointer-events-none absolute -left-7 top-8 hidden w-7 sm:block md:-left-10 md:top-10 md:w-9" />
          <HangingDiya className="pointer-events-none absolute -right-7 top-8 hidden w-7 -scale-x-100 sm:block md:-right-10 md:top-10 md:w-9" />

          <div className="overflow-hidden rounded-[1.75rem] bg-cream">
            <Hero />
            <Countdown />
            <Gallery />
            <EventDetails />
            <BlessingLine />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
