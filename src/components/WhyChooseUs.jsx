import React from 'react';
import { FaUserShield, FaDollarSign, FaCheck } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const WhyChooseUs = () => {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: imgRef, inView: imgInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="container mx-auto py-16 flex justify-center">
      <div className="flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div
          ref={textRef}
          className={`md:w-1/2 transition duration-1000 ease-in-out ${textInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} flex flex-col justify-center`}
        >
          <div className="wow fadeInUp text-center md:text-left">
            <div className="mb-3">
              <span className="text-secondary uppercase text-sm">Why Choose Us</span>
              <h2 className="text-4xl font-bold text-white mt-2">
                We Are Trusted <span className="text-primary">Security Systems</span> Provider
              </h2>
            </div>
            <p className="text-gray-400 text-lg">
              At MEGA Technologies, we offer reliable security solutions customized for your specific needs. From advanced biometric systems to surveillance technology, we ensure you get top-quality service and state-of-the-art technology for your safety and peace of mind.
            </p>
            <div className="mt-8">
              <div className="flex mb-6 items-center">
                <div className="mr-4 text-4xl text-primary">
                  <FaUserShield className="text-green-500" />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-white">Expert Technician</h4>
                  <p className="text-gray-400 text-lg">
                    Our certified experts ensure flawless installation and maintenance of your security systems, so you never have to worry about your safety.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-4 text-4xl text-primary">
                  <FaDollarSign className="text-blue-500" />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-white">Affordable Pricing</h4>
                  <p className="text-gray-400 text-lg">
                    Get the best security solutions at competitive pricing, without compromising on quality or reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div
          ref={imgRef}
          className={`md:w-1/2 mt-10 md:mt-0 md:ml-10 transition duration-1000 ease-in-out ${imgInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} flex justify-center`}
        >
          <div className="relative wow fadeInRight w-full max-w-lg">
            <img
              src="https://live.themewild.com/secure/assets/img/choose/01.jpg"
              alt="Why Choose Us"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 bg-gray-800 bg-opacity-75 p-6 rounded-lg">
              <h4 className="text-xl text-white font-semibold">We Take Care Of Everything For You!</h4>
              <ul className="mt-3 text-gray-300 text-lg">
                <li className="flex items-center mb-2">
                  <FaCheck className="text-primary text-green-500 mr-2" /> Easy to setup and use
                </li>
                <li className="flex items-center mb-2">
                  <FaCheck className="text-primary text-green-500 mr-2" /> Environmental Sensors
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-primary text-green-500 mr-2" /> Touch Screen Panel
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
