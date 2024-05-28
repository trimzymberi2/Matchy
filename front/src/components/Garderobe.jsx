import React, { useState } from 'react'
import Image from '../assets/images/Outfit of the day (1).png'
import category from '../assets/category.json'
import down from '../assets/images/down.png'
import up from '../assets/images/up arrow.png'
import shirt from '../assets/images/icon shirt.png'

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
              <div className='lg:hidden bg-primary absolute top-28 flex flex-col items-start rounded-lg p-2 w-full'>
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
        <div className='flex flex-col mt-14 gap-5 items-center justify-center'>
              <h3 className='text-xl sm:text-3xl flex gap-2 text-secondary'>Upload your outfit's image <img src={Image} alt="" className='sm:w-8 sm:h-8 w-7 h-7 shadow'/></h3>
              <input type="file" className='border border-Border rounded-lg w-72  text-TextSecondary bg-primary'/>
        </div>
          <div className={toggle === 0 ? "flex" : "hidden"}>
                <h1>shirts</h1>
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
  )
}
