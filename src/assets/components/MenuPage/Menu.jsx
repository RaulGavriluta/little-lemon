import React from 'react'

const Menu = () => {

  const handleScroll = (category) => {
    const section = document.getElementById(category.toLowerCase());
    if(section){
      section.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
    <main id="nav" className='p-10 sm:px-30 lg:px-60 lg:p-25 md:text-lg lg:text-xl flex flex-wrap justify-center gap-4'>
  {['Pizza', 'Pasta', 'Salads', 'Desserts', 'Drinks'].map((item) => (
    <button
      key={item}
      onClick = {() => handleScroll(item)}
      className='flex-1  sm:max-w-[200px] px-6 py-2 lg:px-10 font-bold cursor-pointer border-2 border-brand-green rounded-2xl hover:bg-brand-green hover:text-brand-yellow transition duration-200 text-center'
    >
      {item}
    </button>
  ))}
    </main>

  )
}

export default Menu