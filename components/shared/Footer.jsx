import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-red-700 p-8 lg:flex text-black text-center justify-between mt-16'>
      <div className='text-lg'>
        <p><Link href="/">91Club</Link> @ Copyright 2024</p>
      </div>
      <div className='text-lg'>
        <p><strong>Email: </strong>91Club@gamil.com</p>
      </div>
    </footer>
  )
}

export default Footer