import React, { useState } from 'react'
import Image from '../assets/images/Outfit of the day (1).png'
import category from '../assets/category.json'
import down from '../assets/images/down.png'
import up from '../assets/images/up arrow.png'
import shirt from '../assets/images/icon shirt.png'
import GarderobeCard from './GarderobeCard'

export default function Garderobe() {
  const [isOpen, setIsOpen] =useState(false);
  const [toggle, setToggle] = useState(0);
  const [textInsideDiv, setTextInsideDiv] = useState("SHIRT'S");


  function updateToggle(i){
    setToggle(i)
    setTextInsideDiv(category[i].category);
  }
  console.log(textInsideDiv)
  
  return (
    <div className='flex flex-col w-full justify-center items-center'>
        <h1 className='text-secondary text-3xl sm:text-5xl'>Fill your garderobe</h1>
        <div className='lg:flex hidden w-full bg-primary mt-10 shadow '>
            <ul className='flex bg-primary w-full text-TextSecondary text-opacity-90 text-xl'>
             {category.map((item, i) => (
                  <div className='flex gap-4 w-full p-2 justify-center border-r border-r-background items-center hover:bg-primaryshadow cursor-pointer hover:border-b-background hover:border-b-4' 
                  key={i}
                  onClick={() =>updateToggle(i)}
                  >
                     <li className='flex w-1/6 items-center  hover:cursor-pointer border-r-background justify-center'>{item.category}</li>
                  </div>
                ))}
            </ul>
        </div>
        <div className='relative flex flex-col items-center w-[340px] h-[340-px] rounded-lg'>
            <button 
            onClick={() =>setIsOpen((prev) => !prev)}
            className='lg:hidden bg-primary mt-10 p-4 w-full flex items-center justify-center text-lg tracking-wider border rounded-lg text-TextSecondary font border-Border active:border-white duration-300 active:text-white'>
                  <h1 className='text-TextSecondary'>{textInsideDiv}</h1>
              {!isOpen ? (
                <img src={up} className='absolute right-6' />
              ): (
                <img src={down} className='absolute right-6' />
              )
            }
            </button>

            {isOpen && (
              <div className='lg:hidden bg-primary absolute z-10 top-28 flex flex-col items-start rounded-lg p-2 w-full'>
                {category.map((item, i) => (
                  <div className='flex w-full p-4 justify-between hover:bg-primaryshadow cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white hover:border-l-4' 
                  onClick={() => {
                    updateToggle(i);
                    setIsOpen((prev) => !prev);
                  }}
                  key={i}>
                    <h3 className='text-TextSecondary'>{item.category}</h3>
                  </div>
                ))}
              </div>
            )}

        </div>

        <main class="flex mt-16 items-center justify-center bg-gray-100 font-sans">
          <label for="dropzone-file" class="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2 border-dashed border-secondary bg-white p-6 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>            <h2 class="mt-4 text-sm font-medium text-secondary tracking-wide">UPLOAD YOUR {textInsideDiv} IMAGE HERE</h2>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </main>
          
          <div className='mt-16 w-full relative'>
              <div className={toggle === 0 ? " w-full " : "hidden"}>
                    <GarderobeCard/>
              </div>
              
              <div className={toggle === 1 ? "flex" : "hidden"}>
                    <h1>PANT</h1>
              </div>
              
              <div className={toggle === 2 ? "flex" : "hidden"}>
                    <h1>SHOE</h1>
              </div>
              
              <div className={toggle === 3 ? "flex" : "hidden"}>
                    <h1>SHADES</h1>
              </div>
              
              <div className={toggle === 4 ? "flex" : "hidden"}>
                    <h1>WATCHES</h1>
              </div>
              
              <div className={toggle === 5 ? "flex" : "hidden"}>
                    <h1>BAG</h1>
              </div>
          </div>
  
    </div>
  )
}
