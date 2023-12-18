import HeroImgBgMobile from '../assets/image-hero-mobile.png'
import HeroImgBgDesktop from '../assets/image-hero-desktop.png'
import Brands from './Brands'

import { useEffect, useState } from 'react'

function Hero() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(function () {
    const eventTypes = ['load', 'resize']

    function validateMediaQuery() {
      document.documentElement.clientWidth < 1024
        ? setIsMobile(true)
        : setIsMobile(false)
    }

    eventTypes.forEach((eventType) =>
      window.addEventListener(eventType, validateMediaQuery),
    )

    return () =>
      eventTypes.forEach((eventType) =>
        window.removeEventListener(eventType, validateMediaQuery),
      )
  }, [])

  return (
    <section id="hero">
      <div className="container mx-auto lg:flex lg:flex-row-reverse lg:items-center lg:justify-between lg:gap-x-32">
        <img
          className="w-full lg:h-full lg:w-4/12"
          src={isMobile ? HeroImgBgMobile : HeroImgBgDesktop}
          alt="Hero"
        />
        <div className="px-4 py-10 lg:relative lg:w-full lg:px-0 lg:py-32">
          <h1 className="lg:w-/4 mb-4 text-center text-4xl font-bold tracking-tighter text-black lg:mb-12 lg:text-start lg:text-8xl">
            Make <br className="hidden lg:inline" /> remote work
          </h1>
          <p className="lg mb-6 text-center font-medium leading-7 text-medium-grey lg:mb-12 lg:max-w-md lg:text-start lg:text-lg">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button
            type="button"
            className="mx-auto mb-10 block rounded-2xl bg-black px-6 py-3 font-bold text-white lg:mx-0 lg:mb-0 lg:px-8 lg:py-4 lg:text-lg"
          >
            Learn more
          </button>
          <div className="lg:absolute lg:bottom-0 lg:left-0 lg:w-full">
            <Brands />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
