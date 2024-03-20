import a from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-red-700 p-8 lg:flex text-black text-center justify-between mt-16'>
      <div className='text-lg font-extrabold text-white'>
        <p><a href="/">91Club</a> @ Copyright 2024</p>
      </div>
      <div className='text-lg' id='contact-us'>
        <p className='text-white'><strong>Email: </strong><a href="mailto:asterioamara@gamil.com">asterioamara@gmail.com</a></p>
        <div>
          <p className='text-white'><strong>Webstie</strong>: <a href="https://wwww.91service.in/wap/indexE.jsp#" className='font-semibold underline underline-offset-4 '>91Club Service Portal</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer