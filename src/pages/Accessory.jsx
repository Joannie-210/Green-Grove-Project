import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import Acc from '../assets/accbg.jpg';
import Main from '../assets/mainaccbg.jpg';
import Fairy from '../assets/fairy.jpg';
import Gnome from '../assets/Gnome.jpeg';
import Bam from '../assets/stick.jpeg';
import Hang from '../assets/hanger.jpeg';
import string from '../assets/string.jpeg';
import Dome from '../assets/dome.jpeg';
import Self from '../assets/self.jpeg';
import AOS from 'aos';

const categories = [
  { id: 'mini', label: 'Miniature Toys', image: {} },
  { id: 'pots', label: 'Hangers & Holders', image: {} },
  { id: 'tags', label: 'Plant Labels', image: {} },
  { id: 'light', label: 'Garden Lighting', image: {} },
  { id: 'decor', label: 'Pebbles & Stones', image: {} },
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
    AOS.init({ duration: 1000, once: false });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [active, setActive] = useState('all');
  const [selectedAccessory, setSelectedAccessory] = useState(null);

  const filtered =
    active === 'all'
      ? allAccessories
      : allAccessories.filter((a) => a.category === active);

  return (
    <div className="mx-auto w-full max-w-7xl px-0 lg:px-0">
   
      <div
        className="relative bg-cover bg-center bg-fixed flex items-center justify-center rounded-bl-[60px] sm:rounded-bl-[100px] h-[60vh] sm:h-[80vh] lg:h-screen"
        style={{ backgroundImage: `url(${Main})` }}
        data-aos="fade-up"
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

    
      <section className="pb-20 px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map(({ id, image, name, desc }) => (
            <div
              key={id}
              className="bg-white rounded-xl shadow hover:shadow-xl overflow-hidden transition cursor-pointer"
              onClick={() => setSelectedAccessory({ id, image, name, desc })}
            >
              <img src={image} alt={name} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-900 mb-2">{name}</h3>
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

  
      <AnimatePresence>
        {selectedAccessory && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAccessory(null)}
          >
            <motion.div
              className="bg-white rounded-xl max-w-md w-full p-6 shadow-xl relative"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedAccessory(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
              >
                <X size={20} />
              </button>
              <img
                src={selectedAccessory.image}
                alt={selectedAccessory.name}
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold text-green-900 mb-2">
                {selectedAccessory.name}
              </h3>
              <p className="text-gray-700">{selectedAccessory.desc}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

   
      <section
        className="relative py-16 px-5 sm:px-2 bg-cover bg-center bg-fixed rounded-xl shadow-inner"
        style={{ backgroundImage: `url(${Acc})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Why Accessories Matter
          </h2>
          <p className="text-white sm:text-lg text-md leading-relaxed">
            Accessories are the finishing touches that express your personality
            and invite visitors to linger. Whether it’s the soft glow of solar
            string lights on a summer evening, a playful gnome greeting you at
            the gate, or pebbles that highlight the color of a succulent,
            well‑chosen accents turn ordinary beds into intimate stories.
          </p>
        </div>
      </section>

     
      <section className="py-16 px-10">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-green-800 mb-12">
          Accessory Tips&nbsp;&amp;&nbsp;Best Practices
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ul className="space-y-4 list-disc list-inside text-gray-700">
            <li><strong>Less is more</strong>: avoid crowding; let statement pieces breathe.</li>
            <li><strong>Echo a theme</strong>: repeat colors or materials for cohesion.</li>
            <li><strong>Night appeal</strong>: integrate solar lights for evening charm.</li>
            <li><strong>Stack levels</strong>: use hangers, shelves, and ground accents.</li>
            <li><strong>Weather‑proof</strong>: seal or store items in harsh seasons.</li>
          </ul>
          <ul className="space-y-4 list-disc list-inside text-gray-700">
            <li><strong>Color pop</strong>: brighten neutral foliage with bold accents.</li>
            <li><strong>Scent & sound</strong>: add wind chimes or herbs for senses.</li>
            <li><strong>DIY upcycle</strong>: teapots, mugs, or pallets make unique pieces.</li>
            <li><strong>Group odd numbers</strong>: threes and fives feel natural.</li>
            <li><strong>Refresh seasonally</strong>: rotate decor with the seasons.</li>
          </ul>
        </div>
      </section>

      
      <section className="my-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-6">
          Ready to Accessorize?
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-8">
          Explore our curated catalog for hand‑picked items that ship straight to your door.
        </p>
        <button
          className="inline-block bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition"
        >
          Shop Accessories
        </button>
      </section>

     
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300 w-[50px] h-[50px] flex items-center justify-center"
      >
        <i className="bi bi-arrow-up text-xl"></i>
      </button>
    </div>
  );
};

export default Accessory;
