
import './App.css'
import React from 'react'
import { Toaster } from 'sonner'
import Home from './pages/home.jsx'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import Donations from './pages/donations.jsx'
import Petition from './pages/petition.jsx'
import Blog from './pages/blog.jsx'
import Tools from './pages/tools.jsx'
function App() {


  return (
    <>
      <Navbar />
      <Toaster position="top-right" richColors />
    <Routes>
      
      <Route path="/" element={<Home />} />
   <Route path="/about" element={<About />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/donations" element={<Donations />} />
   <Route path="/petition" element={<Petition />} />
   <Route path="/blog" element={<Blog />} />
   <Route path="/tools" element={<Tools />} />
</Routes>
    </>
  )
}

export default App
