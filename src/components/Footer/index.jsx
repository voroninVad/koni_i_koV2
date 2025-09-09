import React from 'react'
import './index.css'
import { NavLink } from "react-router-dom";
import logo from '../../../public/img/logo.png'
import icon_tg from '../../img/icon/icon_telegram.png'
import icon_vk from '../../img/icon/icon_vk.png'
import icon_inst from '../../img/icon/icon_instagram.png'

const Footer = () => {
  return (
    <footer>
      <div className="footer_info">
        <div className="footer_logo logo">
        <img src={logo} alt="Кони и Ко" />
      </div>
      <nav className="footer_menu">
       <ul className="footer_menu_navigation">
         <li><NavLink to="/about" className="menu_nav_item">О нас</NavLink></li>
          <li><NavLink to="/services" className="menu_nav_item">Услуги</NavLink></li>
          <li><NavLink to="/news" className="menu_nav_item">Новости</NavLink></li>
          <li><NavLink to="/contacts" className="menu_nav_item">Конкакты</NavLink></li>
        </ul>
      </nav>
      <div className="contacts">
        <a href="tel:+79099781281">+79099781281 Ксения Николаевна</a>
        <a href="tel:+79521200068">+79521200068 Юлия Владимировна</a>
      </div>
      <div className="socials">
        <a target="_blank" href="https://t.me/koni_i_ko">
          <img src={icon_tg} alt="kanal_telegram" />
        </a>
        <a target="_blank" href="https://vk.com/konieko">
          <img src={icon_vk} alt="kanal_vk" />
        </a>
        <a target="_blank" href="https://www.instagram.com/koni_i_ko?igsh=bGwwMHB5MmRtd2F3&utm_source=qr">
          <img src={icon_inst} alt="kanal_instagram" />
        </a>
      </div>
      </div>
    </footer>
  )
}

export default Footer