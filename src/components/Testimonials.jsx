import React from 'react';
import { feedback } from '../constants';
import styles from '../style';
import Feedback from './Feedback';

const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient opacity-70'/>
      
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={`${styles.heading2} text-center md:text-left`}>
          What Our Clients 
          <br className='sm:block hidden'/>
          <span className="text-blue-500">Say About Us</span>
        </h2>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px] text-lg leading-relaxed`}>
            We are committed to providing advanced security solutions that empower businesses across India.
          </p>  
        </div>
      </div>

      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] gap-8'>
        {feedback.map((card) => (
          <Feedback key={card.id} {...card}/>        
        ))}
      </div>      
    </section>
  );
}
export default Testimonials;