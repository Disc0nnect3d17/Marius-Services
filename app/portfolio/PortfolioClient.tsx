"use client";

import Link from "next/link";

export default function PortfolioClient() {
  return (
    <main>
      <section className="portfolio-hero">
        <h1 style={{ 
          textAlign: 'center', 
          fontFamily: 'var(--heading-font)', 
          fontSize: '3rem', 
          color: 'var(--primary-blue)', 
          marginBottom: '0.5rem' 
        }}>
          Portfolio
        </h1>
        <p style={{ 
          textAlign: 'center', 
          fontSize: '1.2rem', 
          color: 'var(--medium-gray)' 
        }}>
          Explore Our Bathroom Portfolio
        </p>
      </section>

      <section className="portfolio-grid" style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        padding: '60px 20px' 
      }}>
        <div className="portfolio-item">
          <img
            src="/images/portfolio/sage-walnut/cover.JPG"
            alt="The Sage & Walnut Shaker"
          />

          <div className="portfolio-overlay">
            <span className="portfolio-title">
              The Sage & Walnut Shaker
            </span>
          </div>

          <Link
            href="/the-sage-walnut-shaker"
            className="portfolio-link"
            aria-label="View The Sage & Walnut Shaker project"
          />
        </div>
      </section>
    </main>
  );
}
