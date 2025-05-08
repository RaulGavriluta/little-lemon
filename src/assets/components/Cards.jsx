import React from 'react'


const Cards = ({title, paragraph, image}) => {
  return (
    <section>
        <div className='flex justify-between'>
        <article className='drop-shadow-xl hover:drop-shadow-2xl transition duration-200'>
          <div className='w-70 h-70 bg-cover bg-center rounded-t-xl lg:w-50 lg:h-50' style={{ backgroundImage: `url(${image})`}}></div>
          <div>
            <div className='h-60 w-70 p-6 bg-brand-grey lg:w-50 lg:h-50 lg:text-sm'>
              <h3 className='font-bold'>{title}</h3>          
              <p className='text-brand-green italic pt-8'>{paragraph}</p>
            </div>
          </div>
        </article>
        </div>
    </section>
  )
}

export default Cards