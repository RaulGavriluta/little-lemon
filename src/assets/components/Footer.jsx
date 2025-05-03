import React from 'react'
import logo from '../icons_assets/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='flex items-center bg-[#495E57] px-60 py-8 space-x-30 text-white'>
        <div><img src={logo} alt ='logo' className='w-40'/></div>
        <div className='h-50'>
          <h5 className='text-[#F4CE14] pb-2 '>Explore</h5>
          <ul>
              <li className='hover:text-[#F4CE14]'>
                <Link to="/">Home</Link>
              </li>
              <li><a href="#" className='hover:text-[#F4CE14]'>About</a></li>
              <li><a href="#" className='hover:text-[#F4CE14]'>Menu</a></li>
              <li className='hover:text-[#F4CE14]'>
                <Link to="/booking">Reservations</Link>
              </li>
              <li><a href="#" className='hover:text-[#F4CE14]'>Order Online</a></li>
              <li><a href="#" className='hover:text-[#F4CE14]'>Login</a></li>
          </ul>
        </div>
        <div className='h-50'>
          <h5 className='text-[#F4CE14] pb-2'>Contact</h5>
          <ul>
              <li>1853 W Armitage Ave, Chicago IL</li>
              <li>(312) 555-0197</li>
              <li>contact@littlelemonchi.com</li>
          </ul>
        </div>
        <div className='h-50'>
          <h5 className='text-[#F4CE14] pb-2'>Social Media</h5>
          <ul>
              <li><a href="#" className='hover:text-[#F4CE14]'>Instagram</a></li>
              <li><a href="#" className='hover:text-[#F4CE14]'>Facebook</a></li>
              <li><a href="#" className='hover:text-[#F4CE14]'>Twitter</a></li>
          </ul>
        </div>
    </footer>
  )
}

export default Footer