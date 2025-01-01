import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  FaCheckCircle,
  FaHeadset,
  FaArrowRight,
  FaAward,
  FaUsers,
  FaProjectDiagram,
} from "react-icons/fa";
import { motion } from "framer-motion";
import shape from "../assets/mega/01.svg";
import Hero2 from "./Hero2";
import { Link } from "react-router-dom";
import Features from "./Features";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: <FaAward />, value: "10+", label: "Years Experience" },
    { icon: <FaUsers />, value: "500+", label: "Happy Clients" },
    { icon: <FaProjectDiagram />, value: "1000+", label: "Projects Done" },
  ];

  return (
    <div>
      <Hero2 />
      <div className="container mx-auto py-16 p-5" ref={ref}>
        <div className="flex flex-col lg:flex-row items-center gap-16 relative">
          {/* Left Section: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -bottom-10 -right-20 lg:-right-10 z-0">
                <img
                  src={shape}
                  alt="Shape"
                  className="w-60 lg:w-80 animate-pulse"
                />
              </div>
              <div className="relative z-10  shadow-2xl w-full ">
                <img
                  src="https://live.themewild.com/secure/assets/img/about/01.jpg"
                  alt="About Us"
                  className="w-[450px] h-[400px] object-cover transform hover:scale-105 transition-transform duration-700 rounded-2xl rounded-lg"
                />
              </div>

              {/* Stats Cards */}
              <div className="absolute -bottom-20 left-8 flex gap-4 z-20">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-blue-600 text-white p-4 rounded-xl shadow-lg backdrop-blur-sm"
                  >
                    <div className="text-3xl mb-1">{stat.icon}</div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Section: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="space-y-6 mt-10 sm:mt-0">
              <span className="text-blue-500 font-semibold text-lg bg-blue-500/10 px-4 py-2 rounded-full">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                We Provide{" "}
                <span className="text-blue-500">Security System</span> Solutions
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                At MEGA Technologies, we specialize in delivering comprehensive
                security solutions tailored to meet the evolving needs of
                businesses and individuals. With over 15 years of experience, we
                are committed to providing innovative and reliable security
                systems.
              </p>

              <ul className="space-y-4">
                {[
                  "Highly trained staff ensuring professional service",
                  "Advanced security systems for diverse requirements",
                  "Proven track record of secure solutions",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center gap-3 text-blue-400 group"
                  >
                    <FaCheckCircle className="text-xl group-hover:scale-125 transition-transform duration-300" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-6">
                <Link
                  to="/portfolio"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-8 py-4  rounded-xl flex items-center gap-2 transform hover:translate-x-2 transition-all duration-300"
                >
                  Read More <FaArrowRight />
                </Link>
                <div className="flex items-center gap-4">
                  <FaHeadset className="text-blue-500 text-4xl animate-bounce" />
                  <div>
                    <div className="text-gray-400">Call Us Anytime</div>
                    <a
                      href="tel:+919052254949"
                      className="text-2xl font-bold text-blue-500 hover:text-blue-400 transition-colors duration-300"
                    >
                      +91 90522 54949
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
