import React, { useState } from 'react'
import {menu, activemenu, logo} from '../assets'
import { navLinks } from '../constants/constants'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const [active, setActive] = useState("Home")
  return (
    <nav className='w-full flex py-6 justify-between items-center'>
        {/* Tablet Left Menu */}
        <div className='flex justify-end hidden md:hidden sm:block'>
            <img src={toggle ? activemenu : menu } className='w-[60%] object-contain'/>
            <div className={`${!toggle ? 'hidden' : 'flex'} flex flex-col z-10 p-6 bg-pink rounded-lg min-w-[60%] sm:min-w-[40%] absolute top-20 left-15`}>
                <ul className='list-none flex flex-col justify-start'>
                    {navLinks.map((nav, index) => (
                        <li key={nav.id}
                            className='font-inter font-medium hover:font-extrabold hover:text-[18px] text-[16px] text-white py-3'>
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        {/* logo */}
        <div>
            <img src={logo} alt="Travel-logo" className='w-[70%]' />
        </div>

        {/* Deskstop center Menu */}
        <ul className='list-none gap-12 hidden md:flex'>
            {navLinks.map((nav, index) =>(
                <li key={index}
                className={` font-inter hover:text-pink text-black ${active ===nav.id ? 'font-bold' : 'font-normal'}`} onClick={() => setActive(nav.id)}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                    
                </li>
            ))}

        </ul>

        {/* Desktop and Tablet Right Buttons */}
        <div className='flex flex-row hidden gap-5 sm:flex'>
            <button className='bg-white text-sm flex items-center hover:scale-[1.05] hover:text-blue hover:font-medium cursor-pointer shadow-md py-3 px-6 font-inter rounded-full'>Login</button>
            <button className='bg-white text-sm flex items-center hover:scale-[1.05] hover:text-blue hover:font-medium cursor-pointer shadow-md py-3 px-6 font-inter rounded-full'>Sign up</button>

        </div>

        {/* mobile menu */}
        <div className='flex justify-end sm:hidden'>
            <img src={toggle ? activemenu : menu} onClick={() => setToggle(!toggle)} className='w-[60%] object-contain'/>

            <div className={` ${ !toggle ? 'hidden' : 'flex' } flex flex-col z-10 p-6 bg-pink rounded-lg min-w-[60%] sm:min-w-[40%] absolute top-20 right-5`}>
                <ul className='list-none flex flex-col justify-start'>
                  {navLinks.map((nav, index) => (
                    <li key={nav.id} 
                      className='font-inter font-medium hover:font-extrabold hover:text-[18px] text-[16px] text-white py-3'>
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                  ))}
                </ul>

                <div className='flex flex-col sm:flex-row gap-4 mt-9'>
                    <button className='flex font-inter text-blue font-medium text-sm justify-center bg-white p-2 rounded-full text-center'>login</button>
                    <button className='flex font-inter text-blue font-medium text-sm justify-center bg-white p-2 rounded-full text-center'>sign up</button>
                </div>
              </div>
                
        </div>
        <div className='hidden'></div>
    </nav>
  )
}

export default Navbar