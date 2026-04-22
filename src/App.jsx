import './App.css'
import Navbar from './components/Navbar'
import ImageSliderNavbar from './components/ImageSliderNavbar'
import Hero from './components/Hero'
import SelectedWorks from './components/SelectedWorks'
import AboutJourney from './components/AboutJourney'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ImageSlider from './components/ImageSlider'
import SimpleChatbot from './components/SimpleChatbot'
import { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

const LaserFlow = lazy(() => import('./components/LaserFlow'))

function AppContent({ theme, toggleTheme }) {
  const location = useLocation()
  const isImageSliderPage = location.pathname === '/image-slider' || location.pathname === '/about'

  return (
    <div className="app">
      <Suspense fallback={null}>
          <LaserFlow color={theme === 'dark' ? "#00FF99" : "#005A3C"} />
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
              <AboutJourney />
              <SelectedWorks />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<ImageSlider />} />
        <Route path="/image-slider" element={<ImageSlider />} />
      </Routes>
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <Router>
      <AppContent theme={theme} toggleTheme={toggleTheme} />
      <SimpleChatbot />
    </Router>
  )
}

export default App
