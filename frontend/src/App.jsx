
import './App.css'
import React from 'react'
import { Toaster } from 'sonner'
import Home from './pages/home.jsx'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import Donations from './pages/donations.jsx'
import Login from './pages/auth.pages/login.jsx'
import OpenRoute from './components/core/Auth/openRoutes.jsx'
import Signup from './pages/auth.pages/signup.jsx'
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
   <Route path="/tools" element={<Tools />} />
  
   <Route path="/auth/login" element={
     <OpenRoute>
       <Login /> 
     </OpenRoute>
   } />
   <Route path="/auth/signup" element={
     <OpenRoute>
       <Signup /> 
     </OpenRoute>
   } />
</Routes>
    </>
  )
}

export default App
