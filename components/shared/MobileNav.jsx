import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  


const MobileNav = () => {
    return (
        <header className='flex lg:hidden justify-between pt-2 ps-1 pe-4 lg:px-5 fixed top-0 w-full z-50 bg-white shadow-lg'>
            <Image
                src="/img/91-club-logo.png"
                width={120}
                height={80}
                alt='91 Club'
                className='my-auto'
            />
            <Sheet>
                <SheetTrigger>
                    <Image
                        src="/img/menu.svg"
                        width={40}
                        height={40}
                        alt='Menu Icon'
                    />
                </SheetTrigger>
                <SheetContent>
                    <nav className='my-auto'>
                        <ul className='flex flex-col flex-wrap mt-5 text-xl'>
                            <li className='my-3 w-full'>
                                <Link className='nav-link' href="#home">Home</Link>
                            </li>
                            <li className='my-3 w-full'>
                                <Link className='nav-link ps-2' href="#bonus"><Image src="/img/icons8-money-64.png" width={25} height={25} alt='bonus' className='inline' />Bonus</Link>
                            </li>
                            <li className='my-3 w-full'>
                                <Link className='nav-link' href="#reviews">Reviews</Link>
                            </li>
                            <li className='my-3 w-full'>
                                <Link className='nav-link' href="#features">Features</Link>
                            </li>
                            <li className='my-3 w-full'>                                
                                <Link className='nav-link' href="#contact-us">Contact Us</Link>
                            </li>
                        </ul>
                    </nav>
                </SheetContent>
            </Sheet>

        </header>
    )
}

export default MobileNav