import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Essential from './pages/Essential.jsx'
import Tools from './pages/Tools.jsx'
import Article from './pages/Article.jsx'
import Contact from './pages/Contact.jsx'
import Tips from './pages/Tips.jsx'
import Accessory from './pages/Accessory.jsx'
import Video from './pages/Video.jsx'
import Footer from './components/Footer.jsx'
import Recs from './pages/Recs.jsx'
import Ticker from './components/Ticker.jsx'
import './App.css'

function App() {
 

  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
   <Route path="/videos" element={<Video/>} />
    <Route path="/accessory" element={<Accessory />} />
     <Route path="/tips" element={<Tips />} />
      <Route path="/essential" element={<Essential />} />
       <Route path="/tools" element={<Tools />} />
         <Route path="/contact" element={<Contact />} />
           <Route path="/article" element={<Article />} />
             <Route path="/recommendations" element={<Recs/>} />
      </Routes>
    </Router>
      <Ticker/>
    <Footer/>

    </>
  )
}

export default App
