
import './App.css'
import React, { Suspense, lazy } from 'react'
import { Toaster } from 'sonner'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import OpenRoute from './components/core/Auth/openRoutes.jsx'

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/home.jsx'))
const About = lazy(() => import('./pages/about.jsx'))
const Contact = lazy(() => import('./pages/contact.jsx'))
const Donations = lazy(() => import('./pages/donations.jsx'))
const Tools = lazy(() => import('./pages/tools.jsx'))
const Login = lazy(() => import('./pages/auth.pages/login.jsx'))
const Signup = lazy(() => import('./pages/auth.pages/signup.jsx'))

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-lg">Loading...</div>
  </div>
)

function App() {
  return (
    <>
      <Navbar />
      <Toaster position="top-right" richColors />
      <Suspense fallback={<LoadingFallback />}>
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
      </Suspense>
    </>
  )
}

export default App
