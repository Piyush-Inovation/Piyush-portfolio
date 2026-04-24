import { useEffect, useMemo, useRef, useState } from 'react'
import '../styles/SelectedWorks.css'
import ScrollReveal from './ScrollReveal'
import projectThumb1 from '../assets/image.png'
import projectThumb2 from '../assets/Mumbai.jpeg'
import projectThumb3 from '../assets/my-photo.jpg'
import projectThumb4 from '../assets/Gemini_Generated_Image_2pl6as2pl6as2pl6.png'

const previewVideo = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'

const projects = [
  {
    id: 1,
    title: 'Task Manager Pro',
    description: 'Modern productivity dashboard designed to improve task completion and team focus.',
    featured: true,
    thumbnail: projectThumb1,
    videoSrc: previewVideo,
    demoUrl: 'https://github.com/Piyush-Inovation',
    tech: ['React', 'JavaScript', 'CSS', 'API'],
    purpose: {
      problem: 'Teams needed a cleaner way to track tasks without losing focus in messy interfaces.',
      solution: 'Built a crisp, conversion-friendly dashboard with quick actions, clear hierarchy, and mobile-first usability.',
    },
    functions: ['Task CRUD Flow', 'User Authentication', 'Responsive Dashboard'],
  },
  {
    id: 2,
    title: 'Business Growth Site',
    description: 'High-converting service website for local businesses to generate more leads.',
    featured: false,
    thumbnail: projectThumb2,
    videoSrc: previewVideo,
    demoUrl: 'https://github.com/Piyush-Inovation',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    purpose: {
      problem: 'A service business needed a site that looked premium and converted visitors into inquiries.',
      solution: 'Delivered a polished landing experience with strong CTA placement, trust elements, and fast performance.',
    },
    functions: ['Lead Capture Sections', 'Service Highlights', 'Contact Conversion'],
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    description: 'Modern shopping experience with clear navigation and frictionless purchase flow.',
    featured: false,
    thumbnail: projectThumb3,
    videoSrc: previewVideo,
    demoUrl: 'https://github.com/Piyush-Inovation',
    tech: ['Next.js', 'Stripe', 'Tailwind', 'Supabase'],
    purpose: {
      problem: 'Users needed a smoother path from browsing products to checkout with fewer drop-offs.',
      solution: 'Created a clean storefront layout that supports fast decisions, payments, and order confidence.',
    },
    functions: ['Cart Management', 'Payment Gateway', 'Order Tracking'],
  },
  {
    id: 4,
    title: 'AI Dashboard',
    description: 'Insight-heavy dashboard built to present data clearly and increase decision speed.',
    featured: false,
    thumbnail: projectThumb4,
    videoSrc: previewVideo,
    demoUrl: 'https://github.com/Piyush-Inovation',
    tech: ['Python', 'React', 'FastAPI', 'OpenAI'],
    purpose: {
      problem: 'Data-heavy products often confuse users with cluttered analytics and weak visual hierarchy.',
      solution: 'Delivered an elegant dashboard with readable charts, real-time updates, and polished presentation.',
    },
    functions: ['Data Visualization', 'Real-time Updates', 'AI Predictions'],
  },
]

function SelectedWorks() {
  const [hoveredProjectId, setHoveredProjectId] = useState(null)
  const [activeProject, setActiveProject] = useState(null)
  const [loadedImages, setLoadedImages] = useState({})
  const videoRefs = useRef({})

  const selectedProjects = useMemo(() => projects, [])

  useEffect(() => {
    selectedProjects.forEach((project) => {
      const video = videoRefs.current[project.id]
      if (!video) return

      if (hoveredProjectId === project.id) {
        const playPromise = video.play()
        if (playPromise?.catch) {
          playPromise.catch(() => {})
        }
      } else {
        video.pause()
        try {
          video.currentTime = 0
        } catch {
          // ignore reset issues on some browsers
        }
      }
    })
  }, [hoveredProjectId, selectedProjects])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveProject(null)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <section className="selected-works section" id="work">
      <div className="container">
        <ScrollReveal>
          <div className="section-title-wrapper">
            <h2 className="section-title">Recent Projects</h2>
            <p className="section-subtitle">Conversion-focused work designed to build trust and turn visitors into clients.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal threshold={0.1}>
          <div className="projects-grid" role="list">
            {selectedProjects.map((project) => {
              const isHovered = hoveredProjectId === project.id
              const imageReady = loadedImages[project.id]

              return (
                <article
                  className={`project-card ${project.featured ? 'featured' : ''}`}
                  key={project.id}
                  role="listitem"
                  onMouseEnter={() => setHoveredProjectId(project.id)}
                  onMouseLeave={() => setHoveredProjectId(null)}
                  onFocus={() => setHoveredProjectId(project.id)}
                  onBlur={() => setHoveredProjectId(null)}
                >
                  <div className="project-media">
                    <div className={`media-skeleton ${imageReady ? 'is-loaded' : ''}`} aria-hidden="true" />
                    <img
                      src={project.thumbnail}
                      alt={`${project.title} thumbnail`}
                      className={`project-thumb ${imageReady ? 'is-loaded' : ''}`}
                      loading="lazy"
                      onLoad={() => setLoadedImages((prev) => ({ ...prev, [project.id]: true }))}
                    />
                    <video
                      ref={(element) => {
                        videoRefs.current[project.id] = element
                      }}
                      className={`project-video ${isHovered ? 'is-active' : ''}`}
                      src={project.videoSrc}
                      poster={project.thumbnail}
                      muted
                      loop
                      playsInline
                      preload="none"
                    />
                    <div className="project-media-overlay" aria-hidden="true" />
                    <span className="project-overlay-cta">View Project →</span>
                    {project.featured ? <span className="project-badge">Featured Project</span> : null}
                  </div>

                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>

                    <p className="project-description">{project.description}</p>

                    <div className="project-tech-row" aria-label="Tech stack">
                      {project.tech.map((techItem) => (
                        <span key={techItem} className="tech-pill">
                          {techItem}
                        </span>
                      ))}
                    </div>

                    <div className="project-action-row">
                      <a href={project.demoUrl} target="_blank" rel="noreferrer noopener" className="project-button primary">
                        Live Demo
                      </a>
                      <button type="button" className="project-button secondary" onClick={() => setActiveProject(project)}>
                        View Details
                      </button>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </ScrollReveal>
      </div>

      {activeProject ? (
        <div className="project-modal-backdrop" role="presentation" onClick={() => setActiveProject(null)}>
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="project-modal-close" onClick={() => setActiveProject(null)} aria-label="Close details">
              ✕
            </button>

            <div className="project-modal-media">
              <video src={activeProject.videoSrc} poster={activeProject.thumbnail} controls autoPlay muted loop playsInline />
            </div>

            <div className="project-modal-content">
              <h3 id="project-modal-title">{activeProject.title}</h3>
              <p className="project-description">{activeProject.description}</p>

              <div className="project-modal-block">
                <h4>Purpose</h4>
                <p><strong>Problem:</strong> {activeProject.purpose.problem}</p>
                <p><strong>Solution:</strong> {activeProject.purpose.solution}</p>
              </div>

              <div className="project-modal-block">
                <h4>Tech Stack</h4>
                <div className="project-tech-row">
                  {activeProject.tech.map((techItem) => (
                    <span key={techItem} className="tech-pill">
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-modal-block">
                <h4>Key Features</h4>
                <ul className="project-feature-list">
                  {activeProject.functions.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <a href="#contact" className="project-modal-cta" onClick={() => setActiveProject(null)}>
                Want a similar website? Hire Me
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default SelectedWorks
