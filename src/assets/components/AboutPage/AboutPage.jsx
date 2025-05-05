import React from 'react'
import Chefs from './Chefs'
import Header from '../Header'
import restaurant from '../../icons_assets/restaurant.jpg'

const AboutPage = () => {
  return (
    <>
        <Header image = {restaurant} paragraph = "Founded in 1995 by brothers Marco and Giovanni Rossi, Little Lemon is a celebration of authentic Italian cooking and heartfelt hospitality. From fresh pasta to family traditions, we serve meals that tell a story." />
        <Chefs />
    </>
)
}

export default AboutPage