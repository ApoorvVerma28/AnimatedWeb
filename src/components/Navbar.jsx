import React from 'react'
import Button from './Button'
const Navbar = () => {
    return (
        <div className='max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700'>
           <div className=' flex items-center select-none'>
           <p className='font-extrabold text-2xl'>LOGO</p>
            <div className='links flex gap-14 ml-20'>
                {[ "Portfolio", "About", "Service"].map((elem, index) => <a className='text-lg font-["Satoshi_Variable"] flex items-center gap-1' href='#'> {index === 1 && (<span style={{boxShadow:"0 0 0.45em #FCA311"}} className='inline-block w-2 h-2 bg-[#FCA311] rounded-full'></span>)  } {elem}</a>)}
            </div>
           </div>
           <Button/>
        </div>
    )
}

export default Navbar