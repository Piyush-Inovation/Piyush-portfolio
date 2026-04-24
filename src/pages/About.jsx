import '../styles/About.css'
import reactLogo from '../assets/react-logo.svg'
import nextLogo from '../assets/nextjs-logo.svg'
import nodeLogo from '../assets/nodejs-logo.svg'
import tsLogo from '../assets/typescript-logo.svg'
import apiLogo from '../assets/api-logo.svg'
import gitLogo from '../assets/git-logo.svg'

const stack = [
  { name: 'React', icon: reactLogo },
  { name: 'Next.js', icon: nextLogo },
  { name: 'Node.js', icon: nodeLogo },
  { name: 'TypeScript', icon: tsLogo },
  { name: 'API Integration', icon: apiLogo },
  { name: 'Git', icon: gitLogo },
]

function About() {
  return (
    <section className="about-page" id="about-page">
      <div className="about-page-container">
        <p className="section-eyebrow">About</p>
        <h2 className="about-page-name">Piyush Bramhankar — Full Stack Developer</h2>
        <h1>Helping businesses grow with modern web development</h1>
        <p className="about-page-intro">
          I build conversion-focused websites and full-stack web apps for startups, founders, and service businesses.
          My process is simple: understand your goal, build fast, and launch something reliable that drives real results.
        </p>

        <div className="about-page-points">
          <article>
            <h3>My Work</h3>
            <p>
              I design and develop responsive, performance-focused websites and web apps that help brands build trust and
              generate quality leads online.
            </p>
          </article>
          <article>
            <h3>What I deliver</h3>
            <p>Business websites, landing pages, custom dashboards, and API-connected web apps.</p>
          </article>
          <article>
            <h3>How I work</h3>
            <p>Clear communication, milestone-based delivery, clean code, and post-launch support.</p>
          </article>
          <article>
            <h3>Need a build partner?</h3>
            <p>I’m available for freelance projects and long-term product collaborations.</p>
          </article>
        </div>

        <div className="about-page-career">
          <article className="about-career-card">
            <h3>Education Timeline</h3>
            <ul className="about-timeline-list">
              <li>
                <strong>Schooling Foundation</strong>
                <span>Strong basics in mathematics, computer fundamentals, and communication.</span>
              </li>
              <li>
                <strong>College & Technical Learning</strong>
                <span>Focused on software development, web technologies, and practical project implementation.</span>
              </li>
              <li>
                <strong>Internship Learning Phase</strong>
                <span>Applied academic learning to practical development, teamwork, and delivery workflows.</span>
              </li>
            </ul>
          </article>

          <article className="about-career-card">
            <h3>Experience</h3>
            <p className="about-experience-copy">
              2+ years experience in freelancing and building projects for business websites, landing pages, dashboards,
              and full-stack solutions focused on performance and conversion.
            </p>
            <ul className="about-timeline-list compact">
              <li>
                <strong>Internship 01</strong>
                <span>Worked on frontend UI development, responsive components, and performance improvements.</span>
              </li>
              <li>
                <strong>Internship 02</strong>
                <span>Contributed to full-stack feature delivery, API integration, and deployment support.</span>
              </li>
            </ul>
          </article>
        </div>

        <h2 className="about-page-stack-title">Tech stack</h2>
        <div className="about-page-stack" aria-label="Tech stack icons">
          {stack.map((item) => (
            <div className="about-page-stack-item" key={item.name} title={item.name} aria-label={item.name}>
              <img src={item.icon} alt={item.name} loading="lazy" />
            </div>
          ))}
        </div>

        <div className="about-page-cta-row">
          <a href="/#contact" className="about-page-cta">Hire Me</a>
          <a href="/#work" className="about-page-project-btn">View Projects</a>
        </div>
      </div>
    </section>
  )
}

export default About
