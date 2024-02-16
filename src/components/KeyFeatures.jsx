import React from 'react'
import { Features } from '../constants/constants'
import FeatureCard from './FeatureCard'

const KeyFeatures = () => {
  return (
    <div className='w-full mt-20 flex flex-col md:flex-row px-4 md:px-16 items-center '>
        <div className='flex flex-col items-center md:items-start my-8 md:my-0md:w-[50%] p-2'>
            <p className='font-inter text-pink text-lg font-bold uppercase'>Key Features</p>
            <h1 className='text-center md:text-left py-3 text-4xl'>We offer the best services</h1>
            <p className='font-inter max-w-[450px] px-8 text-lg text-center md:text-left text-gray-500'>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>

            <div className='flex flex-col w-full gap-4 d:items-center mt-12 md:mt-6'>
                {Features.map((feature) => (
                    <FeatureCard key={feature.id} icon={feature.icon} background={feature.bg} title={feature.title} text={feature.text}/>
                ))}
            </div>

        </div>
    </div>
  )
}

export default KeyFeatures