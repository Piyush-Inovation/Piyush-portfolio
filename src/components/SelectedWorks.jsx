import { useState } from 'react';
import '../styles/SelectedWorks.css';
import ScrollReveal from './ScrollReveal';

const projects = [
    {
        id: 1,
        title: "Task Manager",
        tech: ["HTML", "CSS", "JavaScript", "React"],
        purpose: "Task manager app to improve productivity with clean UI.",
        functions: ["Add / Edit / Delete Tasks", "User Authentication", "Responsive Design"],
        github: "https://github.com/Start-Coding-with-piyush"
    },
    {
        id: 2,
        title: "Full Stack App",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        purpose: "Full stack project with backend API integration.",
        functions: ["Login / Register", "Database Integration", "CRUD Operations"],
        github: "https://github.com/Start-Coding-with-piyush"
    },
    {
        id: 3,
        title: "E-Commerce Platform",
        tech: ["Next.js", "Stripe", "Tailwind", "Supabase"],
        purpose: "Modern shopping experience with secure payments.",
        functions: ["Cart Management", "Payment Gateway", "Order Tracking"],
        github: "https://github.com/Start-Coding-with-piyush"
    },
    {
        id: 4,
        title: "AI Dashboard",
        tech: ["Python", "React", "FastAPI", "OpenAI"],
        purpose: "Analytics dashboard powered by AI insights.",
        functions: ["Data Visualization", "Real-time Updates", "AI Predictions"],
        github: "https://github.com/Start-Coding-with-piyush"
    }
];

function SelectedWorks() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide(prev => (prev === projects.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide(prev => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    return (
        <section className="selected-works section" id="work">
            <div className="container">
                <ScrollReveal>
                    <div className="section-title-wrapper">
                        <h2 className="section-title">Recent Projects</h2>
                    </div>
                </ScrollReveal>

                <ScrollReveal threshold={0.1}>
                    <div className="slider-container">
                        <div
                            className="slider-track"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {projects.map((project) => (
                                <div className="slide-item" key={project.id}>
                                    <div className="project-grid">
                                        <div className="project-video">
                                            <div className="video-placeholder">
                                                <span>Video Preview: {project.title}</span>
                                            </div>
                                        </div>

                                        <div className="project-tech">
                                            <h3>Tech Stack</h3>
                                            <ul>
                                                {project.tech.map((t, i) => <li key={i}>{t}</li>)}
                                            </ul>
                                        </div>

                                        <div className="project-purpose">
                                            <div className="project-purpose-header">
                                                <h3>Purpose</h3>
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C3.62.65 2.46 1 2.46 1a5.07 5.07 0 0 0-.54 3.37A5.44 5.44 0 0 0 2.42 12c.06 1.14.94 2.26 2.5 2.61-4.14 1-.94 2.61-.94 2.61V22"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <p>{project.purpose}</p>
                                        </div>

                                        <div className="project-functions">
                                            <h3>Functions</h3>
                                            <ul>
                                                {project.functions.map((f, i) => <li key={i}>{f}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="slider-btn prev" onClick={prevSlide}>&#10094;</button>
                        <button className="slider-btn next" onClick={nextSlide}>&#10095;</button>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}

export default SelectedWorks;
