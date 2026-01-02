"use client";

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { portfolioProjects, categories } from '@/data/portfolio'

export default function PortfolioClient() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [filteredProjects, setFilteredProjects] = useState(portfolioProjects)
  const [isAnimating, setIsAnimating] = useState(false)
  const [visibleProjects, setVisibleProjects] = useState<Set<string>>(new Set())
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Intersection Observer for lazy loading
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const projectId = entry.target.getAttribute('data-project-id')
        if (projectId) {
          setVisibleProjects(prev => new Set(prev).add(projectId))
        }
      }
    })
  }, [])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '50px',
      threshold: 0.01
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [handleIntersection])

  useEffect(() => {
    setIsAnimating(true)
    setVisibleProjects(new Set())
    
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

  const handleImageLoad = (projectId: string) => {
    setLoadedImages(prev => new Set(prev).add(projectId))
  }

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
          <div className={`portfolio-masonry-pinterest ${isAnimating ? 'animating' : ''}`}>
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                data-project-id={project.id}
                className={`portfolio-card-pinterest ${loadedImages.has(project.id) ? 'loaded' : ''}`}
                ref={(el) => {
                  if (el && observerRef.current) {
                    observerRef.current.observe(el)
                  }
                }}
              >
                <Link
                  href={`/${project.slug}`}
                  className="portfolio-card-link"
                  aria-label={`View ${project.title} project`}
                >
                  {/* Image Container with Blur Effect */}
                  <div className="portfolio-card-image-wrapper">
                    {visibleProjects.has(project.id) ? (
                      <>
                        {/* Blur Placeholder */}
                        <div 
                          className={`portfolio-card-blur ${loadedImages.has(project.id) ? 'hidden' : ''}`}
                          style={{
                            backgroundImage: `url(${project.coverImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        />
                        
                        {/* Main Image */}
                        <img
                          src={project.coverImage}
                          alt={project.title}
                          loading="lazy"
                          className="portfolio-card-image"
                          onLoad={() => handleImageLoad(project.id)}
                        />
                      </>
                    ) : (
                      <div className="portfolio-card-skeleton" />
                    )}

                    {/* Hover Overlay */}
                    <div className="portfolio-card-overlay">
                      <div className="portfolio-card-content">
                        <h3 className="portfolio-card-title">
                          {project.title}
                        </h3>
                        <span className="portfolio-card-category">
                          {categories.find(c => c.id === project.category)?.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
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
