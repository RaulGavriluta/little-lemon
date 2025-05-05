import React, {useState} from 'react'
import Logo from '../icons_assets/Logo.svg'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom'

const Nav = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <nav className='flex justify-between items-center w-full mx-auto  px-6 font-bold'>
        <img src={Logo} className='m-4'/>
        <ul className='hidden md:flex'>
            <li className='p-4 hover:text-brand-green transition duration-200'>
              <Link to="/">Home</Link>
            </li>
            <li className='p-4 hover:text-brand-green transition duration-200'>
              <Link to="/about">About</Link>
            </li>
            <li className='p-4 hover:text-brand-green transition duration-200'>
              <Link to="/menu">Menu</Link>
            </li>            
            <li className='p-4 hover:text-brand-green transition duration-200'>
              <Link to="/booking">Reservations</Link>
            </li>
        </ul>
        <div onClick = {handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size = {20} /> : <AiOutlineMenu size = {20}/>
 }
        </div>
        <div className={ nav 
        ? 'fixed top-0 left-0 w-[60%] h-full bg-white z-50 transition-transform duration-500 ease-in-out translate-x-0' 
        : 'fixed top-0 left-0 w-[60%] h-full bg-white z-50 transition-transform duration-500 ease-in-out -translate-x-full' 
        }>        
          <img src={Logo} className='m-4'/>
          <ul className='p-4'>
              <li className='p-4 border-b border-b-brand-green hover:text-brand-green'>
                <Link to="/">Home</Link>
              </li>
              <li className='p-4 border-b border-b-brand-green hover:text-brand-green'>
                <Link to="/about">About</Link>
              </li>
              <li className='p-4 border-b border-b-brand-green hover:text-brand-green'>
                <Link to="/menu">Menu</Link>
              </li>            
              <li className='p-4 hover:text-brand-green'>
                <Link to="/booking">Reservations</Link>
              </li>
          </ul>
        </div>
    </nav>
  )
}

export default Nav