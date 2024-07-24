import React from 'react'
import { IoIosReturnRight } from "react-icons/io";
import { TiThLarge } from 'react-icons/ti';
const Button = ({title ="Get Started"}) => {
  return (
    <div className='w-40 px-4 py-2 select-none text-[#000000] rounded-full bg-[#E5E5E5] flex items-center justify-evenly'>
        <span className='text-sm font-medium'>{title}</span>< IoIosReturnRight className='text-lg' />
    </div>
  )
}

export default Button