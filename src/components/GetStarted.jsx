import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'
import { Link } from 'react-router-dom'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <Link to={`/getaquote`} className="hover:underline">

        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
            <span className='text-gradient'>Get</span>
          </p>
          <img
            src={arrowUp}
            alt='arrow'
            className='w-[23px] h-[23px] object-contain'
          />
        </div>
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
        
        <span className='text-gradient'>Started</span>
        </p>
        </Link>

      </div>
    </div>
  )
}

export default GetStarted
