import React from 'react'
import './index.css'
import { motion } from "framer-motion"

const Home = () => {
  return (
    <section className="banner">
        <motion.h1
                initial={{opacity:0, y:100}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.5, delay:0.5}}>
                  Экоферма «Кони и Ко»</motion.h1>
        <div className="anim_border"></div>    
        <motion.p
                initial={{opacity:0, y:100}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.5, delay:1}}>
          верховая езда, вольтижировка, аренда лошади, аренда фаэтона/саней,
          фотосессии
        </motion.p>
        <div className="link">
          <a target="_blank" href="https://n1534254.yclients.com/"
            >Записаться</a>
        </div>
      </section>
  )
}

export default Home