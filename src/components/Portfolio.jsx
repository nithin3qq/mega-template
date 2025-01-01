import React, { useState, useEffect } from "react";
import { FaPlus, FaSearch, FaLink } from "react-icons/fa";
import id1 from "../assets/mega/portfolio/biometric.jpeg";
import id2 from "../assets/mega/portfolio/cctv.jpg";
import id3 from "../assets/mega/portfolio/network_data_center.jpeg";
import id4 from "../assets/mega/portfolio/access-control-system.jpeg";
import id5 from "../assets/mega/portfolio/boom-barrier.jpeg";
import id6 from "../assets/mega/portfolio/network-server.jpeg";
import id7 from "../assets/mega/portfolio/epabx.jpeg";
import id8 from "../assets/mega/portfolio/fire-alarm-system.jpeg";
import id9 from "../assets/mega/portfolio/soloar-power.jpeg";
import id10 from "../assets/mega/portfolio/digital-door-lock.jpeg";
import id11 from "../assets/mega/portfolio/video-door-phone.jpeg";
import id12 from "../assets/mega/portfolio/wireless-internet.jpeg";
import id13 from "../assets/mega/portfolio/complete-home-network.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    id: 1,
    title: "Biometric",
    image: id1,
    categories: ["Biometric"],
    description: "Secure access with advanced biometric systems.",
  },
  {
    id: 2,
    title: "CCTV",
    image: id2,
    categories: ["CCTV"],
    description: "Advanced surveillance with cutting-edge CCTV technology",
  },
  {
    id: 3,
    title: "Networking Data Center",
    image: id3,
    categories: ["Networking Data Center"],
    description: "Efficient data centers for seamless connectivity.",
  },
  {
    id: 4,
    title: "Access Control System",
    image: id4,
    categories: ["Access Control System"],
    description: "Monitor and control access with our solutions.",
  },
  {
    id: 5,
    title: "Boom Barrier",
    image: id5,
    categories: ["Boom Barrier"],
    description: "Advanced boom barrier systems for security.",
  },
  {
    id: 6,
    title: "Network Server",
    image: id6,
    categories: ["Network Server"],
    description: "Powerful servers to support your network infrastructure.",
  },
  {
    id: 7,
    title: "Epabx",
    image: id7,
    categories: ["Epabx"],
    description: "Effective communication systems for businesses.",
  },
  {
    id: 8,
    title: "Fire Alarm System",
    image: id8,
    categories: ["Fire Alarm System"],
    description: "Reliable fire alarm systems for safety.",
  },
  {
    id: 9,
    title: "Solar Power",
    image: id9,
    categories: ["Solar Power"],
    description: "Eco-friendly solar power solutions.",
  },
  {
    id: 10,
    title: "Digital Door Lock",
    image: id10,
    categories: ["Digital Door Lock"],
    description: "Smart locking systems for modern homes.",
  },
  {
    id: 11,
    title: "Video Door Phone",
    image: id11,
    categories: ["Video Door Phone"],
    description: "Video door phones for added security.",
  },
  {
    id: 12,
    title: "Wireless Internet",
    image: id12,
    categories: ["Wireless Internet"],
    description: "Reliable and fast wireless internet solutions.",
  },
  {
    id: 13,
    title: "Complete Home Network",
    image: id13,
    categories: ["Complete Home Network"],
    description: "Complete networking solutions for homes.",
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [hoveredItem, setHoveredItem] = useState(null);

  const filterCategories = [
    "All",
    "Biometric",
    "CCTV",
    "Networking Data Center",
    "Access Control System",
    "Boom Barrier",
    "Network Server",
    "Epabx",
    "Fire Alarm System",
    "Solar Power",
    "Digital Door Lock",
    "Video Door Phone",
    "Wireless Internet",
    "Complete Home Network",
  ];

  const handleItemClick = (id) => {
    setHoveredItem(hoveredItem === id ? null : id);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our <span className="text-blue-500">Portfolio</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Discover our comprehensive range of security solutions and successful
          implementations
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {filterCategories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105
              ${
                filter === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        layout
      >
        {portfolioItems
          .filter(
            (item) => filter === "All" || item.categories.includes(filter)
          )
          .map((item) => (
            <motion.div
              layout
              key={item.id}
              className="group relative overflow-hidden rounded-xl bg-black/80"
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
              onClick={() => handleItemClick(item.id)}
              onTouchStart={() => handleItemClick(item.id)}
            >
              {/* Image Container */}
              <div className="aspect-w-16 aspect-h-12 overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-70 object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/20">
                <h3 className="text-lg font-semibold text-gray-100 text-center">
                  {item.title}
                </h3>
              </div>
              {/* Overlay Content */}
              <div
                className={`absolute inset-0 bg-black/90 
                transition-all duration-300 ${
                  hoveredItem === item.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Link
                      to={`/products/${item.id}`}
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <FaSearch className="text-sm" />
                      <span>View Details</span>
                    </Link>
                    <Link
                      to={`/getaquote`}
                      className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <FaLink className="text-sm" />
                      <span>Get Quote</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
};
export default Portfolio;