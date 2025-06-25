import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import aboutus from "../assets/aboutusimg.jpg";
import can from "../assets/can.webp";
import gloves from "../assets/gloves.webp";
import kneeler from "../assets/kneeler.jpg";
import pots from "../assets/pots.webp";
import trowel2 from "../assets/trowel2.jpg";
import pruner from "../assets/pruner.jpg";
import fork from "../assets/fork.jpg";
import nozzle from "../assets/hose.webp";
import scoop from "../assets/scoop.jpg";
import hoe from "../assets/hoe.jpg";
import dibber from "../assets/dibber.jpg";
import lopper from "../assets/lopp.webp";
import spade from "../assets/spade.jpg";
import rake from "../assets/rake.jpg";
import weeders from "../assets/weeder.webp";
import toolbox from "../assets/toolbox.jpg";
import spray from "../assets/spraybottle.jpg";
import set from "../assets/set.jpg";
import bin from "../assets/bin.jpg";
import apron from "../assets/apron.avif";
import ring from "../assets/plantring.avif";
import meter from "../assets/meter.jpg";
import organizer from "../assets/organizer.jpg";
import trayset from "../assets/tray.jpg";
import spring1 from "../assets/spring1.png";
import spring2 from "../assets/spring2.jpg";
import spring3 from "../assets/spring3.jpg";
import spring4 from "../assets/spring4.jpg";
import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";
import home4 from "../assets/home4.jpg";
import all1 from "../assets/all1.jpg";
import all2 from "../assets/all2.jpg";
import all3 from "../assets/all3.jpg";
import all4 from "../assets/all4.jpg";
import oil1 from "../assets/oil1.jpg";
import oil2 from "../assets/oil2.jpg";
import oil3 from "../assets/oil3.jpg";
import oil4 from "../assets/oil4.jpg";

const About = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const products = [
    {
      id: 1,
      name: "Garden Trowel",
      image: trowel2,
      category: "Tools",
      description:
        "A durable hand tool perfect for digging, planting, and transplanting. Its ergonomic handle provides a secure grip, making it ideal for everyday gardening tasks.",
    },
    {
      id: 2,
      name: "Watering Can",
      image: can,
      category: "Tools",
      description:
        "Stylish and lightweight 2-gallon can with a long spout for controlled watering. Great for both indoor and outdoor plants.",
    },
    {
      id: 3,
      name: "Hand Pruners",
      image: pruner,
      category: "Tools",
      description:
        "Sharp, rust-resistant pruners ideal for trimming stems, branches, and small shrubs with minimal effort.",
    },
    {
      id: 4,
      name: "Garden Fork",
      image: fork,
      category: "Tools",
      description:
        "Heavy-duty fork great for turning soil, aerating beds, and digging out tough roots.",
    },
    {
      id: 5,
      name: "Hose Nozzle",
      image: nozzle,
      category: "Tools",
      description:
        "Multi-pattern nozzle with adjustable spray settings. Perfect for everything from misting to heavy-duty rinsing.",
    },
    {
      id: 6,
      name: "Soil Scoop",
      image: scoop,
      category: "Tools",
      description:
        "Wide-mouthed scoop for transferring soil, compost, or mulch. Great for container gardening.",
    },
    {
      id: 7,
      name: "Garden Hoe",
      image: hoe,
      category: "Tools",
      description:
        "Compact hoe ideal for weeding, cultivating soil, and breaking up dirt in flower beds.",
    },
    {
      id: 8,
      name: "Planting Dibber",
      image: dibber,
      category: "Tools",
      description:
        "Helps you make uniform planting holes for seeds and bulbs quickly and efficiently.",
    },
    {
      id: 9,
      name: "Lopper",
      image: lopper,
      category: "Tools",
      description:
        "Large handled lopper with bypass blades, great for cutting thicker branches up to 2 inches.",
    },
    {
      id: 10,
      name: "Garden Spade",
      image: spade,
      category: "Tools",
      description:
        "A strong, flat-bladed spade perfect for edging, digging, and moving soil with precision.",
    },
    {
      id: 11,
      name: "Garden Rake",
      image: rake,
      category: "Tools",
      description:
        "Steel rake ideal for clearing leaves and debris, leveling soil, or preparing seed beds.",
    },
    {
      id: 12,
      name: "Weeder Tool",
      image: weeders,
      category: "Tools",
      description:
        "Specially designed to remove weeds at the root with minimal soil disturbance.",
    },

    {
      id: 13,
      name: "Gardening Gloves",
      image: gloves,
      category: "Accessories",
      description:
        "Protective gloves made with breathable, puncture-resistant fabric. Designed for comfort and flexibility while handling tough garden work.",
    },
    {
      id: 14,
      name: "Garden Kneeler",
      image: kneeler,
      category: "Accessories",
      description:
        "Padded kneeler that doubles as a seat. Helps reduce pressure on your knees and back during planting, pruning, or weeding.",
    },
    {
      id: 15,
      name: "Succulent Pots Set",
      image: pots,
      category: "Accessories",
      description:
        "Set of 4 ceramic pots with drainage holes. Perfect for displaying succulents or mini plants on shelves, desks, or windowsills.",
    },
    {
      id: 16,
      name: "Tool Organizer Pouch",
      image: toolbox,
      category: "Accessories",
      description:
        "Handy waist pouch with multiple pockets to keep your garden tools organized and accessible.",
    },
    {
      id: 17,
      name: "Spray Bottle",
      image: spray,
      category: "Accessories",
      description:
        "Lightweight misting bottle for watering delicate plants or applying foliar sprays.",
    },
    {
      id: 18,
      name: "Plant Markers Set",
      image: set,
      category: "Accessories",
      description:
        "Reusable labels for tracking your plant names and varieties in garden beds or pots.",
    },
    {
      id: 19,
      name: "Compost Bin",
      image: bin,
      category: "Accessories",
      description:
        "Compact compost container for collecting kitchen scraps and turning them into garden gold.",
    },
    {
      id: 20,
      name: "Waterproof Garden Apron",
      image: apron,
      category: "Accessories",
      description:
        "Full-coverage apron with pockets to keep you dry and clean while working outdoors.",
    },
    {
      id: 21,
      name: "Plant Support Rings",
      image: ring,
      category: "Accessories",
      description:
        "Circular plant supports to help stems stand tall, especially for tomatoes and flowers.",
    },
    {
      id: 22,
      name: "Garden Thermometer",
      image: meter,
      category: "Accessories",
      description:
        "Outdoor thermometer to monitor temperature and help you optimize planting times.",
    },
    {
      id: 23,
      name: "Seed Organizer Box",
      image: organizer,
      category: "Accessories",
      description:
        "Neatly store and categorize all your seed packets in one durable, waterproof container.",
    },
    {
      id: 24,
      name: "Drip Tray Set",
      image: trayset,
      category: "Accessories",
      description:
        "Plastic trays to catch excess water and protect indoor surfaces under your plant pots.",
    },

    {
      id: 25,
      name: "Gardening in March: Tips for Setting Your...",
      image: spring1,
      category: "Books",
      description:
        "Smart gardening in March can really set the tone for a successful spring...",
      link: "https://www.craftsy.com/post/gardening-in-march",
    },
    {
      id: 26,
      name: "4 Ways to Improve the Soil Quality in...",
      image: spring2,
      category: "Books",
      description:
        "Discover 4 simple ways to improve the soil quality in your garden and grow healthier plants.",
      link: "https://www.craftsy.com/post/how-to-improve-soil-quality",
    },
    {
      id: 27,
      name: "How to Grow a Three Sisters Garden",
      image: spring3,
      category: "Books",
      description:
        "Learn the basics of the three sisters garden layout, a tried and true method of companion planting using corn, beans, and squash.",
      link: "https://www.craftsy.com/post/three-sisters-garden-layout",
    },
    {
      id: 28,
      name: "Squash the Winter Blues! Start Planning...",
      image: spring4,
      category: "Books",
      description:
        "It may not seem like it where you live, but spring is on its way! Put the pen to paper and plan your best garden yet.",
      link: "https://www.craftsy.com/post/early-spring-gardening-tips",
    },
    {
      id: 29,
      name: "Homemade Flavored Sugar: A Sweet Way...",
      image: home1,
      category: "Books",
      description:
        "For those days when you have a little too much left over from a generous herb harvest...",
      link: "https://www.craftsy.com/post/homemade-flavored-sugar",
    },
    {
      id: 30,
      name: "Fall Planting Tips for Fantastic Gardens...",
      image: home2,
      category: "Books",
      description:
        "Think your gardening season is over? Think again. Fall is the perfect time to prepare for new growth.",
      link: "https://www.craftsy.com/post/fall-planting-tips",
    },
    {
      id: 31,
      name: "The Lowdown on Tomato Types: Whi...",
      image: home3,
      category: "Books",
      description:
        "The world of tomatoes is vast and can be confusing, even just choosing what to plant.",
      link: "https://www.craftsy.com/post/types-of-tomatoes-to-grow",
    },
    {
      id: 32,
      name: "Your Garden Needs Pollinators, Here's...",
      image: home4,
      category: "Books",
      description:
        "The sight of bees buzzing from flower to flower and butterflies floating in the garden is not just charming...",
      link: "https://www.craftsy.com/post/attracting-pollinators-to-your-garden",
    },
    {
      id: 33,
      name: "All About Crop Rotation for...",
      image: all1,
      category: "Books",
      description:
        "For centuries, wise gardeners have known that crop rotation is one of the best practices for healthy soil...",
      link: "https://www.craftsy.com/post/crop-rotation-for-vegetable-gardens",
    },
    {
      id: 34,
      name: "Rainwater Harvesting 101: Wat...",
      image: all2,
      category: "Books",
      description:
        "Summer can be brutal to the garden, and to your pocketbook. Check out this guide to harvesting rainwater effectively.",
      link: "https://www.craftsy.com/post/how-to-harvest-rainwater",
    },
    {
      id: 35,
      name: "The Real Dirt on Potting Soil",
      image: all3,
      category: "Books",
      description:
        "Have you ever gone to the home and garden store for some simple potting mix and left more confused than when you arrived?",
      link: "https://www.craftsy.com/post/how-to-make-potting-soil",
    },
    {
      id: 36,
      name: "5 Top Tips for Planning a Flower...",
      image: all4,
      category: "Books",
      description:
        "Planning a flower garden doesn't have to be a daunting task. Here are five great ways to begin with beauty in mind.",
      link: "https://www.craftsy.com/post/planning-a-flower-garden",
    },
    {
    id: 37,
    name: "6 Essential Oils to Boost Your Creativity",
    image: oil1,
    category: "Books",
    description:
      "Have you ever used essential oils? Instructor Kateri Ewing shares how...",
    link: "https://www.craftsy.com/post/6-essential-oils-to-boost-creativity",
  },
  {
    id: 38,
    name: "How to Water a Bonsai Tree",
    image: oil2,
    category: "Books",
    description:
      "Help your indoor or outdoor bonsai tree thrive with these essential tips f...",
    link: "https://www.craftsy.com/post/how-to-water-a-bonsai-tree",
  },
  {
    id: 39,
    name: "5 Top Tips for Growing Roses...",
    image: oil3,
    category: "Books",
    description:
      "Yes, you can grow gorgeous roses organically. Just follow...",
    link: "https://www.craftsy.com/post/top-tips-for-growing-roses",
  },
  {
    id: 40,
    name: "The 5 Best Vegetables to Grow...",
    image: oil4,
    category: "Books",
    description:
      "Raised beds are wonderful for growing almost anything, but there are...",
    link: "https://www.lowes.com/n/how-to/building-a-raised-bed-garden",
  }
  ];

  const categories = ["All", "Tools", "Accessories", "Books"];
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <div
        className="relative bg-cover bg-center bg-fixed flex items-center justify-center rounded-bl-[60px] sm:rounded-bl-[100px] h-[60vh] sm:h-[80vh] lg:h-screen"
        style={{ backgroundImage: `url(${aboutus})` }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/60 to-black/60 rounded-bl-[60px] sm:rounded-bl-[100px]"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Suggestions
          </h1>
        </div>
      </div>

      <section className="bg-gray-100 py-16 px-6 sm:px-12 lg:px-10">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-semibold text-center text-green-700 mb-8">
            Product Suggestions
          </h2>

          <div className="flex justify-center mb-10">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white border border-green-500 text-green-700 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white font-Poppins rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              data-aos="fade-up">
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-green-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {product.category}
                  </p>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  {product.category === "Books" && (
                    <a
                      href={product.link}
                      className="text-green-500 font-medium hover:underline"
                    >
                      View Content →
                    </a>
                  )}
                </div>
              </div>
            ))}
            {filteredProducts.length === 0 && (
              <p className="col-span-full text-center text-gray-600">
                No products found for this category.
              </p>
            )}
          </div>
        </div>
      </section>

      <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300 w-[50px] h-[50px] flex items-center justify-center hover:cursor-pointer"
      >
        <i className="bi bi-arrow-up text-xl"></i>
      </button>
    </div>
  );
};

export default About;
