import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './assets/component/Navbar/navbar'
import Hero from './assets/component/Hero/hero'
import Portfolio from './assets/component/portfolio/portfolio'
import About from './assets/component/About/About'
import Contact from './assets/component/Contact/Contact'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
    <Hero  />
    <Portfolio />
    <About />
    <Contact />
    </>
  )
}

export default App
