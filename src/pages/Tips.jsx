import React from 'react';
import aboutus from '../assets/aboutusimg.jpg';
import AOS from 'aos';
import { useEffect } from 'react';
import Wat from '../assets/watplant.jpeg'
import Insp from '../assets/inspect.jpeg'


const dos = [
  'Water early in the morning to reduce evaporation.',
  'Add compost every season to keep soil healthy.',
  'Mulch exposed soil to conserve moisture and suppress weeds.',
  'Rotate crops each year to avoid nutrient depletion.',
  'Sterilize pruning tools between plants to prevent disease spread.',
];

const donts = [
  'Don’t flood seedlings—soggy roots invite rot.',
  'Never prune more than one‑third of a shrub at once.',
  'Avoid chemical pesticides during pollinator activity (mid‑morning).',
  'Don’t yank weeds when soil is dry; moisten first to pull roots cleanly.',
  'Never plant shade‑lovers in full afternoon sun.',
];

const mistakes = [
  { title: 'Over‑Fertilizing', text: 'Too much nitrogen gives lush leaves but weak roots and fewer blooms.' },
  { title: 'Planting Too Deep', text: 'Seedlings struggle if crowns or root collars are buried.' },
  { title: 'Ignoring Soil pH', text: 'Many nutrient issues trace back to pH outside 6‑7.' },
  { title: 'Crowding Plants', text: 'Poor airflow invites mildew and pests.' },
];

const bestPractices = [
  { title: 'Soak, Don’t Spray', text: 'Use drip or soaker hoses so foliage stays dry and disease‑free.' },
  { title: 'Companion Planting', text: 'Pair basil with tomatoes or marigolds with veggies to deter pests naturally.' },
  { title: 'Successive Sowing', text: 'Stagger plantings of lettuce every two weeks for harvest all season.' },
  { title: 'Keep a Garden Journal', text: 'Record what varieties thrive and when problems occur—next season gets easier.' },
];

const Tips = () => {
  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false,
      })
    }, [])

    useEffect(() => {
  window.scrollTo(0, 0);
}, []);


    const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

  return (
    <div className="mx-auto w-full max-w-7xl px-0 sm:px-0 lg:px-0">
   
      <div
        className="relative bg-cover bg-center bg-fixed flex items-center justify-center rounded-bl-[60px] sm:rounded-bl-[100px] h-[60vh] sm:h-[80vh] lg:h-screen"
        style={{ backgroundImage: `url(${aboutus})` }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/60 to-black/60 rounded-bl-[60px] sm:rounded-bl-[100px]" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Gardening&nbsp;Tips
          </h1>
        </div>
      </div>

   
      <section className="py-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-800 mb-12">
          Do’s&nbsp;&amp;&nbsp;Don’ts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Do's */}
          <div className="bg-white shadow-md p-8">
            <h3 className="text-2xl font-bold text-green-700 mb-4">✔️ Do</h3>
            <ul className="space-y-3 list-disc list-inside">
              {dos.map((tip, i) => (
                <li key={i} className="text-gray-700">{tip}</li>
              ))}
            </ul>
          </div>
          {/* Don'ts */}
          <div className="bg-white shadow-md p-8">
            <h3 className="text-2xl font-bold text-red-600 mb-4">❌ Don’t</h3>
            <ul className="space-y-3 list-disc list-inside">
              {donts.map((tip, i) => (
                <li key={i} className="text-gray-700">{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-green-50 rounded-xl shadow-inner">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-900 mb-12">
          Common Mistakes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mistakes.map(({ title, text }, i) => (
            <div key={i} className="bg-white p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-green-500 mb-2">{title}</h3>
              <p className="text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="py-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-800 mb-12">
          Best&nbsp;Practices
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* text list */}
          <div className="space-y-6">
            {bestPractices.map(({ title, text }, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-green-700 text-2xl"></span>
                <div>
                  <h3 className="font-semibold text-lg text-green-800">{title}</h3>
                  <p className="text-gray-700">{text}</p>
                </div>
              </div>
            ))}
          </div>
          {/* illustrative image */}
          <img
            src={Wat}
            alt="Gardener watering plants"
            className="rounded-xl shadow-lg w-full h-72 object-cover"
          />
        </div>
      </section>

      
      <section className="py-16 px-5 bg-green-50 rounded-xl shadow-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <img
            src={Insp}
            alt="Inspecting leaves for pests"
            className="rounded-xl shadow-lg w-full h-72 object-cover order-last lg:order-first"
          />
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-green-900 mb-6">
              Smart Pest Control
            </h2>
            <ul className="space-y-3 list-disc list-inside text-gray-800">
              <li>Inspect leaves weekly—look under the foliage where pests hide.</li>
              <li>Introduce beneficial insects like ladybugs rather than spraying broad‑spectrum chemicals.</li>
              <li>Use neem oil or insecticidal soap in the cool evening to avoid leaf burn.</li>
              <li>Alternate control methods to prevent pest resistance.</li>
            </ul>
          </div>
        </div>
      </section>
<button onClick={scrollToTop} className="fixed bottom-10 right-10 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300 w-[50px] h-[50px] flex items-center justify-center hover:cursor-pointer">
      <i className="bi bi-arrow-up text-xl"></i>

     </button>
    </div>
  );
};

export default Tips;
