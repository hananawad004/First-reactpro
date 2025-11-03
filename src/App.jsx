import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './component/Navbar/navbar'
import Hero from './component/Hero/hero'
import Portfolio from './component/portfolio/portfolio'
import About from './component/About/About'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Fotter'
import './App.css'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
       <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </>
   
  )
}

export default App
