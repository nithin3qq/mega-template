import React from 'react';
import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-8 rounded-[20px] ${index !== features.length - 1 ? 'mb-8' : 'mb-0'} feature-card group hover:bg-blue-900/20 transition-all duration-300`}>
    <div className={`w-[70px] h-[70px] rounded-full ${styles.flexCenter} bg-blue-600/10 group-hover:bg-blue-600/20 transition-all duration-300`}>
      <img
        src={icon}
        alt='icon'
        className='w-[55%] h-[55%] object-contain group-hover:scale-110 transition-transform duration-300'
      />
    </div>
    <div className='flex-1 flex flex-col ml-6'>
      <h4 className='font-poppins font-semibold text-white text-[20px] leading-[23px] mb-2 group-hover:text-blue-400 transition-colors duration-300'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] group-hover:text-gray-300 transition-colors duration-300'>
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id='features' className={`${layout.section} relative`}>
      <div className="absolute inset-0 bg-blue-900/5 blur-3xl rounded-full"></div>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} relative`}>
          Secure Your Business, <br className='sm:block hidden'/>
          <span className="text-blue-500">We'll Handle Your Security.</span>
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-lg leading-relaxed`}>
          At MEGA Technologies, we provide cutting-edge security systems that are tailored to your needs. 
          From advanced surveillance to access control, we ensure that your business is protected at all times.
          Let us help you enhance your security with our proven technology solutions.
        </p>
        <Button styles='mt-10 bg-blue-600 hover:bg-blue-700 transition-colors duration-300' text="Learn More" />
      </div>

      <div className={`${layout.sectionImg} flex-col relative`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
