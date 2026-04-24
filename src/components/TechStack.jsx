import '../styles/TechStack.css'
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

function TechStack() {
  return (
    <section className="tech-stack section" id="tech-stack">
      <div className="container">
        <div className="section-eyebrow">Tech Stack</div>
        <h2 className="tech-stack-title">Tools I use to build scalable websites</h2>

        <div className="tech-stack-grid" aria-label="Tech stack icons">
          {stack.map((item) => (
            <div key={item.name} className="tech-stack-item" title={item.name} aria-label={item.name}>
              <img src={item.icon} alt={item.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
