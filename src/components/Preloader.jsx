import React from 'react';
import loader from '../assets/mega/loader.png';

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-primary backdrop-blur-sm bg-opacity-95 z-50">
      <div className="relative transform hover:scale-105 transition-transform duration-300">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 animate-spin shadow-xl">
          <div className="absolute inset-0 rounded-full border-t-8 border-blue-500 animate-ping"></div>
        </div>
        <img 
          src={loader} 
          alt="Loading..." 
          className="absolute w-24 h-24 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl animate-pulse"
        />
      </div>
    </div>
  );
};

export default Preloader;
