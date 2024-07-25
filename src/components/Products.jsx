import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion';
const Products = () => {
  var products = [
    {
      title: "Weglot",
      description: "Arqu Selection Product Details and Features for Product Details", live: true,
      case: false,
    },
    {
      title: "Cula",
      description: "Arqu Selection Product Details and Features for Product Details", live: true,
      case: true,
    },
    {
      title: "Maniv",
      description: "Arqu Selection Product Details and Features for Product Details", live: true,
      case: false,
    },
    {
      title: "Showcase",
      description: "Arqu Selection Product Details and Features for Product Details", live: true,
      case: true,
    }
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 24);
  }


  return (
    <div className='mt-20 relative'>
      {products.map((val, index) => (
        <Product key={index} val={val} mover={mover} count={index} />
      ))}
      <div className='w-full h-full absolute top-0 pointer-events-none '>
        <motion.div initial={{ y: pos, x: "-50%" }} animate={{ y: pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .6 }} className='w-[28rem] h-[24rem] left-[44%] absolute -translate-x-[50%] overflow-hidden'>
          <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full '>
            <video autoPlay muted preload loop >
              <source src="././public/weglotlikemagic.webm" type="video/webm" />
            </video>
          </motion.div>
          <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full '>
            <video autoPlay muted preload loop >
              <source src="././public/Cula_promo_new_4_3.mp4" type="video/mp4" />

            </video>
          </motion.div>
          <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full '>
            <video autoPlay muted preload loop >
              <source src="././public/Maniv-Compressed.mp4" type="video/mp4" />
            </video>
          </motion.div>
          <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full   '>
            <video autoPlay muted preload loop  >
              <source src="././public/showcase_4_3.mp4" type="video/mp4" />
            </video>
          </motion.div>

        </motion.div>
      </div>
    </div>
  )
}

export default Products