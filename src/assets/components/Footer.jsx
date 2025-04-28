import React from 'react'
import logo from '../icons_assets/logo.png'

const Footer = () => {
  return (
    <footer>
        <img src={logo} />
        <h5>Explore</h5>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
        </ul>
        <h5>Contact</h5>
        <ul>
            <li>Adress</li>
            <li>Phone Number</li>
            <li>Email</li>
        </ul>
        <h5>Social Media</h5>
        <ul>
            <li><a href="#">Adress</a></li>
            <li><a href="#">Phone Number</a></li>
            <li><a href="#">Email</a></li>
        </ul>
    </footer>
  )
}

export default Footer