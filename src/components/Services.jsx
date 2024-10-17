import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
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
    <div className="container mx-auto mt-8">
      {/* Header */}
      <div className="text-center">
        <div className="my-4">
          <span className="site-title-tagline text-blue-500">Our Services</span>
        </div>
        <div className="heading-divider my-6"></div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicesItems.map((service, index) => (
          <div
            key={service.id}
            className="service-item group p-4 bg-gradient-to-b from-gray-800 to-black shadow-lg border border-gray-700 rounded-lg transition-all duration-300 hover:scale-105"
          >
            {/* Service Image */}
            <div
              className="w-full h-64 bg-cover bg-center rounded-t-lg transition-all duration-300 group-hover:opacity-80"
              style={{ backgroundImage: `url(${service.image})` }}
            ></div>

            {/* Service Content */}
            <div className="service-content text-center py-4">
              {/* Service Title */}
              <h3 className="service-title text-2xl font-bold mb-2 text-white">
                <Link to={`/products/${service.id}`} className="hover:underline">
                  {service.title}
                </Link>
              </h3>
              {/* Service Description */}
              <p className="service-text text-gray-400 mb-4">{service.description}</p>

              {/* Buttons Inline */}
              <div className="flex justify-center space-x-4">
                {/* "Read More" Button */}
                <Link to={`/products/${service.id}`}>
                  <button className="service-arrow bg-blue-500 text-white text-sm px-4 py-2 rounded-lg flex items-center border border-transparent hover:border-white transition-all duration-300">
                    <FaArrowRight className="mr-2" /> <span>Read More</span>
                  </button>
                </Link>

                {/* "Get a Quote" Button */}
                <Link to={`/getaquote`}>
                  <button className="service-quote bg-yellow-500 text-white text-sm px-4 py-2 rounded-lg flex items-center border border-transparent hover:border-white transition-all duration-300">
                    <FiFileText className="mr-2" /> <span>Get a Quote</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
