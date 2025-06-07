import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/grove.png';
import { ChevronDown, Menu, X } from 'lucide-react';
import Button from './Button';
import { UserRound } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visitCount, setVisitCount] = useState(0);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const count = localStorage.getItem('visitCount');
    if (count) {
      const newCount = parseInt(count, 10) + 1;
      setVisitCount(newCount);
      localStorage.setItem('visitCount', newCount);
    } else {
      setVisitCount(1);
      localStorage.setItem('visitCount', 1);
    }
  }, []);

  const clearVisitCount = () => {
    localStorage.removeItem('visitCount');
    setVisitCount(0);
  };
useEffect(()=> {
  const handleScroll = () => {
    const isBeyondScreen = window.scrollY > window.innerHeight - 10;
    setScrolled(isBeyondScreen)
  }
  window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); 

}, []);

  return (
    <div className="w-full fixed top-0 left-0 z-50  flex justify-center items-center" style={{ height: '100px' }}>
      <nav className={`w-full lg:w-300 max-w-screen-xl px-4 py-2 flex items-center justify-between rounded-full transition-all duration-300 ease-in-out
        ${scrolled ? 'bg-black/90 shadow-lg text-black' : 'bg-white/20 backdrop-blur-sm shadow-md text-green-500'}`}>

        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/">
            <img className="w-16 h-16 object-cover rounded-full" src={Logo} alt="Home" />
          </NavLink>
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Nav Links */}
        <ul
         className={`
    md:flex md:static absolute top-full left-0 w-full md:w-auto 
    bg-black/80 md:bg-transparent 
    text-black sm:${scrolled ? 'text-black' : 'text-black'} 
    flex-col md:flex-row items-center lg:gap-15 gap-6 px-6 py-4 md:py-0 md:gap-8 
    transition-all duration-300 ease-in-out z-40 
    ${menuOpen ? 'opacity-100 visible flex' : 'opacity-0 invisible md:visible md:opacity-100 md:flex'} 
  `}
        >
       {[
  { to: '/about', label: 'About' },
  { to: '/tips', label: 'Tips' },
  { to: '/videos', label: 'Videos' },
  { to: '/contact', label: 'Contact' },
].map(({ to, label }) => (
  <li key={to} className="relative group  hover:text-green-500">
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? 'text-green-500 hover:text-green-500 transition-colors'
          : scrolled
          ? 'text-white transition-colors'
          : 'text-white  hover:text-green-500 transition-colors'
      }
    >
      <p className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all after:duration-300 group-hover:after:w-full">
        {label}
      </p>
    </NavLink>
  </li>
))}


          {/* Dropdown */}
        <li className="relative group w-full md:w-auto">
  <div
    className="flex items-center justify-center w-full md:w-auto gap-1 text-white cursor-pointer"
    onClick={() => {
      
      if (window.innerWidth < 768) {
        setProductsOpen(!productsOpen);
      }
    }}
  >
    <span
      className={`text-center hover:text-green-500 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all after:duration-300 group-hover:after:w-full ${
        scrolled ? 'text-white' : 'text-white'
      }` }
    >
      Products
    </span>
    <ChevronDown
      className={`w-4 h-4 transition-transform duration-300 ${
        productsOpen ? 'rotate-180' : ''
      } group-hover:rotate-180`}
    />
  </div>

  <ul
    className={`
      md:absolute md:left-0 md:top-full md:mt-2 md:w-48
      bg-white text-black rounded shadow-lg z-50
      transition-all duration-300 transform
      overflow-hidden

      ${productsOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible'}
      md:group-hover:max-h-96 md:group-hover:opacity-100 md:group-hover:visible md:group-hover:translate-y-1
    `}
  >
    <li>
      <NavLink to="/tools" className="block px-4 py-2 hover:bg-green-100">Gardening Tools</NavLink>
    </li>
    <li>
      <NavLink to="/essential" className="block px-4 py-2 hover:bg-green-100">Gardening Essentials</NavLink>
    </li>
    <li>
      <NavLink to="/accessory" className="block px-4 py-2 hover:bg-green-100">Accessories</NavLink>
    </li>
    <li>
      <NavLink to="/article" className="block px-4 py-2 hover:bg-green-100">Related Articles</NavLink>
    </li>
  </ul>
</li>

        </ul>

        {/* Buttons and Visit Count */}
        <div className="hidden md:flex items-center gap-4">
          <Button text="Signup" variant="primary" />
          <Button text="Login" variant="secondary" />
        </div>

        <div className={`hidden md:flex flex-col items-end text-sm text-white ml-4 ${scrolled ? 'text-white' : 'text-white' }`}>
          <span className='text-[11px] flex gap-1 first:items-center justify-center '><UserRound/>: {visitCount} {visitCount === 1 ? 'visit' : 'visits'}</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
