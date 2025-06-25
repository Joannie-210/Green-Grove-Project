import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, X } from "lucide-react";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([
    { name: "Joanna", text: "Amazing experience! Highly recommend. Green Grove taught me more about gardening that any bootcamp ever will. Their resources are accessible and teachimg metod, simplified!", rating: 5 },
    { name: "Mike", text: "Loved every moment of it!", rating: 4 },
    { name: "Ada", text: "The design is beautiful and easy to use.", rating: 5 },
  ]);

  const [formData, setFormData] = useState({ name: "", text: "", rating: 5 });
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setIndex((prev) => (prev + 1) % reviews.length), 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews((prev) => [formData, ...prev]);
    setFormData({ name: "", text: "", rating: 5 });
    setShowModal(false);
    setIndex(0);
  };

  const nextSlide = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 relative">
      <h2 className="text-4xl font-bold text-center mb-12 text-green-700">
        Voices from the Community
      </h2>

      <div className="relative  border-t-1 border-gray-200 bg-white/30 shadow-lg p-10 mb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold text-gray-800">{reviews[index].name}</h3>
            <p className="my-4 text-gray-700 text-sm sm:text-lg italic max-w-2xl mx-auto">“{reviews[index].text}”</p>
            <div className="flex justify-center gap-1 mt-2">
              {[...Array(reviews[index].rating)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between mt-8">
          <button onClick={prevSlide} className="px-4 py-2 shadow-sm cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200">
             Prev
          </button>
          <button onClick={nextSlide} className="px-4 py-2 shadow-sm cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200">
            Next 
          </button>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-500 text-white px-6 py-3 rounded-full cursor-pointer hover:opacity-70 transition"
        >
          Leave a Review
        </button>
      </div>


      {showModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl py-8 shadow-xl w-[90%] max-w-lg relative"
          >
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4">
              <X className="w-5 h-5 cursor-pointer text-gray-500 hover:text-gray-700" />
            </button>
            <h3 className="text-2xl font-bold mb-2 text-center">Write a Review</h3>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="p-3 w-full rounded-md border"
                required
              />
              <textarea
                placeholder="Your Review"
                value={formData.text}
                onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                className="p-3 rounded-md border"
                rows={3}
                required
              ></textarea>
              <select
                value={formData.rating}
                onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                className="p-3 rounded-md border"
              >
                {[5, 4, 3, 2, 1].map((num) => (
                  <option key={num} value={num}>{num} Star{num > 1 && 's'}</option>
                ))}
              </select>
              <button
                type="submit"
                className="bg-green-500 mt-6 text-white py-2 rounded-full hover:bg-gray-800 transition"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ReviewSection;
