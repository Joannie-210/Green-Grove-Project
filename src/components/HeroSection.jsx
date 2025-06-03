import React from 'react'
import Background from '../assets/back.jpeg'

const HeroSection = () => {
  return (
    <div
      className="relative w-full max-w-10xl bg-cover bg-no-repeat bg-fixed h-screen flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',  // optional but nice for hero sections
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold">Welcome</h1>
      </div>
    </div>
  )
}

export default HeroSection
