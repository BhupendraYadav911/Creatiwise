import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#010208]/70 px-[10%] py-6 flex justify-between items-center">
      {/* Logo */}
    <Link to="#home">
  <img
    alt="logo"
    src="/assets/logo.svg"
    className="w-12 h-12 cursor-pointer transition-all duration-500 transform-gpu hover:translate-x-1 hover:rotate-[360deg] hover:scale-90"
  />
</Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-4">
        <li><a href="#home" className="syne-text py-2 px-6 rounded-3xl text-white hover:bg-white/10">Home</a></li>
        <li><a href="#about" className="syne-text py-2 px-6 rounded-3xl text-white hover:bg-white/10">About</a></li>
        <li><a href="#projects" className="syne-text py-2 px-6 rounded-3xl text-white hover:bg-white/10">Projects</a></li>
        <li><a href="#contact" className="syne-text py-2 px-6 rounded-3xl text-white hover:bg-white/10">Contact</a></li>
      </ul>

      {/* Mobile Toggle Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white w-12 h-12 text-3xl flex items-center justify-center"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Hire Me Button (hidden on small screens) */}
      <a
        href="/Bhupendra_Yadav_Frontend_Developer.pdf"
        download
        className="hidden md:block syne-text px-6 py-2 rounded-3xl border border-white hover:bg-[#2d2d2d] transition-all duration-300"
      >
        HIRE ME
      </a>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-[#010208] p-6 md:hidden">
          <ul className="flex flex-col gap-4">
            <li><a href="#home" className="text-white">Home</a></li>
            <li><a href="#about" className="text-white">About</a></li>
            <li><a href="#projects" className="text-white">Projects</a></li>
            <li><a href="#contact" className="text-white">Contact</a></li>
            <li>
              <a
                href="/Bhupendra_Yadav_Frontend_Developer.pdf"
                download
                className="syne-text px-4 py-2 rounded-3xl border border-white hover:bg-[#2d2d2d] transition-all duration-300 inline-block"
              >
                HIRE ME
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
