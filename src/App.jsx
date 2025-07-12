import React from 'react'
import HomePage from './pages/HomeSection/HomePage'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <>
    <div className= "bg-[#1a1a1a]" >
      {/* Navbar stays full width */}
      <Navbar />

      {/* All content centered and 80% wide */}
      <div className="w-[90%] mx-auto flex flex-col items-center justify-center gap-16 bg-amber-200">
       <HomePage/>
       
      </div>
      <Footer/>
      </div>
    </>
  )
}

export default App
