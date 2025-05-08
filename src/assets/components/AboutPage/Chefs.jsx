import React from 'react'
import Cards from '../Cards'
import chef1 from '../../icons_assets/chef1.jpg'

const Chefs = () => {
  return (
    <main className='flex flex-col items-center px-6 py-10'>
      <h1 className='text-4xl font-bold py-8'>The Chefs</h1>
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
        <Cards title = "Chef 1" image = {chef1} paragraph = '"Cooking is not just about ingredients; it s about passion and tradition. Every dish tells a story."' />
        <Cards title = "Chef 2" image = {chef1} paragraph = '"In the kitchen, we honor the flavors of Italy, and every meal is an expression of love for our heritage."' />
        <Cards title = "Chef 3" image = {chef1} paragraph = '“Food is meant to be shared. The best part of cooking is seeing others enjoy the results of your hard work.”' />
        <Cards title = "Chef 4" image = {chef1} paragraph = '“Food is meant to be shared. The best part of cooking is seeing others enjoy the results of your hard work.”' />
      </div>
      
    </main>
  )
}

export default Chefs