import React from 'react'
import Button from './Button'
const Product = ({val,mover,count}) => {
  return (
    <div className='w-full py-20 h-[23rem]  rounded-xl '>
        <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-xl mx-auto flex items-center justify-between'>
            <h1 className ='text-6xl capitalize'>{val.title}</h1>
            <div className=' w-1/3'>
                <p className='mb-10'>{val.description}</p>
                <div className='flex items-center gap-8'>
                {val.live  && <Button title ='Go on Site'/>}
                {val.case && <Button title='Case Study'/>}
                </div>
            </div>
        </div>

    </div>
  )
}

export default Product