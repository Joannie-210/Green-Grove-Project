import React from 'react'
import Foot from '../assets/footimg.jpg'
import Logo from '../assets/grove.png'

const Footer = () => {
  return (
     <>
    <div className='bg-[#FAF3E0] pt-10 w-full h-70 '>
      <img src={Foot} className='lg:max-w-4xl object-cover m-auto w-300 h-70 rounded-lg'/>
     
  </div>
   
    <div className="bg-[#FAF3E0] bg pt-10 w-full h-70">
    <footer className="bg-[#FAF3E0] text-gray-800 py-10">
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
    
    
    <div>
      <div className="w-full flex justify-center items-center" >
       
        <img src={Logo} alt="Logo" className="mt-[-10px] h-40 w-40 object-contain"/>
      </div>
     
    </div>

   
    <div>
      <h3 className="text-lg font-semibold mb-2">Company</h3>
      <ul className="space-y-1 text-sm">
        <li><a href="/about" className="hover:text-gray-500 underline">Who We Are</a></li>
        <li><a href="/tips" className="hover:text-gray-500 underline">Tips</a></li>
        <li><a href="/recommendations" className="hover:text-gray-500 underline">Suggestions</a></li>
      </ul>
    </div>

    
    <div>
      <h3 className="text-lg font-semibold mb-2">Explore</h3>
      <ul className="space-y-1 text-sm">
        <li><a href="/videos" className="hover:text-gray-500 underline">Videos</a></li>
        <li><a href="/article" className="hover:text-gray-500 underline">Articles</a></li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-2">Connect</h3>
      <ul className="space-y-1 text-sm">
        <li><a href="/contact" className="hover:text-gray-500 underline">Email Us</a></li>
      </ul>
    </div>

  </div>
   <p className="text-sm mt-10 text-center w-full text-gray-600">© 2025 Green Grove. All rights reserved.</p>
</footer>
</div>
    </>

  )
}

export default Footer
