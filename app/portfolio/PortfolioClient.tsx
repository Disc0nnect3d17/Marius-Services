"use client";

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { portfolioProjects, categories } from '@/data/portfolio'

export default function PortfolioClient() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [filteredProjects, setFilteredProjects] = useState(portfolioProjects)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true)
    const timer = setTimeout(() => {
      if (activeFilter === 'all') {
        setFilteredProjects(portfolioProjects)
      } else {
        setFilteredProjects(
          portfolioProjects.filter(project => project.category === activeFilter)
        )
      }
      setIsAnimating(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [activeFilter])

  return (
    <main>
      {/* Enhanced Portfolio Hero */}
      <section className="portfolio-hero-enhanced">
        <div
          className="portfolio-hero-bg"
          style={{ backgroundImage: 'url(/images/portfolio/Midnight Blue Onyx Suite/cover.JPG)' }}
        />
        <div className="portfolio-hero-overlay" />

        <div className="portfolio-hero-content">
          <h1 className="portfolio-hero-title">Our Portfolio</h1>
          <p className="portfolio-hero-subtitle">
            Transforming Spaces Since 2003
          </p>

          {/* Stats Display */}
          <div className="portfolio-stats">
            <div className="portfolio-stat-item">
              <div className="portfolio-stat-number">22+</div>
              <div className="portfolio-stat-label">Projects</div>
            </div>
            <div className="portfolio-stat-item">
              <div className="portfolio-stat-number">500+</div>
              <div className="portfolio-stat-label">Customers</div>
            </div>
            <div className="portfolio-stat-item">
              <div className="portfolio-stat-number">5.0★</div>
              <div className="portfolio-stat-label">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="portfolio-filter-section">
        <div className="container">
          <div className="portfolio-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.label}
                <span className="filter-count">{category.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="portfolio-grid-section">
        <div className="container">
          <div className={`portfolio-masonry ${isAnimating ? 'animating' : ''}`}>
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="portfolio-item-masonry"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={project.coverImage}
                  alt={project.title}
                  loading={index < 6 ? 'eager' : 'lazy'}
                />

                <div className="portfolio-overlay">
                  <span className="portfolio-title">
                    {project.title}
                  </span>
                  <span className="portfolio-category-badge">
                    {categories.find(c => c.id === project.category)?.label}
                  </span>
                </div>

                <Link
                  href={`/${project.slug}`}
                  className="portfolio-link"
                  aria-label={`View ${project.title} project`}
                />
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
