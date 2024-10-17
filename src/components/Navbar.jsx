import React, { useState, useEffect } from "react";
import { close, menu } from "../assets";
import { navLinks } from "../constants";
import logo1 from "../assets/mega/logo.png";
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaPhone } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Function to handle the scroll position
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Header Top Section */}
      {/* <div className="bg-blue-900 py-2 text-white sm:block hidden text-xl "> */}
      <div className="bg-gray-900 py-3 text-white sm:block hidden text-xl">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-8">
          {/* Left Side: Contact Information */}
          <div className="flex space-x-8">
            <div className="flex items-center mr-2">
              <FaPhone className="mr-1" /> {/* Phone Icon */}
              <span className="text-xl">+91 90522 54949</span>
            </div>
            {/* <div className="flex items-center">
              <FaMapMarkerAlt className="mr-1" />
              <a href="#" className="text-xl">As rao nagar, Hyderabad</a>
            </div> */}
            <div className="flex items-center">
              <FaEnvelope className="mr-1" />
              <a href="mailto:info@megatechnologies.com" className="text-xl">
                info@megatechnologies.in
              </a>
            </div>
          <div className="flex items-center">
              <FaClock className="mr-1" />
              <span className="text-xl">  24 hours/7days *</span>
            </div>
          </div>

          {/* Right Side: Social Media Icons */}
          <div className="flex items-center space-x-3">
            <span className="text-xl">Follow Us:</span>
            <a href="#" className="text-white"><FaFacebookF /></a>
            <a href="#" className="text-white"><FaTwitter /></a>
            <a href="#" className="text-white"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Navbar Section */}
      <nav
        className={`w-full fixed z-50 flex py-6 px-4 sm:px-8 justify-between items-center navbar bg-black bg-opacity-95 md:px-16 md:py-4 transition-all duration-300 ${
          scrollPosition > 50 ? "top-0" : "sm:top-[50px] top-0"
        }`}
      >
        {/* Logo Section */}
        <div className="flex justify-start">
          <img src={logo1} alt="MG Technologies" className="w-[184px] h-[50px]" />
        </div>

        {/* Navigation Links */}
        <div className="flex justify-end items-center flex-1">
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, i) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  i === navLinks.length - 1 ? "mr-0" : "mr-10"
                } text-white`}
              >
                <Link to={nav.link}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get a Quote Button */}
        <Link to="/getaquote">
          <button className="bg-primary-19 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-poppins font-medium ml-0 sm:ml-6 mx-auto sm:mx-0 hover:bg-brown-200">
            Get a Quote
          </button>
        </Link>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((previous) => !previous)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {navLinks.map((nav, i) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    i === navLinks.length - 1 ? "mr-0" : "mb-4"
                  } text-white`}
                >
                  <Link to={nav.link}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
