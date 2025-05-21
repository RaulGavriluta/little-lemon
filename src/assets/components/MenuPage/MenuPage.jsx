import React from 'react'
import Header from '../Header'
import Menu from './Menu'
import MenuItems from './MenuItems'
import restauranfood from '../../icons_assets/restauranfood.jpg'

const MenuPage = () => {
  return (
    <>
        <Header image = {restauranfood} paragraph= "At Little Lemon, we take pride in serving authentic Italian dishes made from the freshest ingredients. From rich pasta dishes to wood-fired pizzas, our menu brings the heart of Italy to your table." />
        <Menu />
        <MenuItems />
    </>
  )
}

export default MenuPage