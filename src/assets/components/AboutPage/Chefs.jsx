import React from 'react'
import chef1 from '../../icons_assets/chef1.jpg'

const Chefs = () => {
  return (
    <main className='px-60 py-20'>
      <h1 className='text-4xl font-bold pt-4 pb-8'>The Chefs</h1>
      <div className='flex justify-between'>
        <article className='drop-shadow-xl hover:drop-shadow-2xl transition duration-200'>
          <div className='w-70 h-70 bg-cover bg-center rounded-xl' style={{ backgroundImage: `url(${chef1})`}}></div>
          <div>
            <div className='h-60 w-70 p-6 bg-[#EDEFEE]'>
              <h3 className='font-bold'>Chef 1</h3>          
              <p className='text-[#495E57] italic pt-8'>“Cooking is not just about ingredients; it’s about passion and tradition. Every dish tells a story.”</p>
            </div>
          </div>
        </article>
        <article className='drop-shadow-xl hover:drop-shadow-2xl transition duration-200'>
          <div className='w-70 h-70 bg-cover bg-center rounded-xl' style={{ backgroundImage: `url(${chef1})`}}></div>
          <div>
            <div className='h-60 w-70 p-6 bg-[#EDEFEE]'>
              <h3 className='font-bold'>Chef 2</h3>          
              <p className='text-[#495E57] italic pt-8'>“In the kitchen, we honor the flavors of Italy, and every meal is an expression of love for our heritage.”</p>
            </div>
          </div>
        </article>
        <article className='drop-shadow-xl hover:drop-shadow-2xl transition duration-200'>
          <div className='w-70 h-70 bg-cover bg-center rounded-xl' style={{ backgroundImage: `url(${chef1})`}}></div>
          <div>
            <div className='h-60 w-70 p-6 bg-[#EDEFEE]'>
              <h3 className='font-bold'>Chef 3</h3>          
              <p className='text-[#495E57] italic pt-8'>“Food is meant to be shared. The best part of cooking is seeing others enjoy the results of your hard work.”</p>
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}

export default Chefs