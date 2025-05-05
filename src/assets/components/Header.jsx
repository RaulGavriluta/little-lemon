import React from 'react'
import Button from './Button'

const Header = ({paragraph,image}) => {
  return (
    <header>
      <div className='relative flex justify-between bg-[#495E57] p-12 text-white md:px-30'>
        <div className='py-2 mx-auto lg:mx-0 '>
          <h1 className='text-brand-yellow text-3xl font-bold pb-2'>Little Lemon</h1>
          <h2 className='text-xl font-bold'>Chicago</h2>
          <p className='text-md max-w-100 py-6 text-justify'>{paragraph}</p>
          <Button to = "/booking" label = "Reserve a Table" />
        </div>
        <div className='hidden lg:block'>
          <img src={image} alt="banner" className='absolute bottom-[-40px] right-60 w-60 h-80  rounded-2xl shadow-2xl' />
        </div>
      </div>
    </header>
  )
}

export default Header