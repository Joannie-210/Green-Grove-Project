import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Leaf } from "lucide-react";
import Potss from "../assets/potss.jpeg";

export default function PotsShowcase() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [pots, setPots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeMat, setActiveMat] = useState("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

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

  const uniqueMaterials = useMemo(
    () => ["All", ...new Set(pots.map((p) => p.material.split(" ")[0]))],
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
      [p.name, p.bestFor.join(" ")].join(" ").toLowerCase().includes(query.toLowerCase())
    );
  }, [pots, activeMat, query]);

  if (loading) {
    return (
      <section className="py-20 text-center">
        <span className="loader"></span>
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
    <section className="max-w-8xl mx-auto relative">
      {/* Hero Banner */}
      <div
        className="relative bg-cover bg-center bg-fixed flex items-center justify-center rounded-bl-[40px] sm:rounded-bl-[100px] h-[60vh] sm:h-[80vh] lg:h-screen"
        style={{ backgroundImage: `url(${Potss})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/60 rounded-bl-[40px] sm:rounded-bl-[100px]"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Pots & Containers
          </h1>
        </div>
      </div>

      {/* Intro */}
      <header className="mb-10 text-center mt-20 space-y-4 px-4">
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-green-700">
          Find the Right Pot for Every Plant
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-md">
          Whether you're growing herbs on your kitchen shelf or ferns on your balcony,
          our curated collection of pots combines form and function to support your plant's growth.
        </p>
      </header>

      {/* Search and Filter */}
      <div className="flex flex-col px-5 sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
        <input
          type="text"
          placeholder="Search by name or suitable plant..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border-2 border-green-500 text-green-700 rounded-full px-4 py-2 w-full sm:w-1/2 lg:w-1/3 focus:ring-green-600 focus:border-green-600"
        />

        <div className="flex flex-wrap gap-2">
          {uniqueMaterials.map((mat) => (
            <button
              key={mat}
              onClick={() => setActiveMat(mat)}
              className={`capitalize px-3 py-2 rounded-full text-sm border transition ${
                mat === activeMat
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-green-50 border-green-500 text-green-700 hover:bg-green-100"
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>

      {/* Pot Grid */}
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
              className="cursor-pointer bg-white rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col overflow-hidden h-full"
            >
              <img
                src={pot.image}
                alt={pot.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-semibold text-lg mb-2 text-green-800">{pot.name}</h3>
                <p className="text-sm text-gray-600 line-clamp-3 flex-1">{pot.benefits}</p>
                <div className="flex flex-wrap gap-1 mt-auto">
                  {pot.bestFor.slice(0, 3).map((plant) => (
                    <span
                      key={plant}
                      className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full capitalize"
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

      {/* Empty State */}
      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-20">
          No pots match your criteria. Try different keywords or categories.
        </p>
      )}

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-10 right-10 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300 w-[50px] h-[50px] flex items-center justify-center"
      >
        ↑
      </button>

      {/* Modal Details */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white max-w-md w-full rounded-lg shadow-lg p-6 relative z-10"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              >
                <X size={20} />
              </button>
              <img src={selected.image} alt={selected.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h2 className="text-xl font-bold text-green-800 mb-2">{selected.name}</h2>
              <p className="text-sm text-gray-600 mb-4">{selected.benefits}</p>
              <div className="text-sm text-gray-800">
                <p><strong>Material:</strong> {selected.material}</p>
                <p><strong>Best For:</strong> {selected.bestFor.join(", ")}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
