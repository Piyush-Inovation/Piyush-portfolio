import { useNavigate } from 'react-router-dom';
import '../styles/AboutJourney.css';
import boyImage from '../assets/my-photo.jpg';

function AboutJourney() {
    const navigate = useNavigate();

    return (
        <section className="about-journey">
            <h2 className="journey-title">A Bit About My Journey</h2>

            <div className="journey-content">
                <div className="journey-image">
                    <div className="image-placeholder">
                        <img src={boyImage} alt="Piyush Profile" className="profile-image" />
                    </div>
                </div>

                <div className="journey-text">
                    <p className="journey-intro">
                        Hi, I'm Piyush. I'm currently expanding skills as a Frontend Intern at
                        CocoZap, focusing on delivering scalable web solutions. My current
                        goal is to master Full-Stack development, bridging elegant UI with
                        robust server logic. I'm a developer-turned-designer who values
                        simplicity and intentionality in every project.
                    </p>

                    <p className="journey-description">
                        My technical home base is the React ecosystem, where I specialize
                        in building applications using JavaScript and modern styling like
                        Tailwind CSS. I firmly believe design should be simple yet
                        functional, always prioritizing intuitive UX, accessibility,
                        and performance. Fuelled by continuous learning (often inspired by
                        podcasts and readings), I am constantly exploring new tech stacks
                        like AI integration to build the smarter web experiences of
                        tomorrow.
                    </p>

                    <div className="journey-links">
                        <a href="#process" className="journey-link">
                            Want to know more about my process and history?
                        </a>
                        <button 
                            className="journey-link-primary"
                            onClick={() => navigate('/image-slider')}
                        >
                            Read My Full Story
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutJourney;
