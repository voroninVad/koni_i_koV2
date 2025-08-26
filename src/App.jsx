import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import News from './pages/News'
import Contacts from './pages/Contacts'
import Footer from './components/Footer'
import Loading from './components/Loading'

function App() {

  
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Имитация загрузки данных с помощью setTimeout
    const timer = setTimeout(() => {
      setData("Это ваши загруженные данные!");
      setIsLoading(false); // После загрузки данных устанавливаем isLoading в false
    }, 2000); // Загрузка данных занимает 2 секунды

    return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
  }, []);

  return (
    <div className="container">
      <Header/>
      {isLoading ? 
      <Loading /> :
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/news' element={<News />}/>
        <Route path='/contacts' element={<Contacts />}/>
      </Routes>
      }
      <Footer />
    </div>
  )
}

export default App
