import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import image1 from "../assets/mega/slide1.jpg"; 
import image2 from "../assets/mega/slide2.webp";
import image3 from "../assets/mega/slide3.jpg";
import Business from "./Business";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
import styles from "../style";
import Features from "./Features";
import About from "./About";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import Brands from "./Brands";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const slidesContent = [
  {
    title: "We Offer Smart Security Systems",
    subtitle: "We Are Skilled & Expert",
    description: "Discover advanced security solutions tailored for your needs.",
    image: image1,
  },
  {
    title: "Protect What Matters Most To You",
    subtitle: "Your Security is Our Priority",
    description: "Our systems are designed to give you peace of mind.",
    image: image2,
  },
  {
    title: "Innovative Technology for Safety",
    subtitle: "Stay Ahead with Modern Security",
    description: "Experience the future of security technology.",
    image: image3,
  },
];

const Hero1 = () => {
  const swiperRef = useRef(null);
  const [animate, setAnimate] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleSlideChange = () => {
    setAnimate(false);
    setTimeout(() => setAnimate(true), 10);
  };

  return (
    <div>
      <div className="relative sm:w-full sm:h-[92vh] w-90 h-[92vh] overflow-hidden">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          // pagination={{ clickable: true }}
          className="w-full h-full shadow-2xl"
          onSlideChange={handleSlideChange}
        >
          {slidesContent.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="hero-single bg-cover bg-center h-screen flex items-center transition-transform duration-700 ease-in-out"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-black/0 to-transparent"></div> */}
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="container mx-auto relative z-10">
                <div className="flex items-center h-full">
                  <div className="w-full md:w-7/12 lg:w-7/12">
                    <div 
                      className={`hero-content ${animate ? "shuffle-card" : ""} p-4 sm:p-10 rounded-lg  mt-28 `}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <h6 className="hero-sub-title text-2xl sm:text-2xl text-yellow-300 mb-2 sm:mb-4 font-bold tracking-wider">{slide.subtitle}</h6>
                      <h1 className="hero-title text-5xl sm:text-6xl font-extrabold text-white mb-3 sm:mb-6 leading-tight">{slide.title}</h1>
                      <p className="text-gray-100 text-2xl sm:text-xl mb-4 sm:mb-8 leading-relaxed max-w-2xl">{slide.description}</p>
                      <div className="hero-btn flex gap-3 sm:gap-6">
                      <div className="tp-slide-service flex items-center ">
                        <div className="">
                          <h4 className="text-3xl font-bold text-yellow-300">100%</h4>
                          <span className="text-white"><b>Installation</b> Free Service</span>
                        </div>
                      </div>
                        <Link 
                          to="/about" 
                          className="theme-btn bg-blue-600 hover:bg-blue-700 text-white py-4 sm:py-4 px-4 sm:px-8 rounded-full text-md sm:text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
                        >
                          About More
                          <FaArrowRight className="ml-1 sm:ml-2 animate-bounce" />
                        </Link>
                        {/* <Link 
                          to='/portfolio' 
                          className="theme-btn bg-white hover:bg-gray-100 text-blue-600 py-4 sm:py-4 px-8 sm:px-8 rounded-full text-md sm:text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
                        >
                          Learn More
                          <FaArrowRight className="ml-1 sm:ml-2 animate-bounce" />
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10">
          <button
            className="p-2 sm:p-4 transition-all duration-300 ease-in-out hover:scale-110 hidden sm:block"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            <FontAwesomeIcon icon={faCircleArrowLeft} className="text-gray-300 hover:text-blue-500" style={{ fontSize: '40px', '@media (min-width: 640px)': { fontSize: '60px' } }} />
          </button>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10">
          <button
            className="p-2 sm:p-4 transition-all duration-300 ease-in-out hover:scale-110 hidden sm:block"
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            <FontAwesomeIcon icon={faCircleArrowRight} className="text-gray-300 hover:text-blue-500" style={{ fontSize: '40px', '@media (min-width: 640px)': { fontSize: '60px' } }} />
          </button>
        </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Services/>
        </div>
      </div>
    <Brands/>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Features/>
        <WhyChooseUs/>
          <Business/>
          <Testimonials/>
        </div>
      </div>
    </div>
  );
};

export default Hero1;