import React from 'react'
import './index.css'
import icon_tg from '../../img/icon/icon_telegram.png'
import icon_wa from '../../img/icon/icon_whatsapp.png'
import data_contacts from '../../data/data.json'

const Contacts = () => {
  return (
    <section className='section_contacts'>
        <div class="section_info">
          <h1>
          Наши инструкторы по верховой езде — это команда, которая делает ваши
          занятия особенными.
        </h1>
        <h2>Они объединяют в себе лучшие качества:</h2>
        <ul>
          <li><b>Профессионализм</b> — многолетний опыт работы с лошадьми и учениками разного уровня подготовки.</li>
          <li><b>Внимательность</b> — каждый замечает малейшие детали и помогает ученикам чувствовать уверенность в седле.</li>
          <li><b>Терпение</b> — спокойное и понятное объяснение, поддержка даже для тех, кто впервые знакомится с лошадью.</li>
          <li><b>Доброжелательность</b> — создают атмосферу доверия и радости на каждой тренировке.</li>
          <li><b>Забота о безопасности</b> — индивидуальный подход, благодаря которому и взрослые, и дети могут наслаждаться занятиями без лишних переживаний.</li>
        </ul>
        </div>
        <div class="section_trens">
          {data_contacts.contacts.map((item) =>(
          <div key={item.id} class="tren">
            <div class="tren_photo">фото</div>
            <div class="tren_info">
              <h2>{item.name}</h2>
              <h2>{item.jobTitile}</h2>
              <p>{item.description}</p>
            </div>
            
            <div class="tren_contacts">
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