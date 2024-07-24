import React from 'react'
import {motion} from 'framer-motion'
const Marquee = () => {
    
  return (
    <>
    <div data-scroll data-scroll-section data-scroll-speed="0.01" className='w-full rounded-2xl  bg-[#FCA311] '>
    <div className='text text-[#000000] flex whitespace-nowrap pr-30 select-none overflow-hidden'>
    <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear", duration:12}}  className='text-[10vw] leading-none font-["Satoshi_Variable"]' >DEVELOP OPTIMISE </motion.h1>
    <motion.h1 initial={{x:"100"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear", duration:12}} className='text-[10vw] leading-none font-["Satoshi_Variable"]'>DESIGN MAINTAIN</motion.h1> 
    </div>

    </div>
    </>
  )
}

export default Marquee