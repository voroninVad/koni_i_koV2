import React, { useState, useEffect,Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
// import Home from './pages/Home'
// import About from './pages/About'
// import Services from './pages/Services'
// import News from './pages/News'
// import Contacts from './pages/Contacts'
import Footer from './components/Footer'
import Loading from './components/Loading'
import data from './data/data.json'

const Home  = lazy(() => import('./pages/Home'));
const Services  = lazy(() => import('./pages/Services'));
const News  = lazy(() => import('./pages/News'));
const Contacts  = lazy(() => import('./pages/Contacts'));
const About  = lazy(() => import('./pages/About'));

function App() {

  
  const [isLoading, setIsLoading] = useState(true);
  const [values, setValues] = useState([]);

  useEffect(() => {
    const loadData = async () =>{
      setIsLoading(true);
      await setValues(data);
      setIsLoading(false);
    };
    loadData();
  }, []);
  return (
    <div className="container">
      <Header/>
      {isLoading ? (<Loading /> ) :
      ( <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About data={values.about}/>}/>
          <Route path='/services' element={<Services data={values.services} />}/>
          <Route path='/news' element={<News />}/>
          <Route path='/contacts' element={<Contacts data={values.contacts}/>}/>
        </Routes>)  
    }
      
      <Footer />
    </div>
  )
}

export default App
