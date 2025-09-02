import React from 'react'
import './index.css'
import { NavLink } from "react-router-dom";
import { FC } from 'react'


const MenuNavigation = ({valueBurger, handleMenu}) => {
  return (
     <ul className={valueBurger ? "menu_navigation open" : "menu_navigation"}>
        <li><NavLink to="/" onClick={handleMenu} className="menu_nav_item">Главная</NavLink></li>
        <li><NavLink to="/about" onClick={handleMenu} className="menu_nav_item">О нас</NavLink></li>
        <li><NavLink to="/services" onClick={handleMenu} className="menu_nav_item">Услуги</NavLink></li>
        <li><NavLink to="/news" onClick={handleMenu} className="menu_nav_item">Новости</NavLink></li>
        <li><NavLink to="/contacts" onClick={handleMenu} className="menu_nav_item">Конкакты</NavLink></li>
    </ul>
  )
}

export default MenuNavigation
