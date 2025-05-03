import React from 'react'
import OwnersA from '../../icons_assets/OwnersA.jpg'
import Ownersb from '../../icons_assets/Ownersb.jpg'

const Restaurant = () => {
  return (
    <section className='pt-20 pb-60 px-60 flex'>
        <article className='w-240 text-justify'>
            <h1 className='text-4xl text-[#495E57] font-bold'>Little Lemon</h1>
            <h2 className='text-2xl font-bold pb-10'>Chicago</h2>
            <p>At Little Lemon, we bring the heart of Italy to your table. Tucked away in a cozy corner of the city, our restaurant offers a warm, welcoming atmosphere where every guest feels like family. With a focus on authentic flavors, genuine hospitality, and a love for tradition, Little Lemon is the perfect place to relax, connect, and savor the simple joys of great food and good company.</p>
        </article>
        <div className="relative w-full pl-60 flex justify-center items-center">
        <div
            className="w-70 h-86 bg-cover bg-center absolute z-2 top-20 right-50 rounded-2xl drop-shadow-2xl "
            style={{ backgroundImage: `url(${Ownersb})` }}
        ></div>
        <div
            className="w-70 h-86 bg-cover bg-center absolute z-1 rounded-2xl top-0 right-0 drop-shadow-2xl"
            style={{ backgroundImage: `url(${OwnersA})` }}
        ></div>
        </div>

    </section>
  )
}

export default Restaurant