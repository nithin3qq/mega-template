import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import FontAwesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
// Import images for the carousel
import image1 from "../assets/mega/slide1.png"; 
import image2 from "../assets/mega/slide2.png";
import image3 from "../assets/mega/hero1-img.jpg";
import Business from "./Business";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
import styles from "../style";
import Features from "./Features";
import About from "./About";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import Brands from "./Brands";

const slidesContent = [
  {
    title: "We Offer Smart Security Systems For You",
    subtitle: "We Are Skilled & Expert",
    description: "Discover advanced security solutions tailored for your needs.",
    image: image1,
  },
  {
    title: "Protect What Matters Most",
    subtitle: "Your Security is Our Priority",
    description: "Our systems are designed to give you peace of mind.",
    image: image2,
  },
  {
    title: "Innovative Technology for Safety",
    subtitle: "Stay Ahead with Modern Security",
    description: "Experience the future of security technology.",
    image: 'https://live.themewild.com/secure/assets/img/slider/slider-3.jpg',
  },
];

const Hero1 = () => {
  const swiperRef = useRef(null); // Create a ref for Swiper instance
  const [animate, setAnimate] = useState(true); // State to trigger animation

  // Handler for slide change
  const handleSlideChange = () => {
    setAnimate(false); // Remove animation class
    setTimeout(() => {
      setAnimate(true); // Add animation class back
    }, 0); // Timeout to trigger reflow
  };

  return (
    <div>
    <div className="relative sm:w-full sm:h-[90vh] w-90 h-[90vh] overflow-hidden sm:mt-20 mt-0">
      {/* Swiper Carousel */}
      <Swiper
        ref={swiperRef} // Attach the ref to Swiper
        modules={[Navigation, Pagination, Autoplay]} // Include Autoplay module
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 190000, disableOnInteraction: false }} // Autoplay settings
        className="w-full h-full"
        onSlideChange={handleSlideChange} // Trigger on slide change
      >
        {/* Each Slide with Unique Captions at Bottom */}
        {slidesContent.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="hero-single bg-cover bg-center h-screen flex items-center"
            style={{ backgroundImage: `url(${slide.image})` }} // Use the respective image
          >
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Background overlay */}
            <div className="container mx-auto relative z-10"> {/* Make sure content is above overlay */}
              <div className="flex items-center h-full">
                <div className="w-full md:w-7/12 lg:w-7/12">
                  <div className={`hero-content ${animate ? "fall-animation" : ""} p-8`}> {/* Added padding */}
                    <h6 className="hero-sub-title text-xl text-yellow-300 mb-2">{slide.subtitle}</h6> {/* Changed color and added margin */}
                    <h1 className="hero-title text-6xl font-bold text-white mb-4">{slide.title}</h1> {/* Increased size and added margin */}
                    <p className="text-gray-200 mt-4 text-lg">{slide.description}</p>
                    <div className="hero-btn mt-4">
                      <a href="#" className="theme-btn bg-blue-500 text-white py-3 px-6 rounded-lg mr-2 text-lg transition-transform transform hover:scale-105">
                        About More <i className="fas fa-arrow-right"></i>
                      </a>
                      <a href="#" className="theme-btn bg-white text-blue-500 py-3 px-6 rounded-lg text-lg transition-transform transform hover:scale-105">
                        Learn More <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10">
        <button
          className="p-3 m-2 flex items-center justify-center hidden sm:block" // Hide on small screens
          onClick={() => swiperRef.current.swiper.slidePrev()} // Navigate to the previous slide
        >
          <FontAwesomeIcon icon={faCircleArrowLeft} className="text-blue-500" style={{ fontSize: '50px' }} />
        </button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10">
        <button
          className="p-3 m-2 flex items-center justify-center hidden sm:block" // Hide on small screens
          onClick={() => swiperRef.current.swiper.slideNext()} // Navigate to the next slide
        >
          <FontAwesomeIcon icon={faCircleArrowRight} className="text-blue-500" style={{ fontSize: '50px' }} />
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
