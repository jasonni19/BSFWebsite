import React from "react";
import Logo1 from "../images/bsf.png";
import { useLocation, NavLink } from "react-router-dom";  // Use NavLink instead of Link
import 'animate.css';
import { useState, useEffect, useLayoutEffect } from "react";

function NavBar() {
  const location = useLocation(); // Get current location object

  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track if menu is open
  const [isMobile, setIsMobile] = useState(false); // State to track screen size

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detect screen size change
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobile(false); // On large screens, assume desktop mode
        setIsMenuOpen(false); // Close the menu when transitioning to large screens
      } else {
        setIsMobile(true); // On small screens, assume mobile mode
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useLayoutEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]);

  return (
    <div className="bg-white top-0 z-20 w-full">
      <div className="flex p-5 w-full justify-between items-center">
        {/* Left Section: Logo and "Bruin Sportfishing" */}
        <div className="flex items-center ml-8">
          <img className="w-16 pr-3" src={Logo1} draggable="false" />
          <NavLink
            className="mt-2 btn btn-ghost text-sky-500 font-bold italic text-2xl tracking-wide"
            to="/"
          >
            Bruin Sportfishing
          </NavLink>
        </div>

        {/* Hamburger menu (visible only on small screens) */}
        <button className="lg:hidden p-2 text-sky-500" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* All other buttons (stacked vertically on mobile view) */}
        <div
          className={` flex items-center space-x-6 mr-3 lg:flex lg:flex-row lg:space-x-8 ${isMenuOpen && isMobile
              ? `z-10 flex flex-col justify-center items-center animate__animated animate__bounceIn w-full absolute bg-white top-20 left-0 h-[100%] overflow-y-auto `
              : "hidden lg:flex lg:flex-row "
            }`}
        >
          {/* Use NavLink instead of Link */}
          <NavLink
            to="/about"
            className={`hover:bg-gray-100 rounded-lg ml-5 p-2 mt-2 btn btn-ghost text-sky-500 font-semibold text-2xl tracking-wide ${isMenuOpen ? "mb-24 text-3xl" : ""} ${location.pathname === '/about' ? "bg-sky-100 e" : ""}`}
          
          >
            About Us
          </NavLink>

          <NavLink
            to="/who-we-are"
            className={`hover:bg-gray-100 rounded-lg p-2 mt-2 btn btn-ghost text-sky-500 font-semibold text-2xl tracking-wide ${isMenuOpen ? "mb-24 text-3xl" : ""} ${location.pathname === '/who-we-are' ? "bg-sky-100 e" : ""}`}
           
            
          >
            Who We Are
          </NavLink>

          <NavLink
            to="/trips"
            className={`hover:bg-gray-100 rounded-lg p-2 mt-2 btn btn-ghost text-sky-500 font-semibold text-2xl tracking-wide ${isMenuOpen ? "mb-24 text-3xl" : ""} ${location.pathname === '/trips' ? "bg-sky-100 e" : ""}`}
            
          >
            Trips and Events
          </NavLink>

          <NavLink
            to="/support-us"
            className={`hover:bg-gray-100 rounded-lg p-2 mt-2 btn btn-ghost text-sky-500 font-semibold text-2xl tracking-wide ${isMenuOpen ? "mb-24 text-3xl" : ""} `}
            activeClassName="text-blue-800"
          >
            Support Us
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
