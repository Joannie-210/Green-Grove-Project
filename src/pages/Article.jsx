import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fontsource/jost";
import article from "../assets/articles.jpeg";
import groot from "../assets/groot.jpg";
import pot from "../assets/flowerpot.jpeg";
import craftsy from "../assets/craftsy.jpg";
import bottles from "../assets/bottles.jpeg";
import flow1 from "../assets/flow1.jpeg";
import flow2 from "../assets/flow2.jpg";
import flow3 from "../assets/flow3.jpeg";
import flow4 from "../assets/flow4.jpeg";
import vine1 from "../assets/vine1.jpg";
import vine2 from "../assets/vine2.jpeg";
import vine3 from "../assets/vine3.jpeg";
import vine4 from "../assets/vine4.jpeg";
import plant1 from "../assets/plant1.jpeg";
import plant2 from "../assets/plant2.jpeg";
import plant3 from "../assets/plant3.jpg";
import plant4 from "../assets/plant4.jpeg";
import diy1 from "../assets/diy1.jpeg";
import diy2 from "../assets/diy2.jpg";
import diy3 from "../assets/diy3.jpg";
import diy4 from "../assets/diy4.jpg";
import herbs1 from "../assets/herbs1.png";
import herbs2 from "../assets/herbs2.jpg";
import herbs3 from "../assets/herbs3.jpg";
import herbs4 from "../assets/herbs4.jpg";

const Article = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const articles = [
    {
      image: groot,
      title: "How to Grow an Endless Supply of...",
      description:
        "Did you know you can grow ginger indoors all year long? Or that you ca...",
      link: "https://www.craftsy.com/post/how-to-grow-ginger-indoors",
      category: "Indoor Plants",
    },
    {
      image: bottles,
      title: "You Can DIY This Seed Starter Kit Wit...",
      description:
        "Even if it’s too early to plant outdoors, eager gardeners can still prep their plants...",
      link: "https://www.craftsy.com/post/diy-seed-starter-kit",
      category: "DIY",
    },
    {
      image: pot,
      title: "Build a Fairy Garden From an Old Pot!",
      description:
        "What looks like a run-of-the-mill flower pot is actually an expansive...",
      link: "https://www.craftsy.com/post/fairy-garden-diy",
      category: "DIY",
    },
    {
      image: craftsy,
      title: "Learn Something New With Craftsy a...",
      description:
        "Craftsy is teaming up with online educator The Great Courses to bring you mor...",
      link: "https://www.craftsy.com/post/discover-the-great-courses",
      category: "Learning",
    },
    {
      image: flow1,
      title: "Here's How You Can Make the Cutest DIY...",
      description:
        "Spruce up your home with a DIY terrarium! They don’t take up much space, are...",
      link: "https://www.craftsy.com/post/diy-terrarium",
      category: "DIY",
    },
    {
      image: flow2,
      title: "5 Vegetables You Can Grow in 60 Day...",
      description:
        "Impatient gardeners rejoice! If you want to grow your own veggies but are...",
      link: "https://www.craftsy.com/post/fast-growing-vegetables",
      category: "Vegetables",
    },
    {
      image: flow3,
      title: "10 Edible Flowers You Can Grow in Your...",
      description:
        "Discover 10 plants with edible flowers that make mealtime a delight for the...",
      link: "https://www.craftsy.com/post/growing-edible-flowers",
      category: "Flowers",
    },
    {
      image: flow4,
      title: "5 Must-Have Gardening Tools",
      description:
        "You can’t grow greens without having the right gear. And sure, some are...",
      link: "https://www.craftsy.com/post/must-have-gardening-tools",
      category: "Tools",
    },
    {
      image: vine1,
      title: "5 Pretty Vines You Can Grow in a Parti...",
      description:
        "Are you looking for a pretty vine to grow in your partial shade garden? Several...",
      link: "https://www.craftsy.com/post/partial-shade-vines",
      category: "Vines",
    },
    {
      image: vine2,
      title: "It Starts With a Seed: Talking With Lauri...",
      description:
        "Photo by Yoshihiro Makino. Black thumb? Think again. Edible landscape designe...",
      link: "https://www.craftsy.com/post/lauri-kranz-profile",
      category: "Learning",
    },
    {
      image: vine3,
      title: "How to Grow More Succulents Without...",
      description:
        "We love succulents — but they're so expensive! Good news: You can propagate...",
      link: "https://www.craftsy.com/post/propagating-succulents",
      category: "Succulents",
    },
    {
      image: vine4,
      title: "6 Smart Ways to DIY a Planter",
      description:
        "When the weather turns colder, you might have to bring your green babies i...",
      link: "https://www.craftsy.com/post/ways-to-diy-a-planter",
      category: "DIY",
    },
    {
      image: plant1,
      title: "How and Why You Should be Planting...",
      description:
        "The great thing about growing garlic is, well, everything! It gets plante...",
      link: "https://www.craftsy.com/post/planting-garlic-in-the-fall",
      category: "Vegetables",
    },
    {
      image: plant2,
      title: "5 Small-Space Garden Ideas for Yo...",
      description:
        "Size really doesn’t matter in gardening. Even the tiniest city gardens can b...",
      link: "https://www.craftsy.com/post/small-space-gardening-ideas",
      category: "Urban Gardening",
    },
    {
      image: plant3,
      title: "DIY a Vertical Veggie Garden and Save...",
      description:
        "If you’re living that apartment life or are short on outdoor space, we...",
      link: "https://www.craftsy.com/post/vertical-vegetable-garden",
      category: "Urban Gardening",
    },
    {
      image: plant4,
      title: "The 5 Best Vegetables to Grow...",
      description:
        "Grow a farm on your countertop and windowsill! Discover the best...",
      link: "https://www.craftsy.com/post/best-vegetables-to-grow-indoors",
      category: "Vegetables",
    },
    {
      image: diy1,
      title: "Find Your Chill With a DIY Zen Garden",
      description:
        "Manipulating sand in a peaceful zen garden is a total stress-reliever, and it...",
      link: "https://www.craftsy.com/post/diy-zen-garden",
      category: "Zen Garden",
    },
    {
      image: diy2,
      title: "5 Texture Plants That Are Fun to Touch AND...",
      description:
        "From fuzzy lamb's ear to furry red cattails, discover 5 texture plants that are...",
      link: "https://www.craftsy.com/post/texture-plants",
      category: "Sensory Plants",
    },
    {
      image: diy3,
      title: "Have You Considered Growing a Flower Carpet?",
      description:
        "Have you considered growing a flower carpet? Discover 5 sweet flowers...",
      link: "https://www.craftsy.com/post/flower-carpet",
      category: "Flowers",
    },
    {
      image: diy4,
      title: "Beginner's Guide to Growing Beans",
      description:
        "Among the easiest vegetables to grow are beans, making them ideal...",
      link: "https://www.craftsy.com/post/tips-for-growing-beans",
      category: "Vegetables",
    },
    {
      image: herbs1,
      title: "5 Incredibly Easy Herbs Foodies Should...",
      description:
        "Whether you're creating salads or roasting meats, save yourself a trip to the...",
      link: "https://www.craftsy.com/post/easy-herbs-to-grow",
      category: "Herbs",
    },
    {
      image: herbs2,
      title: "Top 10 Easy Flowers to Grow From Seed",
      description:
        "Sow seeds directly in the soil and watch these beauties bloom!",
      link: "https://www.craftsy.com/post/easy-flowers-to-grow",
      category: "Flowers",
    },
    {
      image: herbs3,
      title: "Grow A Beautiful Butterfly Garden!",
      description:
        "By growing plants that attract butterflies, you can pollinate your garden...",
      link: "https://www.craftsy.com/post/how-to-attract-butterflies",
      category: "Butterfly Garden",
    },
    {
      image: herbs4,
      title: "Planning the Perfect Vegetable Garden...",
      description:
        "Planning a vegetable garden can be tricky — there are just so many...",
      link: "https://www.craftsy.com/post/vegetable-garden-layout",
      category: "Vegetables",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...new Set(articles.map((a) => a.category))];
  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  return (
    <div>
      <div
        className="relative bg-cover bg-center bg-fixed flex items-center justify-center rounded-bl-[60px] sm:rounded-bl-[100px] h-[60vh] sm:h-[80vh] lg:h-screen"
        style={{ backgroundImage: `url(${article})` }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/60 to-black/60 rounded-bl-[60px] sm:rounded-bl-[100px]"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Gardening Articles
          </h1>
          <p className="text-white text-xl font-medium max-w-3xl">
            Read through our free articles to find tons of tips and tricks, plus
            an endless array of creative ideas to keep you inspired.
          </p>
        </div>
      </div>

      <div className="px-6 py-4 flex flex-wrap items-center gap-4">
        <label className="text-lg font-bold font-Poppins">Articles:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border font-Poppins border-gray-300 rounded-md p-2 text-sm"
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-white mt-4 px-[100px]">
        {filteredArticles.map((article, index) => (
          <div
            key={index}
            className="rounded-xl shadow-sm overflow-hidden bg-white hover:scale-105 hover:cursor-pointer transition-all mb-10"
            data-aos="fade-up"
          >
            <img
              src={article.image}
              alt="Article"
              className="w-full h-40 object-cover"
            />
            <div className="p-4 font-Poppins">
              <p className="text-lg mb-1">📄 Article</p>
              <h3 className="font-bold text-lg leading-snug mb-2">
                {article.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {article.description}
              </p>
              <a
                href={article.link}
                className="text-red-500 font-medium hover:underline"
              >
                View Content →
              </a>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300 w-[50px] h-[50px] flex items-center justify-center"
      >
        <i className="bi bi-arrow-up text-xl"></i>
      </button>
    </div>
  );
};

export default Article;
