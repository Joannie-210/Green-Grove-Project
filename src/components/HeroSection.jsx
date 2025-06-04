import React from 'react'
import Background from '../assets/back.jpeg'
import Button from './Button'
import { ArrowUpRight } from 'lucide-react'
import Back from '../assets/back.jpeg'

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-screen bg-fixed bg-center bg-no-repeat bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${Back})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/70 to-black/70 bg-opacity-60"></div>

      {/* Content */}
      <div className="relative mt-14 z-10 px-5 sm:px-10 lg:px-2 max-w-7xl lg:w-350 text-white text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
          Where Every <span className="text-green-400">Leaf</span> is a Lesson
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-white max-w-2xl mb-8">
          At <span className="text-green-400">Green Grove</span>, we make gardening simple, soulful, and satisfying — with expert tips, step-by-step guides, and a thriving community of green thumbs. Whether you're sprouting your first seed or nurturing a blooming haven, your garden journey starts here.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            text="Get Started"
            variant="primary"
            onClick={() => window.location.href = '/about'}
          />
          <Button
            variant="secondary"
            icon={ArrowUpRight}
            className="text-black"
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
