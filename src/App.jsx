import { useState } from 'react'
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
 

  return (
    <>
     <div className='bg-[#0B1D26] text-white'>
      <Router>
        <Navbar/>
        <div className=''>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
        </Routes>
        </div>
        <Footer/>
      </Router>
     </div>
     
    </>
  )
}

export default App
