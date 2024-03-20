import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-red-700 p-8 lg:flex text-black text-center justify-between mt-16'>
      <div className='text-lg font-extrabold text-white'>
        <p><Link href="/">91Club</Link> @ Copyright 2024</p>
      </div>
      <div className='text-lg' id='contact-us'>
        <p className='text-white'><strong>Email: </strong><Link href="mailto:asterioamara@gamil.com">asterioamara@gamil.com</Link></p>
        <div>
          <p className='text-white'><strong>Webstie</strong>: <Link href="https://wwww.91service.in/wap/indexE.jsp#" className='font-semibold underline underline-offset-4 '>91Club Service Portal</Link></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer