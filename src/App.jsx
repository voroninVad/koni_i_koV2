
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import News from './pages/News'
import Contacts from './pages/Contacts'
import Footer from './components/Footer'

function App() {

  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/news' element={<News />}/>
        <Route path='/contacts' element={<Contacts />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
