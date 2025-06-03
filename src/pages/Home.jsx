import React from 'react'
import HeroSection from '../components/HeroSection'

const Home = () => {
  return (
    <>
    <div className="bg-gray-100 w-full min-h-screen">
      
      <HeroSection/>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Welcome to the Home Page</h2>
        <p className="text-gray-700">
          This is a simple home page with a hero section and some content.
        </p>
        </div>
        </div>
    </>
  )
}

export default Home
