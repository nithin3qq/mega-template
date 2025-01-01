import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment, AiFillHeart } from 'react-icons/ai';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import styles from '../style';
import { footerLinks } from '../constants';
import logo1 from "../assets/mega/logo.png";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col text-white bg-gradient-to-b from-gray-900 to-black`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img
            src={logo1}
            alt='Mega Technologies Logo'
            className='w-[350px] h-[150px] object-contain hover:opacity-90 transition-opacity duration-300'
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px] text-gray-400 hover:text-gray-300 transition-colors duration-300`}>
            Empowering businesses with innovative technology solutions.
          </p>
        </div>

        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          <div className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
            <h4 className='font-poppins font-medium text-[18px] leading-[27px] mb-4 text-blue-500'>
              Contact Information
            </h4>
            <div className='space-y-4'>
              <a href="mailto:info@megatechnologies.in" className='flex items-center group'>
                <AiOutlineMail className='mr-3 text-[24px] text-blue-500 group-hover:scale-110 transition-transform duration-300' />
                <span className='text-gray-400 group-hover:text-blue-400 transition-colors duration-300'>info@megatechnologies.in</span>
              </a>
              <a href="tel:9052254949" className='flex items-center group'>
                <AiOutlinePhone className='mr-3 text-[24px] text-blue-500 group-hover:scale-110 transition-transform duration-300' />
                <span className='text-gray-400 group-hover:text-blue-400 transition-colors duration-300'>+91 9052254949</span>
              </a>
              <div className='flex items-center group'>
                <FaMapMarkerAlt className='mr-3 text-[24px] text-blue-500 group-hover:scale-110 transition-transform duration-300' />
                <span className='text-gray-400 group-hover:text-blue-400 transition-colors duration-300'>AS Rao Nagar, Hyderabad, Telangana</span>
              </div>
              <div className='flex items-center group'>
                <FaClock className='mr-3 text-[24px] text-blue-500 group-hover:scale-110 transition-transform duration-300' />
                <span className='text-gray-400 group-hover:text-blue-400 transition-colors duration-300'>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
          
          {footerLinks.map((link) => (
            <div key={link.title} className='flex flex-col ss:my-0 my-5 mr-10 sm:mr-0 min-w-[150px]'>
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-blue-500 mb-4'>
                {link.title}
              </h4>
              <ul className='list-none space-y-3'>
                {link.links.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.link}
                      className='text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group'
                    >
                      <span className='w-2 h-2 bg-blue-500 rounded-full mr-2 group-hover:scale-150 transition-transform duration-300'></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t border-gray-700'>
        <p className='font-poppins text-[16px] leading-[27px] text-gray-400'>
          © 2023 Mega Technologies. All Rights Reserved 
           {/* <AiFillHeart className="inline text-red-500 animate-pulse" /> */}
        </p>

        <div className='flex gap-6 mt-6 md:mt-0'>
          {[
            { icon: <FaFacebookF />, link: "#" },
            { icon: <FaTwitter />, link: "#" },
            { icon: <FaInstagram />, link: "#" },
            { icon: <FaLinkedinIn />, link: "#" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className='w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center hover:bg-blue-500 text-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110'
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer;
