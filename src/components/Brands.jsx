import React from 'react';
import { motion } from 'framer-motion';
// import { SectionWrapper } from '../hoc';
import Hikvison from '../assets/mega/logos/hikvision.png'
import honeywell from '../assets/mega/logos/honeywell.png'
import bosch from '../assets/mega/logos/bosch.png'
import cpplus from '../assets/mega/logos/cpplus.png'
import matrix from '../assets/mega/logos/matrix.png'
import cisco from '../assets/mega/logos/cisco.png'
import aruba from '../assets/mega/logos/aruba.png'
import dlink from '../assets/mega/logos/dlink.png'
import commscope from '../assets/mega/logos/commscope.png'
import netgear from '../assets/mega/logos/netgear.png'
import tplink from '../assets/mega/logos/tplink.png'
import dell from '../assets/mega/logos/dell.png'
import hp from '../assets/mega/logos/hp.png'
import morley from '../assets/mega/logos/morley.png'
import gst from '../assets/mega/logos/gst.png'

const brands = [
    { id: 1, title: 'Hikvison', image: Hikvison,  },
    { id: 2, title: 'honeywell', image: honeywell,  },
    { id: 3, title: 'bosch', image: bosch,  },
    { id: 4, title: 'cpplus', image: cpplus, },
    { id: 5, title: 'matrix', image: matrix,  },
    { id: 6, title: 'cisco', image: cisco,  },
    { id: 7, title: 'aruba', image: aruba, },
    { id: 8, title: 'dlink', image: dlink,  },
    { id: 9, title: 'commscope', image: commscope, },
    { id: 10, title: 'netgear', image: netgear,  },
    { id: 11, title: 'tplink', image: tplink,  },
    { id: 12, title: 'dell', image: dell,  },
    { id: 13, title: 'hp', image: hp, },
    { id: 14, title: 'morley', image: morley, },
    { id: 15, title: 'gst', image: gst, },
  ];
const Brands = () => {
  return (
    <div className={` mt-10  w-full flex flex-col items-center  pb-10 `} style={{ backgroundColor: '' }}>
      <h2 className={`font-poppins font-semibold xs:text-[38px] text-[30px] text-blue-600 xs:leading-[76.8px] leading-[66.8px] w-full  text-center mb-4`}>
        Our Brands
      </h2>
      <p className={`font-poppins  xs:text-[28px] text-[30px] text-gray-400 xs:leading-[56.8px] leading-[46.8px] w-full text-center mb-8`}>
        Explore the top brands across all categories
      </p>
      <div className="w-full overflow-hidden ">
        <motion.div
          className="flex space-x-8"
          animate={{ x: [0, -1920] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {brands.map((brand) => (
            <img
              key={brand.id}
              src={brand.image}
              alt={brand.title}
              className=" object-contain h-20 w-36 flex items-center justify-center bg-gray-100 border border-gray-200 p-2 rounded-md"
            />
          ))}
          {brands.map((brand) => (
            <img
              key={`${brand.id}-repeat`}
              src={brand.image}
              alt={brand.title}
              className=" object-contain h-20 w-36 flex items-center justify-center bg-gray-100 border border-gray-200 p-2 rounded-md"
            />
          ))}
          {brands.map((brand) => (
            <img
              key={`${brand.id}-repeat`}
              src={brand.image}
              alt={brand.title}
              className=" object-contain h-20 w-36 flex items-center justify-center bg-gray-100 border border-gray-200 p-2 rounded-md"
            />
          ))}
        </motion.div>
      </div>
      <div className="w-full overflow-hidden mt-16 ">
        <motion.div
          className="flex space-x-8"
          animate={{ x: [-1920, 0] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {brands.reverse().map((brand) => (
            <img
              key={`${brand.id}-reverse`}
              src={brand.image}
              alt={brand.title}
              className=" object-contain h-20 w-40 flex items-center justify-center bg-gray-100 border border-gray-200 p-2 rounded-md"
            />
          ))}
          {brands.map((brand) => (
            <img
              key={`${brand.id}-reverse-repeat`}
              src={brand.image}
              alt={brand.title}
              className=" object-contain h-20 w-40 flex items-center justify-center bg-gray-100 border border-gray-200 p-2 rounded-md"
            />
          ))}
          {brands.map((brand) => (
            <img
              key={`${brand.id}-reverse-repeat`}
              src={brand.image}
              alt={brand.title}
              className=" object-contain h-20 w-40 flex items-center justify-center bg-gray-100 border border-gray-200 p-2 rounded-md"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Brands;
// export default SectionWrapper(Brands, "brands");