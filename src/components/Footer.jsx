import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from 'react-icons/ai'; // Import icons
import styles from '../style';
import { footerLinks, socialMedia } from '../constants';
import logo1 from "../assets/mega/logo.png";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col  text-white`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img
            src={logo1}
            alt='Mega Technologies Logo'
            className='w-[350px] h-[150px] object-contain'
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px] text-white`}>
            Empowering businesses with innovative technology solutions.
          </p>
        </div>

        {/* Footer Links */}
        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          <div className='flex flex-col ss:my-0 my-4 min-w-[150px] text-white'>
            <h4 className='font-poppins font-medium text-[18px] leading-[27px] mb-4'>
              Contact
            </h4>
            <div className='flex items-center mb-4'>
              <AiOutlineMail className='mr-2 text-[20px] text-blue-500' /> {/* Email Icon */}
              <p className='font-poppins text-[16px] leading-[24px] text-dimWhite hover:text-blue-500 cursor-pointer'>
                info@megatechnologies.in
              </p>
            </div>
            <div className='flex items-center mb-4'>
              <AiOutlinePhone className='mr-2 text-[20px] text-blue-500' /> {/* Phone Icon */}
              <p className='font-poppins text-[16px] leading-[24px] text-dimWhite hover:text-blue-500 cursor-pointer'>
                9052254949
              </p>
            </div>
            <div className='flex items-center mb-4'>
              <AiOutlineEnvironment className='mr-2 text-[20px] text-blue-500' /> {/* Address Icon */}
              <p className='font-poppins text-[16px] leading-[24px] text-dimWhite hover:text-blue-500 cursor-pointer'>
                AS Rao Nagar, Hyderabad, Telangana
              </p>
            </div>
          </div>
          
          {footerLinks.map((link) => (
            <div key={link.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='font-poppins font-medium text-[18px] leading-[27px]'>
                {link.title}
              </h4>
              <ul className='list-none mt-4'>
                {link.links.map((item, index) => (
                  <li
                    key={item.name}
                    className={`font-poppins text-[16px] leading-[24px] text-dimWhite hover:text-blue-500 cursor-pointer ${index !== link.links.length - 1 ? 'mb-4' : 'mb-0'}`}
                  >
                    <Link to={item.link}>{item.name}</Link> {/* Adding Link component */}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-gray-700'>
        <p className='font-poppins text-[16px] leading-[27px] text-white'>
          © 2023 Mega Technologies. All Rights Reserved.
        </p>

        <div className='flex flex-row mt-6 md:mt-0'>
          {socialMedia.map((social, index) => (
            <a href={social.link} key={social.id} target="_blank" rel="noopener noreferrer"> {/* Social media links */}
              <img
                src={social.icon}
                alt={social.id}
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer;
