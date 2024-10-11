import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaCheckCircle, FaHeadset, FaArrowRight } from 'react-icons/fa';
import shape from '../assets/mega/01.svg';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when in view
    threshold: 0.1, // Trigger when 10% of the component is in view
  });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  return (
    <div className="container mx-auto py-16" ref={ref}>
      <div className="flex flex-col lg:flex-row items-center relative">
        {/* Left Section: Image */}
        <div
          className={`lg:w-1/2 transition-transform duration-1000 ease-out ${visible ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-20 opacity-0'}`}
        >
          <div className="relative">
            {/* Shape under the image */}
            <div className="absolute -bottom-10 -right-20 lg:-right-0 z-0">
              <img src={shape} alt="Shape" className="w-72 lg:w-96" />
            </div>
            {/* Image above the shape */}
            <img
              src="https://live.themewild.com/secure/assets/img/about/01.jpg"
              alt="About Us"
              className="rounded-lg shadow-lg relative z-10"
            />
            <div className="absolute bottom-0 left-0 bg-blue-200 text-blue-900 p-4 rounded-full border-4 border-white z-20">
              <h1 className="text-5xl font-bold">10 <span>+</span></h1>
              <p className="text-lg font-semibold ml-1">Years Of <br /> Experience</p>
            </div>
          </div>
        </div>

        {/* Right Section: Text */}
        <div
          className={`lg:w-1/2 mt-8 lg:mt-0 transition-transform duration-1000 ease-out ${visible ? 'transform translate-x-0 opacity-100' : 'transform translate-x-20 opacity-0'}`}
        >
          <div className="mb-8">
            <span className="text-blue-400 font-semibold uppercase">About Us</span>
            <h2 className="text-3xl font-bold text-blue-100">
              We Provide <span className="text-blue-300">Security System</span> Solutions
            </h2>
          </div>

          <p className="text-gray-200 mb-6">
            At MEGA Technologies, we specialize in delivering comprehensive security solutions tailored to meet the evolving needs of businesses and individuals. With over 15 years of experience, we are committed to providing innovative and reliable security systems.
          </p>

          <ul className="space-y-4 mb-6">
            <li className="flex items-start text-blue-400">
              <FaCheckCircle className="text-blue-400 text-lg mr-2" />
              <p>Highly trained staff ensuring professional service and support.</p>
            </li>
            <li className="flex items-start text-blue-400">
              <FaCheckCircle className="text-blue-400 text-lg mr-2" />
              <p>Advanced security systems designed to meet diverse requirements.</p>
            </li>
            <li className="flex items-start text-blue-400">
              <FaCheckCircle className="text-blue-400 text-lg mr-2" />
              <p>Proven track record of delivering trusted and secure solutions.</p>
            </li>
          </ul>

          <div className="flex items-center justify-between">
            <a href="about.html" className="bg-blue-400 text-white py-3 px-6 rounded-lg inline-flex items-center">
              Read More <FaArrowRight className="ml-2" />
            </a>

            <div className="flex items-center">
              <FaHeadset className="text-blue-400 text-3xl mr-4" />
              <div>
                <span className="text-gray-200">Call Us Anytime</span>
                <h5 className="text-xl font-bold text-blue-300">
                  <a href="tel:+2123654789">+91 90522 54949</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
