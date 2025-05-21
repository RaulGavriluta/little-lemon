import React from 'react'
import logo from '../icons_assets/logo.png'
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Footer = () => {
  const navLinks = [
    {name:'Home', path: '/'},
    {name:'About', path: '/about'},
    {name:'Menu', path: '/menu'},
    {name:'Reservations', path:'/reservations'}
  ]

  const socialLinks = [
  { icon: FaFacebookSquare, url: "https://facebook.com" },
  { icon: FaInstagram, url: "https://instagram.com" },
  { icon: FaTwitter, url: "https://twitter.com" }
];

  const contactInfo = [
    '1853 W Armitage Ave,',
    'Chicago, IL',
    '(312) 555-0197',
    'contact@littlelemonchi.com'
  ]
  
  return (
    <footer className='grid items-center text-sm w-full bg-brand-green px-10 py-10 mx-auto text-white sm:grid-cols-3 md:gap-8 md:px-20 '>
        <div>
        <div><img src={logo} alt ='logo' className='w-20 md:w-30'/></div>
        <div>
          <ul className='flex space-x-10'>
              {socialLinks.map(({ icon: Icon, url }) => (
                <li key={url}>
                  <a href={url} target="_blank" className="hover:text-brand-yellow">
                    <Icon size={20} />
                  </a>
                </li>
           ))}
          </ul>
        </div>
        </div>
        <div className='flex items-center justify-between w-full h-full py-4 space-x-20'>
        <div className=''>
          <h5 className='text-brand-yellow pb-2'>Explore</h5>
          <ul>
              {navLinks.map((links) => (
                <li key = {links.path} className='hover:text-brand-yellow'>
                  <Link to = {links.path}>{links.name}</Link>
                </li>
              ))}
          </ul>
        </div>
        <div className=''>
          <h5 className='text-brand-yellow pb-2'>Contact</h5>
          <ul>
              {contactInfo.map((contacts) => (
                <li key ={contacts} >
                  {contacts}
                </li>
              ) )}
          </ul>
        </div>
        
        </div>
      </footer>
  )
}

export default Footer