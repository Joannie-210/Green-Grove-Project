import React, { useEffect, useState } from "react";
import gloves from "../assets/gloves.webp";
import aboutus from "../assets/aboutusimg.jpg";
import shears from "../assets/shear.jpg";
import fork from "../assets/fork.jpg";
import trowel from "../assets/trowel.webp";
import can from "../assets/can.webp";
import barrow from "../assets/barrow.jpg";
import peat from "../assets/peat.jpg";
import sandy from "../assets/sandy.webp";
import loam from "../assets/loam.webp";
import clay from "../assets/clay.jpeg";
import silt from "../assets/silt.webp";
import lettuce from "../assets/lettuce.webp";
import mint from "../assets/mint.webp";
import parsley from "../assets/parsley.webp";
import margigold from "../assets/marigold.jpg";
import tomato from "../assets/tomato.webp";
import zinnias from "../assets/zinnias.jpg";
import spinach from "../assets/spinach.webp";
import sunflower from "../assets/sunflower.jpeg";
import nas from "../assets/nas.webp";
import cilantro from "../assets/cliantro.jpg";
import carrot from "../assets/carrot.webp";
import basil from "../assets/basil.jpg";
import neem from "../assets/neem.jpg";
import spray from "../assets/spray.webp";
import sys from "../assets/sys.webp";
import garlic from "../assets/garlic.webp";
import isoap from "../assets/isoap.jpg";
import herbicide from "../assets/herbicide.webp";
import fungicide from "../assets/fungicide.jpg";
import earth from "../assets/earth.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

const tools = [
  {
    name: "Hand Trowel",
    desc: "Ideal for digging small holes, transplanting seedlings, removing weeds, and mixing soil or fertilizer. A must-have for container and flower bed gardening.",
    img: trowel,
  },
  {
    name: "Pruning Shears",
    desc: "Used to trim, shape, and remove dead or overgrown branches and stems. They help maintain plant health and encourage new growth, especially in shrubs and perennials.",
    img: shears,
  },
  {
    name: "Gardening Gloves",
    desc: "Protects your hands from thorns, rough surfaces, and soil-borne bacteria. They also improve grip and reduce the risk of blisters when handling tools or digging.",
    img: gloves,
  },
  {
    name: "Watering Can",
    desc: "Perfect for providing gentle and targeted hydration to plants. Its spout allows controlled watering, which is especially helpful for delicate seedlings and indoor plants.",
    img: can,
  },
  {
    name: "Garden Fork",
    desc: "Essential for loosening compacted soil, turning compost, and aerating beds. Its sturdy tines make it easier to break up clumps and integrate organic material.",
    img: fork,
  },
  {
    name: "Wheelbarrow",
    desc: "A practical tool for moving heavy loads such as soil, mulch, compost, or garden tools. Reduces physical strain and increases efficiency during garden maintenance.",
    img: barrow,
  },
];


const tips = [
  "Water plants early in the morning to reduce evaporation.",
  "Use mulch to retain soil moisture and prevent weeds.",
  "Rotate crops annually to improve soil health.",
  "Prune dead or damaged leaves to encourage new growth.",
  "Use organic compost to naturally fertilize your garden.",
  "Choose native plants—they're easier to maintain and better for local pollinators.",
  "Install a rain barrel to collect water and reduce water usage.",
];

const Essential = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const [activeTab, setActiveTab] = useState("Soil");

  return (
    <>
      <div
        className="relative bg-cover bg-center bg-fixed flex items-center justify-center rounded-bl-[60px] sm:rounded-bl-[100px] h-[60vh] sm:h-[80vh] lg:h-screen"
        style={{ backgroundImage: `url(${aboutus})` }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/60 to-black/60 rounded-bl-[60px] sm:rounded-bl-[100px]"></div>
        <div className="relative z-10 text-center px-10">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold pb-9">
            Gardening Essentials
          </h1>
        </div>
      </div>

      <div className="px-6 py-12 md:px-20 bg-green-50 pt-[130px]">
        <h2 className="text-3xl font-bold text-green-900 mb-6 text-center">
          Essential Gardening Tools
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 p-6"
              data-aos="fade-up"
            >
              <img
                src={tool.img}
                alt={tool.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-green-800">
                {tool.name}
              </h3>
              <p className="">{tool.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-green-900 mb-6 text-center">
            Top Gardening Tips
          </h2>
          <ul className="space-y-4 max-w-3xl mx-auto">
            {tips.map((tip, index) => (
              <li
                key={index}
                className="bg-white p-4 rounded-lg shadow-md text-green-700"
                data-aos="fade-up"
              >
                🌱 {tip}
              </li>
            ))}
          </ul>
        </div>

        <section className="px-6 py-16 bg-white text-gray-800 mt-[100px]">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Gardening Essentials</h2>
            <p className="text-lg text-gray-600 mb-12">
              All you need to get started—and keep growing.
            </p>
          </div>

          <div
            className="flex flex-wrap justify-center gap-4 mb-10"
            data-aos="fade-up"
          >
            {["Soil", "Pesticides", "Seeds"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-20 font-Jost text-[17px] py-2 rounded-full border text-sm font-medium uppercase transition-all ${
                  activeTab === tab
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-white text-green-600 border-green-300 hover:bg-green-50 hover:cursor-pointer"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === "Soil" && (
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
              <div
                className="bg-green-50 px-6 py-12 rounded-lg shadow-md"
                data-aos="fade-up"
              >
                <h3 className="text-4xl sm:text-5xl font-bold font-Jost mb-5 text-center ">
                  Soil & Fertilizers
                </h3>
                <p className="mb-30 font-Jost text-center text-[20px]">
                  Discover the best soil types and fertilizers to boost up your
                  garden health and growth
                </p>

                <div className="space-y-16 max-w-6xl mx-auto">
                  <div
                    className="grid md:grid-cols-2 gap-8 items-center"
                    data-aos="fade-up"
                  >
                    <img
                      src={loam}
                      alt="Loamy Soil"
                      className="rounded-xl shadow-md w-full h-64 object-cover"
                    />
                    <div>
                      <h4 className="text-3xl font-Jost text-green-800 mb-3">
                        1. Loamy Soil
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold">
                          Best for: Vegetables, flowers, herbs.
                        </span>
                        <br />
                        Loamy soil is a gardener’s dream. It contains a balanced
                        mix of sand, silt, and clay—perfect for holding
                        nutrients and draining efficiently. Plants thrive in
                        this rich, well-structured soil.
                      </p>
                    </div>
                  </div>

                  <div
                    className="grid md:grid-cols-2 gap-8 items-center"
                    data-aos="fade-up"
                  >
                    <img
                      src={sandy}
                      alt="Sandy Soil"
                      className="rounded-xl shadow-md w-full h-64 object-cover"
                    />
                    <div>
                      <h4 className="text-3xl font-Jost text-green-800 mb-3">
                        2. Sandy Soil
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold">
                          Best for: Root vegetables like carrots, radishes, and
                          potatoes.
                        </span>
                        <br />
                        Sandy soil is light and gritty, allowing quick drainage
                        and warming up early in the season. It needs frequent
                        composting to retain nutrients.
                      </p>
                    </div>
                  </div>

                  <div
                    className="grid md:grid-cols-2 gap-8 items-center"
                    data-aos="fade-up"
                  >
                    <img
                      src={clay}
                      alt="Clay Soil"
                      className="rounded-xl shadow-md w-full h-64 object-cover"
                    />
                    <div>
                      <h4 className="text-3xl font-Jost text-green-800 mb-3">
                        3. Clay Soil
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold">
                          Best for: Perennials and moisture-loving plants like
                          daylilies and asters.
                        </span>
                        <br />
                        Heavy and compact, clay soil is nutrient-rich but often
                        struggles with drainage. When amended with organic
                        matter, it becomes a powerful base for lush,
                        long-lasting blooms.
                      </p>
                    </div>
                  </div>

                  <div
                    className="grid md:grid-cols-2 gap-8 items-center"
                    data-aos="fade-up"
                  >
                    <img
                      src={silt}
                      alt="Silty Soil"
                      className="rounded-xl shadow-md w-full h-64 object-cover"
                    />
                    <div>
                      <h4 className="text-3xl font-Jost text-green-800 mb-3">
                        4. Silty Soil
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold">
                          Best for: Leafy greens, herbs, and soft fruits.
                        </span>
                        <br />
                        Smooth and soft, silty soil retains moisture well and
                        holds nutrients better than sandy soil. It's ideal for
                        shallow-rooted plants but needs good drainage to avoid
                        sogginess.
                      </p>
                    </div>
                  </div>

                  <div
                    className="grid md:grid-cols-2 gap-8 items-center"
                    data-aos="fade-up"
                  >
                    <img
                      src={peat}
                      alt="Peaty Soil"
                      className="rounded-xl shadow-md w-full h-64 object-cover"
                    />
                    <div>
                      <h4 className="text-3xl font-Jost text-green-800 mb-3">
                        5. Peaty Soil
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold">
                          Best for: Acid-loving plants like blueberries,
                          azaleas, and ferns.
                        </span>
                        <br />
                        Peaty soil is rich in organic material and moisture.
                        Common in cooler climates, it may require lime to reduce
                        acidity, but it offers ideal conditions for specialty
                        plants.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="max-w-5xl mx-auto space-y-16 mt-30">
                  <div className="text-center">
                    <h2 className="text-4xl font-bold text-green-700 mb-2">
                      Fertilizers
                    </h2>
                    <p className="text-lg text-gray-600 font-medium">
                      Understanding different types of fertilizers for healthy
                      plant growth
                    </p>
                  </div>

                  <div data-aos="fade-up">
                    <h3 className="text-3xl font-bold text-green-800 mb-4 font-Jost">
                      1. Organic Fertilizers
                    </h3>
                    <p className="text-gray-700 mb-4 italic">
                      Natural, eco-friendly, and sustainable
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>
                        <span className="font-semibold">Compost:</span> Made
                        from decomposed kitchen and garden waste. Adds organic
                        matter and beneficial microbes.
                      </li>
                      <li>
                        <span className="font-semibold">Bone Meal:</span> Rich
                        in phosphorus — helps in root and flower development.
                      </li>
                      <li>
                        <span className="font-semibold">Blood Meal:</span> High
                        in nitrogen — boosts leafy green growth.
                      </li>
                      <li>
                        <span className="font-semibold">Fish Emulsion:</span> A
                        liquid fertilizer high in nitrogen, ideal for herbs and
                        leafy plants.
                      </li>
                    </ul>
                  </div>

                  <div data-aos="fade-up">
                    <h3 className="text-3xl font-bold text-green-800 mb-4 font-Jost">
                      2. Inorganic (Synthetic) Fertilizers
                    </h3>
                    <p className="text-gray-700 mb-4 italic">
                      Fast-acting nutrient boost
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>
                        <span className="font-semibold">NPK Fertilizers:</span>{" "}
                        Contain Nitrogen (N), Phosphorus (P), and Potassium (K).
                        Choose ratios based on plant needs:
                        <ul className="list-[circle] ml-6 mt-2 space-y-1">
                          <li>
                            <span className="font-semibold">High N:</span> For
                            leafy greens (e.g., spinach)
                          </li>
                          <li>
                            <span className="font-semibold">High P:</span> For
                            root vegetables (e.g., carrots, beets)
                          </li>
                          <li>
                            <span className="font-semibold">Balanced NPK:</span>{" "}
                            For flowering plants and general use
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="font-semibold">
                          Slow-Release Pellets:
                        </span>{" "}
                        Provide nutrients over time — ideal for containers or
                        low-maintenance beds.
                      </li>
                    </ul>
                  </div>

                  <div data-aos="fade-up">
                    <h3 className="text-3xl font-bold text-green-800 mb-4 font-Jost">
                      3. Specialized Fertilizers
                    </h3>
                    <p className="text-gray-700 mb-4 italic">
                      Tailored for specific plants
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>
                        <span className="font-semibold">Tomato Feed:</span> Rich
                        in potassium to boost fruiting
                      </li>
                      <li>
                        <span className="font-semibold">Rose Fertilizer:</span>{" "}
                        Boosts blooming and disease resistance
                      </li>
                      <li>
                        <span className="font-semibold">
                          Citrus Fertilizer:
                        </span>{" "}
                        High in nitrogen with added micronutrients like
                        magnesium and zinc
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Pesticides" && (
            <div className="max-w-5xl mx-auto space-y-10 bg-green-50 rounded-lg p-10">
              <div className="text-center mb-20">
                <h2 className="text-6xl font-bold font-Jost mb-5">
                  Pesticides
                </h2>
                <p className="text-gray-600 text-lg font-Jost">
                  Learn how to protect your plants naturally or chemically from
                  pests while maintaining a healthy garden ecosystem.
                </p>
              </div>

              <div className="space-y-12">
                <div className="mb-20">
                  <h3 className="text-3xl font-bold text-green-800 mb-6 font-Jost">
                    1. Natural Pesticides
                  </h3>
                  <p className="text-gray-700 mb-10">
                    Eco-friendly methods that protect beneficial insects and
                    improve soil health.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    <div
                      className="border-green-200 border-2 shadow-md p-4 rounded-xl flex flex-col items-center text-center"
                      data-aos="fade-up"
                    >
                      <img
                        src={neem}
                        alt="Neem Oil"
                        className="h-36 object-cover rounded-md mb-4"
                      />
                      <p>
                        <span className="font-semibold">Neem Oil:</span>{" "}
                        Disrupts insect growth and feeding, extracted from the
                        neem tree.
                      </p>
                    </div>

                    <div
                      className="border-green-200 border-2 shadow-md p-4 rounded-xl flex flex-col items-center text-center"
                      data-aos="fade-up"
                    >
                      <img
                        src={isoap}
                        alt="Insecticidal Soap"
                        className="h-36 object-cover rounded-md mb-4"
                      />
                      <p>
                        <span className="font-semibold">
                          Insecticidal Soap:
                        </span>{" "}
                        Kills soft-bodied pests like aphids, mites, and
                        whiteflies on contact.
                      </p>
                    </div>

                    <div
                      className="border-green-200 border-2 shadow-md p-4 rounded-xl flex flex-col items-center text-center"
                      data-aos="fade-up"
                    >
                      <img
                        src={garlic}
                        alt="Garlic Spray"
                        className="h-36 object-cover rounded-md mb-4"
                      />
                      <p>
                        <span className="font-semibold">Garlic Spray:</span>{" "}
                        Natural repellent with antifungal and antibacterial
                        properties.
                      </p>
                    </div>

                    <div
                      className="border-green-200 border-2 shadow-md p-4 rounded-xl flex flex-col items-center text-center"
                      data-aos="fade-up"
                    >
                      <img
                        src={earth}
                        alt="Diatomaceous Earth"
                        className="h-36 object-cover rounded-md mb-4"
                      />
                      <p>
                        <span className="font-semibold">
                          Diatomaceous Earth:
                        </span>{" "}
                        Damages exoskeletons of crawling pests, leading to
                        dehydration.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-green-800 mb-6 font-Jost">
                    2. Chemical Pesticides
                  </h3>
                  <p className="text-gray-700 mb-10">
                    Effective for severe infestations. Use cautiously to avoid
                    harming the environment.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    <div
                      className="border-green-200 border-2 shadow-md p-4 rounded-xl flex flex-col items-center text-center"
                      data-aos="fade-up"
                    >
                      <img
                        src={sys}
                        alt="Systemic Insecticides"
                        className="h-36 object-cover rounded-md mb-4"
                      />
                      <p>
                        <span className="font-semibold">
                          Systemic Insecticides:
                        </span>{" "}
                        Absorbed by the plant to kill pests from within.
                      </p>
                    </div>

                    <div
                      className="border-green-200 border-2 shadow-md p-4 rounded-xl flex flex-col items-center text-center"
                      data-aos="fade-up"
                    >
                      <img
                        src={spray}
                        alt="Contact Sprays"
                        className="h-36 object-cover rounded-md mb-4"
                      />
                      <p>
                        <span className="font-semibold">Contact Sprays:</span>{" "}
                        Kill pests on direct contact. Best for visible
                        infestations.
                      </p>
                    </div>

                    <div
                      className="border-green-200 border-2 shadow-md p-4 rounded-xl flex flex-col items-center text-center"
                      data-aos="fade-up"
                    >
                      <img
                        src={fungicide}
                        alt="Fungicides"
                        className=" h-36 object-cover rounded-md mb-4"
                      />
                      <p>
                        <span className="font-semibold">Fungicides:</span>{" "}
                        Target mildew and blight. Use according to label
                        instructions.
                      </p>
                    </div>

                    <div
                      className=" border-green-200 border-2 shadow-md p-4 rounded-xl flex flex-col items-center text-center"
                      data-aos="fade-up"
                    >
                      <img
                        src={herbicide}
                        alt="Herbicides"
                        className="h-36 object-cover rounded-md mb-4"
                      />
                      <p>
                        <span className="font-semibold">Herbicides:</span>{" "}
                        Manage weeds. Apply with care to avoid harming wanted
                        plants.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Seeds" && (
            <div
              className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10"
              data-aos="zoom-in"
            >
              <div className="max-w-6xl mx-auto space-y-12 bg-green-50 p-10 rounded-lg">
           
                <div className="text-center">
                  <h2 className="text-6xl font-bold font-Jost mb-3 text-green-800">
                    Seeds
                  </h2>
                  <p className="text-gray-600 text-lg font-Jost">
                    Get the best seed recommendations for your space—flowers,
                    vegetables, or herbs suited for small-scale gardens.
                  </p>
                </div>

              
                <p className="text-gray-700 leading-relaxed font-Jost text-center max-w-3xl mx-auto">
                  Whether you're working with a balcony, backyard, or
                  windowsill, choosing the right seeds can make all the
                  difference in a thriving garden. Tailored for compact
                  environments, these seed types are perfect for raised beds,
                  pots, or even recycled containers.
                </p>

             
                <div>
                  <h3 className="text-3xl font-bold text-green-800 mb-4">
                    🌼 Flower Seeds
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos = "fade-up">
                    {[
                      {
                        img: margigold,
                        name: "Marigolds",
                        desc: "Bright, resilient, and fast-growing flowers that repel pests and attract pollinators.",
                      },
                      {
                        img: zinnias,
                        name: "Zinnias",
                        desc: "Easy to grow and available in a wide range of colors; perfect for bouquets and border planting.",
                      },
                      {
                        img: sunflower,
                        name: "Sunflowers",
                        desc: "These tall beauties bring drama to your garden while supporting beneficial insects and birds.",
                      },
                      {
                        img: nas,
                        name: "Nasturtiums",
                        desc: "Edible flowers with vibrant petals and peppery leaves; great for container gardening and natural pest control.",
                      },
                    ].map(({ img, name, desc }) => (
                      <div className="bg-white rounded-xl shadow-md p-4 text-center">
                        <img
                          src={img}
                          alt={name}
                          className="h-32 w-full object-cover rounded-md mb-2"
                        />
                        <p className="font-semibold text-green-700">{name}</p>
                        <p className="text-sm text-gray-600">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

              
                <div>
                  <h3 className="text-3xl font-bold text-green-800 mb-4">
                    🥕 Vegetable Seeds
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos = "fade-up">
                    {[
                      {
                        img: tomato,
                        name: "Cherry Tomatoes",
                        desc: "Compact, prolific, and perfect for pots—these sweet tomatoes are great fresh or in salads.",
                      },
                      {
                        img: carrot,
                        name: "Baby Carrots",
                        desc: "A space-saving root crop that thrives in deep containers with loose soil.",
                      },
                      {
                        img: lettuce,
                        name: "Lettuce",
                        desc: "Fast-growing and harvestable in stages; a staple for fresh, homegrown greens.",
                      },
                      {
                        img: spinach,
                        name: "Spinach",
                        desc: "Nutritious leafy green that grows well in cooler temperatures and shaded spots.",
                      },
                    ].map(({ img, name, desc }) => (
                      <div className="bg-white rounded-xl shadow-md p-4 text-center">
                        <img
                          src={img}
                          alt={name}
                          className="h-32 w-full object-cover rounded-md mb-2"
                        />
                        <p className="font-semibold text-green-700">{name}</p>
                        <p className="text-sm text-gray-600">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

              
                <div>
                  <h3 className="text-3xl font-bold text-green-800 mb-4">
                    🌿 Herb Seeds
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos = "fade-up">
                    {[
                      {
                        img: basil,
                        name: "Basil",
                        desc: "A favorite in Mediterranean dishes; thrives in sunlight and adds aromatic flair to meals.",
                      },
                      {
                        img: cilantro,
                        name: "Cilantro",
                        desc: "Excellent for salsas and curries; grows quickly but prefers cooler temperatures.",
                      },
                      {
                        img: parsley,
                        name: "Parsley",
                        desc: "Versatile herb rich in vitamins; grows well in both sun and partial shade.",
                      },
                      {
                        img: mint,
                        name: "Mint",
                        desc: "Refreshing and great for teas and desserts; best grown in containers to prevent spreading.",
                      },
                    ].map(({ img, name, desc }) => (
                      <div className="bg-white rounded-xl shadow-md p-4 text-center">
                        <img
                          src={img}
                          alt={name}
                          className="h-32 w-full object-cover rounded-md mb-2"
                        />
                        <p className="font-semibold text-green-700">{name}</p>
                        <p className="text-sm text-gray-600">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                
                <div className="bg-white border border-green-300 p-5 rounded-xl shadow-sm" data-aos = "fade-up">
                  <p className="text-green-800 font-semibold text-lg mb-2">
                    🌱 Tips for Seed Success:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                      Choose <strong>non-GMO</strong> and{" "}
                      <strong>heirloom seeds</strong> when possible for better
                      flavor and sustainability.
                    </li>
                    <li>
                      Check each plant’s <strong>sunlight needs</strong> and{" "}
                      <strong>maturity time</strong>.
                    </li>
                    <li>
                      Use a <strong>seed-starting mix</strong> and keep soil
                      consistently moist during germination.
                    </li>
                    <li>
                      Label your containers to keep track of what’s planted
                      where.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>

      <button onClick={scrollToTop} className="fixed bottom-10 right-10 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300 w-[50px] h-[50px] flex items-center justify-center hover:cursor-pointer">
      <i className="bi bi-arrow-up text-xl"></i>

     </button>
    </>
  );
};

export default Essential;
