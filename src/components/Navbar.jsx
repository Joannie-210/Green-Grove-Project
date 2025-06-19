import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown, Menu, X, UserRound } from 'lucide-react';
import Logo from '../assets/grove.png';
import Button from './Button';
import clsx from 'clsx';

const Navbar = () => {

  // state
  // 
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);       
  const [visitCount, setVisitCount] = useState(0);

  // ────────────────────────────────────────────────────────────────
  // effects
  // ────────────────────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () =>
      setScrolled(window.scrollY > window.innerHeight - 10);
    window.addEventListener('scroll', handleScroll);

    const storedCount = localStorage.getItem('visitCount');
    const count = storedCount ? parseInt(storedCount, 10) + 1 : 1;
    setVisitCount(count);
    localStorage.setItem('visitCount', count);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ────────────────────────────────────────────────────────────────
  // helpers
  // ────────────────────────────────────────────────────────────────
  const linkClasses = ({ isActive }) =>
    clsx(
      'transition-colors',
      isActive ? 'text-green-500' : 'text-white group-hover:text-green-500'
    );

  const underlineSpan = (label) => (
    <span className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 group-hover:after:w-full after:bg-green-500 after:transition-all after:duration-300">
      {label}
    </span>
  );

  // ────────────────────────────────────────────────────────────────
  // render
  // ────────────────────────────────────────────────────────────────
  return (
    <header className="w-full fixed top-0 left-0 z-50 flex justify-center items-center h-[100px]">
      <nav
        className={clsx(
          'w-full lg:w-280 max-w-screen-xl px-4 py-2 flex items-center justify-between rounded-full transition-all duration-300 ease-in-out',
          scrolled
            ? 'bg-black/90 shadow-lg text-white'
            : 'bg-white/20 backdrop-blur-sm shadow-md text-green-500'
        )}
      >
      
        <NavLink to="/">
          <img
            src={Logo}
            alt="Home"
            className="w-16 h-16 object-cover rounded-full"
          />
        </NavLink>

        
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* ───── Nav links ───── */}
        <ul
          className={clsx(
            'md:flex absolute md:static top-full left-0 w-full md:w-auto bg-black md:bg-transparent text-white md:flex-row flex-col gap-6 px-6 py-4 md:py-0 md:gap-8 lg:gap-14 z-40 transition-all duration-300 ease-in-out',
            menuOpen
              ? 'opacity-100 visible'
              : 'opacity-0  invisible md:visible md:opacity-100'
          )}
        >
          {/* About (first) */}
          <li className="group relative text-center mb-3 hover:text-green-500">
            <NavLink to="/about" className={linkClasses}>
              {underlineSpan('About')}
            </NavLink>
          </li>

          {/* Products dropdown */}
          <li className="relative group w-full md:w-auto">
            <div
              className="flex justify-center items-center gap-1 cursor-pointer text-white"
              onClick={() =>
                window.innerWidth < 768 && setProductsOpen((p) => !p)
              }
            >
              <span className="hover:text-green-500 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 group-hover:after:w-full after:bg-green-500 after:transition-all after:duration-300">
                Resources
              </span>
              <ChevronDown
                className={clsx('w-4 h-4 transition-transform duration-300', {
                  'rotate-180': productsOpen,
                  'group-hover:rotate-180': !productsOpen,
                })}
              />
            </div>

            <ul
              className={clsx(
                'md:absolute text-white bg-black flex flex-col justify-center items-start left-0 top-full mt-2 w-full md:w-48 rounded shadow-lg overflow-hidden z-50 transition-all duration-300',
                productsOpen
                  ? 'max-h-96 opacity-100 visible'
                  : 'max-h-0 opacity-0 invisible',
                'md:group-hover:max-h-96 md:group-hover:opacity-100 md:group-hover:visible md:group-hover:translate-y-1'
              )}
            >
              <li>
                <NavLink
                  to="/tools"
                  className="block px-4 py-2 hover:text-green-100"
                >
                  Gardening Tools
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/essential"
                  className="block px-4 py-2 hover:text-green-100"
                >
                  Gardening Essentials
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/accessory"
                  className="block px-4 py-2 hover:text-green-100"
                >
                  Garden Accessories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tips"
                  className="block px-4 py-2 hover:text-green-100"
                >
                  Gardening Tips
                </NavLink>
              </li>
            </ul>
          </li>

          {/* Learn and Explore dropdown */}
          <li className="relative group w-full md:w-auto">
            <div
              className="flex justify-center items-center gap-1 cursor-pointer text-white"
              onClick={() => window.innerWidth < 768 && setLearnOpen((l) => !l)}
            >
              <span className="hover:text-green-500 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 group-hover:after:w-full after:bg-green-500 after:transition-all after:duration-300">
                Explore
              </span>
              <ChevronDown
                className={clsx('w-4 h-4 transition-transform duration-300', {
                  'rotate-180': learnOpen,
                  'group-hover:rotate-180': !learnOpen,
                })}
              />
            </div>

            <ul
              className={clsx(
                'md:absolute text-white bg-black flex flex-col justify-center items-start left-0 top-full mt-2 w-full md:w-48 rounded shadow-lg overflow-hidden z-50 transition-all duration-300',
                learnOpen
                  ? 'max-h-96 opacity-100 visible'
                  : 'max-h-0 opacity-0 invisible',
                'md:group-hover:max-h-96 md:group-hover:opacity-100 md:group-hover:visible md:group-hover:translate-y-1'
              )}
            >
              <li>
                <NavLink
                  to="/videos"
                  className="block px-4 py-2 hover:text-green-100"
                >
                  Videos
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/article"
                  className="block px-4 py-2 hover:text-green-100"
                >
                  Related Articles
                </NavLink>
              </li>
            </ul>
          </li>

           <li className="group relative text-center mb-3 hover:text-green-500">
            <NavLink to="/recommendations" className={linkClasses}>
              {underlineSpan('Suggestions')}
            </NavLink>
          </li>

          {/* Contact (last) */}
          <li className="group relative text-center mb-3 hover:text-green-500">
            <NavLink to="/contact" className={linkClasses}>
              {underlineSpan('Contact')}
            </NavLink>
          </li>
        </ul>

       

        <div className="hidden md:flex flex-col items-end text-sm text-white ml-4">
          <span className="text-[11px] flex gap-1 items-center">
            <UserRound size={14} /> {visitCount}{' '}
            {visitCount === 1 ? 'visit' : 'visits'}
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
