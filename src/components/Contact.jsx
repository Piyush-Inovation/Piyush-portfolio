import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        // EmailJS configuration
        const serviceID = 'service_i6cld8o';
        const templateID = 'template_0hwcx6e';
        const publicKey = 'sNbF2jLTb2al_JQQF';

        // Send email using EmailJS
        emailjs.send(serviceID, templateID, {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: 'piyush.bramhankar027@gmail.com'
        }, publicKey)
        .then((response) => {
            console.log('Email sent successfully:', response);
            setIsPopupVisible(true);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            setIsSending(false);
        })
        .catch((error) => {
            console.error('Email send failed:', error);
            alert('Failed to send message. Please try again or contact directly via email.');
            setIsSending(false);
        });
    };

    const closePopup = () => {
        setIsPopupVisible(false);
    };

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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    }

    return (
        <motion.section
            className="contact"
            id="contact"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            variants={sectionVariants}
        >
            <div className="contact-container">
                <motion.div className="contact-header" variants={itemVariants}>
                    <h2 className="contact-title">Let's Connect and Build</h2>
                    <p className="contact-subtitle">Send me a message below, or find me on social media.</p>
                </motion.div>

                <div className="contact-content">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <div className="info-item">
                            <h3 className="info-label">Email</h3>
                            <a href="mailto:piyush.bramhankar027@gmail.com" className="info-value">piyush.bramhankar027@gmail.com</a>
                        </div>

                        <div className="info-item">
                            <h3 className="info-label">Connect</h3>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/piyush-bramhankar-a041b638b/" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                    LinkedIn
                                </a>
                                <a href="https://github.com/Piyush-Inovation" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    GitHub
                                </a>
                            </div>
                        </div>

                        <div className="info-item">
                            <p className="info-message">
                                Thank you for reaching out! I typically respond within 24-48 hours.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject / Project Type *</label>
                            <select
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select a subject</option>
                                <option value="job-inquiry">Job Inquiry</option>
                                <option value="freelance">Freelance Inquiry</option>
                                <option value="collaboration">Project Collaboration</option>
                                <option value="internship">Internship Request</option>
                                <option value="job-offer">Job Offer</option>
                                <option value="general">General Question</option>
                                <option value="portfolio-feedback">Portfolio Feedback</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="6"
                                placeholder="Tell me about your project or inquiry..."
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-button" disabled={isSending}>
                            {isSending ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
            {isPopupVisible && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h3>Thank you for reaching out!</h3>
                        <p>Your message has been received. I aim to review your request and get back to you within 24-48 business hours.</p>
                        <p>I look forward to connecting!</p>
                        <button onClick={closePopup} className="popup-close-button">Close</button>
                    </div>
                </div>
            )}
        </motion.section>
    );
}

export default Contact;
