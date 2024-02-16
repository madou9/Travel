import React from 'react'
import {subGrid} from '../assets'
import { IoMail } from "react-icons/io5";


const Subscribe = () => {
  return (
    <div className='relative bg-center justify-center bg-cover w-full mt-20 flex flex-col px-4 md:px-16 items-center'>
        <div className='relative bg-[#FFFBF0] rounded-2xl items-center justify-center md:py-20 w-full'>
            <div id="subGrid" className='hidden md:block absolute left-0 top-0'>
                <img src={subGrid} />
            </div>
            <div className='flex flex-col items-center justify-center my-8 md:my-0 flex-col p-2'>
                <p className='font-inter text-pink text-lg font-bold uppercase'>subcribe to ours newsletter</p>
                <h1 className='text-center py-4 md:max-w-[60%] text-4xl'>Prepare yourself & let’s explore the beauty of the world</h1>
            </div>

            <div className='flex flex-col items-center md:px-22'>
                <div className='flex w-[90%] md:w-[70%] items-center gap-4 bg-white md:rounded-2xl py-4 rounded-lg'>
                    <IoMail className='text-gray-400 ml-6' fontSize={28} />
                    <input type="email" className='text-md w-full text-blue outiline-none' placeholder='Your email'/>
                </div>
                <button className='bg-blue w-[90%] md:w-[30%] text-lg text-white py-4 md:rounded-2xl rounded-lg'>
                    Subscribe
                </button>
            </div>
        </div>
    </div>
  )
}

export default Subscribe