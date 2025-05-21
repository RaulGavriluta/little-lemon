import React from 'react'
import Button from '../Button'
import greeksalad from '../../icons_assets/greeksalad.jpg'
import bruchetta from '../../icons_assets/bruchetta.svg'
import lemondessert from '../../icons_assets/lemondessert.jpg'
import { MdDeliveryDining } from "react-icons/md";

const Main = () => {
  const specials = [
    {
      name:'Greek Salad',
      price: '$12.99',
      image: greeksalad,
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
    },
    {
      name:'Bruchetta',
      price: '$5.99',
      image: bruchetta,
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
    },
    {
      name:'Lemon Dessert',
      price: '$5.00',
      image: lemondessert,
      description: `This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.`
    }
  ]

  return (
    <main className='flex flex-col items-center py-20 px-15 '>
      <div className='flex flex-col items-center px-6 pb-15'>
        <h1 className='text-2xl font-bold pb-6 md:text-3xl'>This Week's Specials!</h1>
        <Button href="#" label="Online Menu" />
      </div>
      <div className='grid gap-15 md:grid-cols-2 lg:grid-cols-3'>
        {specials.map((dishes) => (
          <article key={dishes.name} className='drop-shadow-xl hover:drop-shadow-2xl transition duration-200'>
            <div
              className='h-68 w-76 bg-cover bg-center rounded-t-2xl md:w-70 lg:h-54'
              style={{ backgroundImage: `url(${dishes.image})` }}
            ></div>
            <div className='h-68 w-76 px-6 pb-6 bg-brand-grey md:w-70 lg:h-54 lg:text-sm flex flex-col '>
              <div className='flex justify-between py-4'>
                <h3 className='font-bold'>{dishes.name}</h3>
                <span className='text-[#EE9972]'>{dishes.price}</span>
              </div>
              <p className='text-brand-green flex-grow overflow-hidden'>
                {dishes.description}
              </p>
              <div className='flex items-center w-full pt-6 font-bold'>
                <a
                  href='#'
                  className='mr-4 border-b-2 border-transparent hover:text-brand-green hover:border-brand-green transition duration-200'
                >
                  Order a delivery
                </a>
                <MdDeliveryDining size={20} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}

export default Main
