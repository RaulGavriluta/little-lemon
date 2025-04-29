import React from 'react'
import greeksalad from '../icons_assets/greeksalad.jpg'
import bruchetta from '../icons_assets/bruchetta.svg'
import lemondessert from '../icons_assets/lemondessert.jpg'

const Main = () => {
  return (
    <main>
      <div className='flex justify-between px-60 pt-25 pb-15'>
        <h1 className='text-4xl font-bold pb-2'>This Week's Specials!</h1>
        <button className='py-2 px-6 rounded-md font-bold text-black bg-[#F4CE14]'>Online Menu</button>
      </div>
      <div className='flex justify-between px-60'>
        <div className='w-70'>
        <div className='w-70 h-50 bg-cover bg-center' style={{ backgroundImage: `url(${greeksalad})`}}></div>
          <div>
            <div className='flex justify-between px-6 py-4'>
              <h3>Greek Salad</h3>
              <span className='text-[#EE9972]'>$12.99</span>
            </div>
          </div>
        </div>
        <div>
          <div className='w-70 h-50 bg-cover bg-center' style={{ backgroundImage: `url(${bruchetta})`}}></div>
          <div>
            <div className='flex justify-between px-6 py-4'>
              <h3>Bruchetta</h3>
              <span className='text-[#EE9972]'>$5.99</span>
            </div>
          </div>
        </div>
        <div>
        <div className='w-70 h-50 bg-cover bg-center rounded-t-2xl' style={{ backgroundImage: `url(${lemondessert})`}}></div>
          <div className='h-60 w-70 px-6 bg-[#EDEFEE]'>
            <div className='flex justify-between  py-4'>
              <h3 className='font-bold'>Lemon Dessert</h3>
              <span className='text-[#EE9972]'>$5.00</span>
            </div>
            <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined</p>
            
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main