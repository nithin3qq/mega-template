import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';  // Icon for breadcrumbs
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
  console.log('Product ID:', id);
  const portfolioItems = [
    { id: 1, title: 'Biometric', image: id1, description: 'Secure access with advanced biometric systems.', features: ['High accuracy', 'Fast recognition', 'Easy integration'], specifications: ['Operating Temp: -10°C to 50°C', 'Power Supply: 12V DC'] },
    { id: 2, title: 'CCTV', image: id2, description: 'Advanced surveillance with cutting-edge CCTV technology', features: ['HD video quality', 'Night vision', 'Remote access'], specifications: ['Resolution: 1080p', 'Storage: 1TB HDD'] },
    { id: 3, title: 'Networking Data Center', image: id3, description: 'Efficient data centers for seamless connectivity.', features: ['Scalable architecture', 'High availability', 'Robust security'], specifications: ['Cooling: Redundant systems', 'Power: Dual feeds'] },
    { id: 4, title: 'Access Control System', image: id4, description: 'Monitor and control access with our solutions.', features: ['Real-time monitoring', 'Multiple authentication methods'], specifications: ['Compatibility: RFID, biometrics'] },
    { id: 5, title: 'Boom Barrier', image: id5, description: 'Advanced boom barrier systems for security.', features: ['Durable construction', 'Automatic operation'], specifications: ['Opening Speed: 1.5s', 'Length: Up to 6m'] },
    { id: 6, title: 'Network Server', image: id6, description: 'Powerful servers to support your network infrastructure.', features: ['High performance', 'Energy efficient'], specifications: ['Processor: Intel Xeon', 'Memory: 32GB'] },
    { id: 7, title: 'Epabx', image: id7, description: 'Effective communication systems for businesses.', features: ['Multiple lines', 'Voicemail functionality'], specifications: ['Capacity: Up to 100 users'] },
    { id: 8, title: 'Fire Alarm System', image: id8, description: 'Reliable fire alarm systems for safety.', features: ['Smoke detection', 'Alert systems'], specifications: ['Power: 24V DC', 'Battery backup'] },
    { id: 9, title: 'Solar Power', image: id9, description: 'Eco-friendly solar power solutions.', features: ['Sustainable energy', 'Cost-efficient'], specifications: ['Panel Type: Monocrystalline', 'Output: 300W'] },
    { id: 10, title: 'Digital Door Lock', image: id10, description: 'Smart locking systems for modern homes.', features: ['Keyless entry', 'Remote control'], specifications: ['Power: 4 x AA batteries', 'Connectivity: Bluetooth'] },
    { id: 11, title: 'Video Door Phone', image: id11, description: 'Video door phones for added security.', features: ['Two-way communication', 'Wide-angle lens'], specifications: ['Resolution: 720p', 'Power: 12V'] },
    { id: 12, title: 'Wireless Internet', image: id12, description: 'Reliable and fast wireless internet solutions.', features: ['High-speed connection', 'Wide coverage'], specifications: ['Speed: Up to 1Gbps', 'Range: 300m'] },
    { id: 13, title: 'Complete Home Network', image: id13, description: 'Complete networking solutions for homes.', features: ['Seamless connectivity', 'Easy setup'], specifications: ['Router: Dual-band', 'Mesh support'] },
  ];
  
  const product = portfolioItems.find(item => item.id === parseInt(id));

  if (!product) {
    return <div className="text-center text-gray-100">Product not found</div>;
  }

  return (
    <div className="container mx-auto mt-10 px-4">
      {/* Breadcrumbs */}
      <nav className="text-gray-400 mb-4 pt-10">
        <Link to="/" className="hover:underline text-blue-500">Home</Link>
        <FaChevronRight className="inline-block mx-2" />
        <Link to="/portfolio" className="hover:underline text-blue-500">Portfolio</Link>
        <FaChevronRight className="inline-block mx-2" />
        <span className="text-gray-500">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full  object-cover rounded-md shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-100 mb-4">{product.title}</h1>
          <p className="text-lg text-gray-300 mb-6">{product.description}</p>

          {/* Additional Info */}
          <h2 className="text-2xl font-semibold text-gray-100 mt-6">Features</h2>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            {product.features.map((feature, index) => (
              <li key={index} className="mb-2">{feature}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold text-gray-100 mt-6">Specifications</h2>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            {product.specifications.map((spec, index) => (
              <li key={index} className="mb-2">{spec}</li>
            ))}
          </ul>

          {/* Request a Quote Button */}
          <Link to="/getaquote">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-700 transition-colors mt-4">
              Request a Quote
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
