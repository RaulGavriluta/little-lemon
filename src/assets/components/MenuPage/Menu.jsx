import React from 'react'

const Menu = () => {
  return (
    <main className='p-10 sm:px-30 lg:px-60 lg:p-25 md:text-xl lg:text-2xl flex flex-wrap justify-center gap-4'>
  {['Pizza', 'Pasta', 'Salads', 'Desserts', 'Drinks'].map((item) => (
    <button
      key={item}
      className='flex-1 min-w-[120px] max-w-[45%] sm:max-w-[200px] px-4 py-2 lg:px-10 font-bold cursor-pointer border-2 border-brand-green rounded-2xl hover:text-brand-green hover:bg-brand-green hover:text-brand-yellow transition duration-200 text-center'
    >
      {item}
    </button>
  ))}
    </main>

  )
}

export default Menu