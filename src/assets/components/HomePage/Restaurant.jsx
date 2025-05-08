import React from 'react'
import OwnersA from '../../icons_assets/OwnersA.jpg'
import Ownersb from '../../icons_assets/Ownersb.jpg'

const Restaurant = () => {
  return (
    <section className='py-20 px-10 sm:px-15 md:px-25 sm:flex'>
        <article className='grid items-center text-justify pb-10 sm:pr-10 md:max-w-xl'>
            <h1 className='text-3xl text-[#495E57] font-bold'>Little Lemon</h1>
            <h2 className='text-2xl font-bold pb-10'>Chicago</h2>
            <p>At Little Lemon, we bring the heart of Italy to your table. Tucked away in a cozy corner of the city, our restaurant offers a warm, welcoming atmosphere where every guest feels like family. With a focus on authentic flavors, genuine hospitality, and a love for tradition, Little Lemon is the perfect place to relax, connect, and savor the simple joys of great food and good company.</p>
        </article>
        <div className="w-full flex justify-center items-center lg:relative">
        <div
            className="hidden w-50 h-60 lg:block bg-cover bg-center absolute z-2 top-15 right-30 rounded-2xl drop-shadow-2xl "
            style={{ backgroundImage: `url(${Ownersb})` }}
        ></div>
        <div
            className="w-50 h-60 bg-cover bg-center lg:absolute z-1 rounded-2xl top-0 right-0 drop-shadow-2xl"
            style={{ backgroundImage: `url(${OwnersA})` }}
        ></div>
        </div>

    </section>
  )
}

export default Restaurant