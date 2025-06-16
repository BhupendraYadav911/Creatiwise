import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  // On mount: check login state and user
  // useEffect(() => {
  //   const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
  //   if (storedUser) {
  //     setIsLoggedIn(true);
  //     setLoggedInUser(storedUser);
  //   }
  // }, []);

  useEffect(() => {
  const updateAuthState = () => {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (storedUser) {
      setIsLoggedIn(true);
      setLoggedInUser(storedUser);
    } else {
      setIsLoggedIn(false);
      setLoggedInUser(null);
    }
  };

  updateAuthState(); // Initial check
  window.addEventListener('authChange', updateAuthState); // Listen for login/logout

  return () => {
    window.removeEventListener('authChange', updateAuthState); // Cleanup
  };
}, []);

  // const handleLogout = () => {
  //   localStorage.removeItem('loggedInUser');
  //   setIsLoggedIn(false);
  //   setLoggedInUser(null);
  //   navigate('/');
  // };

  const handleLogout = () => {
  localStorage.removeItem('loggedInUser');
  setIsLoggedIn(false);
  setLoggedInUser(null);

  window.dispatchEvent(new Event('authChange')); // 🔥 Notify all components

  navigate('/');
};


  const getInitials = (name) => {
    if (!name) return '';
    const words = name.trim().split(' ');
    return words.length >= 2
      ? words[0][0].toUpperCase() + words[1][0].toUpperCase()
      : words[0][0].toUpperCase();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#010208]/70 px-[5%] py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link to="/">
          <img
            alt="logo"
            src="/assets/logo.svg"
            className="w-12 h-12 cursor-pointer transition-all duration-500 transform-gpu hover:translate-x-1 hover:rotate-[360deg] hover:scale-90"
          />
        </Link>
      </div>

      {/* Center Menu (Desktop) */}
      <ul className="hidden md:flex gap-6 justify-center flex-1">
        {isLoggedIn ? (
          <li>
            <label
              onClick={() => navigate('/profile-wizard')}
              className={`syne-text py-2 px-6 rounded-3xl text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer`}
            >
              Profile Wizard
            </label>
          </li>
        ) : (
          <li>
<a href="#home" className={`syne-text py-2 px-6 rounded-3xl text-white hover:bg-white hover:text-black transition-all duration-300`}>
              Home
            </a>
          </li>
        )}
        <li><a href="#about" className={`syne-text py-2 px-6 rounded-3xl text-white hover:bg-white hover:text-black transition-all duration-300`}>About</a></li>
        <li><a href="#projects" className={`syne-text py-2 px-6 rounded-3xl text-white hover:bg-white hover:text-black transition-all duration-300`}>Projects</a></li>
        <li><a href="#contact" className={`syne-text py-2 px-6 rounded-3xl text-white hover:bg-white hover:text-black transition-all duration-300`}>Contact</a></li>
      </ul>

      {/* Right Auth Buttons (Desktop) */}
      <div className="hidden md:flex items-center gap-3">
        {!isLoggedIn ? (
          <>
            <button onClick={() => navigate('/login')} className="syne-text px-4 py-2 rounded-3xl border border-white text-white hover:bg-[#2d2d2d] transition-all duration-300">
              Login
            </button>
            <button onClick={() => navigate('/signup')} className="syne-text px-4 py-2 rounded-3xl border border-white text-white hover:bg-[#2d2d2d] transition-all duration-300">
              Sign Up
            </button>
          </>
        ) : (
          <>
            <div
              onClick={() => navigate('/profile-wizard')}
              className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold cursor-pointer hover:opacity-80 transition-all"
              title="Go to Profile Builder"
            >
              {getInitials(loggedInUser?.name)}
            </div>
            <button onClick={handleLogout} className="syne-text px-4 py-2 rounded-3xl border border-white text-white hover:bg-[#2d2d2d] transition-all duration-300">
              Logout
            </button>
          </>
        )}
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white w-10 h-10 text-3xl flex items-center justify-center"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
     {isOpen && (
  <div className="absolute top-full left-0 w-full overflow-y-auto bg-[#010208] p-6 flex flex-col gap-4 text-white md:hidden z-50">
    {isLoggedIn ? (
    
        <label
              onClick={() => navigate('/profile-wizard')}
              className={`syne-text py-2 px-4 rounded-3xl text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer`}
            >
              Profile Wizard
            </label>
    ) : (
      <a
        href="#home"
        onClick={() => setIsOpen(false)}
        className="py-2 px-4 hover:bg-white hover:text-black rounded-3xl rounded transition-all"
      >
        Home
      </a>
    )}

    <a href="#about" onClick={() => setIsOpen(false)} className="py-2 px-4 hover:bg-white hover:text-black rounded rounded-3xl transition-all">About</a>
    <a href="#projects" onClick={() => setIsOpen(false)} className="py-2 px-4 hover:bg-white hover:text-black rounded rounded-3xl transition-all">Projects</a>
    <a href="#contact" onClick={() => setIsOpen(false)} className="py-2 px-4 hover:bg-white hover:text-black rounded rounded-3xl transition-all">Contact</a>

    {!isLoggedIn ? (
      <>
        <button onClick={() => { navigate('/login'); setIsOpen(false); }} className="py-2 px-4 bg-transparent border border-white rounded rounded-3xl hover:bg-white hover:text-black transition-all">Login</button>
        <button onClick={() => { navigate('/signup'); setIsOpen(false); }} className="py-2 px-4 bg-transparent border border-white rounded rounded-3xl hover:bg-white hover:text-black transition-all">Sign Up</button>
      </>
    ) : (
      <button onClick={() => { handleLogout(); setIsOpen(false); }} className="py-2 px-4 bg-red-600 rounded rounded-3xl hover:bg-red-700 transition-all">Logout</button>
    )}
  </div>
)}

    </nav>
  );
};

export default Navbar;
