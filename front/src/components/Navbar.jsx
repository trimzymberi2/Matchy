import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import icon from '../assets/images/icon.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    console.log('navtoggle')
    setIsOpen(!isOpen);
  }
  return (
    <div className='md:flex pt-5 w-full sticky md:justify-between md:items-center '>
        <div className='flex items-center gap-1 md:gap-4'>
            <h3 className='text-4xl flex items-center justify-center font-Italic text-primary'>Matchy</h3>
            <img className='flex items-center  justify-center w-14 h-12' src={logo} alt="Matchy" />
        </div>
        <div className=' md:opacity-100 hidden md:flex md:flex-row lg:gap-16 gap-8 text-primary'>
                <h4 className='text-xl hover:text-primaryshadow hover:cursor-pointer transform hover:scale-110 transition-all duration-300 ease-in-out'>HOME</h4>
                <h4 className='text-xl hover:text-primaryshadow hover:cursor-pointer transform hover:scale-110 transition-all duration-300 ease-in-out'>GARDEROBE</h4>
                <h4 className='text-xl hover:text-primaryshadow hover:cursor-pointer transform hover:scale-110 transition-all duration-300 ease-in-out'>OUTFIT</h4>
        </div>
        <img src={icon} onClick={toggleNavbar} alt="" className='hover:cursor-pointer h-10 md:hidden absolute top-5 right-0'/>
        <div className='flex items-center gap-5'>
            <button className='w-24 transform hover:scale-110 transition-all duration-300 ease-in-out hover:bg-primaryshadow h-10 md:flex md:items-center md:justify-center hidden bg-primary rounded-lg text-white'>
              Log in
            </button>
        </div>
        {isOpen && (
         <div className='flex-col p-3 bg-backgroundSecondary flex gap-3 shadow md:hidden mt-4 justify-start sm:items-center  text-primary'>
              <h4 className='text-xl sm:text-2xl hover:text-primaryshadow hover:cursor-pointer'>HOME</h4>
              <h4 className='text-xl sm:text-2xl hover:text-primaryshadow hover:cursor-pointer'>GARDEROBE</h4>
              <h4 className='text-xl sm:text-2xl hover:text-primaryshadow hover:cursor-pointer'>OUTFIT</h4>
              <button className='w-24 hover:bg-primaryshadow h-10 md:flex md:items-center md:justify-center bg-primary rounded-lg text-white'>
              Log in
            </button>
          </div>
     
        )}
    </div>
  )
}
