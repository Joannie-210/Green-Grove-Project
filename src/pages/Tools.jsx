import React from 'react'
import Tool from '../assets/toolsbg.jpg'
import AOS from 'aos';
import { useEffect } from 'react';
import Trow from '../assets/Trowel.jpeg'
import Can from '../assets/Can.jpeg'
import Rake from '../assets/handrake.webp'
import Shear from '../assets/shear.jpg'
import Wand from '../assets/wand.jpg'
import Comp from '../assets/compact.jpg'


const Tools = () => {
  const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false,
      })
    }, [])


    const toolsData = [
  {
    name: 'Hand Trowel',
    image: Trow,
    description: 'Perfect for digging small holes, transplanting seedlings, and breaking up soil.',
  },
  {
    name: 'Pruning Shears',
    image: Shear,
    description: 'Used for trimming and shaping plants, cutting dead branches, and harvesting.',
  },
  {
    name: 'Garden Rake',
    image: Rake,
    description: 'Great for loosening compacted soil and aerating garden beds.',
  },
  {
    name: 'Watering Can',
    image: Can,
    description: 'Used to water plants evenly and gently, especially seedlings and pots.',
  },
  {
    name: 'Compact Bin',
    image: Comp,
    description: 'Great for processing manure, ensuring healthy soil and plant growth',
  },
  {
    name: 'Watering Wand',
    image: Wand,
    description: 'A light-weight tool for faster irriggation',
  },
];

  return (
    <>
    <div>
      <div className="relative bg-cover bg-center bg-fixed flex items-center justify-center rounded-bl-[60px] sm:rounded-bl-[100px] h-[60vh] sm:h-[80vh] lg:h-screen"
              style={{ backgroundImage: `url(${Tool})` }} data-aos="fade-up"> 
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/60 to-black/60 rounded-bl-[60px] sm:rounded-bl-[100px]"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Gardening Tools</h1>
        </div>
        
      </div>
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12 text-green-800">Top Picks for Every Gardener</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {toolsData.map((tool, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={tool.image}
                alt={tool.name}
                className="h-60 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-900 mb-2">{tool.name}</h3>
                <p className="text-gray-700">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section className="py-16 bg-green-50 rounded-xl shadow-inner">
        <h2 className="text-3xl font-semibold text-center mb-8 text-green-900">
          Watch: How to Use These Tools
        </h2>
        <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
          <iframe
            className="rounded-xl w-full h-full"
            src="https://www.youtube.com/embed/IeMJ_j5kI3Y"
            title="Gardening Tools Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
<button onClick={scrollToTop} className="fixed bottom-10 right-10 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300 w-[50px] h-[50px] flex items-center justify-center hover:cursor-pointer">
      <i className="bi bi-arrow-up text-xl"></i>
     </button>
    </div>
    
</>
  )
}

export default Tools
