import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import about from "../assets/us.jpg";
import aboutus from "../assets/aboutusimg.jpg";
import garden from "../assets/garden.jpg";
import boy from "../assets/boy1.png";
import book from "../assets/open-book.png";
import plant from "../assets/plant-under-sun.png";
import earth from "../assets/earth-planet.png";
import gerard from "../assets/gerard.jpg";
import boy2 from "../assets/boy2.png";
import girl from "../assets/girl1.png";
import joanna from "../assets/joanna.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fontsource/jost";
import CountUp from "react-countup";
import { geolocation } from "./About";

const About = () => {
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

  return (
    <div>
      <div
        className="relative bg-cover bg-center bg-fixed flex items-center justify-center rounded-bl-[60px] sm:rounded-bl-[100px] h-[60vh] sm:h-[80vh] lg:h-screen"
        style={{ backgroundImage: `url(${about})` }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/60 to-black/60 rounded-bl-[60px] sm:rounded-bl-[100px]"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            About Us
          </h1>
        </div>
      </div>

      <div className="px-4 py-16 sm:px-8 md:px-12 lg:px-[50px] lg:py-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr_1fr] gap-10 lg:gap-[50px]">
          <div className="flex justify-center lg:block">
            <img
              src={garden}
              className="h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl object-cover"
              alt="Garden"
            />
          </div>

          <div className="max-w-full" data-aos="fade-up">
            <div className="pt-6 sm:pt-[30px] font-Jost text-center lg:text-left">
              <h2 className="text-green-700 text-5xl sm:text-6xl lg:text-8xl font-bold">
                25
              </h2>
              <p className="text-green-700 text-lg sm:text-xl pb-4">
                Years of Experience
              </p>
              <h1 className="text-green-950 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black pb-4">
                We Make Your Home Like A Garden
              </h1>
              <p className="text-base sm:text-lg">
                With over two decades of expertise in eco-friendly landscaping,
                Green Groves transforms ordinary yards into lush, vibrant
                gardens. We combine passion, and design to bring your vision to
                life—whether it’s your backyard, rooftop, or community garden.
              </p>
            </div>
          </div>

          <div className="pt-6 font-Jost text-center lg:text-left">
            <div data-aos="fade-up" data-aos-delay="200" className="pb-8">
              <i className="bi bi-award-fill text-green-700 text-5xl sm:text-[55px]"></i>
              <h2 className="font-semibold text-green-950 text-lg sm:text-xl mt-2">
                Award Winning
              </h2>
              <p className="text-base sm:text-lg">
                Recognized nationally for our sustainable designs and
                exceptional client service.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-people-fill text-green-700 text-5xl sm:text-[55px] mt-5"></i>
              <h2 className="font-semibold text-green-950 text-lg sm:text-xl mt-2">
                Dedicated Team
              </h2>
              <p className="text-base sm:text-lg">
                Certified horticulturists and designers who love what they do.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-cover bg-center bg-fixed bg-blend-exclusion relative"
        style={{ backgroundImage: `url(${aboutus})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/55 to-black/55 bg-opacity-60"></div>

        <div className="relative z-10 px-6 py-12 sm:px-10 md:px-[80px] lg:px-[120px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            <div className="flex flex-col items-center" data-aos="fade-up">
              <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
                <CountUp end={100} duration={9} delay={1} />+
              </p>
              <p className="font-Jost text-lg sm:text-xl font-bold text-white">
                Happy Clients
              </p>
            </div>

            <div
              className="flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
                <CountUp end={1000} duration={5} delay={1} />+
              </p>
              <p className="font-Jost text-lg sm:text-xl font-bold text-white">
                Gardens Completed
              </p>
            </div>

            <div
              className="flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
                <CountUp end={100} duration={9} delay={1} />+
              </p>
              <p className="font-Jost text-lg sm:text-xl font-bold text-white">
                Dedicated Staff
              </p>
            </div>

            <div
              className="flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
                <CountUp end={1000} duration={5} delay={1} />+
              </p>
              <p className="font-Jost text-lg sm:text-xl font-bold text-white">
                Awards Received
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-15 py-20  text-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center pb-[10px] gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-700">
              Our Mission
            </h2>
            <p
              className="text-green-950 font-Jost font-extrabold text-3xl sm:text-4xl md:text-5xl max-w-full sm:max-w-md pb-10"
              data-aos="fade-up"
            >
              Helping You Grow Wherever You Are
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="bg-white p-6 rounded-xl shadow-2xl text-center transition duration-300 hover:scale-110 hover:cursor-pointer"
              data-aos="fade-up"
            >
              <img src={book} alt="" className="mx-auto mb-4 w-12 h-12" />
              <h3 className="text-2xl font-semibold mb-3 text-green-700">
                Educate Urban Gardeners
              </h3>
              <p className="text-base leading-relaxed mb-2 font-Jost">
                We provide comprehensive guides, tutorials, and tips tailored
                for beginner and urban gardeners. From soil selection to plant
                care, our content is crafted to simplify learning and eliminate
                the guesswork.
              </p>
              <p className="text-sm text-gray-600 font-Jost">
                📚 Articles on balcony setup, 🌿 seed starting tips, 🧪 organic
                pest control methods.
              </p>
            </div>

            <div
              className="bg-white p-6 rounded-xl shadow-2xl text-center transition duration-300 hover:scale-110 hover:cursor-pointer"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img src={earth} alt="" className="mx-auto mb-4 w-12 h-12" />
              <h3 className="text-2xl font-semibold mb-3 text-green-700">
                Promote Sustainable Living
              </h3>
              <p className="text-base leading-relaxed mb-2 font-Jost">
                At Green Groves, we advocate for eco-friendly habits that reduce
                waste and preserve resources. By encouraging composting,
                water-wise gardening, and local plant choices, we help you
                garden responsibly.
              </p>
              <p className="text-sm text-gray-600 font-Jost">
                ♻️ DIY compost bins, 💧 drip irrigation guides, 🌱 native plant
                selection.
              </p>
            </div>

            <div
              className="bg-white p-6 rounded-xl shadow-2xl text-center transition duration-700 hover:scale-110 hover:cursor-pointer"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src={plant}
                alt="Support Icon"
                className="mx-auto mb-4 w-12 h-12"
              />
              <h3 className="text-2xl font-semibold mb-3 text-green-700">
                Support Small-Space Gardening
              </h3>
              <p className="text-base leading-relaxed mb-2 font-Jost">
                Our resources are designed for apartments, condos, and tight
                urban settings. We teach how to make the most of every inch —
                from vertical gardens to window boxes — while maintaining beauty
                and yield.
              </p>
              <p className="text-sm text-gray-600 font-Jost">
                🪴 Wall planters, 🧱 raised beds, 🪟 indoor herb kits, 🛋️
                aesthetic garden furniture placement.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20 pb-20 px-6 sm:px-10 lg:px-[60px]">
        <div className="text-center flex flex-col gap-4 items-center">
          <p className="text-green-700 font-bold text-2xl sm:text-3xl">
            Our Team
          </p>
          <h2
            className="text-green-950 font-Jost font-extrabold text-3xl sm:text-4xl md:text-5xl text-center max-w-xl"
            data-aos="fade-up"
          >
            Dedicated & Experienced Team Members
          </h2>
        </div>

        <div className="mt-16 mb-10 px-4 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              img: gerard,
              name: "Gerard",
              delay: "0",
              socials: {
                facebook: "https://web.facebook.com/profile.php?id=1030928329",
                github: "https://github.com/Gerardonyia",
                instagram:
                  "https://www.instagram.com/_._gerard?igsh=MWdpbGNibmlpYzRwNw==",
              },
            },
            {
              img: joanna,
              name: "Joanna Enoch",
              delay: "150",
              socials: {
                facebook:
                  "https://web.facebook.com/profile.php?id=100093575492884",
                github: "https://github.com/Joannie-210",
                instagram: "https://www.instagram.com/joanna.bleeds.ink/",
              },
            },
            {
              img: boy2,
              name: "Gaadi Tartor",
              delay: "200",
              socials: {
                facebook:
                  "https://www.facebook.com/profile.php?id=61565439414763",
                github: "https://github.com/tartor0",
                instagram: "https://www.instagram.com/tartorrg/",
              },
            },
          ].map((member, index) => (
            <div
              key={index}
              className="relative group rounded-xl w-full max-w-[340px] mx-auto transition-transform duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={member.delay}
            >
              <div
                className="bg-cover bg-center w-full aspect-[4/3] rounded-t-xl shadow-md"
                style={{ backgroundImage: `url(${member.img})` }}
              ></div>

              <div className="bg-white rounded-b-xl border border-gray-200 p-4">
                <p className="font-semibold text-xl">{member.name}</p>
                <p className="text-green-700">Garden Designer</p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {["facebook", "instagram", "github"].map((platform, i) =>
                    member.socials[platform] ? (
                      <a
                        key={i}
                        href={member.socials[platform]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-200 w-10 h-10 rounded-full flex items-center justify-center text-green-700 text-xl hover:bg-green-300 transition"
                        aria-label={`${member.name}'s ${platform}`}
                      >
                        <i className={`bi bi-${platform}`}></i>
                      </a>
                    ) : null
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300 w-[50px] h-[50px] flex items-center justify-center hover:cursor-pointer"
      >
        <i className="bi bi-arrow-up text-xl"></i>
      </button>

      <div className="flex items-center justify-center flex-col gap-4 pt-[3px] pb-[100px]">
        <button
          onClick={geolocation}
          className="bg-green-600 px-6 py-4 rounded-full font-Jost font-bold text-white text-lg hover:cursor-pointer hover:opacity-80"
        >
          Find My Location
        </button>
        <div style={{ display: "none" }} className="popup">
          <a href="#" className="popup-link">
            Click here
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
