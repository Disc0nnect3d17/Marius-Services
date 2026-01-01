'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { portfolioProjects } from '@/data/portfolio'

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Get featured portfolio projects for the carousel
  const featuredProjects = portfolioProjects.filter(project => project.featured)
  
  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % featuredProjects.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [featuredProjects.length])

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-content-vertical">
          <div className="about-text" data-aos="slide-right">
            <h2>Why Choose Pro Fit?</h2>

            {/* Stats Section */}
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number">20+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects Done</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5.0</div>
                <div className="stat-label">Star Rating</div>
              </div>
            </div>

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
          <div className="about-image-carousel" data-aos="fade-up">
            <div className="about-carousel-wrapper">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`about-carousel-image ${index === currentImageIndex ? 'active' : ''}`}
                >
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <div className="about-carousel-indicators">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  className={`about-carousel-dot ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`View project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
