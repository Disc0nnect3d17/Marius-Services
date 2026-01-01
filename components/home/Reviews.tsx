"use client";

import { reviews } from '@/data/reviews'
import { useState, useEffect, useRef } from 'react'

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const touchStartX = useRef<number>(0)
  const touchEndX = useRef<number>(0)

  // Auto-rotate carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swiped left - next slide
      nextSlide()
    }

    if (touchEndX.current - touchStartX.current > 50) {
      // Swiped right - previous slide
      prevSlide()
    }
  }

  return (
    <section className="reviews-section" id="reviews">
      <div className="container reviews-container">
        <h2 className="section-title">What My Customers Say</h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={prevSlide}
            aria-label="Previous review"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <div 
            className="reviews-carousel"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`review-card-carousel ${index === currentIndex ? 'active' : ''
                  } ${index === (currentIndex - 1 + reviews.length) % reviews.length ? 'prev' : ''} ${index === (currentIndex + 1) % reviews.length ? 'next' : ''
                  }`}
              >
                <div className="review-stars">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <i
                      className="fas fa-star"
                      key={i}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></i>
                  ))}
                </div>
                <p className="review-text">&quot;{review.text}&quot;</p>
                <p className="review-author">- {review.name}</p>
              </div>
            ))}
          </div>

          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={nextSlide}
            aria-label="Next review"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Navigation dots */}
        <div className="carousel-dots">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to review ${index + 1}`}
            />
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
  )
}
