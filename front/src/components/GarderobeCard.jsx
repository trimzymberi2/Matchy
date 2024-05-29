import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import category from '../assets/category.json'
import image from '../assets/images/3.png'


export default function GarderobeCard() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 768, min: 0 },
          items: 1
        }
      };
  return (
    <div className=''>
            <Carousel responsive={responsive}>
                    {category.map((item) => 
                        <div className='flex items-center justify-center'>
                          <div className='w-72 h-72 flex items-center justify-center'>
                            <img src={image} alt="" />
                          </div>
                        </div>
                    )}
            </Carousel>
    </div>
  )
}
