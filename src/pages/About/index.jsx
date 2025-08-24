import React from 'react'
import './index.css'
import data_about from '../../data/data.json'

const About = () => {
  return (
    <section class="about">
       <div className="items">
        {data_about.about.map((item) => (
          <div 
            key={item.id} className="item1">
            <div class="item_photo"></div>
            <p>{item.item}</p>
          </div>
        ))}
         
       </div>
        <div className="w-full relative overflow-hidden">
          <iframe
          src="https://yandex.ru/map-widget/v1/org/ekoferma_koni_i_ko/135014901358/?ll=39.803585%2C54.671416&z=16.87"
          width="100%"
          height="400"
          className="relative"
          frameBorder={1}
          allowFullScreen
          />
        </div>
      </section>
  )
}

export default About