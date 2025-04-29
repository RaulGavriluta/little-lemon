import React from 'react'
import Button from './Button'
import greeksalad from '../icons_assets/greeksalad.jpg'
import bruchetta from '../icons_assets/bruchetta.svg'
import lemondessert from '../icons_assets/lemondessert.jpg'
import { MdDeliveryDining } from "react-icons/md";


const Main = () => {
  return (
    <main>
      <div className='flex justify-between px-60 pt-25 pb-15'>
        <h1 className='text-4xl font-bold pb-2'>This Week's Specials!</h1>
        <Button href = "#" label = "Online Menu" />
      </div>
      <div className='flex justify-between px-60'>
      <div className='drop-shadow-xl hover:drop-shadow-2xl transition duration-200'>
        <div className='w-70 h-50 bg-cover bg-center rounded-t-2xl' style={{ backgroundImage: `url(${greeksalad})`}}></div>
          <div className='h-60 w-70 px-6 bg-[#EDEFEE]'>
            <div className='flex justify-between  py-4'>
              <h3 className='font-bold'>Greek Salad</h3>
              <span className='text-[#EE9972]'>$12.99</span>
            </div>
            <p className='text-[#495E57]'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
            <div className='flex items-center w-full pt-4 font-bold '>
              <a href="#" className='mr-4 hover:text-[#495E57] hover:border-b-2 hover:border-[#495E57] transition duration-200'>Order a delivery</a>
              <MdDeliveryDining className='size-5'/>
            </div>
          </div>
        </div>
        <div className='drop-shadow-xl hover:drop-shadow-2xl transition duration-200'>
        <div className='w-70 h-50 bg-cover bg-center rounded-t-2xl' style={{ backgroundImage: `url(${bruchetta})`}}></div>
          <div className='h-60 w-70 px-6 bg-[#EDEFEE]'>
            <div className='flex justify-between  py-4'>
              <h3 className='font-bold'>Bruchetta</h3>
              <span className='text-[#EE9972]'>$5.99</span>
            </div>
            <p className='text-[#495E57]'>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
            <div className='flex items-center w-full pt-10 font-bold '>
              <a href="#" className='mr-4 hover:text-[#495E57] hover:border-b-2 hover:border-[#495E57] transition duration-200'>Order a delivery</a>
              <MdDeliveryDining className='size-5'/>
            </div>
            </div>
        </div>
        <div className='drop-shadow-xl hover:drop-shadow-2xl transition duration-200'>
        <div className='w-70 h-50 bg-cover bg-center rounded-t-2xl' style={{ backgroundImage: `url(${lemondessert})`}}></div>
          <div className='h-60 w-70 px-6 bg-[#EDEFEE]'>
            <div className='flex justify-between  py-4'>
              <h3 className='font-bold'>Lemon Dessert</h3>
              <span className='text-[#EE9972]'>$5.00</span>
            </div>
            <p className='text-[#495E57]'>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <div className='flex items-center w-full pt-4 font-bold '>
              <a href="#" className='mr-4 hover:text-[#495E57] hover:border-b-2 hover:border-[#495E57] transition duration-200'>Order a delivery</a>
              <MdDeliveryDining className='size-5'/>
            </div>
            </div>
        </div>
      </div>
    </main>
  )
}

export default Main