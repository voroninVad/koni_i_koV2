import React, { useState, useEffect,Suspense, lazy  } from 'react';
import { Route, Routes, useLocation} from 'react-router-dom'
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
import NoMatch from './pages/NoMatch';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const News = lazy(() => import('./pages/News'));
const Contacts = lazy(() => import('./pages/Contacts'));

function App() {

  
  const [values, setValues] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const loadData = async () =>{
      setValues(data);
    };
    loadData();
  }, [location.pathname]);
  return (
    <div className="container">
      <Header/>
        <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About data={values.about} />} />
          <Route path="/services" element={<Services data={values.services} />} />
          <Route path="/news" element={<News />} />
          <Route path="/contacts" element={<Contacts data={values.contacts} />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Suspense>
      
      <Footer />
    </div>
  )
}

export default App
