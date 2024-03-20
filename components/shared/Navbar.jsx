"use client"
import useSmoothScroll from '@/lib/useSmoothScroll'
import Image from 'next/image'
import a from 'next/link'
import React from 'react'

const Navbar = () => {
    useSmoothScroll()
  return (
    <header className='hidden lg:flex justify-between pt-2 px-1 lg:px-5 fixed top-0 w-full z-50 bg-white shadow-lg'>
        <Image
            src="/img/91-club-logo.png"
            width={120}
            height={80}
            alt='91 Club'
            className='my-auto'
        />
        <nav className='my-auto'>
            <ul className='flex'>
                <li>    
                    <a className='nav-link' href="#home">Home</a>
                    <a className='nav-link ps-2' href="#bonus"><Image src="/img/icons8-money-64.png" width={25} height={25} alt='bonus' className='inline'/>Bonus</a>
                    <a className='nav-link' href="#reviews">Reviews</a>
                    <a className='nav-link' href="#features">Features</a>
                    <a className='nav-link' href="#contact-us">Contact Us</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar