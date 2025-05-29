import React from 'react'
import Header from '../Header'
import Menu from './Menu'
import MenuCategories from './MenuCategories'
import MenuItems from './MenuItems'
import restauranfood from '../../icons_assets/restauranfood.jpg'
import { menuItems, menuCategories } from '../data'
import MenuScroll from './MenuScroll'

const MenuPage = () => {

  return (
    <>
        <Header image = {restauranfood} paragraph= "At Little Lemon, we take pride in serving authentic Italian dishes made from the freshest ingredients. From rich pasta dishes to wood-fired pizzas, our menu brings the heart of Italy to your table." />
        <Menu />
        <MenuScroll />
        {menuCategories.map((category) => {
          const filteredItems = menuItems.filter(item => item.category === category)
          return(
            <section key={category} id={category.toLowerCase()} >
              <MenuCategories title={category}/>
              <MenuItems items={filteredItems} />
            </section>
          )
        })}
    </>
  )
}

export default MenuPage