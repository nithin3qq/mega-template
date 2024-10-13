import React from "react";
import styles from "../style";
import { shield,  } from "../assets"; // Assuming you have relevant images for security and team
import GetStarted from "./GetStarted";

const Hero2 = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} mt-0 px-20 mx-auto`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <h1 className="font-poppins font-bold text-white text-[52px] ss:text-[52px] leading-[75px] ss:leading-[100.8px] mb-5">
          Mega Technologies
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-300`}>
          Mega Technologies is a leading provider of advanced security systems that are specially designed to prevent unauthorized access and monitor critical entry points. Our primary focus is on providing security solutions that secure you and your valuables at all times.
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-300`}>
          Mega Technologies has completed all projects, large and small. Our highly experienced and professional team of engineers, technicians, and programmers design and construct automated systems and software to keep you safe at all times.
        </p>
        <div className="flex flex-row justify-between items-center mt-10">
          <GetStarted />
        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={shield} // Change this to a relevant image that represents security
          alt="Security Systems"
          className="w-[80%] h-[90%] relative z-[5] object-cover rounded-md shadow-lg"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero2;
