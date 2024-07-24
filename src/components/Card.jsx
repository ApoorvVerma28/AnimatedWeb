import { motion } from 'framer-motion';
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
const Card = ({ width, start, para,hover="false"}) => {
    
    return (
        <motion.div whileHover={{backgroundColor: hover === "true" && "#FCA311",padding:"25px"}} className={`${width}  min-h-[25rem] flex flex-col justify-between bg-zinc-800 p-5 rounded-xl`}>
            <div className='w-full '>
                <div className='w-full flex justify-between items-center'>
                    <h3>heading </h3>
                    <IoIosArrowRoundForward className='text-3xl' />
                </div>
                <h1 className='text-3xl font-medium mt-2 '>What ever</h1>
            </div>
            <div className='w-full '>
                {
                    start &&
                    (
                        <>
                            <h1 className='text-6xl font-semibold tracking-tight leading-none'> Start a project</h1>
                            <button className='rounded-full mt-5 p-2 px-5 border-[1px] border-zinc-50'>Contact</button></>
                    )
                }
                {para && (
                    <p className='text-sm text-zinc-500 font-medium '>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                )}

            </div>
        </motion.div>
    )
}

export default Card