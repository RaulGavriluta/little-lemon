import React from 'react'
import restauranfood from '../icons_assets/restauranfood.jpg'

const Header = () => {
  return (
    <header>
      <div className='relative flex justify-between bg-[#495E57] px-50 py-8 text-white'>
        <div className=''>
          <h1 className='text-[#F4CE14] text-4xl font-bold py-2'>Little Lemon</h1>
          <h2 className='text-2xl font-bold'>Chicago</h2>
          <p className='text-md w-128 py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus labore rerum vitae, dignissimos adipisci neque voluptate optio possimus aliquid dolores assumenda iste molestiae facere ipsum voluptates impedit ullam est vero!</p>
          <button className='py-2 px-6 rounded-md font-bold text-black bg-[#F4CE14] '><a href="#">Reserve a Table</a></button>
        </div>
        <div className=''>
          <img src={restauranfood} alt="" className='absolute bottom-[-60px] right-65 w-60  rounded-2xl shadow-2xl' />
        </div>
      </div>
    </header>
  )
}

export default Header