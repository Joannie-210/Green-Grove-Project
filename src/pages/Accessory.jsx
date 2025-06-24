import React, { useState, useEffect } from 'react';
import Acc from '../assets/accbg.jpg'
import Main from '../assets/mainaccbg.jpg'
import Fairy from '../assets/fairy.jpg'
import Gnome from '../assets/Gnome.jpeg'
import Bam from '../assets/stick.jpeg'
import Hang from '../assets/hanger.jpeg'
import string from '../assets/string.jpeg'
import Dome from '../assets/dome.jpeg'
import Self from '../assets/self.jpeg'
import AOS from 'aos';



const categories = [
  { id: 'mini',  label: 'Miniature Toys',    image: {} },
  { id: 'pots',  label: 'Hangers & Holders', image: {}  },
  { id: 'tags',  label: 'Plant Labels',      image: {}  },
  { id: 'light', label: 'Garden Lighting',   image: {} },
{ id: 'decor', label: 'Pebbles & Stones',  image: {} },
];

const allAccessories = [
  {
    id: 1,
    category: 'mini',
    name: 'Fairy‑House Starter Kit',
    image: Fairy,
    desc: 'Create a whimsical corner with a cedar fairy cottage, bridge, and tiny mailbox.',
  },
  {
    id: 2,
    category: 'mini',
    name: 'Classic Garden Gnome',
    image: Gnome,
    desc: 'Hand‑painted resin gnome that brings personality (and a little mischief) to any bed.',
  },
 
  {
    id: 3,
    category: 'tags',
    name: 'Bamboo Plant Markers',
    image: Bam,
    desc: 'Eco‑friendly markers to keep track of seedlings, herbs, and rare cultivars.',
  },
  {
    id: 4,
    category: 'pots',
    name: 'Macramé Hanger Set (3‑pack)',
    image: Hang,
    desc: 'Boho‑style cotton hangers that turn any small pot into a floating statement.',
  },
  {
    id: 5,
    category: 'light',
    name: 'Solar String Lights',
    image: string,
    desc: 'Warm‑white LEDs on copper wire—charge by day, glow by night.',
  },
  {
    id: 6,
    category: 'decor',
    name: 'Glass Terrarium Dome',
    image: Dome,
    desc: 'Display succulents, moss, or an air‑plant vignette under crystal‑clear glass.',
  },
  {
    id: 7,
    category: 'pots',
    name: 'Self‑Watering Globe',
    image: Self,
    desc: 'Blown‑glass reservoirs that slowly release moisture—perfect for busy gardeners.',
  },
];


const Accessory = () => {
useEffect(() => {
  window.scrollTo(0, 0);
}, []);


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
      });
    }, []);

  const [active, setActive] = useState('all');

  const filtered =
    active === 'all'
      ? allAccessories
      : allAccessories.filter((a) => a.category === active);

  return (
    <div className="mx-auto w-full max-w-7xl px-0 sm:px-6 lg:px-0">
      
      <div
        className="relative bg-cover bg-center bg-fixed flex items-center justify-center rounded-bl-[60px] sm:rounded-bl-[100px] h-[60vh] sm:h-[80vh] lg:h-screen"
        style={{ backgroundImage: `url(${Main})` }} data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/60 to-black/60 rounded-bl-[60px] sm:rounded-bl-[100px]" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Garden&nbsp;Accessories
          </h1>
         
        </div>
      </div>

      
      <section className="py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-800 mb-10">
          Browse by Category
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <button
            className={`px-5 py-2 rounded-full border ${
              active === 'all'
                ? 'bg-green-500 text-white'
                : 'border-green-600 text-green-700 hover:bg-green-50'
            } transition`}
            onClick={() => setActive('all')}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              className={`px-5 py-2 rounded-full border ${
                active === c.id
                  ? 'bg-green-600 text-white'
                  : 'border-green-600 text-green-700 hover:bg-green-50'
              } transition`}
              onClick={() => setActive(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* ───────── Accessory Grid ───────── */}
      <section className="pb-20 px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map(({ id, image, name, desc }) => (
            <div
              key={id}
              className="bg-white rounded-xl shadow hover:shadow-xl overflow-hidden transition"
            >
              <img
                src={image}
                alt={name}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-900 mb-2">
                  {name}
                </h3>
                <p className="text-gray-700">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-600 mt-10">
            No items in this category yet. Check back soon!
          </p>
        )}
      </section>

      {/* ───────── Inspiration Section ───────── */}
      <section
  className="
    relative py-16
    bg-cover bg-center bg-fixed        /* fills, centers, stays fixed */
    rounded-xl shadow-inner
  "
  style={{ backgroundImage: `url(${Acc})` }}   /* <-- 2) drop in the URL */
>
  {/* optional readability overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* content */}
  <div className="relative z-10 max-w-4xl mx-auto text-center">
    <h2 className="text-3xl sm:text-5xl font-bold text-white  mb-6">
      Why Accessories Matter
    </h2>
    <p className="text-white sm:text-lg leading-relaxed">
      Accessories are the finishing touches that express your personality
      and invite visitors to linger. Whether it’s the soft glow of solar
      string lights on a summer evening, a playful gnome greeting you at
      the gate, or pebbles that highlight the color of a succulent,
      well‑chosen accents turn ordinary beds into intimate stories.
    </p>
  </div>
</section>

      {/* ───────── Tips & Tricks ───────── */}
      <section className="py-16 px-10">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-green-800 mb-12">
          Accessory Tips&nbsp;&amp;&nbsp;Best Practices
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ul className="space-y-4 list-disc list-inside text-gray-700">
            <li>
               <span className='font-bold'>Less is more</span>: avoid crowding; let statement pieces breathe.
            </li>
            <li>
              <span className='font-bold'>Echo a theme</span>: repeat colors or materials (e.g., terracotta +
              copper) for cohesion.
            </li>
            <li>
               <span className='font-bold'>Night appeal</span>: integrate solar lights to keep the garden
              charming after sunset.
            </li>
            <li>
               <span className='font-bold'>Stack levels</span>: use hangers, shelves, and ground accents to draw
              the eye upward and down.
            </li>
            <li>
               <span className='font-bold'>Weather‑proof</span>: seal or bring in delicate pieces during harsh
              seasons.
            </li>
          </ul>
          <ul className="space-y-4 list-disc list-inside text-gray-700">
            <li>
               <span className='font-bold'>Color pop</span>: a brightly painted gnome or pot enlivens neutral
              foliage.
            </li>
            <li>
               <span className='font-bold'>Scent & sound</span>: wind chimes or herb bundles engage more senses.
            </li>
            <li>
               <span className='font-bold'> DIY upcycle</span>: old mugs, teapots, or pallets make quirky
              planters and holders.
            </li>
            <li>
               <span className='font-bold'>Group odd numbers</span>: threes and fives feel natural to the eye.
            </li>
            <li>
              <span className='font-bold'>Refresh seasonally</span>: rotate accents in spring vs. fall to keep
              the space feeling new.
            </li>
          </ul>
        </div>
      </section>

      {/* ───────── Call‑to‑Action ───────── */}
      <section className="my-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-6">
          Ready to Accessorize?
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-8">
          Explore our curated catalog for hand‑picked items that ship straight
          to your door.
        </p>
        <a
          href="/products"
          className="inline-block bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition"
        >
          Shop Accessories
        </a>
      </section>
      <button onClick={scrollToTop} className="fixed bottom-10 right-10 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300 w-[50px] h-[50px] flex items-center justify-center hover:cursor-pointer">
      <i className="bi bi-arrow-up text-xl"></i>
     </button>
    </div>
  );
};

export default Accessory;
