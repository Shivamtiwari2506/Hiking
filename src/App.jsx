import { useState, useEffect  } from 'react'
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import DetailPage from './pages/DetailPage'
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,     
      easing: 'ease-in-out', 
          
    });
  }, []);
  return (
    <>
     <div className='bg-[#0B1D26] text-white'>
      <Router>
        <Navbar/>
        <div className=''>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/detail/:id' element={<DetailPage/>}/>
        </Routes>
        </div>
        <Footer/>
      </Router>
     </div>
     
    </>
  )
}

export default App
