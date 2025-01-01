import React from 'react';
import { FaArrowRight,FaQuoteRight  } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi'; // Icon for Get a Quote
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
import { motion } from 'framer-motion';

const servicesItems = [
  { id: 1, title: 'Biometric', image: id1, description: 'Secure access with advanced biometric systems.' },
  { id: 2, title: 'CCTV', image: id2, description: 'Advanced surveillance with cutting-edge CCTV technology.' },
  { id: 3, title: 'Networking Data Center', image: id3, description: 'Efficient data centers for seamless connectivity.' },
  { id: 4, title: 'Access Control System', image: id4, description: 'Monitor and control access with our solutions.' },
  { id: 5, title: 'Boom Barrier', image: id5, description: 'Advanced boom barrier systems for security.' },
  { id: 6, title: 'Network Server', image: id6, description: 'Powerful servers to support your network infrastructure.' },
  { id: 7, title: 'Epabx', image: id7, description: 'Effective communication systems for businesses.' },
  { id: 8, title: 'Fire Alarm System', image: id8, description: 'Reliable fire alarm systems for safety.' },
  { id: 9, title: 'Solar Power', image: id9, description: 'Eco-friendly solar power solutions.' },
  { id: 10, title: 'Digital Door Lock', image: id10, description: 'Smart locking systems for modern homes.' },
  { id: 11, title: 'Video Door Phone', image: id11, description: 'Video door phones for added security.' },
  { id: 12, title: 'Wireless Internet', image: id12, description: 'Reliable and fast wireless internet solutions.' },
  { id: 13, title: 'Complete Home Network', image: id13, description: 'Complete networking solutions for homes.' },
];

const Services = () => {
  return (
    <div className="container mx-auto py-20">
      {/* Enhanced Header */}
      <div className="text-center mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block text-blue-500 font-bold text-lg px-6 py-2 rounded-full bg-blue-500/10 mb-4"
        >
          Our Services
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          What We <span className="text-blue-500">Offer</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          Discover our comprehensive range of security and networking solutions
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesItems.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900"
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-8 relative">
              <div className="absolute top-0 right-0 -mt-12 mr-8 w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center transform -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                <FaQuoteRight className="text-white text-xl transform rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Link to={`/products/${service.id}`}>
                  <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-2 sm:px-4 py-3 rounded-xl transition-all duration-300 transform hover:translate-x-2">
                    <span>Read More</span>
                    <FaArrowRight />
                  </button>
                </Link>
                <Link to="/getaquote">
                  <button className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-2 sm:px-4 py-3 rounded-xl transition-all duration-300 transform hover:translate-x-2">
                    <FiFileText />
                    <span>Get Quote</span>
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
