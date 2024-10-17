import React, { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import id1 from '../assets/mega/portfolio/biometric.jpeg';
import id2 from '../assets/mega/portfolio/cctv.jpg';
import id3 from '../assets/mega/portfolio/network_data_center.jpeg';
import id4 from '../assets/mega/portfolio/access-control-system.jpeg';
import id5 from '../assets/mega/portfolio/boom-barrier.jpeg';
import id6 from '../assets/mega/portfolio/network-server.jpeg';
import id7 from '../assets/mega/portfolio/epabx.jpeg';
import id8 from '../assets/mega/portfolio/fire-alarm-system.jpeg';
import id9 from '../assets/mega/portfolio/soloar-power.jpeg';
import id10 from '../assets/mega/portfolio/digital-door-lock.jpeg';
import id11 from '../assets/mega/portfolio/video-door-phone.jpeg';
import id12 from '../assets/mega/portfolio/wireless-internet.jpeg';
import id13 from '../assets/mega/portfolio/complete-home-network.jpeg';
import { Link } from 'react-router-dom';

const portfolioItems = [
  { id: 1, title: 'Biometric', image: id1, categories: ['Biometric'], description: 'Secure access with advanced biometric systems.' },
  { id: 2, title: 'CCTV', image: id2, categories: ['CCTV'], description: 'Advanced surveillance with cutting-edge CCTV technology' },
  { id: 3, title: 'Networking Data Center', image: id3, categories: ['Networking Data Center'], description: 'Efficient data centers for seamless connectivity.' },
  { id: 4, title: 'Access Control System', image: id4, categories: ['Access Control System'], description: 'Monitor and control access with our solutions.' },
  { id: 5, title: 'Boom Barrier', image: id5, categories: ['Boom Barrier'], description: 'Advanced boom barrier systems for security.' },
  { id: 6, title: 'Network Server', image: id6, categories: ['Network Server'], description: 'Powerful servers to support your network infrastructure.' },
  { id: 7, title: 'Epabx', image: id7, categories: ['Epabx'], description: 'Effective communication systems for businesses.' },
  { id: 8, title: 'Fire Alarm System', image: id8, categories: ['Fire Alarm System'], description: 'Reliable fire alarm systems for safety.' },
  { id: 9, title: 'Solar Power', image: id9, categories: ['Solar Power'], description: 'Eco-friendly solar power solutions.' },
  { id: 10, title: 'Digital Door Lock', image: id10, categories: ['Digital Door Lock'], description: 'Smart locking systems for modern homes.' },
  { id: 11, title: 'Video Door Phone', image: id11, categories: ['Video Door Phone'], description: 'Video door phones for added security.' },
  { id: 12, title: 'Wireless Internet', image: id12, categories: ['Wireless Internet'], description: 'Reliable and fast wireless internet solutions.' },
  { id: 13, title: 'Complete Home Network', image: id13, categories: ['Complete Home Network'], description: 'Complete networking solutions for homes.' },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [shuffle, setShuffle] = useState(false); // State for shuffle animation
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleFilter = (category) => {
    setFilter(category);
    setDropdownOpen(false);
    setShuffle(true);
    setTimeout(() => {
      setShuffle(false); // Reset shuffle after animation finishes
    }, 500);
  };

  return (
    <div className="container mx-auto px-4 sm:px-8">
      {/* Portfolio Header */}
      <div className="flex justify-between items-center mb-6 ">
        <div className='mt-10 sm:mt-0'>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-200">Portfolio</h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-700">
            Explore <span className="text-blue-500">Portfolio</span>
          </h2>
        </div>

        {/* Filter Dropdown */}
        <div className="relative">
          <button
            className="px-3 py-2 text-sm sm:text-base rounded-md border-2 font-bold border-blue-600 bg-white hover:bg-blue-100 text-gray-800"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            Filter Categories
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white border border-gray-200 z-10">
              {[
                'All',
                'Biometric',
                'CCTV',
                'Networking Data Center',
                'Access Control System',
                'Boom Barrier',
                'Network Server',
                'Epabx',
                'Fire Alarm System',
                'Solar Power',
                'Digital Door Lock',
                'Video Door Phone',
                'Wireless Internet',
                'Complete Home Network',
              ].map((category) => (
                <button
                  key={category}
                  className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 ${
                    filter === category ? 'bg-blue-600 text-white' : ''
                  }`}
                  onClick={() => handleFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Portfolio Items */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 ${shuffle ? 'shuffle-animation' : ''}`}>
        {portfolioItems
          .filter((item) => filter === 'All' || item.categories.includes(filter))
          .map((item) => (
            <div key={item.id} className="relative group shuffle-card">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 sm:h-80 object-cover rounded-md shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
              />
              <div className="text-center mt-2 sm:mt-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-100">{item.title}</h3>
              </div>
              {/* Hover effect for the plus icon and description */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                <div className="text-center px-2 sm:px-4">
                  <FaPlus className="text-white text-2xl mb-2 sm:mb-4" />
                  <p className="text-xs sm:text-sm text-white">{item.description}</p>
                  <button className="mt-2 sm:mt-4 px-3 py-1 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    <Link to={`/products/${item.id}`}>Read more..</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Portfolio;
