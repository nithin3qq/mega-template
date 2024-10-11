import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa'; // For the plus icon

// Sample images and data for the portfolio
const portfolioItems = [
  {
    id: 1,
    title: 'CCTV Installation',
    subtitle: 'Installation',
    image: 'https://live.themewild.com/secure/assets/img/portfolio/01.jpg',
    link: 'https://yourlink.com/portfolio1',
    categories: ['Installation', 'Repair'],
  },
  {
    id: 2,
    title: 'CCTV Repair',
    subtitle: 'Repair',
    image: 'https://live.themewild.com/secure/assets/img/portfolio/02.jpg',
    link: 'https://yourlink.com/portfolio2',
    categories: ['Repair'],
  },
  {
    id: 3,
    title: 'Alarm System Installation',
    subtitle: 'Alarm',
    image: 'https://live.themewild.com/secure/assets/img/portfolio/03.jpg',
    link: 'https://yourlink.com/portfolio3',
    categories: ['Alarm'],
  },
  {
    id: 4,
    title: 'Wireless Camera Setup',
    subtitle: 'Wireless',
    image: 'https://live.themewild.com/secure/assets/img/portfolio/04.jpg',
    link: 'https://yourlink.com/portfolio4',
    categories: ['Wireless'],
  },
  {
    id: 5,
    title: 'Outdoor Surveillance',
    subtitle: 'Outdoor',
    image: 'https://live.themewild.com/secure/assets/img/portfolio/05.jpg',
    link: 'https://yourlink.com/portfolio5',
    categories: ['Outdoor', 'Installation'],
  },
  {
    id: 6,
    title: 'Outdoor Camera Installation',
    subtitle: 'Outdoor',
    image: 'https://live.themewild.com/secure/assets/img/portfolio/06.jpg',
    link: 'https://yourlink.com/portfolio6',
    categories: ['Outdoor', 'Repair'],
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All'); // State for filter selection

  // Function to filter items based on category
  const handleFilter = (category) => {
    setFilter(category);
  };

  return (
    <div className="container mx-auto mt-8">
      {/* Heading and Categories */}
      <div className="flex justify-between items-center mb-6">
      <span class="site-title-tagline">Portfolio</span>
      <h2 class="site-title">Explore <span>Portfolio</span></h2>
        
        {/* <h1 className="text-3xl font-bold text-white">Portfolio</h1>
        <h1 className="text-4xl font-bold text-white site-title">Explore Portfolio</h1> */}
        <div>
          {['All', 'Installation', 'Repair', 'Alarm', 'Wireless', 'Outdoor'].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full border-2 font-bold border-blue-600  bg-white duration-300 mr-2 
                ${filter === category ? 'bg-blue-900 text-white ' : ' hover:bg-blue-100'}`}
              onClick={() => handleFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Items */}
      <div className="flex flex-wrap -mx-4">
        {portfolioItems
          .filter((item) => filter === 'All' || item.categories.includes(filter)) // Updated filtering logic
          .map((item) => (
            <div className="w-full md:w-1/3 px-4 mb-8" key={item.id}>
              <div className="relative group transition-transform duration-300 transform hover:scale-105">
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover rounded-md" />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300 flex flex-col justify-center items-center">
                  <a href={item.link} className="text-white">
                    <FaPlus className="text-white mb-2" style={{ fontSize: '30px' }} />
                    <h5 className="portfolio-subtitle text-lg">{item.subtitle}</h5>
                    <h4 className="portfolio-title text-xl font-bold">{item.title}</h4>
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Portfolio;
