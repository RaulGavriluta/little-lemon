import React from 'react'
import logo from '../icons_assets/logo.png'
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='grid items-center text-sm w-full bg-brand-green px-10 py-10 mx-auto text-white sm:grid-cols-3 md:gap-8 md:px-20 '>
        <div>
        <div><img src={logo} alt ='logo' className='w-20 md:w-30'/></div>
        <div>
          <ul className='flex space-x-10'>
              <li><a href="#" className='hover:text-brand-yellow'><FaFacebookSquare size = {20} /></a></li>
              <li><a href="#" className='hover:text-brand-yellow'><FaInstagram size = {20} /></a></li>
              <li><a href="#" className='hover:text-brand-yellow'><FaTwitter size = {20} /></a></li>
          </ul>
        </div>
        </div>
        <div className='flex items-center justify-between w-full h-full py-4 space-x-20'>
        <div className=''>
          <h5 className='text-brand-yellow pb-2'>Explore</h5>
          <ul>
              <li className='hover:text-brand-yellow'>
                <Link to="/">Home</Link>
              </li>
              <li className='hover:text-brand-yellow'>
                <Link to="/about">About</Link>
              </li>
              <li className='hover:text-brand-yellow'>
              <Link to="/menu">Menu</Link>
              </li>              
              <li className='hover:text-brand-yellow'>
                <Link to="/booking">Reservations</Link>
              </li>
          </ul>
        </div>
        <div className=''>
          <h5 className='text-brand-yellow pb-2'>Contact</h5>
          <ul>
              <li>1853 W Armitage Ave,</li>
              <li>Chicago, IL</li>
              <li>(312) 555-0197</li>
              <li>contact@littlelemonchi.com</li>
          </ul>
        </div>
        
        </div>
        
        
        
    </footer>
  )
}

export default Footer