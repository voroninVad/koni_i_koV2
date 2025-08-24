import React from 'react'
import './index.css'
import { useState } from "react";
import data_services from '../../data/data.json'

const Services = () => {


const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (id) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <section className="section_services">
      <h1>Наши услуги</h1>

     <div className="services">
        {data_services.services.map((service) => (
          <div
            key={service.id}
            className={`card ${activeIndex === service.id ? "active" : ""}`}
            onClick={() => handleToggle(service.id)}
          >
            <img src={service.img} alt={service.title} />
            <div className="title">
              {service.title}
              {service.inscription && <p>({service.inscription})</p>}
            </div>

            {activeIndex === service.id && (
              <div className="content">
                <p>{service.description1}</p>
                {service.description2 && <p>{service.description2}</p>}

                {service.items_desc2 && (
                  <ul>
                    {Object.values(service.items_desc2).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services