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
import { useState } from 'react';
import Herb from '../assets/balconyherb.jpeg';
import Compost from '../assets/compost.jpg';
import Water from '../assets/water.webp';
import Hand from '../assets/handrake.webp';
import Compact from '../assets/compact.jpg';
import Wand from '../assets/wand.jpg';
import Sf from '../assets/sf.jpg';
import Seeds from '../assets/seeds.jpg';
import Pest from '../assets/pest.jpg';

const essentials = {
  Soil: {
    title: "Soil & Fertilizers",
    desc: "Discover the right soil types and fertilizers to boost your garden's health, whether you’re planting herbs on a balcony or veggies in a backyard bed.",
    icon: Sf, // Replace with your icon
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
    image: '/pots/terracotta.jpg',
    tip: 'Breathable material, great for herbs and succulents. Dries out quicker—ideal for plants that hate soggy soil.',
  },
  {
    name: 'Plastic Pots',
    image: '/pots/plastic.jpg',
    tip: 'Lightweight and affordable. Retains moisture longer—perfect for tropical plants or beginners.',
  },
  {
    name: 'Fabric Grow Bags',
    image: '/pots/fabric.jpg',
    tip: 'Air-prunes roots and improves drainage. Great for root veggies like carrots and potatoes.',
  },
  {
    name: 'Ceramic Glazed Pots',
    image: '/pots/ceramic.jpg',
    tip: 'Beautiful and durable. Heavier and more decorative—great for indoor plants.',
  },
];

const accessories = [
  {
    name: 'Miniature Garden Toys',
    image: '/decor/toys.jpg',
    desc: 'Add charm to your pots with cute figurines and fairy garden sets.',
  },
  {
    name: 'Decorative Pebbles',
    image: '/decor/pebbles.jpg',
    desc: 'Enhance soil surfaces with colored stones and textured gravels.',
  },
  {
    name: 'Hanging Ornaments',
    image: '/decor/hanging.jpg',
    desc: 'Wind chimes, lanterns, and bells to elevate your garden ambiance.',
  },
  {
    name: 'Plant Stands & Hooks',
    image: '/decor/stands.jpg',
    desc: 'Maximize vertical space with aesthetic stands and wall hooks.',
  },
  {
    name: 'Water Features',
    image: '/decor/fountain.jpg',
    desc: 'Small fountains or recycled bottle waterfalls add serenity.',
  },
];

const allProducts = [
  {
    id: 1,
    category: 'Tools',
    name: 'Hand Trowel',
    image: '/products/trowel.jpg',
    desc: 'Ergonomic and durable for everyday gardening.',
    link: '#',
  },
  {
    id: 2,
    category: 'Accessories',
    name: 'Pebble Pack',
    image: '/products/pebbles.jpg',
    desc: 'Polished decorative pebbles for pot surfaces.',
    link: '#',
  },
  {
    id: 3,
    category: 'Books',
    name: 'Balcony Gardening Guide',
    image: '/products/book.jpg',
    desc: 'Learn how to turn your balcony into a green haven.',
    link: '#',
  },
  {
    id: 4,
    category: 'Tools',
    name: 'Watering Can',
    image: '/products/watering.jpg',
    desc: 'Stylish and spill-proof for easy watering.',
    link: '#',
  },
  {
    id: 5,
    category: 'Accessories',
    name: 'Plant Markers',
    image: '/products/markers.jpg',
    desc: 'Organize your plants with elegant labels.',
    link: '#',
  },
  {
    id: 6,
    category: 'Books',
    name: 'Home Composting 101',
    image: '/products/compost.jpg',
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

   const [activeTab, setActiveTab] = useState("Soil");

  const current = essentials[activeTab];

  const [filter, setFilter] = useState('All');

  const filteredProducts = filter === 'All'
    ? allProducts
    : allProducts.filter(p => p.category === filter);


  return (
   <>
      <HeroSection />
      <div className="w-full bg-white py-5 px-6 sm:px-10 lg:px-14 lg:h-130  gap-8 flex flex-col lg:flex-row justify-evenly items-center">
  <div
    className="flex w-full lg:w-1/2 flex-col h-auto pt-10 lg:py-10 items-center lg:items-start justify-center"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <h1
      className="text-2xl text-center w-full sm:text-3xl mb-6 md:text-4xl lg:text-5xl font-bold mb-4 lg:text-left"
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
  <section className="w-full bg-gray-50 bg-gradient-to-br py-20 px-6 md:px-16 lg:px-24">
  <h2
    className="text-4xl md:text-5xl text-green-700 font-bold text-center  mb-16"
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
        className=" border-t-6 border-green-50 backdrop-blur-md bg-white  rounded-tr-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
<section className="w-full bg-green-50 py-20 px-6 md:px-16 lg:px-24">
  <div className="flex flex-col items-center mb-14" data-aos="fade-down" data-aos-duration="800">
    <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-4 text-center">
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
        image:  Herb,
        tip: "Start with 3 easy herbs: basil, mint, and parsley.",
      },
      {
        title: "Top 5 Watering Hacks for Potted Plants",
        image: Compost,
        tip: "Use ice cubes to slowly hydrate delicate plants.",
      },
      {
        title: "Composting Basics for Small Spaces",
        image: Water,
        tip: "Add brown waste (dry leaves) to balance kitchen scraps.",
      },
    ].map(({ title, image, tip }, idx) => (
      <div
        key={idx}
        className="group bg-white relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
        data-aos="zoom-in"
        data-aos-delay={idx * 100}
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

  <div className="text-center" data-aos="fade-up" data-aos-duration="800">
    <a
      href="/techniques"
      className="inline-block px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors font-medium"
    >
      Explore Techniques →
    </a>
  </div>
</section>

<section className="w-full bg-gray-50 py-20 px-6 md:px-16 lg:px-24">
  <div className="text-center mb-14" data-aos="fade-down">
    <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Featured Gardening Tools</h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Handpicked tools to simplify your gardening journey—tested, trusted, and beginner-friendly.
    </p>
  </div>

  {/* Grid or carousel of tools */}
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
        data-aos="fade-up"
        data-aos-delay={idx * 100}
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

  <div className="mt-12 text-center" data-aos="fade-up">
    <a
      href="/tools"
      className="inline-block px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors font-medium"
    >
      See All Tools →
    </a>
  </div>
</section>
 <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-24">
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-2">Gardening Essentials</h2>
        <p className="text-gray-600">All you need to get started—and keep growing.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-10" data-aos="fade-up">
        {Object.keys(essentials).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full border text-sm font-medium transition-all ${
              activeTab === tab
                ? 'bg-green-600 text-white border-green-600'
                : 'bg-white text-green-600 border-green-300 hover:bg-green-50'
            }`}
          >
            {essentials[tab].title}
          </button>
        ))}
      </div>

      <div
        className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10"
        data-aos="zoom-in"
      >
        <img
          src={current.icon}
          alt={current.title}
          className="w-32 h-32 object-cover border-3 border-green-700 rounded-full"
        />
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold text-green-700 mb-3">{current.title}</h3>
          <p className="text-gray-600 mb-5">{current.desc}</p>
          <a
            href={current.link}
            className="inline-block px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
          >
            View Details →
          </a>
        </div>
      </div>
    </section>

      <section className="py-20 bg-green-700 px-6 md:px-16 lg:px-24">
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Pots & Containers</h2>
        <p className="text-gray-50">Find the perfect home for your plants.</p>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" data-aos="zoom-in">
        {pots.map((pot, index) => (
          <div
            key={index}
            className="relative group cursor-pointer w-50 h-50 shadow-md hover:shadow-xl transition-shadow bg-white rounded-full overflow-hidden"
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

      <div className="mt-12 text-center" data-aos="fade-up">
        <a
          href="/articles/choosing-containers"
          className="inline-block px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
        >
          Read: Choosing the Right Container →
        </a>
      </div>
    </section>
    <section className="py-20 bg-white px-6 md:px-16 lg:px-24">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-green-800 mb-3">Accessories & Decoration Ideas</h2>
        <p className="text-gray-600">Elevate your garden space with thoughtful, aesthetic touches.</p>
      </div>

      <div
        className="flex gap-6 overflow-x-auto lg:grid lg:grid-cols-3 xl:grid-cols-4 scrollbar-hide"
        data-aos="zoom-in-up"
      >
        {accessories.map((item, index) => (
          <div
            key={index}
            className="min-w-[260px] lg:min-w-0 bg-gray-50 hover:bg-green-50 transition-colors rounded-xl shadow-sm hover:shadow-md p-4 flex flex-col items-center text-center"
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
        <a
          href="/aesthetics"
          className="inline-block px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
        >
          More Garden Aesthetics →
        </a>
      </div>
    </section>
     <section className="px-6 md:px-12 lg:px-24 py-20 bg-gray-50">
      <div className="text-center mb-10" data-aos="fade-down">
        <h2 className="text-4xl font-bold text-green-800 mb-2">Product Recommendations</h2>
        <p className="text-gray-600">Carefully curated picks to help your garden thrive.</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-10" data-aos="fade-up">
        {['All', 'Tools', 'Accessories', 'Books'].map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === cat
                ? 'bg-green-600 text-white'
                : 'bg-white text-green-700 border border-green-400 hover:bg-green-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Asymmetrical Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[auto] md:auto-rows-[300px]"
        data-aos="fade-up"
      >
        {filteredProducts.map((product, i) => (
          <a
            key={product.id}
            href={product.link}
            className={`relative bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg
              ${i % 5 === 0 ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1'}`}
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

      {/* CTA */}
      <div className="text-center mt-14" data-aos="zoom-in-up">
        <a
          href="/recommendations"
          className="inline-block px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
        >
          See More Recommendations →
        </a>
      </div>
    </section>
    <section className="px-6 md:px-16 lg:px-28 py-20 bg-green-900 text-white">
  {/* Section Heading */}
  <div className="text-center mb-14" data-aos="fade-down">
    <h2 className="text-4xl font-bold text-white">Educational Media</h2>
    <p className="text-gray-50 mt-2">Learn through videos and curated book picks.</p>
  </div>

  {/* --- Videos Section --- */}
  <div className="mb-20">
    <h3 className="text-2xl font-semibold text-white mb-6" data-aos="fade-right">Video Guides</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[1, 2, 3].map((v, i) => (
        <div key={i} className="aspect-video rounded-xl overflow-hidden shadow-lg" data-aos="zoom-in" data-aos-delay={`${i * 100}`}>
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${['dQw4w9WgXcQ', '5MgBikgcWnY', 'kXZSf8hCENY'][i]}`}
            title="Gardening Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ))}
    </div>
    <div className="text-center mt-8" data-aos="fade-up">
      <a
        href="/videos"
        className="inline-block px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
      >
        Watch More →
      </a>
    </div>
  </div>

  {/* --- Books Section --- */}
  <div>
    <h3 className="text-2xl font-semibold text-white mb-6" data-aos="fade-left">Recommended Books</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        {
          title: 'Urban Gardening Basics',
          cover: '/books/book1.jpg',
          linkBuy: '#',
          linkBorrow: '#',
        },
        {
          title: 'Balcony Botanica',
          cover: '/books/book2.jpg',
          linkBuy: '#',
          linkBorrow: '#',
        },
        {
          title: 'Grow From Home',
          cover: '/books/book3.jpg',
          linkBuy: '#',
          linkBorrow: '#',
        },
        {
          title: 'Soil & Soul',
          cover: '/books/book4.jpg',
          linkBuy: '#',
          linkBorrow: '#',
        },
      ].map((book, i) => (
        <div
          key={i}
          className="bg-gray-100 rounded-xl overflow-hidden shadow-md p-4 flex flex-col items-center text-center"
          data-aos="fade-up"
          data-aos-delay={`${i * 100}`}
        >
          <img src={book.cover} alt={book.title} className="w-32 h-44 object-cover mb-4 rounded" />
          <h4 className="text-white font-medium text-lg">{book.title}</h4>
          <div className="mt-2 space-x-2">
            <a href={book.linkBuy} className="text-sm text-blue-600 hover:underline">Buy</a>
            <a href={book.linkBorrow} className="text-sm text-gray-600 hover:underline">Borrow</a>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-10" data-aos="zoom-in-up">
      <a
        href="/books"
        className="inline-block px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
      >
        Explore Gardening Books →
      </a>
    </div>
  </div>
</section>
<section className="bg-gray-50 py-20 px-6 md:px-16 lg:px-28">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
    {/* --- About Us Snippet --- */}
    <div data-aos="fade-right">
      <h2 className="text-3xl font-bold text-green-800 mb-4">About Us</h2>
      <p className="text-gray-700 text-lg mb-4">
        Green Groves is on a mission to make small-scale gardening practical and joyful for everyone—
        from urban balconies to home backyards. We simplify the process, one tip at a time.
      </p>
      <a
        href="/about"
        className="inline-block text-green-600 font-medium hover:underline transition-all"
      >
        Read More →
      </a>
    </div>

    {/* --- Contact Info & Map --- */}
    <div data-aos="fade-left">
      <h2 className="text-3xl font-bold text-green-800 mb-4">Contact Us</h2>
      <div className="text-gray-700 space-y-2 mb-6">
        <p><strong>Email:</strong> hello@greengroves.com</p>
        <p><strong>Phone:</strong> +234 800 000 0000</p>
      </div>

      {/* Google Maps Embed */}
      <div className="w-full h-60 rounded-lg overflow-hidden shadow-md mb-6">
        <iframe
          title="Green Groves Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.043941177189!2d-122.08424968469248!3d37.42206597982592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24cddf3e16f%3A0x97bece0b90262b51!2sGoogleplex!5e0!3m2!1sen!2sng!4v1689732011110!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <a
        href="/contact"
        className="inline-block px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
      >
        Contact Us
      </a>
    </div>
  </div>
</section>

    </>
  )
}

export default Home
