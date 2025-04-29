import React from 'react'

const Button = ({href, label}) => {
  return (
    <a 
    href = {href}
    className='py-4 px-6 rounded-md font-bold text-black bg-[#F4CE14] hover:bg-black hover:text-white hover:shadow-2xl hover:transition-all duration-300'>
        {label}
    </a>
)
}

export default Button