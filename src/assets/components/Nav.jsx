import React from 'react'
import Logo from '../icons_assets/Logo.svg'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex justify-between font-bold px-55'>
        <img src={Logo} className='px-10'/>
        <ul className='flex'>
            <li className='p-5 hover:text-[#495E57] transition duration-200'>
              <Link to="/">Home</Link>
            </li>
            <li className='p-5 hover:text-[#495E57] transition duration-200'>
              <Link to="/about">About</Link>
            </li>
            <li className='p-5 hover:text-[#495E57] transition duration:200'><a href="#">Menu</a></li>
            <li className='p-5 hover:text-[#495E57] transition duration-200'>
              <Link to="/booking">Reservations</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav