import '../styles/Hero.css'
import boyImage from '../assets/my-photo.jpg'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">
          Frontend Developer
        </h1>
        <div className="hero-section">
          <p className="hero-description">
            Hi, I'm Piyush Bramhankar.<br />
            I build clean, modern and meaningful digital experiences with a<br />
            focus on quality, creativity and simplicity.
          </p>
          <a href="#contact" className="cta-button">Get in Touch ↗</a>
        </div>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <h3 className="feature-title">Core Frontend Mastery</h3>
          <ul className="feature-list">
            <li>React & The Hooks API</li>
            <li>TypeScript for Scalable Apps</li>
            <li>Next.js SSR & Static Generation</li>
            <li>Tailwind CSS & Component Libraries</li>
            <li>Redux/Zustand State Management</li>
          </ul>
        </div>

        <div className="character-image">
          <img src={boyImage} alt="Piyush Bramhankar" />
        </div>

        <div className="feature-card">
          <h3 className="feature-title">Driving User Engagement</h3>
          <ul className="feature-list">
            <li>Performance-First Development</li>
            <li>Pixel-Perfect Mobile Responsiveness</li>
            <li>Intuitive & Accessible User Experience</li>
            <li>Clean, Maintainable Code Architecture</li>
            <li>Data-Driven UI Optimization</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero
