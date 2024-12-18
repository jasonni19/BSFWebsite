import React from "react"
import Logo1 from "../images/bsf.png"
import { Link } from 'react-router-dom';

import { useState,useEffect } from "react"; // Import useState for toggling the menu


function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track if menu is open
  const [isMobile, setIsMobile] = useState(false); // State to track screen size
 

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detect screen size change
  useEffect(() => {
    // Function to update isMobile state based on screen width
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobile(false); // On large screens, assume desktop mode
        setIsMenuOpen(false); // Close the menu when transitioning to large screens
      } else {
        setIsMobile(true); // On small screens, assume mobile mode
      }
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Call handleResize on mount to check the initial screen size
    handleResize();

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navbar bg-white sticky top-0 z-20 w-full">
      <div className="flex p-5 w-full justify-between items-center">
        
        {/* Left Section: Logo and "Bruin Sportfishing" */}
        <div className="flex items-center ml-8 ">
          <img className="w-16 pr-3" src={Logo1} draggable="false" />
          <Link
            className="mt-2 btn btn-ghost text-sky-500 font-bold italic text-2xl tracking-wide"
            to="/"
          >
            Bruin Sportfishing
          </Link>
        </div>

        {/* Hamburger menu (visible only on small screens) */}
        <button
          className="lg:hidden p-2 text-sky-500"
          onClick={toggleMenu}
        >
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
          className={`flex items-center space-x-6  mr-3 lg:flex lg:flex-row lg:space-x-8 ${
            isMenuOpen && isMobile
              ? ` z-10 flex flex-col justify-center items-center w-full fixed bg-white top-20 left-0 h-screen overflow-y-auto`
              : " hidden lg:flex lg:flex-row "
          }`}
        >
          <Link
           className={`hover:bg-gray-100 rounded-lg ml-5 p-2 mt-2 btn btn-ghost text-sky-500 font-semibold text-2xl tracking-wide ${
            isMenuOpen ? "mb-24 text-3xl " : ""
          }`}
          to="/about"
          >
            About Us
          </Link>

          <Link
            className={`hover:bg-gray-100 rounded-lg p-2 mt-2 btn btn-ghost text-sky-500 font-semibold text-2xl tracking-wide ${
              isMenuOpen ? "mb-24 text-3xl  " : ""
            }`}
            to="/board"
          >
            Who We Are
          </Link>

          <Link
            className={`hover:bg-gray-100 rounded-lg p-2 mt-2 btn btn-ghost text-sky-500 font-semibold text-2xl tracking-wide ${
              isMenuOpen ? "mb-24 text-3xl" : ""
            }`}
            to="/trips"
          >
            Trips and Events
          </Link>

          <Link
           className={`hover:bg-gray-100 rounded-lg p-2 mt-2 btn btn-ghost text-sky-500 font-semibold text-2xl tracking-wide ${
            isMenuOpen ? "mb-24 text-3xl" : ""
          }`}
          to="/resources"
          >
            Resources
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;


