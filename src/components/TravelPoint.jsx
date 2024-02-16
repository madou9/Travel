import React from 'react'
import { Traveil } from '../assets'
import { stats } from '../constants/constants'
import StatCard from './StatCard'

const TravelPoint = () => {
  return (
    <div className='w-full mt-20 flex flex-col md:flex-row px-4 md:px-16 items-center'>
        <div className='flex-1 flex sm-px-10 md:w-[50%]'>
            <img src={Traveil} className='w-[100%] h-[100%] relative' />
        </div>

        <div className='flex flex-col items-center md:items-start md:w-[40%] '>
            <p className='font-inter text-pink text-lg font-bold uppercase'>Traveil point</p>
            <h1 className='text-center md:text-left py-3 text-4xl'>We helping you find your dream location</h1>
            <p className='font-inter text-lg md:text-left text-gray-500'>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>

            <div className='grid md:grid-cols-2 gap-6 w-full flex flex-col mt-12 md:flex-wrap'>
                {stats.map((stat) =>(
                    <StatCard key={stat.id} title={stat.title} text={stat.text}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TravelPoint