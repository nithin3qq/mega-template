import React, { useState, useEffect } from "react";
import { close, menu } from "../assets";
import { navLinks } from "../constants";
import logo1 from "../assets/mega/logo.png";
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setIsTopBarVisible(position < 100);
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar with smooth transition */}
      <div 
        className={`bg-gradient-to-r from-gray-900 to-blue-900 transition-all duration-300 py-3 text-gray-400 sm:block hidden text-xl">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-8}`}
      >
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-8">
          <div className="flex space-x-8">
            <a href="tel:+919052254949" className="flex items-center group hover:text-blue-400 transition-colors duration-300">
              <FaPhone className="mr-2 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xl">+91 90522 54949</span>
            </a>
            <a href="mailto:info@megatechnologies.in" className="flex items-center group hover:text-blue-400 transition-colors duration-300">
              <FaEnvelope className="mr-2 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xl">info@megatechnologies.in</span>
            </a>
            <div className="flex items-center group">
              <FaClock className="mr-2 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xl">24 hours/7days *</span>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-xl">Follow Us:</span>
            {[
              { icon: <FaFacebookF />, link: "https://www.facebook.com/share/7616CQHMkCnZoDJ1/" },
              { icon: <FaTwitter />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
              { icon: <FaLinkedinIn />, link: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`w-full fixed z-50 flex py-6 px-4 sm:px-8 justify-between items-center navbar bg-black bg-opacity-95 md:px-16 md:py-4 transition-all duration-300 ${
          scrollPosition > 50 ? "top-0" : "sm:top-[50px] top-0"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src={logo1} 
              alt="MG Technologies" 
              className="w-[184px] h-[50px] transition-transform duration-300 hover:opacity-80" 
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((nav) => (
              <Link
                key={nav.id}
                to={nav.link}
                className="text-white hover:text-blue-400 transition-colors duration-300 text-lg"
              >
                {nav.title}
              </Link>
            ))}
            <Link to="/getaquote">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                Get a Quote
              </button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div className={`${toggle ? 'flex' : 'hidden'} absolute top-20 right-0 p-6 bg-black/95 rounded-xl min-w-[200px] sidebar`}>
              <ul className="list-none flex flex-col space-y-4">
                {navLinks.map((nav) => (
                  <li key={nav.id}>
                    <Link
                      to={nav.link}
                      className="text-white hover:text-blue-400 transition-colors duration-300"
                      onClick={() => setToggle(false)}
                    >
                      {nav.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
