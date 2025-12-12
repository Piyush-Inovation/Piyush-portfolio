import { Link } from 'react-router-dom';
import '../styles/ImageSlider.css';
import boyImage from '../assets/my-photo.jpg';
// Import logos
import reactLogo from '../assets/react-logo.svg';
import nextjsLogo from '../assets/nextjs-logo.svg';
import typescriptLogo from '../assets/typescript-logo.svg';
import stateManagementLogo from '../assets/state-management-logo.svg';
import cJavaLogo from '../assets/c-java-logo.svg';
import gitLogo from '../assets/git-logo.svg';
import deployLogo from '../assets/deploy-logo.svg';
import testingLogo from '../assets/testing-logo.svg';
import apiLogo from '../assets/api-logo.svg';
import nodejsLogo from '../assets/nodejs-logo.svg';

function ImageSlider() {
  // Skills data
  const skillsData = [
    // Section 1: Core Frontend Stack
    {
      id: 1,
      title: 'React JS & Hooks API',
      logo: reactLogo,
      description: 'Expertise in building dynamic, high-performance SPAs. Proficient in functional components, state management using Hooks, and custom hooks for reusable logic.',
      isReverse: false,
      section: 'Core Frontend Stack'
    },
    {
      id: 2,
      title: 'Next.js',
      logo: nextjsLogo,
      description: 'Utilizing Server-Side Rendering (SSR) and Static Site Generation (SSG) to achieve optimal loading speeds, improved SEO, and streamlined routing for production-ready applications.',
      isReverse: true,
      section: 'Core Frontend Stack'
    },
    {
      id: 3,
      title: 'TypeScript',
      logo: typescriptLogo,
      description: 'Dedicated to writing scalable, maintainable, and bug-resistant code by integrating strong typing across all complex JavaScript projects.',
      isReverse: false,
      section: 'Core Frontend Stack'
    },
    {
      id: 4,
      title: 'State Management',
      logo: stateManagementLogo,
      description: 'Proficient in managing complex global state efficiently using Redux and Zustand, ensuring predictable data flow.',
      isReverse: true,
      section: 'Core Frontend Stack'
    },
    {
      id: 5,
      title: 'Styling & Design',
      logo: '🎨',
      description: 'Skilled in utility-first CSS frameworks like Tailwind CSS, enabling rapid development of custom, responsive, and visually appealing user interfaces.',
      isReverse: false,
      section: 'Core Frontend Stack'
    },
    // Section 2: Foundations & Development Workflow
    {
      id: 6,
      title: 'Core Programming',
      logo: cJavaLogo,
      description: 'Basic computer science principles through C and Java, providing a strong foundation in data structures, algorithms, and object-oriented programming concepts.',
      isReverse: true,
      section: 'Foundations & Development Workflow'
    },
    {
      id: 7,
      title: 'Version Control',
      logo: gitLogo,
      description: 'Proficient in Git and GitHub for collaborative development, code management, branching strategies, and maintaining clean commit histories for team-based projects.',
      isReverse: false,
      section: 'Foundations & Development Workflow'
    },
    {
      id: 8,
      title: 'Deployment & Hosting',
      logo: deployLogo,
      description: 'Hands-on experience with Vercel and Netlify for seamless deployment pipelines, ensuring applications go live with optimized performance and continuous integration workflows.',
      isReverse: true,
      section: 'Foundations & Development Workflow'
    },
    {
      id: 9,
      title: 'Testing Methodologies',
      logo: testingLogo,
      description: 'Understanding of quality assurance practices, unit testing, integration testing, and test-driven development to ensure robust and reliable code.',
      isReverse: false,
      section: 'Foundations & Development Workflow'
    },
    // Section 3: API & Future Exposure
    {
      id: 10,
      title: 'API Integration',
      logo: apiLogo,
      description: 'Expert-level skills in consuming REST and modern APIs, handling async operations, managing data flow between frontend and backend, and implementing error handling strategies - the most critical frontend skill.',
      isReverse: true,
      section: 'API & Future Exposure'
    },
    {
      id: 11,
      title: 'Node.js Familiarity',
      logo: nodejsLogo,
      description: 'Growing familiarity with Node.js and backend concepts, demonstrating that my knowledge extends beyond frontend and positioning me for a complete Full Stack development journey.',
      isReverse: false,
      section: 'API & Future Exposure'
    },
  ];

  return (
    <section className="image-slider-page" id="image-slider">
      {/* Content Section */}
      <div className="slider-content" id="about-me">
        {/* Left - Image */}
        <div className="content-left">
          <div className="boy-image-circle">
            <div className="image-border">
              <img src={boyImage} alt="Piyush" className="boy-image" />
            </div>
          </div>
        </div>

        {/* Right - Text Content */}
        <div className="content-right">
          <h2 className="content-title">
            <span className="greeting">Hello & Welcome:</span>
            <span className="subtitle">My Professional Focus</span>
          </h2>

          <div className="scroll-para">
            <p className="content-description-1">
              I am Piyush Bramhankar, an aspiring and highly motivated Full Stack Developer specializing in modern web application development. I bring a unique, dual-focused skill set to the table, proficient in both high-impact Front-End design and efficient Back-End architecture, complemented by a strong understanding of UI/UX principles.
            </p>

            <p className="content-description-2">
              My core mission is dedicated to: developing user-centric and highly efficient web applications that combine functionality with exceptional user experience. My initiation into development began through self-exploration of foundational technologies like HTML, which quickly evolved into a passion for mastering the entire development lifecycle. I am currently concentrating on solidifying my expertise in modern front-end frameworks while preparing for a strategic move into specialized back-end roles in the future, ensuring I remain a versatile asset across the full technology stack.
            </p>
          </div>
        </div>
      </div>

      {/* Education & Professional Trajectory Section */}
      <div className="education-section">
        <h2 className="education-heading">
          🎓 Education & Professional Trajectory
        </h2>
        <p className="education-paragraph">
          My foundational learning is currently culminating in my final year of study, building a strong base in computer science principles and software development.
        </p>

        {/* Academic Timeline */}
        <div className="timeline-section">
          <h3 className="timeline-title">
            Academic Timeline
          </h3>

          <div className="timeline-container">
            {/* Timeline Item 1 */}
            <div className="timeline-item">
              <div className="timeline-year">2023 - 2026<br />(Expected Passout: 2026)</div>
              <div className="timeline-content">
                <div className="timeline-institution">Sanjay Rungta College of Science and Institute</div>
                <div className="timeline-qualification">Bachelor of Computer Applications (BCA)</div>
                <div className="timeline-highlight">Currently focused on advanced front-end frameworks and application building.</div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="timeline-item">
              <div className="timeline-year">2021 - 2023</div>
              <div className="timeline-content">
                <div className="timeline-institution">Bharti Vidya Mandir Higher Secondary School</div>
                <div className="timeline-qualification">HSC (12th Grade)</div>
                <div className="timeline-highlight">Strong technical background secured through PCM (Physics, Chemistry, Math) from the State Board.</div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="timeline-item">
              <div className="timeline-year">Till 2021</div>
              <div className="timeline-content">
                <div className="timeline-institution">Wadhwa Hr. Sec. School</div>
                <div className="timeline-qualification">SSC (10th Grade)</div>
                <div className="timeline-highlight">Completed secondary education with a foundational academic record.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Competencies Section */}
      <div className="competencies-heading-section" id="tech-stack">
        <h2 className="competencies-heading">
          🛠️ Core Competencies & Technical Stack
        </h2>

        <p className="competencies-paragraph">
          My technical profile is concentrated on building modern, efficient web experiences using in-demand technologies. The following stack represents my strongest abilities, gained through intensive academic and practical internship experience. I focus on frameworks that ensure scalability, performance, and maintainability.
        </p>

        {/* Skills Grid - Grouped by Section */}
        {skillsData.reduce((acc, skill) => {
          const sectionIndex = acc.findIndex(item => item.section === skill.section);
          if (sectionIndex === -1) {
            acc.push({ section: skill.section, skills: [skill] });
          } else {
            acc[sectionIndex].skills.push(skill);
          }
          return acc;
        }, []).map((group, groupIndex) => (
          <div key={groupIndex}>
            <h3 className="skills-section-heading">
              {group.section === 'Core Frontend Stack' && '1. Core Frontend Stack'}
              {group.section === 'Foundations & Development Workflow' && '2. Foundations & Development Workflow (The Base)'}
              {group.section === 'API & Future Exposure' && '3. API & Future Exposure (The Growth Plan)'}
            </h3>

            {group.skills.map((skill) => (
              <div
                key={skill.id}
                className={`skills-row ${skill.isReverse ? 'skills-row-reverse' : ''}`}
              >
                <div className="skills-left">
                  {!skill.isReverse ? (
                    <div className="skill-heading-wrapper">
                      {typeof skill.logo === 'string' && skill.logo.length === 2 ? (
                        <span className="skill-logo">{skill.logo}</span>
                      ) : (
                        <img src={skill.logo} alt={skill.title} className="skill-logo-img" />
                      )}
                      <h3 className="skill-heading">{skill.title}</h3>
                    </div>
                  ) : (
                    <p className="skill-description">{skill.description}</p>
                  )}
                </div>

                <div className="skills-right">
                  {skill.isReverse ? (
                    <div className="skill-heading-wrapper">
                      {typeof skill.logo === 'string' && skill.logo.length === 2 ? (
                        <span className="skill-logo">{skill.logo}</span>
                      ) : (
                        <img src={skill.logo} alt={skill.title} className="skill-logo-img" />
                      )}
                      <h3 className="skill-heading">{skill.title}</h3>
                    </div>
                  ) : (
                    <p className="skill-description">{skill.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Professional Experience Section */}
      <div className="experience-section" id="experience">
        <h2 className="experience-heading">
          💼 Professional Experience & Internships
        </h2>
        <p className="experience-paragraph">
          My professional journey is built on practical application, demonstrated through intensive internships focused on both foundational backend architecture and modern frontend execution. This hands-on experience has directly shaped my Full Stack aspiration.
        </p>

        {/* Experience Timeline */}
        <div className="experience-timeline-container">
          {/* Current Internship - MERN Stack */}
          <div className="experience-card">
            <div className="experience-badge current">Current</div>
            <div className="experience-header">
              <h3 className="experience-role">Front-End Developer Intern</h3>
              <p className="experience-company">Code2DBug (Under N.A.I.R. Solutions)</p>
              <p className="experience-duration">August 1 - October 31, 2025 • 3 Months</p>
            </div>
            <div className="experience-focus">
              <span className="focus-tag">MERN Stack</span>
              <span className="focus-tag">Modern Front-End Architecture</span>
              <span className="focus-tag">Real-time Project Execution</span>
            </div>
            <div className="experience-content">
              <h4 className="contributions-title">Key Contributions & Learning:</h4>
              <ul className="contributions-list">
                <li>
                  <strong>Project Execution:</strong> Successfully completed 3-4 guided projects and 1 mentor-reviewed real-time project, applying practical learning aligned with real-world deliverables.
                </li>
                <li>
                  <strong>Technology Deep Dive:</strong> Gained intensive experience in the MERN (Full Stack) environment, with a primary focus on mastering React and the associated Front-End ecosystem.
                </li>
                <li>
                  <strong>Agile Deliverables:</strong> Performed tasks based on quality of submissions, responsiveness, and consistency, demonstrating successful fulfillment of internship requirements.
                </li>
              </ul>
            </div>
          </div>

          {/* Foundational Internship - Java */}
          <div className="experience-card">
            <div className="experience-badge completed">Completed</div>
            <div className="experience-header">
              <h3 className="experience-role">Java Developer Intern / Trainee</h3>
              <p className="experience-company">Stuvaley Technology Pvt. Ltd. (via Prayug/Stuintern)</p>
              <p className="experience-duration">Certification Issued: August 6, 2025 • 3 Months</p>
            </div>
            <div className="experience-focus">
              <span className="focus-tag">Core Java Programming</span>
              <span className="focus-tag">Object-Oriented Principles</span>
              <span className="focus-tag">Backend Logic</span>
            </div>
            <div className="experience-content">
              <h4 className="contributions-title">Key Contributions & Learning:</h4>
              <ul className="contributions-list">
                <li>
                  <strong>OOP Mastery:</strong> Gained a solid understanding of Java Programming and core Object-Oriented Programming (OOP) principles for complete beginners.
                </li>
                <li>
                  <strong>Foundational Strength:</strong> Developed skills that enhance career prospects in the rapidly evolving industry, providing a strong base in algorithmic thinking and structured backend development.
                </li>
                <li>
                  <strong>Project Application:</strong> Completed the training program successfully, including live project work and required assessments.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-content">
          {/* Section 1: Quick Links and Copyright */}
          <div className="footer-top">
            <div className="footer-links">
              <a href="/#hero" className="footer-link">Home</a>
              <a href="/image-slider" className="footer-link">About Me</a>
              <a href="#tech-stack" className="footer-link">Tech Stack</a>
              <a href="#experience" className="footer-link">Experience</a>
              <Link to="/#contact" className="footer-link">Contact</Link>
            </div>
            <div className="footer-copyright">
              © 2025 Piyush Bramhankar. All Rights Reserved.
            </div>
          </div>

          {/* Section 2: Social Media & Contact */}
          <div className="footer-social">
            <div className="social-icons-left">
              <a 
                href="https://www.linkedin.com/in/your-profile" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link"
                aria-label="LinkedIn"
              >
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a 
                href="https://github.com/your-profile" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link"
                aria-label="GitHub"
              >
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              
              
            </div>
            
            <div className="footer-signature-inline">
              <p className="footer-signature">Designed & Developed by Piyush Bramhankar</p>
              <span className="separator">|</span>
              <p className="footer-tagline">Made with ❤️ and Code</p>
            </div>
          </div>

          {/* Section 3: Personal Touch */}
          <div className="footer-bottom">
          </div>
        </div>
      </footer>
    </section>
  );
}

export default ImageSlider;
