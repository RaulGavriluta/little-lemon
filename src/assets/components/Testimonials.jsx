import React from 'react'
import { FaStar } from "react-icons/fa";


const Testimonials = () => {
  return (
    <section aria-label = "Customer Reviews" className=' items-center justify-between bg-[#495E57] px-60 py-20'>
        <h1 className='text-4xl font-bold pb-2 text-[#F4CE14] text-center'>Reviews</h1>
        <div className='flex justify-between py-8 space-x-4 font-bold'>
        <article className='p-6  w-65 bg-[#EDEFEE]'>
        <h3>Matteo B.</h3>
             <div className='flex items-center'>
        
                <h3>5</h3>
                <FaStar className='text-[#F4CE14] '/>   
            </div>
           
            <p className='text-[#495E57] pt-4 italic'>“Little Lemon has the kind of charm that makes you feel like you’ve stepped into a family kitchen in Italy.”</p>
        </article>
        <article className='p-6 w-65 bg-[#EDEFEE]'>
        <h3>Olivia R.</h3>
             <div className='flex items-center'>
                <h3>5</h3>
                <FaStar className='text-[#F4CE14] '/>   
            </div>
            <p className='text-[#495E57] pt-4 italic'>“Authentic atmosphere, warm staff, and every visit feels like a special occasion.”</p>
        </article>
        <article className='p-6 w-65 bg-[#EDEFEE]'>
            <h3>Jamal K.</h3>
             <div className='flex items-center'>
                <h3>5</h3>
                <FaStar className='text-[#F4CE14] '/>   
            </div>
            <p className='text-[#495E57] pt-4 italic'>“Consistently great experience - it’s become our go-to spot for a cozy evening out.”</p>
        </article>
        </div>
        
    </section>
  )
}

export default Testimonials