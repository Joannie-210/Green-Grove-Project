import React from 'react'
import Foot from '../assets/footimg.jpg'
import Logo from '../assets/grove.png'

const Footer = () => {
  return (
     <>
    <div className='bg-[#FAF3E0] pt-10 w-full h-70 '>
      <img src={Foot} className='lg:max-w-4xl object-cover m-auto w-300 h-70 rounded-lg'/>
     <div></div>
  </div>
   
    <div className="bg-[#FAF3E0] bg pt-10 w-full h-70">
    <footer class="bg-[#FAF3E0] text-gray-800 py-10">
  <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
    
    
    <div>
      <div class="mb-4">
       
        <img src={Logo} alt="Logo" className="mt-[-10px] h-40 w-40 object-contain"/>
      </div>
      <p class="text-sm text-gray-600">© 2025 Green Grove. All rights reserved.</p>
    </div>

   
    <div>
      <h3 class="text-lg font-semibold mb-2">Company</h3>
      <ul class="space-y-1 text-sm">
        <li><a href="#" class="hover:text-gray-500">About</a></li>
        <li><a href="#" class="hover:text-gray-500">Careers</a></li>
        <li><a href="#" class="hover:text-gray-500">Blog</a></li>
      </ul>
    </div>

    
    <div>
      <h3 class="text-lg font-semibold mb-2">Support</h3>
      <ul class="space-y-1 text-sm">
        <li><a href="#" class="hover:text-gray-500">Help Center</a></li>
        <li><a href="#" class="hover:text-gray-500">Privacy Policy</a></li>
        <li><a href="#" class="hover:text-gray-500">Terms of Service</a></li>
      </ul>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-2">Connect</h3>
      <ul class="space-y-1 text-sm">
        <li><a href="#" class="hover:text-gray-500">Email us</a></li>
        <li><a href="#" class="hover:text-gray-500">Instagram</a></li>
        <li><a href="#" class="hover:text-gray-500">LinkedIn</a></li>
      </ul>
    </div>

  </div>
</footer>
</div>
    </>

  )
}

export default Footer
