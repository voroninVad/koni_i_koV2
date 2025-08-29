import { useState } from 'react';
import "./index.css"

import logo from '../../img/logo.jpg'
import { NavLink } from "react-router-dom";
import MenuNavigation from '../MenuNavigation';
import {useIsMobile} from '../../../hooks/useMobile'

const Header = () => {
  const isMobile = useIsMobile()
  const [menuOpen, setNemuOpen] = useState(false)
  const toggleBodyScroll = (lock) => {
    document.body.style.overflow = lock ? 'hidden' : '';
  };
  const handleMenu = () => {
    setNemuOpen(!menuOpen);
    isMobile && toggleBodyScroll(!menuOpen);
  }

  return (
    <header>
      <div class="header_logo logo">
        <img src={logo} alt="Кони и Ко" />
      </div>
      <nav class="header_menu">
        <MenuNavigation valueBurger={menuOpen} handleMenu={handleMenu} />
        <button type='button' id='burger_menu' className={menuOpen ? 'burger_menu menu-open' : 'burger_menu menu-close'} onClick={handleMenu} aria-expanded={menuOpen} aria-label="open menu">
          <span></span>
        </button>
      </nav>
    </header>
  )
}

export default Header