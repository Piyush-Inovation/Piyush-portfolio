import { motion } from 'framer-motion'
import '../styles/Hero.css'
import boyImage from '../assets/my-photo.jpg'

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <motion.section
      className="hero"
      id="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="hero-content">
        <motion.h1 className="hero-title" variants={itemVariants}>
          Frontend Developer
        </motion.h1>
        <motion.div className="hero-section" variants={itemVariants}>
          <p className="hero-description">
            Hi, I'm Piyush Bramhankar.<br />
            I build clean, modern and meaningful digital experiences with a<br />
            focus on quality, creativity and simplicity.
          </p>
          <a href="#contact" className="cta-button">Get in Touch ↗</a>
        </motion.div>
      </div>

      <motion.div
        className="features-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
      >
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
      </motion.div>
    </motion.section>
  )
}

export default Hero
