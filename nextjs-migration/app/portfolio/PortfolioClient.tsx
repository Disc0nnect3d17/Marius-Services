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
        <div className="portfolio-item" style={{ 
          position: 'relative', 
          width: '400px', 
          height: '300px', 
          overflow: 'hidden', 
          borderRadius: '12px', 
          cursor: 'pointer' 
        }}>
          <img
            src="/images/portfolio/sage-walnut/cover.JPG"
            alt="The Sage & Walnut Shaker"
          />

          <div className="portfolio-overlay" style={{ 
            position: 'absolute', 
            inset: '0', 
            background: 'rgba(0,0,0,0.6)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            opacity: '0', 
            color: '#fff', 
            fontSize: '1.5rem', 
            fontWeight: '600', 
            transition: 'opacity 0.3s ease' 
          }}>
            The Sage & Walnut Shaker
          </div>

          <Link
            href="/the-sage-walnut-shaker"
            className="portfolio-link"
            aria-label="View The Sage & Walnut Shaker project"
          />
        </div>
      </section>

      <style jsx>{`
        .portfolio-item:hover .portfolio-overlay { 
          opacity: 1; 
        }
      `}</style>
    </main>
  );
}
