import './App.css'
import Navbar from './components/Navbar'
import ImageSliderNavbar from './components/ImageSliderNavbar'
import Hero from './components/Hero'
import SelectedWorks from './components/SelectedWorks'
import AboutJourney from './components/AboutJourney'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ImageSlider from './components/ImageSlider'
import { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

const LaserFlow = lazy(() => import('./components/LaserFlow'))

function AppContent({ theme, toggleTheme }) {
  const location = useLocation()
  const isImageSliderPage = location.pathname === '/image-slider'

  return (
    <div className="app">
      <Suspense fallback={null}>
        <LaserFlow color={theme === 'dark' ? "#00FF99" : "#00A669"} />
      </Suspense>
      {isImageSliderPage ? (
        <ImageSliderNavbar theme={theme} toggleTheme={toggleTheme} />
      ) : (
        <Navbar theme={theme} toggleTheme={toggleTheme} />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <SelectedWorks />
              <AboutJourney />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/image-slider" element={<ImageSlider />} />
      </Routes>
    </div>
  )
}

function App() {
  const [showBackground, setShowBackground] = useState(false)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    // Load background after main content is visible
    const timer = setTimeout(() => {
      setShowBackground(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <Router>
      <AppContent theme={theme} toggleTheme={toggleTheme} />
    </Router>
  )
}

export default App
