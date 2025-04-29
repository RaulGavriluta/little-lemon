import React from 'react'
import Button from './Button'
import restauranfood from '../icons_assets/restauranfood.jpg'

const Header = () => {
  return (
    <header>
      <div className='relative flex justify-between bg-[#495E57] px-60 py-9 text-white'>
        <div className='py-2'>
          <h1 className='text-[#F4CE14] text-4xl font-bold pb-2'>Little Lemon</h1>
          <h2 className='text-2xl font-bold'>Chicago</h2>
          <p className='text-md w-128 py-6 text-justify'>A taste of Italy, a touch of charm. At Little Lemon, we blend tradition, warmth, and vibrant hospitality to create a dining experience that feels like home - only better.</p>
          <Button href = "#" label = "Reserve a Table" />
        </div>
        <div className=''>
          <img src={restauranfood} alt="banner" className='absolute bottom-[-40px] right-60 w-60 h-80  rounded-2xl shadow-2xl' />
        </div>
      </div>
    </header>
  )
}

export default Header