import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-[75vh] bg-[#000000]'>
      <div className='textstructure mt-24 px-20 select-none'>
        {["We Create", "Eye", "Opening","Presentation"].map((elem, index) => (
          <div key={index} className='masker font-[Satoshi_Variable]'>
            <div className='w-fit flex'>
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "10vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5 }}
                  className='mr-2 rounded-md h-[6.5vw] relative top-[.8vw] leading-[.70] bg-[#FEAF11]'
                ></motion.div>
              )}
              <h1 className='leading-[8vw] text-[9vw] uppercase tracking-tighter font-medium'>
                {elem}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
