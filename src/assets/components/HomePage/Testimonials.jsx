import React from 'react'
import { FaStar } from "react-icons/fa";


const Testimonials = () => {
  return (
    <section aria-label = "Customer Reviews" className='flex flex-col items-center bg-brand-green px-6 py-20'>
        <h1 className='text-4xl font-bold pb-2 text-brand-yellow text-center'>Reviews</h1>
        <div className='grid gap-8 py-8 font-bold md:grid-cols-3'>
        <article className='p-6 w-65 bg-brand-grey md:w-55'>
        <h3>Matteo B.</h3>
             <div className='flex items-center'>
                        <h3>5</h3>
                <FaStar className='text-brand-yellow '/>   
            </div>
            <p className='text-brand-green pt-4 italic'>“Little Lemon has the kind of charm that makes you feel like you’ve stepped into a family kitchen in Italy.”</p>
        </article>
        <article className='p-6 w-65 bg-brand-grey md:w-55 md:text-md'>
        <h3>Olivia R.</h3>
             <div className='flex items-center'>
                <h3>5</h3>
                <FaStar className='text-brand-yellow '/>   
            </div>
            <p className='text-brand-green pt-4 italic'>“Authentic atmosphere, warm staff, and every visit feels like a special occasion.”</p>
        </article>
        <article className='p-6 w-65 bg-brand-grey md:w-55'>
            <h3>Jamal K.</h3>
             <div className='flex items-center'>
                <h3>5</h3>
                <FaStar className='text-brand-yellow '/>   
            </div>
            <p className='text-brand-green pt-4 italic'>“Consistently great experience - it’s become our go-to spot for a cozy evening out.”</p>
        </article>
        </div>
        
    </section>
  )
}

export default Testimonials