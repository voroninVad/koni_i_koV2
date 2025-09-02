import React from 'react'
import './index.css'
import icon_tg from '../../img/icon/icon_telegram.png'
import icon_wa from '../../img/icon/icon_whatsapp.png'
import { motion } from 'framer-motion';

const Contacts = (props) => {
  const contacts = props.data;
  return (
    <section className='section_contacts'>
      <div className="section_info">
        <h1>
          Наши инструкторы по верховой езде — это команда, которая делает ваши
          занятия особенными.
        </h1>
        <h2>Они объединяют в себе лучшие качества:</h2>
        <ul className='items_qualities'>
          <motion.li
                initial={{opacity:0, y:-100}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.5, delay:0.5}}><b>Профессионализм</b> — многолетний опыт работы с лошадьми и учениками разного уровня подготовки.</motion.li>
          <motion.li
                initial={{opacity:0, y:-100}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.5, delay:1}}><b>Внимательность</b> — каждый замечает малейшие детали и помогает ученикам чувствовать уверенность в седле.</motion.li>
          <motion.li
                initial={{opacity:0, y:-100}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.5, delay:1.5}}><b>Терпение</b> — спокойное и понятное объяснение, поддержка даже для тех, кто впервые знакомится с лошадью.</motion.li>
          <motion.li
                initial={{opacity:0, y:-100}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.5, delay:2}}><b>Доброжелательность</b> — создают атмосферу доверия и радости на каждой тренировке.</motion.li>
          <motion.li
                initial={{opacity:0, y:-100}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.5, delay:2.5}}><b>Забота о безопасности</b> — индивидуальный подход, благодаря которому и взрослые, и дети могут наслаждаться занятиями без лишних переживаний.</motion.li>
        </ul>
      </div>
      <div className="section_trens">
        {contacts.map((item) => (
          <div key={item.id} className="tren">
            <div className="tren_photo">
              <img className='tren_photo' src={item.img} alt={item.name} />
            </div>
            <div className="tren_info">
              <h2>{item.name}</h2>
              <h2>{item.jobTitile}</h2>
              <p>{item.description}</p>
            </div>

            <div className="tren_contacts">
              <a target="_blanck" href={item.link_tg}>
                <img src={icon_tg} alt="telegram" />
              </a>
              <a target="_blanck" href={item.link_wa}>
                <img src={icon_wa} alt="whatsapp" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Contacts