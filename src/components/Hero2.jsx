import React from "react";
import styles from "../style";
import GetStarted from "./GetStarted";

const Hero2 = () => {
  return (
    <section
      id="home"
      className={`flex flex-col md:flex-row ${styles.paddingY} mt-0 px-6 md:px-20 mx-auto`}
    >
      {/* Left Section */}
      <div className={`flex-1 ${styles.flexStart} flex-col md:px-0 sm:px-16 px-6`}>
        <h1 className="font-poppins font-bold text-white text-[36px] sm:text-[48px] lg:text-[52px] leading-[50px] sm:leading-[75px] mb-5">
          MEGA Technologies
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-300 text-[16px] sm:text-[18px]`}>
          MEGA Technologies is a leading provider of advanced security systems designed to prevent unauthorized access and monitor critical entry points. Our focus is on security solutions that protect you and your valuables at all times.
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-300 text-[16px] sm:text-[18px]`}>
          MEGA Technologies has completed all projects, large and small. Our experienced team of engineers, technicians, and programmers design automated systems to keep you safe at all times.
        </p>
        <div className="flex flex-row justify-between items-center mt-10">
          <GetStarted />
        </div>
      </div>

      {/* Right Section */}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src='https://live.themewild.com/secure/assets/img/slider/01.png' // Change this to a relevant image that represents security
          alt="Security Systems"
          className="w-full h-auto md:h-[100%] object-cover rounded-md shadow-lg"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      {/* Mobile Get Started Button */}
      <div className={`md:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero2;
