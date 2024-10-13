import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import logo1 from "../assets/mega/logo.png";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 flex py-6 px-4 sm:px-8 justify-between items-center navbar bg-black bg-opacity-95 md:px-16 md:py-4 ">
      {/* Logo Section */}
      <div className="flex justify-start">
        <img src={logo1} alt="MG Technologies" className="w-[184px] h-[50px]" />
      </div>

      {/* Navigation Links and Button */}
      <div className="flex justify-end items-center flex-1">
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, i) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                i === navLinks.length - 1 ? "mr-0" : "mr-10"
              } text-white`}
            >
              <Link to={nav.link}>{nav.title}</Link> {/* Use Link for navigation */}
            </li>
          ))}
        </ul>
      </div>

      {/* Get a Quote Button - Centered on Mobile */}
      <Link to="/getaquote"> {/* Link for Get a Quote */}
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
                <Link to={nav.link}>{nav.title}</Link> {/* Use Link for navigation */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
