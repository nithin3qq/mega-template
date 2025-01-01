import React from "react";
import styles from "../style";
import GetStarted from "./GetStarted";
import { motion } from "framer-motion";
import { FaShieldAlt, FaUserLock, FaVideo } from "react-icons/fa";
import image from '../assets/mega/about.jpg'

const Hero2 = () => {
  const features = [
    { icon: <FaShieldAlt />, text: "Advanced Security" },
    { icon: <FaUserLock />, text: "Access Control" },
    { icon: <FaVideo />, text: "24/7 Surveillance" },
  ];

  return (
    <section className={`flex flex-col md:flex-row ${styles.paddingY} mt-0 px-6 md:px-20 mx-auto`}>
      {/* Left Section */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className={`flex-1 ${styles.flexStart} flex-col md:px-0 sm:px-16 px-6`}
      >
        <h1 className="font-poppins font-bold text-white text-[42px] sm:text-[56px] lg:text-[64px] leading-tight mb-8">
          MEGA <span className="text-blue-500">Technologies</span>
        </h1>

        <div className="flex flex-wrap gap-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full">
              <span className="text-blue-500 text-xl">{feature.icon}</span>
              <span className="text-gray-300">{feature.text}</span>
            </div>
          ))}
        </div>

        <p className={`${styles.paragraph} max-w-[470px] text-gray-300 text-lg leading-relaxed mb-8`}>
          MEGA Technologies is a leading provider of advanced security systems designed to prevent unauthorized access and monitor critical entry points. Our focus is on security solutions that protect you and your valuables at all times.
        </p>

        <p className={`${styles.paragraph} max-w-[470px] text-gray-300 text-lg leading-relaxed mb-12`}>
          Our experienced team of engineers, technicians, and programmers design automated systems to keep you safe at all times.
        </p>

        <GetStarted />
      </motion.div>

      {/* Right Section */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <div className="relative w-full h-[400px] sm:h-[600px] rounded-2xl overflow-hidden">
          <img
            src={image}
            alt="Security Systems"
            className="w-full h-full object-cover  transform hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        </div>

        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40 opacity-30" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient opacity-30" />
      </motion.div>
    </section>
  );
};

export default Hero2;
