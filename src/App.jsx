import React from 'react'
import Navbar from './components/Navbar'
import '../public/fonts/font.css'
import Home from './components/Home'
import Marquee from './components/Marquee'
import LocomotiveScroll from 'locomotive-scroll'
import Products from './components/Products'
import Cards from './components/Cards'
import Footer from './components/Footer'
const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full select-none min-h-screen bg-[#000000]  text-[#E5E5E5] font-["Satoshi_Variable"]'>
      <Navbar />
      <Home />
     <Marquee />
     <Products />
     <Cards />
     <Footer />
    </div>
  )
}

export default App