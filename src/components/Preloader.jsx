// src/components/Preloader.js
import React from 'react';
import loader from '../assets/mega/loader.png'; // Your company logo

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-primary ">
      {/* Wrapper for the spinner */}
      <div className="relative">
        {/* Spinner border */}
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-24 w-24 animate-spin"></div>
        {/* Company logo in the center, static */}
        <img src={loader} alt="Loading..." className="absolute w-20 h-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
};

export default Preloader;
