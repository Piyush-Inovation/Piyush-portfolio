import '../styles/AboutJourney.css'
import boyImage from '../assets/my-photo.jpg'

const services = [
    {
        title: 'Website Development',
        price: 'Starting at ₹15k',
        description: 'Fast, responsive business websites built to look credible and convert leads.',
    },
    {
        title: 'Landing Page Design',
        price: 'Starting at ₹8k',
        description: 'High-converting landing pages with clear messaging and strong CTA flow.',
    },
    {
        title: 'Website Redesign',
        price: 'Starting at ₹12k',
        description: 'Modern refreshes that improve trust, usability, and customer engagement.',
    },
]

const reasons = [
    'Fast delivery',
    'Clean code',
    'Responsive design',
    'Client satisfaction',
]

const process = [
    'Discuss',
    'Build',
    'Review',
    'Deliver',
]

const testimonials = [
    {
        quote: 'The website was delivered fast, looked polished, and helped us present the business more professionally.',
        name: 'Client-style feedback',
    },
    {
        quote: 'Clear communication and a design that made our offer easier to understand.',
        name: 'Startup founder',
    },
    {
        quote: 'Great responsiveness and a clean final result that worked perfectly on mobile.',
        name: 'Small business owner',
    },
]

function AboutJourney() {
    return (
        <section className="about-journey section" id="services">
            <div className="container about-stack">
                <div className="about-summary">
                    <div className="section-eyebrow">About</div>
                    <h2 className="journey-title">Built to help businesses get more inquiries</h2>
                    <div className="journey-content">
                        <div className="journey-image">
                            <div className="image-placeholder">
                                <img src={boyImage} alt="Piyush" className="profile-image" />
                            </div>
                        </div>

                        <div className="journey-text">
                            <p className="journey-intro">
                                I design and build websites that help businesses look trustworthy, load quickly, and turn attention into action.
                            </p>
                            <p className="journey-description">
                                My focus is simple: create clean, conversion-friendly experiences that make it easier for customers to understand your offer and contact you.
                            </p>
                            <div className="journey-links">
                                <a href="#contact" className="journey-link-primary">Hire Me</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="services-section">
                    <div className="section-eyebrow">Services</div>
                    <h3 className="section-heading">What I can build for your business</h3>
                    <div className="services-grid">
                        {services.map((service) => (
                            <article key={service.title} className="service-card">
                                <p className="service-price">{service.price}</p>
                                <h4>{service.title}</h4>
                                <p>{service.description}</p>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="trust-process-grid">
                    <div className="trust-panel" id="why-choose-me">
                        <div className="section-eyebrow">Why Choose Me</div>
                        <h3 className="section-heading">Simple reasons clients can rely on</h3>
                        <ul className="reason-list">
                            {reasons.map((reason) => <li key={reason}>{reason}</li>)}
                        </ul>
                    </div>

                    <div className="trust-panel" id="process">
                        <div className="section-eyebrow">Process</div>
                        <h3 className="section-heading">A clear 4-step flow</h3>
                        <div className="process-list">
                            {process.map((step, index) => (
                                <div key={step} className="process-step">
                                    <span>{index + 1}</span>
                                    <p>{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="testimonials-section" id="testimonials">
                    <div className="section-eyebrow">Testimonials</div>
                    <h3 className="section-heading">A few trust signals</h3>
                    <div className="testimonials-grid">
                        {testimonials.map((item) => (
                            <blockquote className="testimonial-card" key={item.name}>
                                <p>“{item.quote}”</p>
                                <footer>{item.name}</footer>
                            </blockquote>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutJourney
