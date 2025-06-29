import React from 'react';
import Background from '../assets/back.jpeg';
import {Link} from 'react-router-dom';
import Button from './Button';
import { ArrowUpRight } from 'lucide-react';
import Back from '../assets/back.jpeg';

const HeroSection = () => {
  return (
    <div
      className="relative border w-full min-h-screen bg-fixed bg-center bg-no-repeat bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${Back})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 lg:mt-10 w-full px-4 sm:px-8 md:px-12 lg:px-24 text-white text-left max-w-7xl mx-auto py-20">
        <h1 className="text-3xl lg:h-20  sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Where Every <span className="text-green-400">Leaf</span> is a Lesson
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mb-8 text-white">
          At <span className="text-green-400">Green Grove</span>, we make gardening simple, soulful, and satisfying — with expert tips, step-by-step guides, and a thriving community of green thumbs. Whether you're sprouting your first seed or nurturing a blooming haven, your garden journey starts here.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            text="Get Started"
            variant="primary"
            onClick={() => window.location.href = '/about'}
          />
          <button  className="bg-white hover:opacity-75 w-10 h-10 text-black flex justify-center items-center rounded-full">
            <Link to = "/contact" className="text-black">
            <ArrowUpRight />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
