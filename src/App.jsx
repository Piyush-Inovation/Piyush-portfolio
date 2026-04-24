import './App.css'
import Navbar from './components/Navbar'
import ImageSliderNavbar from './components/ImageSliderNavbar'
import Hero from './components/Hero'
import SelectedWorks from './components/SelectedWorks'
import AboutJourney from './components/AboutJourney'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ImageSlider from './components/ImageSlider'
import SimpleChatbot from './components/SimpleChatbot'
import About from './pages/About'
import { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

const LaserFlow = lazy(() => import('./components/LaserFlow'))

function AppContent({ theme, toggleTheme }) {
  const location = useLocation()
  const isImageSliderPage = location.pathname === '/image-slider'

  useEffect(() => {
    const targets = document.querySelectorAll(
      '.navbar, .hero-content, .hero-actions, .section, .feature-card, .about-summary, .services-section, .trust-panel, .testimonials-section, .tech-stack-item, .project-card, .projects-bottom-cta, .contact-header, .contact-cta-card, .info-item, .form-group, .footer-section, .about-page-container, .about-page-points article, .about-career-card, .about-page-stack-item, .about-page-cta-row'
    )

    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-inview', entry.isIntersecting)
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -6% 0px',
      }
    )

    targets.forEach((element, index) => {
      element.classList.add('scroll-animate')
      element.style.setProperty('--reveal-delay', `${Math.min(index * 28, 220)}ms`)
    })

    const attachTimer = window.setTimeout(() => {
      targets.forEach((element) => observer.observe(element))
    }, 80)

    return () => {
      window.clearTimeout(attachTimer)
      targets.forEach((element) => observer.unobserve(element))
      observer.disconnect()
    }
  }, [location.pathname])

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
              <TechStack />
              <SelectedWorks />
              <Contact />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/image-slider" element={<ImageSlider />} />
      </Routes>
      <Footer />
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
