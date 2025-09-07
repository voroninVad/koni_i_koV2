import React from 'react'
import './index.css'
import { NavLink } from "react-router-dom";

const NoMatch = () => {
  return (
    <section className='no_match'>
        <h1>404 страница не найдена</h1>
        <NavLink to="/" className="back_home">Вернуться на главную</NavLink>        
    </section>
  )
}

export default NoMatch