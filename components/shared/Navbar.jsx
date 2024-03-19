import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='flex justify-between pt-2 px-1 lg:px-5 fixed top-0 w-full z-50 bg-white shadow-lg'>
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
                    <Link className='nav-link' href="#home">Home</Link>
                    <Link className='nav-link ps-2' href="/bonus"><Image src="/img/icons8-money-64.png" width={25} height={25} alt='bonus' className='inline'/>Bouns</Link>
                    <Link className='nav-link' href="/reviews">Reviews</Link>
                    <Link className='nav-link' href="/how-to-play">How To Play</Link>
                    <Link className='nav-link' href="/contact-us">Contact Us</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar