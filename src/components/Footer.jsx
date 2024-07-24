import React from 'react'
import Button from './Button'
const Footer = () => {
  return (
    <div className='w-full '>
        <div className='max-w-screen-xl mx-auto py-10 flex gap-32'>
        <div className='basis-1/2'>
        <h1 className='text-[11rem] leading-none tracking-tighter' > LOGO</h1>
        </div>
        <div className='basis-1/2 flex gap-4'>
        <div className='basis-1/3'>
            <h4 className='mb-10 '>Socials</h4>
            {["instagram", "facebook", "twitter"].map((item,index) =><a className='block capitalize mt-3 text-zinc-500'>{item}</a>)}
        </div>
        <div className='basis-1/3'>
            <h4 className='mb-10 '>About</h4>
            {["Lucknow", "+91 2545664356 "].map((item,index) =><a className='block capitalize mt-3 text-zinc-500'>{item}</a>)}
        </div>
        <div className='basis-1/2 '>
            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repellat.</p>
         <Button />
        </div>
        </div>
        </div>
    </div>
  )
}

export default Footer