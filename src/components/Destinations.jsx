import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { destination } from '../constants/constants';
import DestinationCard from './DestinationCard';

const Destinations = () => {
  return (
    <div className='w-full mt-12 flex flex-col px-4 md:px-16 items-center'>
      <div className='w-full flex flex-col items-center md:flex-row md:justify-between'>
        <div className='flex flex-col md:start items-center mb-4 py-2'>
          <p className='font-inter text-pink text-lg font-bold uppercase'>Top Destinations</p>
          <h1 className='text-center py-3 text-4xl'>Explore To Destinations</h1>
        </div>

        <div className='w-full flex justify-center md;justify-end gap-20 mb-5'>
            <div className='rounded-full  border-2 flex items-center p-5 justify-center hover:text-pink bg-gray-200'>
              <FaArrowLeft  fontSize={20}  />
            </div>
            <div className='rounded-full  border-2 flex items-center p-5 justify-center hover:text-pink bg-gray-200'>
              <FaArrowRight fontSize={20}/>
            </div>
        </div>
        
        <div className=''>
            <div>
              {destination.map((destination) => (
                <DestinationCard key={destination.id} price={destination.price} name={destination.name} location={destination.location} rating={destination.rating} image={destination.image}/>
              ))}
            </div>
        </div>
      </div>
      </div>
  )
}

export default Destinations