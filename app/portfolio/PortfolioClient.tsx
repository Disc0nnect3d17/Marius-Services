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
        gap: '30px',
        flexWrap: 'wrap',
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

        <div className="portfolio-item">
          <img
            src="/images/portfolio/Marble & Midnight Suite/cover.JPG"
            alt="Marble & Midnight Suite"
          />

          <div className="portfolio-overlay">
            <span className="portfolio-title">
              Marble & Midnight Suite
            </span>
          </div>

          <Link
            href="/marble-midnight-suite"
            className="portfolio-link"
            aria-label="View Marble & Midnight Suite project"
          />
        </div>

        <div className="portfolio-item">
          <img
            src="/images/portfolio/Crimson & Stone WC/cover.JPG"
            alt="Crimson & Stone WC"
          />

          <div className="portfolio-overlay">
            <span className="portfolio-title">
              Crimson & Stone WC
            </span>
          </div>

          <Link
            href="/crimson-stone-wc"
            className="portfolio-link"
            aria-label="View Crimson & Stone WC project"
          />
        </div>

        <div className="portfolio-item">
          <img
            src="/images/portfolio/Sandstone & Mosaic Shower Room/cover.JPG"
            alt="Sandstone & Mosaic Shower Room"
          />

          <div className="portfolio-overlay">
            <span className="portfolio-title">
              Sandstone & Mosaic Shower Room
            </span>
          </div>

          <Link
            href="/sandstone-mosaic-shower-room"
            className="portfolio-link"
            aria-label="View Sandstone & Mosaic Shower Room project"
          />
        </div>

        <div className="portfolio-item">
          <img
            src="/images/portfolio/Slate & Chrome Shower Room/cover.JPG"
            alt="Slate & Chrome Shower Room"
          />

          <div className="portfolio-overlay">
            <span className="portfolio-title">
              Slate & Chrome Shower Room
            </span>
          </div>

          <Link
            href="/slate-chrome-shower-room"
            className="portfolio-link"
            aria-label="View Slate & Chrome Shower Room project"
          />
        </div>

        <div className="portfolio-item">
          <img
            src="/images/portfolio/The Anthracite & Marble Suite/cover.JPG"
            alt="The Anthracite & Marble Suite"
          />

          <div className="portfolio-overlay">
            <span className="portfolio-title">
              The Anthracite & Marble Suite
            </span>
          </div>

          <Link
            href="/the-anthracite-marble-suite"
            className="portfolio-link"
            aria-label="View The Anthracite & Marble Suite project"
          />
        </div>

        <div className="portfolio-item">
          <img
            src="/images/portfolio/Porcelain & Timber Suite/cover.JPG"
            alt="Porcelain & Timber Suite"
          />

          <div className="portfolio-overlay">
            <span className="portfolio-title">
              Porcelain & Timber Suite
            </span>
          </div>

          <Link
            href="/porcelain-timber-suite"
            className="portfolio-link"
            aria-label="View Porcelain & Timber Suite project"
          />
        </div>

        <div className="portfolio-item">
          <img
            src="/images/portfolio/Herringbone & Mosaic Suite/cover.JPG"
            alt="Herringbone & Mosaic Suite"
          />

          <div className="portfolio-overlay">
            <span className="portfolio-title">
              Herringbone & Mosaic Suite
            </span>
          </div>

          <Link
            href="/herringbone-mosaic-suite"
            className="portfolio-link"
            aria-label="View Herringbone & Mosaic Suite project"
          />
        </div>
      </section>
    </main>
  );
}
