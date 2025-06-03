import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/grove.png'
import { ChevronDown } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='w-full top-3 z-50 left-0 fixed h-20 flex justify-center items-center'>
      <nav className='pr-6 text-green-500 bg-white/20 backdrop-blur-sm flex justify-between items-center w-full h-18 max-w-7xl px-4 py-2 rounded-full shadow-md'>
         <ul className='flex space-x-4'>
            
          <li className='border-0 hover:border hover:border-b hover:border-green-500 flex space-x-4'>
            
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? 'text-blue-500' : 'text-gray-700'
              }
            >
             <img className='w-16 h-16 object-fit rounded-full' src={Logo} alt="Home" />
            </NavLink>
          </li> 
         
        </ul> 
        <ul className=' h-18 flex justify-between items-center max-w-5xl gap-10 space-x-4'>

         <li className="flex space-x-4 relative group">
  <a
    href="#"
    className="h-18 flex items-center  text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all after:duration-300 group-hover:after:w-full"
  >
    <NavLink
                    to='/about'
                    className={({ isActive }) =>
             isActive ? 'text-green-500' : 'text-white'
              }
                >
            About
         </NavLink>
  </a>
</li>
         <li className="relative group">
      {/* Top nav link with chevron */}
      <div className="flex items-center gap-1 text-white cursor-pointer">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'text-green-500' : 'text-white'
          }
        >
          Products
        </NavLink>
        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
      </div>

      {/* Dropdown submenu */}
      <ul className="absolute left-0 top-full mt-2 w-48 bg-white text-black rounded shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1 z-50">
        <li>
          <NavLink
            to="/tools"
            className="block px-4 py-2 hover:bg-green-100 transition"
          >
            Gardening Tools
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/essential"
            className="block px-4 py-2 hover:bg-green-100 transition"
          >
            Gardening Essentials
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/accessory"
            className="block px-4 py-2 hover:bg-green-100 transition"
          >
            Gardening Accessories
          </NavLink>
        
          <NavLink
            to="/article"
            className="block px-4 py-2 hover:bg-green-100 transition"
          >
        Related Articles
          </NavLink>
    </li>
   
  </ul>
</li>
         <li className='relative group flex space-x-4'>
         <a
    href="#"
    className="h-18 flex items-center  text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all after:duration-300 group-hover:after:w-full"
  >
    <NavLink
                    to='/tips'
                    className={({ isActive }) =>
             isActive ? 'text-green-500' : 'text-white'
              }
                >
            Techniques & Tips
         </NavLink>
  </a>
         </li>
            <li className='relative group flex space-x-4'>
          <a
    href="#"
    className="h-18 flex items-center  text-white  after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all after:duration-300 group-hover:after:w-full"
  >
    <NavLink
                    to='/videos'
                    className={({ isActive }) =>
             isActive ? 'text-green-500' : 'text-white'
              }
                >
            Educational videos
         </NavLink>
  </a>
         </li>
            <li className='relative group flex space-x-4'>
          <a
    href="#"
    className="h-18 flex items-center  text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all after:duration-300 group-hover:after:w-full"
  >
    <NavLink
                    to='/contact'
                    className={({ isActive }) =>
             isActive ? 'text-green-500' : 'text-white'
              }
                >
            Contact
         </NavLink>
  </a>
          </li>
         </ul>
         <p>Visit: </p>
      </nav>
    </div>
  )
}

export default Navbar
