import React from 'react'
import { FaStar } from "react-icons/fa";

const DestinationCard = ({name, image, price, location, rating}) => {
  return (
    <div className='block rounded-xl shadow-md'>
        <div className='relative bg-cover overflow-hidden bg-no-repeat'
            data-te-ripple-init
            data-te-ripple-color="light">
            <img src={image} alt={image}  className='rounded-t-lg'/>
        </div>

        <div className="p-6">
                <div className='flex flex-col md:flex-row md:items-center md:justify-between'></div>
                <p className="mb-2 text-md font-medium text-pink ">
                    {price}
                </p>
                <h5 className="mb-2 text-xl font-medium text-blue ">
                    {name}
                </h5>
                <p className="my-4 text-base text-gray-500 font-inter">
                    {location}
                </p>
                <div className='flex items-center text-[#FF5722]'>
                    <p className='font-inter font-bold mr-3 text-lg'>
                        {rating}
                    </p>
                     <FaStar className='text-orange' />
                </div>
            </div>
    </div>
  )
}

export default DestinationCard