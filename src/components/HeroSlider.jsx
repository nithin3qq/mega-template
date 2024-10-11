import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css"; // Import Swiper styles

// Install modules
SwiperCore.use([Autoplay, Navigation, Pagination]);

const HeroSlider = () => {
  return (
    <div className="hero-section">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className="hero-slider"
      >
        <SwiperSlide
          className="hero-single bg-cover bg-center h-screen flex items-center"
          style={{ backgroundImage: "url(assets/img/slider/slider-1.jpg)" }}
        >
          <div className="container mx-auto">
            <div className="flex items-center h-full">
              <div className="w-full md:w-7/12 lg:w-7/12">
                <div className="hero-content">
                  <h6 className="hero-sub-title text-lg text-gray-600">We Are Skilled & Expert</h6>
                  <h1 className="hero-title text-4xl font-bold text-white">
                    We Offer Smart <span className="text-gradient">Security</span> Systems For You
                  </h1>
                  <p className="text-gray-300 mt-4">
                    There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected humour or randomised.
                  </p>
                  <div className="hero-btn mt-4">
                    <a href="#" className="theme-btn bg-blue-500 text-white py-2 px-4 rounded-lg mr-2">
                      About More <i className="fas fa-arrow-right"></i>
                    </a>
                    <a href="#" className="theme-btn bg-white text-blue-500 py-2 px-4 rounded-lg">
                      Learn More <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="hero-single bg-cover bg-center h-screen flex items-center"
          style={{ backgroundImage: "url(assets/img/slider/slider-2.jpg)" }}
        >
          <div className="container mx-auto">
            <div className="flex items-center h-full">
              <div className="w-full md:w-7/12 lg:w-7/12">
                <div className="hero-content">
                  <h6 className="hero-sub-title text-lg text-gray-600">We Are Skilled & Expert</h6>
                  <h1 className="hero-title text-4xl font-bold text-white">
                    We Offer Smart <span className="text-gradient">Security</span> Systems For You
                  </h1>
                  <p className="text-gray-300 mt-4">
                    There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected humour or randomised.
                  </p>
                  <div className="hero-btn mt-4">
                    <a href="#" className="theme-btn bg-blue-500 text-white py-2 px-4 rounded-lg mr-2">
                      About More <i className="fas fa-arrow-right"></i>
                    </a>
                    <a href="#" className="theme-btn bg-white text-blue-500 py-2 px-4 rounded-lg">
                      Learn More <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="hero-single bg-cover bg-center h-screen flex items-center"
          style={{ backgroundImage: "url(assets/img/slider/slider-3.jpg)" }}
        >
          <div className="container mx-auto">
            <div className="flex items-center h-full">
              <div className="w-full md:w-7/12 lg:w-7/12">
                <div className="hero-content">
                  <h6 className="hero-sub-title text-lg text-gray-600">We Are Skilled & Expert</h6>
                  <h1 className="hero-title text-4xl font-bold text-white">
                    We Offer Smart <span className="text-gradient">Security</span> Systems For You
                  </h1>
                  <p className="text-gray-300 mt-4">
                    There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected humour or randomised.
                  </p>
                  <div className="hero-btn mt-4">
                    <a href="#" className="theme-btn bg-blue-500 text-white py-2 px-4 rounded-lg mr-2">
                      About More <i className="fas fa-arrow-right"></i>
                    </a>
                    <a href="#" className="theme-btn bg-white text-blue-500 py-2 px-4 rounded-lg">
                      Learn More <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
