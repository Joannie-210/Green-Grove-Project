import React from 'react'
import HeroSection from '../components/HeroSection'
import {Link} from 'react-router-dom'
import {Quote} from 'lucide-react'
import AOS from 'aos'
import '@fontsource/jost';
import { useState, useEffect } from 'react';
import Herb from '../assets/balconyherb.jpeg';
import Compost from '../assets/compost.jpg';
import Water from '../assets/water.webp';
import Hand from '../assets/handrake.webp';
import Compact from '../assets/compact.jpg';
import Wand from '../assets/wand.jpg';
import Sf from '../assets/sf.jpg';
import Seeds from '../assets/seeds.jpg';
import Pest from '../assets/pest.jpg';
import Toys from '../assets/gardentoys.jpg'
import Hang from '../assets/hang.jpeg';
import Stand from '../assets/stand.jpeg';
import Brook from '../assets/brook.jpeg';
import Trow from '../assets/Trowel.jpeg';
import Mark from '../assets/Mark.jpeg';
import Pack from '../assets/Pack.jpeg';
import Comp from '../assets/comp.jpeg';
import Can from '../assets/Can.jpeg';
import Idea from '../assets/idea.jpeg';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}




const essentials = {
  Soil: {
    title: "Soil & Fertilizers",
    desc: "Discover the right soil types and fertilizers to boost your garden's health, whether you’re planting herbs on a balcony or veggies in a backyard bed.",
    icon: Sf, 
    link: "/essentials/soil",
  },
  Pesticides: {
    title: "Pesticides",
    desc: "Learn how to protect your plants naturally or chemically from pests while maintaining a healthy garden ecosystem.",
    icon: Pest,
    link: "/essentials/pesticides",
  },
  Seeds: {
    title: "Seeds",
    desc: "Get the best seed recommendations for your space—flowers, vegetables, or herbs suited for small-scale gardens.",
    icon: Seeds,
    link: "/essentials/seeds",
  },
};

const pots = [
  {
    name: 'Terracotta Pots',
    image: 'https://m.media-amazon.com/images/I/71vAWzQi3xL.jpg',
    tip: 'Breathable material, great for herbs and succulents. Dries out quicker—ideal for plants that hate soggy soil.',
  },
  {
    name: 'Plastic Pots',
    image: 'https://cdn11.bigcommerce.com/s-0ced8/images/stencil/1280x1280/products/1183/1988/IMG_6182__49176.1629159107.jpg?c=2',
    tip: 'Lightweight and affordable. Retains moisture longer—perfect for tropical plants or beginners.',
  },
  {
    name: 'Fabric Grow Bags',
    image: 'data:image/jpeg;base64,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',
    tip: 'Air-prunes roots and improves drainage. Great for root veggies like carrots and potatoes.',
  },
  {
    name: 'Ceramic Glazed Pots',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1VGa5Jga28uhHIDqdMgVfjnqABVCWaM58cQ&s',
    tip: 'Beautiful and durable. Heavier and more decorative—great for indoor plants.',
  },
];

const accessories = [
  {
    name: 'Miniature Garden Toys',
    image: Toys,
    desc: 'Add charm to your pots with cute figurines and fairy garden sets.',
  },
 
  {
    name: 'Hanging Ornaments',
    image: Hang,
    desc: 'Wind chimes, lanterns, and bells to elevate your garden ambiance.',
  },
  {
    name: 'Plant Stands & Hooks',
    image: Stand,
    desc: 'Maximize vertical space with aesthetic stands and wall hooks.',
  },
  {
    name: 'Water Features',
    image: Brook,
    desc: 'Small fountains or recycled bottle waterfalls add serenity.',
  },
];

const allProducts = [
  {
    id: 1,
    category: 'Tools',
    name: 'Hand Trowel',
    image: Trow,
    desc: 'Ergonomic and durable for everyday gardening.',
    link: '#',
  },
  {
    id: 2,
    category: 'Accessories',
    name: 'Pebble Pack',
    image: Pack,
    desc: 'Polished decorative pebbles for pot surfaces.',
    link: '#',
  },
  {
    id: 3,
    category: 'Books',
    name: 'Balcony Gardening Guide',
    image: Idea,
    desc: 'Learn how to turn your balcony into a green haven.',
    link: '#',
  },
  {
    id: 4,
    category: 'Tools',
    name: 'Watering Can',
    image: Can,
    desc: 'Stylish and spill-proof for easy watering.',
    link: '#',
  },
  {
    id: 5,
    category: 'Accessories',
    name: 'Plant Markers',
    image: Mark,
    desc: 'Organize your plants with elegant labels.',
    link: '#',
  },
  {
    id: 6,
    category: 'Books',
    name: 'Home Composting 101',
    image: Comp,
    desc: 'Turn waste into nutrition for your garden.',
    link: '#',
  },
];
 
const Home = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

   const [activeTab, setActiveTab] = useState("Soil");

  const current = essentials[activeTab];

  const [filter, setFilter] = useState('All');

  const filteredProducts = filter === 'All'
    ? allProducts
    : allProducts.filter(p => p.category === filter);


  return (
   <>
    
<HeroSection />

<section className="w-full bg-white">
  <div className="w-full bg-white py-5 px-6 sm:px-10 lg:px-14 lg:h-130 gap-8 flex flex-col lg:flex-row justify-evenly items-center max-w-7xl mx-auto">
    <div
    className="flex w-full lg:w-1/2 flex-col h-auto pt-10 lg:py-10 items-center lg:items-start justify-center"
    
  >
    <h1
      className="text-2xl text-center w-full sm:text-3xl mb-6 md:text-4xl lg:text-5xl font-bold mb-4 lg:text-left"
      
    >
      Who We Are
    </h1>
    <p
      className="w-full max-w-xl px-2 text-base sm:text-lg text-gray-700 text-center sm:text-left"
    
    >
      Green Groves is a user-friendly website dedicated to empowering small-scale gardening enthusiasts with practical knowledge and resources. It offers detailed guides, tool demonstrations, and product recommendations tailored for balcony, terrace, and home gardens. 
    
       </p>
         <br/>
      <p className="w-full max-w-xl px-2 text-base sm:text-lg text-gray-700 text-center sm:text-left">The platform aims to make gardening accessible and enjoyable by providing real-life tips, educational videos, and expert support.</p>
   
    <div className="mt-6 sm:mt-8" >
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
  
  >

    <Quote className="mb-5 flex justify-start items-start w-full h-11 text-green-500" />
    <hr className="w-2/3 h-[2px] mb-4 border-none bg-gray-300" />
    <h2 className='my-5 text-2xl w-full font-semibold text-center font-Jost'>"We believe that every garden, no matter how small, can be a source of joy and nourishment."
    </h2>
  </div>
  </div>
</section>


<section className="w-full bg-gray-50 bg-gradient-to-br py-20">
  <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
    <h2
    className="text-4xl md:text-5xl text-green-700 font-bold text-center  mb-16"
    
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
        className=" border-t-6 border-green-50 backdrop-blur-md bg-white  rounded-tr-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
     
      >
        <div className="bg-green-100 text-green-700 text-2xl w-12 h-12 flex items-center justify-center rounded-full mb-4 shadow-inner">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">{title}</h3>
        <p className="text-gray-700 text-sm leading-relaxed">{desc}</p>
      </div>
    ))}
  </div>
  </div>
</section>


<section className="w-full bg-green-50 py-20">
  <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
    <div className="flex flex-col items-center mb-14"  >
    <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-4 text-center">
      Gardening Tips
    </h2>
    <p className="text-gray-600 text-center max-w-2xl">
      Get a quick glance at practical guides, handy tools, and simple hacks to upgrade your garden game.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
    {[
      {
        title: "How to Start a Balcony Herb Garden",
        image:  Herb,
        tip: "Start with 3 easy herbs: basil, mint, and parsley.",
      },
      {
        title: "Top 5 Watering Hacks for Potted Plants",
        image: Water,
        tip: "Use ice cubes to slowly hydrate delicate plants.",
      },
      {
        title: "Composting Basics for Small Spaces",
       image: Compost,
        tip: "Add brown waste (dry leaves) to balance kitchen scraps.",
      },
    ].map(({ title, image, tip }, idx) => (
      <div
        key={idx}
        className="group bg-white relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
       
      >
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center px-4 text-white text-lg text-center">
          {tip}
        </div>
        <div className="bg-white p-4">
          <h3 className="text-lg font-semibold text-green-800">{title}</h3>
        </div>
      </div>
    ))}
  </div>

  <div className="text-center" >
    <Link
      to ="/tips"
      className="inline-block px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors font-medium"
    >
      Explore Techniques →
    </Link>
  </div>
  </div>
</section>


<section className="w-full bg-gray-50 py-20">
  <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
   <div className="text-center mb-14" >
    <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Featured Gardening Tools</h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Handpicked tools to simplify your gardening journey—tested, trusted, and beginner-friendly.
    </p>
  </div>

 
  <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {[
      {
        name: "Hand Rake",
        desc: "Perfect for loosening soil and removing debris in tight spots.",
        image: Hand,
        video: "https://www.youtube.com/embed/mAen252WpvY?si=ApdgB3T9a3YImdMQ",
      },
      {
        name: "Watering Wand",
        desc: "Easily water hanging plants and far corners without hassle.",
        image: Wand,
        video: "https://www.youtube.com/embed/YSWSG02n4bc?si=y0Yt0B6zQsEGNW1a",
      },
      {
        name: "Compact Compost Bin",
        desc: "Eco-friendly bin for turning kitchen scraps into garden gold.",
        image: Compact,
        video: "https://www.youtube.com/embed/pWqd7lTbq0Y?si=RRdZA-U_0Qf1otXl",
      },
    ].map(({ name, desc, image, video }, idx) => (
      <div
        key={idx}
        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden"
        
      >
        <img
          src={image}
          alt={name}
          className="w-full h-62 object-cover"
        />
        <div className="p-5">
          <h3 className="text-xl font-semibold text-green-800">{name}</h3>
          <p className="text-gray-600 text-sm mb-4">{desc}</p>
          <div className="aspect-video w-full rounded-md overflow-hidden mb-4">
            <iframe
              src={video}
              title={name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-none"
            ></iframe>
          </div>
        </div>
      </div>
    ))}
  </div>

  <div className="mt-12 text-center">
    <a
      href="/tools"
      className="inline-block px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors font-medium"
    >
      See All Tools →
    </a>
  </div>
  </div>
</section>


<section className="w-full bg-white py-20">
  <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">

    <div className="text-center mb-10" >
      <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-2">
        Gardening Essentials
      </h2>
      <p className="text-gray-600">
        All you need to get started—and keep growing.
      </p>
    </div>

    
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {Object.keys(essentials).map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-5 py-2 rounded-full border text-sm font-medium transition-all ${
            activeTab === tab
              ? 'bg-green-500 text-white border-green-600'
              : 'bg-white text-green-600 border-green-300 hover:bg-green-50'
          }`}
        >
          {essentials[tab].title}
        </button>
      ))}
    </div>

    
    <div
      className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10"

    >
      <img
        src={current.icon}
        alt={current.title}
        className="w-32 h-32 object-cover border-4 border-green-500 rounded-full"
      />
      <div className="text-center md:text-left">
        <h3 className="text-2xl font-semibold text-green-500 mb-3">
          {current.title}
        </h3>
        <p className="text-gray-600 mb-5">{current.desc}</p>
        <Link to = '/essential'
          href={current.link}
          className="inline-block px-5 py-2 bg-green-500 text-white rounded-full hover:bg-green-700 transition-colors"
        >
          View Details →
        </Link>
      </div>
    </div>
  </div>
</section>


{/* ───────────────── Pots & Containers ───────────────── */}
<section className="w-full bg-green-700 py-20">
  <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
   <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Pots & Containers</h2>
        <p className="text-gray-50">Find the perfect home for your plants.</p>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" >
        {pots.map((pot, index) => (
          <div
            key={index}
            className="relative group cursor-pointer w-auto h-full md:w-50 md:h-50 shadow-md hover:shadow-xl transition-shadow bg-white rounded-full overflow-hidden"
          >
            <img
              src={pot.image}
              alt={pot.name}
              className="h-64 w-full object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-green-700">{pot.name}</h3>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center px-4 text-sm text-center">
              <p>{pot.tip}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center" >
        <Link
          to ="/pots"
          className="inline-block px-6 py-4 bg-white text-green-500 rounded-full hover:translate-y-[-2.5px] hover:shadow-lg transition-colors"
        >
          Read: Choosing the Right Container →
        </Link>
      </div>
      </div>
</section>


<section className="w-full bg-white py-20">
  <div className="max-w-7xl mx-auto md:px-16 lg:px-24">
   <div className="text-center mb-12" >
        <h2 className="text-3xl font-bold text-green-800 mb-3">Accessories & Decoration Ideas</h2>
        <p className="text-gray-600">Elevate your garden space with thoughtful, aesthetic touches.</p>
      </div>

      <div
        className="flex gap-6 overflow-x-auto lg:grid lg:grid-cols-3 xl:grid-cols-4 scrollbar-hide"
        data-aos="zoom-in-up"
      >
        {accessories.map((item, index) => (
          <div
            key={index}
            className="min-w-[260px] lg:min-w-0  hover:bg-green-50 transition-colors rounded-xl hover:shadow-md p-4 flex flex-col items-center text-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-40 w-full object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-green-700 mb-2">{item.name}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center" data-aos="fade-up">
        <Link
          href="/accessory"
          className="inline-block px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
        >
          More Garden Aesthetics →
        </Link>
      </div>
      </div>
</section>

<section className="w-full bg-gray-50 py-20">
  <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">

    <h2 className="text-3xl md:text-4xl mb-4 font-bold text-center text-green-800">Product Recommendations</h2>
    <p className="text-gray-600 text-center mb-5">Carefully curated picks to help your garden thrive.</p>
  </div>

  
  <div className="flex justify-center gap-4 mb-10">
    {['All', 'Tools', 'Accessories', 'Books'].map((cat) => (
      <button
        key={cat}
        onClick={() => setFilter(cat)}
        className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
          filter === cat
            ? 'bg-green-500 text-white'
            : 'bg-white text-green-700 border border-green-400 hover:bg-green-100'
        }`}
      >
        {cat}
      </button>
    ))}
  </div>

  
  <div
    className="grid px-6 grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[auto] md:auto-rows-[300px]"
    
  >
    {filteredProducts.map((product, i) => (
      <a
        key={product.id}
        href={product.link}
        className={`relative bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg ${
          i % 5 === 0 ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1'
        }`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-2/3 object-cover"
        />
        <div className="p-4">
          <h3 className="font-semibold text-green-700">{product.name}</h3>
          <p className="text-sm text-gray-600">{product.desc}</p>
        </div>
      </a>
    ))}
  </div>


  <div className="text-center mt-14" >
    <Link
      to ="/recommendations"
      className="inline-block px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
    >
      See More Recommendations →
    </Link>
  </div>
</section>

<section className="w-full bg-gray-50 py-20">
  <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-28">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

    <div>
      <h2 className="text-3xl font-bold text-green-800 mb-4">About Us</h2>
      <p className="text-gray-700 text-lg mb-4">
        Green Groves is on a mission to make small-scale gardening practical and joyful for everyone—
        from urban balconies to home backyards. We simplify the process, one tip at a time.
      </p>
      <a
        href="/about"
        className="inline-block text-green-500 font-medium hover:underline transition-all"
      >
        Read More →
      </a>
    </div>

    <div>
      <h2 className="text-3xl font-bold text-green-800 mb-4">Contact Us</h2>
      <div className="text-gray-700 space-y-2 mb-6">
        <p><strong>Email:</strong> greengroves@gmail.com</p>
        <p><strong>Phone:</strong> +234 800 000 0000</p>
      </div>


      <Link
        to ="/contact"
        className="inline-block px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
      >
        Contact Us
      </Link>
    </div>
  </div>
  </div>
</section>

<button onClick={scrollToTop} className="fixed bottom-10 right-10 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300 w-[50px] h-[50px] flex items-center justify-center hover:cursor-pointer">
      <i className="bi bi-arrow-up text-xl"></i>

     </button>
    </>
  )
}

export default Home
