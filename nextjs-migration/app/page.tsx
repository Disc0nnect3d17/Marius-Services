import Link from 'next/link'
import { services } from '@/data/services'
import { reviews } from '@/data/reviews'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Professional Bathroom & Kitchen Renovations 1.7.5</h1>
            <p>Expert craftsmen delivering complete renovation solutions in London and surrounding areas</p>
            <div className="hero-buttons">
              <a href="tel:+447454933651" className="btn">Call Now</a>
              <a href="#services" className="btn btn-secondary">Our Services</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="container">
          <h2 className="section-title">My Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" data-aos="fade-up" key={index}>
                <div className="service-icon">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="reviews-section" id="reviews">
        <div className="container reviews-container">
          <h2 className="section-title">What My Customers Say</h2>
          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <div className="review-card" data-aos="zoom-in" key={index}>
                <div className="review-stars">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <i className="fas fa-star" key={i}></i>
                  ))}
                </div>
                <p className="review-text">&quot;{review.text}&quot;</p>
                <p className="review-author">- {review.name}</p>
              </div>
            ))}
          </div>
          <div className="google-logo">
            <p style={{ color: 'var(--medium-gray)', marginTop: '2rem' }}>
              <i className="fab fa-google" style={{ fontSize: '2rem', color: '#4285f4' }}></i><br />
              <strong>Find me on Google Reviews</strong>
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text" data-aos="slide-right">
              <h2>Why Choose Pro Fit?</h2>
              <p>
                With decades of experience in the renovation industry, Pro Fit Bathroom and Kitchen has built a 
                reputation for excellence and reliability. I specialize in complete bathroom and kitchen renovations, 
                handling every aspect from initial design to final touches.
              </p>
              <p>
                My comprehensive services include professional tiling, expert plumbing, certified electrical work, 
                quality painting and decorating, skilled carpentry, and precision plastering. I take pride in my 
                attention to detail and commitment to customer satisfaction.
              </p>
              <p>
                Every project is done to your needs and vision. I work closely with you to ensure your ideas are 
                brought to life and you have something to cherish for years to come.
              </p>
              <Link 
                href="/portfolio" 
                className="btn" 
                style={{ marginTop: '1rem', transform: 'translateY(0px) scale(1)' }}
              >
                View Our Portfolio
              </Link>
            </div>
            <div className="about-image" data-aos="slide-left">
              <img 
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&h=400&fit=crop" 
                alt="Pro Fit Renovation Team" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="contact">
        <div className="container">
          <h2>Ready to Transform Your Space?</h2>
          <p>Contact Pro Fit Bathrooms & Kitchen today for a free consultation and quote</p>
          <div className="cta-buttons">
            <a href="tel:+447454933651" className="btn">
              <i className="fas fa-phone"></i> Call Us Now
            </a>
            <a href="mailto:info@hotmail.com" className="btn btn-secondary">
              <i className="fas fa-envelope"></i> Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
