import React from 'react'
import image from '../assets/images/Outfit of the day.png'

export default function Home() {
  return (
    <div className='flex  lg:flex-row flex-col items-center justify-center w-full '>
        <div className='flex gap-6 flex-col lg:items-start items-center  w-full lg:w-1/2  '>
            <h1 className='font-Rufina text-4xl sm:text-5xl xl:text-6xl justify-start md:w-4/5 text-secondary w-full lg:w-3/4'>Discover and find your outfit that matches for today</h1>
            <h2 className='text-secondary text-sm sm:text-xl xl:text-2xl md:w-4/5 w-full lg:w-3/4'>Don't waste your time trying to find what you should wear, we provide to you the best solution for making your day more better</h2>
        </div>
        <div className='flex  lg:items-start lg:justify-start items-center justify-center h-full w-full lg:w-1/3'>
            <img className='flex items-center w-auto h-full ' src={image} alt="" />
        </div>
    </div>
  )
}