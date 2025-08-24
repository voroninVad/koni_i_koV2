import React from 'react'
import './index.css'

const News = () => {
  return (
    <section className='section_news'>
      <h1 className='title'>Новости</h1>
      <p>Следите за новостями клуба: акции, наборы групп, выезды и фотодни.</p>
      <div className="items_news">
        <div className="item_news">
          <h2>Скоро анонс</h2>
          <p className='item_desc'>Объявления появятся здесь или в наших соцсетях.</p>
        </div>
        <div className="item_news">
          <h2>Скоро анонс</h2>
          <p className='item_desc'>Объявления появятся здесь или в наших соцсетях.</p>
        </div>
        <div className="item_news">
          <h2>Скоро анонс</h2>
          <p className='item_desc'>Объявления появятся здесь или в наших соцсетях.</p>
        </div>
      </div>

    </section>
  )
}

export default News