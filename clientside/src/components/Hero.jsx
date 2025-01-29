import React from 'react'
import lan from "../assets/images/landing.png"
import ologo from "../assets/images/ologo.png"
import Trending from './Trending'

const Hero = () => {
  return (
    <>
      <div className='px-24'>
        <div className='absolute  '>

          <div className='flex justify-start'>
            <h1 className='text-[120px] font-medium'>Sh</h1>
            <img src={ologo} className='h-24  mt-12 w-auto' />
            <h2 className='text-[120px] font-medium'>es</h2>
          </div>
          <h2 className='relative  text-[100px] -mt-9 font-medium'>Collect !</h2>
          <div className='flex space-x-10'>
            <p className='text-gray line-clamp-4'>Discover our stylish and comfortable <br /> shoes,perfect for every occasion and <br /> need</p>
            <button className='h-12 w-32  text-white bg-orange rounded-3xl'>Shop Now</button>
          </div>
        </div>
        <div className='flex justify-center object-cover absolute mt-8'>
          <img src={lan} />
        </div>
      </div>


    </>

  )
}

export default Hero