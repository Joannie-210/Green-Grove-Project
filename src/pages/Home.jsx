import React from 'react'
import HeroSection from '../components/HeroSection'
import {Quote} from 'lucide-react'
import AOS from 'aos'
import '@fontsource/jost';
import {
  BookOpen as BookOpenIcon,
  Globe as GlobeIcon,
  Hammer as HammerIcon,
  Bolt as BoltIcon,
  Users as UsersIcon,
} from 'lucide-react';


const Home = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
   <>
      <HeroSection />
      <div className="w-full py-5 px-6 sm:px-10 lg:px-14 gap-8 flex flex-col lg:flex-row justify-evenly items-center">
  <div
    className="flex w-full lg:w-1/2 flex-col h-auto pt-10 lg:py-10 bg-white items-center lg:items-start justify-center"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <h1
      className="text-2xl text-center w-full sm:text-3xl md:text-4xl font-bold mb-4 lg:text-left"
      data-aos="fade-down"
      data-aos-duration="800"
    >
      Who We Are
    </h1>
    <p
      className="w-full max-w-xl px-2 text-base sm:text-lg text-gray-700 text-center sm:text-left"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      Green Groves is a user-friendly website dedicated to empowering small-scale gardening enthusiasts with practical knowledge and resources. It offers detailed guides, tool demonstrations, and product recommendations tailored for balcony, terrace, and home gardens. 
    
       </p>
         <br/>
      <p className="w-full max-w-xl px-2 text-base sm:text-lg text-gray-700 text-center sm:text-left">The platform aims to make gardening accessible and enjoyable by providing real-life tips, educational videos, and expert support.</p>
   
    <div className="mt-6 sm:mt-8" data-aos="zoom-in" data-aos-duration="1000">
      <a
        href="/about"
        className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
      >
        Learn More
      </a>
    </div>
  </div>

  <div
    className="mt-10 lg:mt-0 w-full max-w-md h-auto px-6 py-10 flex flex-col items-center justify-center"
    data-aos="fade-right"
    data-aos-duration="1000"
  >

    <Quote className="mb-5 flex justify-start items-start w-full h-11 text-green-500" />
    <hr className="w-2/3 h-[2px] mb-4 border-none bg-gray-300" />
    <h2 className='my-5 text-2xl w-full font-semibold text-center font-Jost'>"We believe that every garden, no matter how small, can be a source of joy and nourishment."
    </h2>
  </div>
 

</div>
  <section className="w-full bg-gradient-to-br  bg-green-50 py-20 px-6 md:px-16 lg:px-24">
  <h2
    className="text-4xl md:text-5xl font-bold text-center text-black mb-16"
    data-aos="fade-down"
    data-aos-duration="800"
  >
    Our Goals
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {[
      {
        title: "Learn Step-by-Step",
        desc: "Master gardening through structured, bite-sized lessons designed for beginners and beyond.",
        icon: "📘",
        delay: 100,
      },
      {
        title: "Real-Life Application",
        desc: "Apply techniques instantly with guides tailored to balconies, terraces, and small spaces.",
        icon: "🌿",
        delay: 200,
      },
      {
        title: "Hands-On Projects",
        desc: "Grow through action — complete DIY garden projects that build confidence and creativity.",
        icon: "🧤",
        delay: 300,
      },
      {
        title: "Enhanced Skill Building",
        desc: "Go beyond basics with advanced tips and continuous learning to deepen your gardening know-how.",
        icon: "📈",
        delay: 400,
      },
      {
        title: "Access to Tools & Tips",
        desc: "Discover handpicked tools, product reviews, and expert hacks to simplify your journey.",
        icon: "🛠️",
        delay: 500,
      },
      {
        title: "Mentorship & Support",
        desc: "Join a nurturing community with mentors ready to guide and encourage you along the way.",
        icon: "🤝",
        delay: 600,
      },
    ].map(({ title, desc, icon, delay }, idx) => (
      <div
        key={idx}
        className=" border-t-6 border-green-600 backdrop-blur-md bg-white  rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        data-aos="zoom-in"
        data-aos-delay={delay}
        data-aos-duration="1000"
      >
        <div className="bg-green-100 text-green-700 text-2xl w-12 h-12 flex items-center justify-center rounded-full mb-4 shadow-inner">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">{title}</h3>
        <p className="text-gray-700 text-sm leading-relaxed">{desc}</p>
      </div>
    ))}
  </div>
</section>
<section className="w-full bg-white py-20 px-6 md:px-16 lg:px-24">
  <div className="flex flex-col items-center mb-14" data-aos="fade-down" data-aos-duration="800">
    <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 text-center">
      Gardening Techniques & Tips
    </h2>
    <p className="text-gray-600 text-center max-w-2xl">
      Get a quick glance at practical guides, handy tools, and simple hacks to upgrade your garden game.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
    {[
      {
        title: "How to Start a Balcony Herb Garden",
        image: "/images/articles/herb-garden.jpg",
        tip: "Start with 3 easy herbs: basil, mint, and parsley.",
      },
      {
        title: "Top 5 Watering Hacks for Potted Plants",
        image: "/images/articles/watering-hacks.jpg",
        tip: "Use ice cubes to slowly hydrate delicate plants.",
      },
      {
        title: "Composting Basics for Small Spaces",
        image: "/images/articles/composting.jpg",
        tip: "Add brown waste (dry leaves) to balance kitchen scraps.",
      },
    ].map(({ title, image, tip }, idx) => (
      <div
        key={idx}
        className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
        data-aos="zoom-in"
        data-aos-delay={idx * 100}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center px-4 text-white text-sm text-center">
          {tip}
        </div>
        <div className="bg-white p-4">
          <h3 className="text-lg font-semibold text-green-800">{title}</h3>
        </div>
      </div>
    ))}
  </div>

  <div className="text-center" data-aos="fade-up" data-aos-duration="800">
    <a
      href="/techniques"
      className="inline-block px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors font-medium"
    >
      Explore Techniques →
    </a>
  </div>
</section>


    </>
  )
}

export default Home
