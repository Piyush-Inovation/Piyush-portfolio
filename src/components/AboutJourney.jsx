import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/AboutJourney.css';
import boyImage from '../assets/my-photo.jpg';

function AboutJourney() {
    const navigate = useNavigate();
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    }
    return (
        <motion.section
            className="about-journey"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            variants={sectionVariants}
        >
            <motion.h2 className="journey-title" variants={itemVariants}>A Bit About My Journey</motion.h2>

            <div className="journey-content">
                <motion.div
                    className="journey-image"
                    variants={itemVariants}
                >
                    <div className="image-placeholder">
                        <img src={boyImage} alt="Piyush Profile" className="profile-image" />
                    </div>
                </motion.div>

                <motion.div
                    className="journey-text"
                    variants={sectionVariants}
                >
                    <motion.p className="journey-intro" variants={itemVariants}>
                        Hi, I'm Piyush. I'm currently expanding skills as a Frontend Intern at
                        CocoZap, focusing on delivering scalable web solutions. My current
                        goal is to master Full-Stack development, bridging elegant UI with
                        robust server logic. I'm a developer-turned-designer who values
                        simplicity and intentionality in every project.
                    </motion.p>

                    <motion.p className="journey-description" variants={itemVariants}>
                        My technical home base is the React ecosystem, where I specialize
                        in building applications using JavaScript and modern styling like
                        Tailwind CSS. I firmly believe design should be simple yet
                        functional, always prioritizing intuitive UX, accessibility,
                        and performance. Fuelled by continuous learning (often inspired by
                        podcasts and readings), I am constantly exploring new tech stacks
                        like AI integration to build the smarter web experiences of
                        tomorrow.
                    </motion.p>

                    <motion.div className="journey-links" variants={itemVariants}>
                        <a href="#process" className="journey-link">
                            Want to know more about my process and history?
                        </a>
                        <button 
                            className="journey-link-primary"
                            onClick={() => navigate('/image-slider')}
                        >
                            Read My Full Story
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default AboutJourney;
