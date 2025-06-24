import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Leaf, CheckCircle } from "lucide-react";
import Potss from '../assets/potss.jpeg'

export default function PotsShowcase() {
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

useEffect(() => {
  window.scrollTo(0, 0);
}, []);


  const [pots, setPots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch("/pots.json")
      .then((res) => {
        if (!res.ok) throw new Error("Unable to load pots.json");
        return res.json();
      })
      .then((data) => setPots(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const [activeMat, setActiveMat] = useState("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const uniqueMaterials = useMemo(
    () => [
      "All",
      ...Array.from(new Set(pots.map((p) => p.material.split(" ")[0]))),
    ],
    [pots]
  );

  const filtered = useMemo(() => {
    const byMaterial =
      activeMat === "All"
        ? pots
        : pots.filter((p) =>
            p.material.toLowerCase().includes(activeMat.toLowerCase())
          );

    if (!query) return byMaterial;

    return byMaterial.filter((p) =>
      [p.name, p.bestFor.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [pots, activeMat, query]);

  if (loading) {
    return (
      <section className="py-20 text-center">
        <p className="text-gray-500 dark:text-gray-400">Loading pots…</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 text-center">
        <p className="text-red-600 dark:text-red-400">{error}</p>
      </section>
    );
  }

  return (
    <section className="max-w-8xl mx-auto">
      <div
              className="relative bg-cover bg-center bg-fixed flex items-center justify-center rounded-bl-[40px] sm:rounded-bl-[100px] h-[60vh] sm:h-[80vh] lg:h-screen"
              style={{ backgroundImage: `url(${Potss})` }}
              data-aos="fade-up"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/60 rounded-bl-[40px] sm:rounded-bl-[100px]"></div>
              <div className="relative z-10 text-center px-4">
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Pots & Containers</h1>
              </div>
            </div>
      <header className="mb-10 text-center space-y-4">
        <h1 className="text-4xl mt-20 sm:text-5xl font-extrabold tracking-tight text-green-700">
          Pots &amp; Containers
        </h1>
        <p className="text-gray-700 text-md max-w-2xl mx-auto">
          Find the perfect vessel for every plant—from drought‑tolerant
          succulents to thirsty ferns.
        </p>
      </header>

 
      <div className="flex flex-col px-5 sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
        <input
          type="text"
          placeholder="Search by name or plant…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className=" border-2 border-green-500  text-green-700 rounded-full px-3 py-2 w-full sm:w-1/2 lg:w-1/3 focus:ring-green-600 focus:border-green-600 "
        />

        <div className="flex flex-wrap gap-2">
          {uniqueMaterials.map((mat) => (
            <button
              key={mat}
              onClick={() => setActiveMat(mat)}
              className={`capitalize px-3 py-2 rounded-full text-sm transition-colors border ${
                mat === activeMat
                  ? "bg-green-600 text-white  border-green-600"
                  : " bg-green-50 border-green-500  text-green-700 hover:bg-green-50 dark:hover:bg-green-600/10"
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid bg-green-100 pt-12 pb-20 px-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((pot) => (
          <motion.div
            key={pot.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div
              onClick={() => setSelected(pot)}
              className="cursor-pointer bg-white dark:bg-white rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col overflow-hidden w-full h-full"
            >
              <img
                src={pot.image}
                alt={pot.name}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-semibold text-lg mb-2 text-green-800 dark:text-green-700">
                  {pot.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-4 flex-1">
                  {pot.benefits}
                </p>
                <div className="flex flex-wrap gap-1 mt-auto">
                  {pot.bestFor.slice(0, 3).map((plant) => (
                    <span
                      key={plant}
                      className="text-xs bg-green-100  text-green-500  px-2 py-0.5 rounded-full capitalize"
                    >
                      {plant}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      
      {filtered.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-20">
          No pots match your criteria.
        </p>
      )}
   <button onClick={scrollToTop} className="fixed bottom-10 right-10 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300 w-[50px] h-[50px] flex items-center justify-center hover:cursor-pointer">
      <i className="bi bi-arrow-up text-xl"></i>

     </button>
    </section>
  );
}
