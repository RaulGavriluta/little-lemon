import React from 'react'
import Cards from '../Cards'
import chef1 from '../../icons_assets/chef1.jpg'

const Chefs = () => {
  return (
    <main className='px-60 py-20'>
      <h1 className='text-4xl font-bold pt-4 pb-8'>The Chefs</h1>
      <div className='flex justify-between'>
        <Cards title = "Chef 1" image = {chef1} paragraph = '"Cooking is not just about ingredients; it s about passion and tradition. Every dish tells a story."' />
        <Cards title = "Chef 2" image = {chef1} paragraph = '"In the kitchen, we honor the flavors of Italy, and every meal is an expression of love for our heritage."' />
        <Cards title = "Chef 3" image = {chef1} paragraph = '“Food is meant to be shared. The best part of cooking is seeing others enjoy the results of your hard work.”' />
      </div>
      
    </main>
  )
}

export default Chefs