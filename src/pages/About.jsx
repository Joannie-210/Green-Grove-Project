import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'
import aboutus from '../assets/aboutusimg.jpg'
import garden from '../assets/garden.jpg';
import boy from '../assets/boy1.png'
import book from '../assets/open-book.png'
import plant from '../assets/plant-under-sun.png'
import earth from '../assets/earth-planet.png'
import boy2 from '../assets/boy2.png'
import girl from '../assets/girl1.png'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '@fontsource/jost';
import CountUp from 'react-countup';
import { geolocation } from './About';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  

  // const [latitude, setLatitude] = React.useState('')
  // const [longitude, setLongitude] = React.useState('')
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     setLatitude(position.coords.latitude)
  //     setLongitude(position.coords.longitude)
  //   })
  // }, [])

  return (
    <div>

      <div
        className="bg-cover bg-center h-[450px] bg-fixed flex items-center justify-center bg-gray-700 bg-blend-exclusion rounded-bl-[50px]"
        style={{ backgroundImage: `url(${aboutus})` }}
        data-aos="fade-up"
      >
        <div data-aos="fade-up" className="text-center">
          <h1 className="text-white text-6xl font-bold">About Us</h1>
        </div>
      </div>


      <div className='p-[50px] pt-[100px] pb-[100px]'>
        <div className='grid grid-cols-[300px_1fr_1fr] gap-[50px]'>
          <div>
          <img src={garden} className='h-[500px] rounded-2xl'/>
        </div>

        <div className='w-[500px]' data-aos="fade-up">
          <div className='pt-[50px] font-Jost'>
          <h2 className='text-green-700 text-8xl  font-bold'>25</h2>
          <p className='text-green-700 text-xl pb-[30px]'>Years of Experience</p>
          <div>
            <h1 className='text-green-950 text-5xl font-[900] pb-[30px]'>We Make Your Home Like A Garden</h1>
            <p className='text-[18px]'>With over two decades of expertise in eco-friendly landscaping, Green Groves transforms ordinary yards into lush, vibrant gardens. We combine passion, and design to bring your vision to life, whether it’s your backyard, rooftop, or community garden.</p>
          </div>
        </div>
        </div>


        <div className='pt-[50px] font-Jost'>
          <div data-aos="fade-up" data-aos-delay="200" className='pb-[30px]'>
            <i class="bi bi-award-fill text-green-700 text-[55px]"></i>
            <h2 className='font-semibold text-green-950 text-[20px]'>Award Winning</h2>
            <p className='text-xl'>Recognized nationally for our sustainable designs and exceptional client service.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className=''>
            <i class="bi bi-people-fill text-green-700 text-[55px] mt-5"></i>
            <h2 className='font-semibold text-green-950 text-[20px]'>Dedicated Team</h2>
            <p className='text-xl'>Certified horticulturists and designers who love what they do.</p>
          </div>
        </div>
        </div>
      </div>



    <div className="bg-cover bg-center bg-fixed bg-gray-700 bg-blend-exclusion"
        style={{ backgroundImage: `url(${aboutus})` }}>
      <div className='p-[60px] pl-[120px] h-[250px] pr-[120px] flex items-center justify-between'>
       <div className='flex items-center flex-col ' data-aos="fade-up">
        <p className='text-6xl font-extrabold text-white'><CountUp end={100} duration={9} delay ={1} />+</p>
        <p className='font-Jost text-2xl font-bold text-white'>Happy Clients</p>
       </div>
       <div className='flex items-center flex-col' data-aos="fade-up" data-aos-delay="100">
        <p className='text-6xl font-extrabold text-white'><CountUp end={1000} duration={5} delay ={1} />+</p>
        <p className='font-Jost text-2xl font-bold text-white'>Garden's Completed</p>
       </div>
       <div className='flex items-center flex-col' data-aos="fade-up" data-aos-delay="150">
        <p className='text-6xl font-extrabold text-white'><CountUp end={100} duration={9} delay ={1} />+</p>
        <p className='font-Jost text-2xl font-bold text-white'>Dedicated Staff</p>
       </div>
       <div className='flex items-center flex-col' data-aos="fade-up" data-aos-delay="200">
        <p className='text-6xl font-extrabold text-white'><CountUp end={1000} duration={5} delay ={1} />+</p>
        <p className='font-Jost text-2xl font-bold text-white'>Award's Recieved</p>
       </div>
    </div>
    </div>
    
    <div className="px-15 py-20  text-gray-800">
  <div className="max-w-6xl mx-auto">
    <div className='flex flex-col items-center justify-center text-center pb-[10px] gap-4'>
      <h2 className="text-3xl font-bold text-green-700">Our Mission</h2>
    <p className='text-green-950 font-Jost font-extrabold text-5xl w-[400px] pb-[70px]' data-aos= "fade-up">Helping You Grow Wherever You Are</p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      
      
      <div className="bg-white p-6 rounded-xl shadow-2xl text-center transition duration-300 hover:scale-110 hover:cursor-pointer" data-aos="fade-up">
        <img src={book} alt="" className="mx-auto mb-4 w-12 h-12" />
        <h3 className="text-2xl font-semibold mb-3 text-green-700">Educate Urban Gardeners</h3>
        <p className="text-base leading-relaxed mb-2 font-Jost">
          We provide comprehensive guides, tutorials, and tips tailored for beginner and urban gardeners. From soil
          selection to plant care, our content is crafted to simplify learning and eliminate the guesswork.
        </p>
        <p className="text-sm text-gray-600 font-Jost">
          📚 Articles on balcony setup, 🌿 seed starting tips, 🧪 organic pest control methods.
        </p>
      </div>

    
      <div className="bg-white p-6 rounded-xl shadow-2xl text-center transition duration-300 hover:scale-110 hover:cursor-pointer" data-aos="fade-up" data-aos-delay="100">
        <img src={earth} alt="" className="mx-auto mb-4 w-12 h-12" />
        <h3 className="text-2xl font-semibold mb-3 text-green-700">Promote Sustainable Living</h3>
        <p className="text-base leading-relaxed mb-2 font-Jost">
          At Green Groves, we advocate for eco-friendly habits that reduce waste and preserve resources. By encouraging
          composting, water-wise gardening, and local plant choices, we help you garden responsibly.
        </p>
        <p className="text-sm text-gray-600 font-Jost">
          ♻️ DIY compost bins, 💧 drip irrigation guides, 🌱 native plant selection.
        </p>
      </div>

     
      <div className="bg-white p-6 rounded-xl shadow-2xl text-center transition duration-700 hover:scale-110 hover:cursor-pointer" data-aos="fade-up" data-aos-delay="200">
        <img src={plant} alt="Support Icon" className="mx-auto mb-4 w-12 h-12" />
        <h3 className="text-2xl font-semibold mb-3 text-green-700">Support Small-Space Gardening</h3>
        <p className="text-base leading-relaxed mb-2 font-Jost">
          Our resources are designed for apartments, condos, and tight urban settings. We teach how to make the most of
          every inch — from vertical gardens to window boxes — while maintaining beauty and yield.
        </p>
        <p className="text-sm text-gray-600 font-Jost">
          🪴 Wall planters, 🧱 raised beds, 🪟 indoor herb kits, 🛋️ aesthetic garden furniture placement.
        </p>
      </div>

    </div>
  </div>
</div>

    <div className='pt-[80px] pb-[80px] p-[60px]'>
      <div className='text-center flex justify-center items-center flex-col gap-4'>
        <p className='text-green-700 font-bold text-3xl'>Our Team</p>
        <h2 className='text-green-950 font-Jost font-extrabold text-5xl w-[400px] pb-[70px]' data-aos="fade-up">Dedicated & Experienced Team Members</h2>
      </div>

      <div className='grid grid-cols-[1fr_1fr_1fr] gap-5'>

        <div className='bg-gray-700 w-fit h-fit  rounded-md group relative' data-aos="fade-up">
          <div className="bg-cover h-[400px] w-[300px] bg-center bg-gray-700 hover:cursor-pointer rounded-md"
        style={{ backgroundImage: `url(${boy})` }}></div>
        <div className='flex flex-col justify-center bg-white h-[150px] pl-3 w-[250px] bottom-20 left-0 absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out transform -translate-x-10 group-hover:translate-x-0 rounded-br-md rounded-tr-md'>
          <p className='font-semibold text-xl'>Gerard myGuy</p>
          <p className='text-green-700'>Garden Designer</p>
          <div className='flex gap-4'>
            <div className="bg-green-200 w-[40px] h-[40px] rounded-full flex items-center justify-center">
            <a href="#" className="text-green-700 text-[20px]"><i className="bi bi-facebook"></i></a>
          </div>
            <div className="bg-green-200 w-[40px] h-[40px] rounded-full flex items-center justify-center">
              <a href="" className='text-green-700 text-[20px]'><i class="bi bi-twitter-x"></i></a>
            </div>
            <div className="bg-green-200 w-[40px] h-[40px] rounded-full flex items-center justify-center">
              <a href="" className='text-green-700'><i class="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>
        </div>

        
          <div className='bg-gray-700 w-fit h-fit  rounded-md group relative' data-aos="fade-up" data-aos-delay="150">
          <div className="bg-cover h-[400px] w-[300px] bg-center bg-gray-700 hover:cursor-pointer rounded-md"
        style={{ backgroundImage: `url(${boy2})` }}></div>
        <div className='flex flex-col justify-center bg-white h-[150px] pl-3 w-[250px] bottom-20 left-0 absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out transform -translate-x-10 group-hover:translate-x-0 rounded-br-md rounded-tr-md'>
          <p className='font-semibold text-xl'>Gaadi Tartor</p>
          <p className='text-green-700'>Garden Designer</p>
          <div className='flex gap-4'>
            <div className="bg-green-200 w-[40px] h-[40px] rounded-full flex items-center justify-center">
            <a href="#" className="text-green-700 text-[20px]"><i className="bi bi-facebook"></i></a>
          </div>
            <div className="bg-green-200 w-[40px] h-[40px] rounded-full flex items-center justify-center">
              <a href="" className='text-green-700 text-[20px]'><i class="bi bi-twitter-x"></i></a>
            </div>
            <div className="bg-green-200 w-[40px] h-[40px] rounded-full flex items-center justify-center">
              <a href="" className='text-green-700'><i class="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>
        
        </div>

        
          <div className='bg-gray-700 w-fit h-fit  rounded-md group relative' data-aos="fade-up" data-aos-delay="200">
          <div className="bg-cover h-[400px] w-[300px] bg-center bg-gray-700 hover:cursor-pointer rounded-md"
        style={{ backgroundImage: `url(${girl})` }}></div>
        <div className='flex flex-col justify-center bg-white h-[150px] pl-3 w-[250px] bottom-20 left-0 absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out transform -translate-x-10 group-hover:translate-x-0 rounded-br-md rounded-tr-md'>
          <p className='font-semibold text-xl'>Joanna Enoch</p>
          <p className='text-green-700'>Garden Designer</p>
          <div className='flex gap-4'>
            <div className="bg-green-200 w-[40px] h-[40px] rounded-full flex items-center justify-center">
            <a href="#" className="text-green-700 text-[20px]"><i className="bi bi-facebook"></i></a>
          </div>
            <div className="bg-green-200 w-[40px] h-[40px] rounded-full flex items-center justify-center">
              <a href="" className='text-green-700 text-[20px]'><i class="bi bi-twitter-x"></i></a>
            </div>
            <div className="bg-green-200 w-[40px] h-[40px] rounded-full flex items-center justify-center">
              <a href="" className='text-green-700'><i class="bi bi-instagram"></i></a>
            </div>
          </div>
        
        </div>
        </div>
      </div>

    </div>

     <button onClick={scrollToTop} className="fixed bottom-10 right-10 bg-green-700 text-white p-3 rounded-full shadow-lg hover:bg-green-800 transition duration-300 w-[50px] h-[50px] flex items-center justify-center hover:cursor-pointer">
      <i className="bi bi-arrow-up text-xl"></i>

     </button>



     
    <div className='flex items-center justify-center flex-col gap-4 pt-[50px] pb-[50px]'>
      <button onClick={geolocation} className='bg-green-600 p-5 rounded-xl font-Jost text-white text-xl hover:cursor-pointer'>Find My Location</button>
    <div style={{ display: 'none' }} className='popup'>
      <a href='#' className='popup-link'>Click here</a>
    </div>
    </div>

    </div>
  )
}

export default About
