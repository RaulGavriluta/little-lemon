import React from 'react'

const MenuItems = ({ items }) => {
  return (
    <section className='py-10'>
      {items.map((item) => (
        <article key={item.id} className='flex flex-col justify-center items-center p-4 py-4 sm:px-20 md:px-30 lg:px-60 '>
          <div className='flex gap-10 px-4 py-10 w-full max-w-screen-lg rounded-2xl shadow-xl lg:hover:scale-105 lg:hover:shadow-2xl transition duration-300'>
            <img src={item.image} alt={item.title} className='w-54' />
            <div className='flex flex-col justify-center gap-6 w-full md:text-lg'>
              <div className='flex justify-between items-center w-full'>
                <h1 className='font-bold text-lg md:text-xl'>{item.title}</h1>
                <span className='text-brand-green text-md md:text-lg'>{item.price}</span>
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}

export default MenuItems
