import React from 'react'
import Logo from '../icons_assets/Logo.svg'

const Nav = () => {
  return (
    <nav className='flex justify-between font-bold px-20'>
        <img src={Logo} className='px-10'/>
        <ul className='flex'>
            <li className='p-5 hover:text-[#495E57] transition duration:200'><a href="#">Home</a></li>
            <li className='p-5'><a href="#">About</a></li>
            <li className='p-5'><a href="#">Menu</a></li>
            <li className='p-5'><a href="#">Reservations</a></li>
            <li className='p-5'><a href="#">Order Online</a></li>
            <li className='p-5'><a href="#">Login</a></li>
        </ul>
    </nav>
  )
}

export default Nav