import React from 'react'
import { quotes } from '../assets'

const Feedback = ({ content, name, title, img }) => {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card hover:bg-blue-900/20 transition-all duration-300 group'>
      <img
        src={quotes}
        alt='double-quotes'
        className='w-[42px] h-[27px] object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300'
      />
      <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10 group-hover:text-blue-200 transition-colors duration-300'>
        {content}
      </p>
      
      <div className='flex flex-row items-center gap-4'>
        <img
          src={img}
          alt={name}
          className='w-[48px] h-[48px] rounded-full ring-2 ring-blue-500/50 group-hover:ring-blue-500 transition-all duration-300'
        />
        <div className='flex flex-col'>
          <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white group-hover:text-blue-400 transition-colors duration-300'>
            {name}
          </h4>
          <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite group-hover:text-blue-200 transition-colors duration-300'>
            {title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Feedback
