import React from 'react';
import styles from '../style';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';
import logo1 from "../assets/mega/logo2.png";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img
            src={logo1}
            alt='Mega Technologies Logo'
            className='w-[266px] h-[172px] object-contain'
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            Empowering businesses with innovative technology solutions.         
          </p>
        </div>
        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((link) => (
            <div key={link.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
                {link.title}
              </h4>
              <ul className='list-none mt-4'>
                {link.links.map((item, index) => (
                  <li 
                    key={item.name} 
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== link.links.length - 1 ? 'mb-4' : 'mb-0'}`}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
        <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
          2023 Mega Technologies. All Rights Reserved.
        </p>  
        <div className='flex flex-col items-center md:mt-0 mt-6 text-white'>
          <p className='font-poppins font-normal text-center text-[16px] leading-[24px]'>
            Mail: info.mgthyd@gmail.com
          </p>
          <p className='font-poppins font-normal text-center text-[16px] leading-[24px]'>
            Contact: 9052254949
          </p>
          <p className='font-poppins font-normal text-center text-[16px] leading-[24px]'>
            Address: AS Rao Nagar, Hyderabad, Telangana
          </p>
        </div>
        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social, index) => (
            <img
              src={social.icon}
              key={social.id}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
            />
          ))}
        </div>    
      </div>
    </section>
  );
}

export default Footer;
