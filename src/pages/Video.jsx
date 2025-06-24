import React, { useState } from "react";
import gardvid from "../assets/gardVid.mp4";

const Video = () => {
  const allVideos = [
    {
      name: "Perfect steps to remove invasive plants from your garden",
      desc: "Discover the 4 best methods to remove invasive plants from your garden.",
      video: "https://www.youtube.com/embed/DQdDDCBTwbU?si=A9eY8_t-1ycRE6bz",
    },
    {
      name: "Plant's you can't kill",
      desc: "Discover the plants for beginners that shouldn't be killed in your Garden.",
      video: "https://www.youtube.com/embed/7C3IUA8F31M?si=bJFRnDwOkEl94dWe",
    },
    {
      name: "Most beautiful Flowers",
      desc: "If your pulse quickens at the sight of a dogwood or peony in full bloom, this is the episode for you.",
      video: "https://www.youtube.com/embed/SFfw-PWBc_8?si=cKoCODptvzSbIJ3y",
    },
    {
      name: "Beneficial Host Plants for Pollinators",
      desc: "We will be diving into the essential role host plants play in supporting bees, butterflies, hummingbirds, and other pollinators.",
      video: "https://www.youtube.com/embed/pUXKcCJ3JPY?si=Z6xbn2h9pOkRfTdZ",
    },
    {
      name: "Great Foundation Plants",
      desc: "We will be discussing plants that are perfect for planting around your home’s foundation.",
      video: "https://www.youtube.com/embed/hiFsgKr2xZg?si=kXXs-0XwVxAhKNzj",
    },
    {
      name: "Pollinator Plants",
      desc: "Today we will be discussing 11 of our favorite pollinating plants.",
      video: "https://www.youtube.com/embed/0pAqyrAlU4A?si=P1xKbOinb5dHNGb2",
    },
    {
      name: "Tough-As-Nails Plants",
      desc: "We found some stars that thrive in heat, lean soil, and even some selections for the most dreaded of conditions: dry shade.",
      video: "https://www.youtube.com/embed/dgOVb9_zp1U?si=MNt6AXj5iPNdqadA",
    },
    {
      name: "Compact Plants for Tight Spaces",
      desc: "On today's episode, we will be talking about compact plants that are perfect for tighter spaces.",
      video: "https://www.youtube.com/embed/vpdVDD0ciVo?si=Kt9EWEwFgIMKWemx",
    },
    {
      name: "Great Native Grasses",
      desc: "Today, we will be discussing about the North American native species of grass that brings impact and beauty to a garden design.",
      video: "https://www.youtube.com/embed/LbMojY2K2qk?si=F09Mgw4vIEypNual",
    },
    {
      name: "Favorite Succulents",
      desc: "On today's episode, we will share some of our favorite succulents, including a few unforgettable oddballs.",
      video: "https://www.youtube.com/embed/o5Xtj4Xi_2Q?si=i0_QHfBs5WklAiNp",
    },
    {
      name: "Water-Wise Perennials",
      desc: "On today's episode, we will be talking about perennials that live through drought and have traits that allow them to sail through long periods of no rain and/or soils.",
      video: "https://www.youtube.com/embed/IhisSCljdm8?si=yBfUJb95YWjZJOrL",
    },
    {
      name: "Spring Combos",
      desc: "We’re focusing on plant combinations (of two, three, or perhaps even four) that look incredible in spring when grouped together.",
      video: "https://www.youtube.com/embed/IhisSCljdm8?si=oUDu1Ir7_DbSVGJJ",
    },


    {
      name: "How to Thin Herb Seedlings ",
      desc: "Here we will discuss about thinning, or reducing the number of seedlings to prevent overcrowding and to allow the strongest plants to thrive.",
      video: "https://www.youtube.com/embed/-BUTq_BEMf8?si=hl0-9FI5et0J33fU",
    },
    {
      name: "Green Plants",
      desc: "Today we’re talking about plants that are stunners despite being “just green.” ",
      video: "https://www.youtube.com/embed/5D97ltLbAug?si=K4C5W9JeP1SD6iXb",
    },
    {
      name: "Favorite Spring Greens",
      desc: "Growing spring greens is an easy, satisfying project that takes very little time and very little garden space—you can even grow greens in containers!",
      video: "https://www.youtube.com/embed/9nSBp5CwYds?si=2KFfuhnv50hbt8gA",
    },
    {
      name: "Early Risers",
      desc: "We’re talking about plants that put on a show in the last gasps of winter and first few weeks of spring.",
      video: "https://www.youtube.com/embed/cZsM9ODmET0?si=AUJVy1hNWogCV9-N",
    },
    {
      name: "Wicked Plants",
      desc: "So we’ll be talking about an assortment of plants that are spiky, darkly pigmented, stinky, or perhaps even the most wicked of all—invasive.",
      video: "https://www.youtube.com/embed/xhx-WKM86CY?si=5ejOobT5ysbSCAQh",
    },
    {
      name: "Plants We Should Like, but Don’t",
      desc: "They’re tough, they’re hardy, they thrive in almost any location. So why don’t we love them? Give this episode a listen to hear.",
      video: "https://www.youtube.com/embed/az84yGgdggg?si=V9bKh7sWCWYpnaXY",
    },
    {
      name: "Big and Bold Plants",
      desc: "On today’s program you’ll hear all about plants that really stand out in the last row of the garden choir.",
      video: "https://www.youtube.com/embed/QEx0W3Q-eGM?si=Mh0-9fNRDZg4J-jG",
    },
    {
      name: "Best Seed Sources",
      desc: "On today's episode, we will be talking about the best seed sources.",
      video: "https://www.youtube.com/embed/9lRMivfLoS4?si=BSarWfs-PuPzwKIq",
    },
    {
      name: "Top 9 Plants You Should Always Grow",
      desc: "Grow these essential crops in your garden EVERY year if you want reliable, proven plants that throw out a ton of produce.",
      video: "https://www.youtube.com/embed/3_Wt0O9--34?si=IrSLxmZaWx_Su5LQ",
    },
    {
      name: "How to Grow Sunflower Seeds",
      desc: "Full step by step procedure on how to grow Sunflower Seed.",
      video: "https://www.youtube.com/embed/_Cg5jTpF29w?si=abDicGoatyjQ-ZwB",
    },
    {
      name: "How to Grow Apple Seeds",
      desc: "Full step by step procedure on how to grow an Apple Seed.",
      video: "https://www.youtube.com/embed/W06Utu7PSLA?si=ejW1eLEmEDq8x30F",
    },
    {
      name: "Top 12 Essential Tools For both Beginners and Experts Gardeners",
      desc: "We’re focusing on the top essentials toolkit that every gardener should have, whether you’re a beginner or an expert.",
      video: "https://www.youtube.com/embed/8JwLnl-6l_g?si=MRGjutGX7kRiNKKj",
    },


    {
      name: "Best Cutting-Garden Flowers",
      desc: "Today we’re talking about plants (perennials, annuals, and even shrubs) that we grow specifically for their flower power.",
      video: "https://www.youtube.com/embed/uir4-j_k3ks?si=XeJBnK_PaCkyAZWV",
    },
    {
      name: "Tender Plants Worth Saving",
      desc: "Tropical plants thrive in summer, but when frost looms, gardeners in colder zones must decide which tender beauties are worth bringing indoors. This episode helps you make the call.",
      video: "https://www.youtube.com/embed/TUn_VNzI4tg?si=mG4DYtBZ4YlP61kM",
    },
    {
      name: "Dividing Perennials Step-by-Step",
      desc: "Explaining that dividing perennials is an easy and affordable way to propagate more plants, but it requires knowing the right method and timing",
      video: "https://www.youtube.com/embed/IQiqYmZXgHI?si=Me67VAyWVtGy7pfB",
    },
    {
      name: "Best Gift Plants",
      desc: "Overall, this content combines gardening tips with lifestyle advice, focusing on thoughtful plant gifting.",
      video: "https://www.youtube.com/embed/kZS-CN40EKU?si=hTBa_i6DLgehOKWf",
    },
    {
      name: "Underrated Herbs",
      desc: "This episode explores herbs that are often overlooked but are still valuable in cooking or gardening.",
      video: "https://www.youtube.com/embed/3qnsMByHjzs?si=0Un8yxJYLtYEbZRp",
    },
    {
      name: "How to Clean and Take Care of Your Equipments",
      desc: "Short, Quick, but informative video onhow to properly clean and take care ofyour equipments.",
      video: "https://www.youtube.com/embed/YzpKDkIOkJM?si=6lLuvCRqqM-29kTg",
    },
    {
      name: "How to make compost",
      desc: "How to make organic compost(Fertilizers) at home",
      video: "https://www.youtube.com/embed/mDIVpJgjoXQ?si=FO82Vdm_IVFQEJcN",
    },
    {
      name: "Top 8 Liquid Fertilizers",
      desc: "Dive in with Us and Discover the Top 8 Liquid Fertilizers to use.",
      video: "https://www.youtube.com/embed/M4wxhjYbl9E?si=9-qVAPCoAQyJCbi6",
    },
    {
      name: "Top 14 Organic Fertilizers and how to use them",
      desc: "Ranking top 14 and a Step by Step procedure on how to use organic fertilizers.",
      video: "https://www.youtube.com/embed/NcMUOCU-R7I?si=tQ7Ez-awAUOUOEEf",
    },
    {
      name: "How to choose rights soil for your plants",
      desc: "Guide on how to choose the right and best soils for your plants",
      video: "https://www.youtube.com/embed/3IG0qSABMuI?si=yJ_I0pPDi1knhnhY",
    },
    {
      name: "Top 2 Natural Insecticides for your Garden",
      desc: "In this video, we will be showing you the best insecticides every garden should have.",
      video: "https://www.youtube.com/embed/_LlgV2vbuv0?si=r3XH5riQcL0oCSW_",
    },
    {
      name: "Using Neem Oil to control pests",
      desc: "We’re focusing on using a natural pesticdes to control pests in your garden.",
      video: "https://www.youtube.com/embed/fdD5EH5gWYI?si=_duRsOqSykYi_biU",
    },
  ];

  const chunkSize = 12;
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(allVideos.length / chunkSize);
  const currentVideos = allVideos.slice(page * chunkSize, (page + 1) * chunkSize);

  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPages - 1));

  return (
    <>
      <div className="relative w-full min-h-screen md:h-[400px] lg:h-[500px] overflow-hidden">
        <video
          src={gardvid}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold text-white">
            Watch, Learn, Grow!
          </h1>
         
        </div>
      </div>

      <div className="px-6 py-10 md:px-10 md:py-20">
        <h2 className="font-Poppins text-xl lg:text-2xl md:text-2xl sm:text-2xl mb-5 text-black">Watch our videos here:</h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {currentVideos.map(({ name, desc, video }, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md hover:shadow-lg transition-all overflow-hidden"
            >
              <div className="p-5">
                <div className="aspect-video w-full rounded-md overflow-hidden mb-4">
                  <iframe
                    src={video}
                    title={name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-none"
                  ></iframe>
                </div>
                <h3 className="text-lg font-Poppins mb-2 font-semibold text-green-500">{name}</h3>
                <p className="text-gray-600 text-[13px] font-Poppins mb-4">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-6 mt-10">
          <button
            onClick={handlePrev}
            disabled={page === 0}
            className=" cursor-pointer text-green-500 disabled:opacity-50"
          >
           Prev
          </button>
          <span className="text-green-800 font-semibold">
            Page {page + 1} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={page === totalPages - 1}
            className="text-green-500 cursor-pointer disabled:opacity-50"
          >
            Next 
          </button>
        </div>
      </div>
    </>
  );
};

export default Video;
