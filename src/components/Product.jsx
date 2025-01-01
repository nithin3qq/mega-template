import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaChevronRight, FaShieldAlt, FaCheck, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
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

const Product = () => {
  const { id } = useParams();
  const portfolioItems = [
    { id: 1, title: 'Biometric', image: id1, description: 'Secure access with advanced biometric systems.', features: ['High accuracy', 'Fast recognition', 'Easy integration'], specifications: ['Operating Temp: -10°C to 50°C', 'Power Supply: 12V DC'] },
    { id: 2, title: 'CCTV', image: id2, description: 'Advanced surveillance with cutting-edge CCTV technology', features: ['UHD video quality', 'Night vision', 'Remote access'], specifications: ['Resolution: 4k', 'Cloud Storage'] },
    { id: 3, title: 'Networking Data Center', image: id3, description: 'Efficient data centers for seamless connectivity.', features: ['Scalable architecture', 'High availability', 'Robust security'], specifications: ['Cooling: Redundant systems', 'Power: Dual feeds'] },
    { id: 4, title: 'Access Control System', image: id4, description: 'Monitor and control access with our solutions.', features: ['Real-time monitoring', 'Multiple authentication methods'], specifications: ['Compatibility: RFID, biometrics'] },
    { id: 5, title: 'Boom Barrier', image: id5, description: 'Advanced boom barrier systems for security.', features: ['Durable construction', 'Automatic operation'], specifications: ['Opening Speed: 1.5s', 'Length: Up to 6m'] },
    { id: 6, title: 'Network Server', image: id6, description: 'Powerful servers to support your network infrastructure.', features: ['High performance', 'Energy efficient'], specifications: ['10G speed', 'Structure Cabling'] },
    { id: 7, title: 'Epabx', image: id7, description: 'Effective communication systems for businesses.', features: ['Multiple lines', 'Voicemail functionality'], specifications: ['Capacity: Up to 100 users'] },
    { id: 8, title: 'Fire Alarm System', image: id8, description: 'Reliable fire alarm systems for safety.', features: ['Smoke detection', 'Alert systems'], specifications: ['Power: 24V DC', 'Battery backup'] },
    { id: 9, title: 'Solar Power', image: id9, description: 'Eco-friendly solar power solutions.', features: ['Sustainable energy', 'Cost-efficient'], specifications: ['Panel Type: Monocrystalline', 'Output: 300W'] },
    { id: 10, title: 'Digital Door Lock', image: id10, description: 'Smart locking systems for modern homes.', features: ['Keyless entry', 'Remote control'], specifications: ['Power: 4 x AA batteries', 'Connectivity: Bluetooth'] },
    { id: 11, title: 'Video Door Phone', image: id11, description: 'Video door phones for added security.', features: ['Two-way communication', 'Wide-angle lens'], specifications: ['HD quality', 'Remote Acccess'] },
    { id: 13, title: 'Complete Home Network', image: id13, description: 'Complete networking solutions for homes.', features: ['Seamless connectivity', 'Easy setup'], specifications: ['Router: Dual-band', 'Mesh support'] },
    { id: 12, title: 'Wireless Internet', image: id12, description: 'Reliable and fast wireless internet solutions.', features: ['High-speed connection', 'Wide coverage'], specifications: ['Speed: Up to 1Gbps', 'Range: 300m'] },
    
  ];
  
  const product = portfolioItems.find(item => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-gray-100">Product not found</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10 px-4 pb-16">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 mb-8 text-gray-400 pt-16">
        <Link to="/" className="hover:text-blue-500 transition-colors duration-300">Home</Link>
        <FaChevronRight className="text-sm" />
        <Link to="/portfolio" className="hover:text-blue-500 transition-colors duration-300">Portfolio</Link>
        <FaChevronRight className="text-sm" />
        <span className="text-blue-500">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-blue-500 rounded-2xl transform rotate-3 opacity-10 group-hover:rotate-6 transition-transform duration-300 h-[400px]"></div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full rounded-2xl shadow-2xl relative z-10 transform transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>

        {/* Product Details Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div>
            <span className="text-blue-500 font-semibold text-lg bg-blue-500/10 px-4 py-2 rounded-full">
              {product.title}
            </span>
            <h1 className="text-4xl font-bold text-white mt-4 mb-6">{product.title} Solutions</h1>
            <p className="text-lg text-gray-300 leading-relaxed">{product.description}</p>
          </div>

          {/* Features Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
              <FaShieldAlt className="text-blue-500" /> Key Features
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <FaCheck className="text-blue-500 group-hover:scale-125 transition-transform duration-300" />
                  <span className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Specifications Section */}
          <div className="space-y-4 bg-blue-900/20 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-white">Technical Specifications</h2>
            <ul className="space-y-3">
              {product.specifications.map((spec, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-300"
                >
                  {spec}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-6 pt-4">
            <Link to="/getaquote">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors duration-300"
              >
                Request a Quote <FaArrowRight />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Product;