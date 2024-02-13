import React from 'react'
import { motion } from "framer-motion"
import { hero, heroExtra, workicon } from '../assets'
import styles from '../styes'

const About = () => {
  return (
    <motion.div initial={{ opacity: 0}} whileInView={{ opacity: 1}} viewport={{ opacity: true}}
    className={`w-full flex px-4 md:px-16 items-center flex-col md:flex-row-reverse ${styles.paddingY}`}>
        <div className='flex-1 relative md:px-0 m:px-10'>
            <img src={hero} className='w-[100%] h-[100%] relative' />
        </div>
        <div className='flex relative flex-1 w-full flex-col md:items-start items-center'>
            <div className='absolute bottom-0 hidden md:block '>
                <img src={heroExtra} className='w-[50%]' />
            </div>
            <div className='bg-white gap-4 text-sm font-circular font-bold text-pink rounded-fill p-4 sm:w-[30%] justify-center md:w-[40%] w-[60%] flex shadow-md'>
                Explore the World
                <img src={workicon} alt="workicon" />
            </div>

            <div className='flex flex-col w-full md:items-start sm:items-center'>
                <p className='text-4xl md:text-5xl font-circular items-center sm:max-w-[70%] font-extrabold my-6 md:text-left text-center '>
                  Travel <span className='text-pink'>top destination </span> of world  
                </p>
                <p className='text-center sm:max-w-[70%] text-md md:text-left sm:text-lg font-inter text-gray-600 '>We always make our customer happy by providing as many choices as possible </p>

                <div className='flex flex-col flex-1 sm:gap-6 sm:flex-row my-4'>
                    <button className='bg-blue font-inter sm:px-8 mb-5 text-sm font-semibold shadow-lg text-white rounded-full md:py-3 py-5'>Get Started</button>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default About