import React, { useState, useEffect } from 'react';
import { FaUserShield, FaRulerCombined, FaDollarSign, FaHeadset } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Features = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when it enters the view
    threshold: 0.1, // Fire the event when 10% of the component is visible
  });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  return (
    <div className="container mx-auto py-20 m-20 p-10 sm:p-0" ref={ref}>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 transition-opacity duration-1000 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Experts Staff */}
        <div className="feature-item text-center p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center items-center mb-4">
            <div className="feature-icon text-blue-600 bg-blue-100 p-6 rounded-full">
              <FaUserShield className="text-4xl" />
            </div>
          </div>
          <h4 className={`feature-title text-2xl font-bold mb-6 ${visible ? 'animate-fall' : ''}`}>Experts Staff</h4>
          <p className={`text-gray-600 ${visible ? 'animate-fall' : ''}`}>
            Our team of highly trained professionals ensures that your security systems are installed and maintained to the highest standards.
          </p>
        </div>
        
        {/* Different Range */}
        <div className="feature-item text-center p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center items-center mb-4">
            <div className="feature-icon text-blue-600 bg-blue-100 p-6 rounded-full">
              <FaRulerCombined className="text-4xl" />
            </div>
          </div>
          <h4 className={`feature-title text-2xl font-bold mb-6 ${visible ? 'animate-fall' : ''}`}>Different Range</h4>
          <p className={`text-gray-600 ${visible ? 'animate-fall' : ''}`}>
            We offer a wide range of security products, from surveillance cameras to biometric systems, to meet your specific needs.
          </p>
        </div>
        
        {/* Affordable Rates */}
        <div className="feature-item text-center p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center items-center mb-4">
            <div className="feature-icon text-blue-600 bg-blue-100 p-6 rounded-full">
              <FaDollarSign className="text-4xl" />
            </div>
          </div>
          <h4 className={`feature-title text-2xl font-bold mb-6 ${visible ? 'animate-fall' : ''}`}>Affordable Rates</h4>
          <p className={`text-gray-600 ${visible ? 'animate-fall' : ''}`}>
            We provide top-notch security solutions at prices that are affordable and transparent, giving you value without compromise.
          </p>
        </div>
        
        {/* 24/7 Support */}
        <div className="feature-item text-center p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center items-center mb-4">
            <div className="feature-icon text-blue-600 bg-blue-100 p-6 rounded-full">
              <FaHeadset className="text-4xl" />
            </div>
          </div>
          <h4 className={`feature-title text-2xl font-bold mb-6 ${visible ? 'animate-fall' : ''}`}>24/7 Support</h4>
          <p className={`text-gray-600 ${visible ? 'animate-fall' : ''}`}>
            Our customer support team is available 24/7 to assist you with any issues or queries, ensuring peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
