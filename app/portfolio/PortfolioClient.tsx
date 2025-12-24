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

        <div className="portfolio-item">
          <img
            src="/images/portfolio/Classic White & Timber Suite/cover.JPG"
            alt="Classic White & Timber Suite"
          />

          <div className="portfolio-overlay">
            <span className="portfolio-title">
              Classic White & Timber Suite
            </span>
          </div>

          <Link
            href="/classic-white-timber-suite"
            className="portfolio-link"
            aria-label="View Classic White & Timber Suite project"
          />
        </div>

        <div className="portfolio-item">
          <img
            src="/images/portfolio/Contemporary Stone Wet Room/cover.JPG"
            alt="Contemporary Stone Wet Room"
          />

          <div className="portfolio-overlay">
            <span className="portfolio-title">
              Contemporary Stone Wet Room
            </span>
          </div>

          <Link
            href="/contemporary-stone-wet-room"
            className="portfolio-link"
            aria-label="View Contemporary Stone Wet Room project"
          />
        </div>

        <div className="portfolio-item">
          <img
            src="/images/portfolio/Marble & Chevron Kitchen/cover.JPG"
            alt="Marble & Chevron Kitchen"
          />

          <div className="portfolio-overlay">
            <span className="portfolio-title">
              Marble & Chevron Kitchen
            </span>
          </div>

          <Link
            href="/marble-chevron-kitchen"
            className="portfolio-link"
            aria-label="View Marble & Chevron Kitchen project"
          />
        </div>

        <div className="portfolio-item">
          <img
            src="/images/portfolio/Patterned Floor & Stone Suite/cover.JPG"
            alt="Patterned Floor & Stone Suite"
          />

          <div className="portfolio-overlay">
            <span className="portfolio-title">
              Patterned Floor & Stone Suite
            </span>
          </div>

          <Link
            href="/patterned-floor-stone-suite"
            className="portfolio-link"
            aria-label="View Patterned Floor & Stone Suite project"
          />
        </div>

        <div className="portfolio-item">
          <img
            src="/images/portfolio/Neutral Stone & Gloss Suite/cover.JPG"
            alt="Neutral Stone & Gloss Suite"
          />

          <div className="portfolio-overlay">
            <span className="portfolio-title">
              Neutral Stone & Gloss Suite
            </span>
          </div>

          <Link
            href="/neutral-stone-gloss-suite"
            className="portfolio-link"
            aria-label="View Neutral Stone & Gloss Suite project"
          />
        </div>

        <div className="portfolio-item">
          <img
            src="/images/portfolio/Compact Bright Shower Room/cover1.JPG"
            alt="Compact Bright Shower Room"
          />

          <div className="portfolio-overlay">
            <span className="portfolio-title">
              Compact Bright Shower Room
            </span>
          </div>

          <Link
            href="/compact-bright-shower-room"
            className="portfolio-link"
            aria-label="View Compact Bright Shower Room project"
          />
        </div>

        <div className="portfolio-item">
          <img
            src="/images/portfolio/Grey Mosaic Wet Room/cover.JPG"
            alt="Grey Mosaic Wet Room"
          />

          <div className="portfolio-overlay">
            <span className="portfolio-title">
              Grey Mosaic Wet Room
            </span>
          </div>

          <Link
            href="/grey-mosaic-wet-room"
            className="portfolio-link"
            aria-label="View Grey Mosaic Wet Room project"
          />
        </div>

        <div className="portfolio-item">
          <img
            src="/images/portfolio/Stone & Graphite Suite/cover.JPG"
            alt="Stone & Graphite Suite"
          />

          <div className="portfolio-overlay">
            <span className="portfolio-title">
              Stone & Graphite Suite
            </span>
          </div>

          <Link
            href="/stone-graphite-suite"
            className="portfolio-link"
            aria-label="View Stone & Graphite Suite project"
          />
        </div>

        <div className="portfolio-item">
          <img
            src="/images/portfolio/Vibrant Metro WC/cover.JPG"
            alt="Vibrant Metro WC"
          />

          <div className="portfolio-overlay">
            <span className="portfolio-title">
              Vibrant Metro WC
            </span>
          </div>

          <Link
            href="/vibrant-metro-wc"
            className="portfolio-link"
            aria-label="View Vibrant Metro WC project"
          />
        </div>

        <div className="portfolio-item">
          <img
            src="/images/portfolio/Marble & Geometric Suite/cover.JPG"
            alt="Marble & Geometric Suite"
          />

          <div className="portfolio-overlay">
            <span className="portfolio-title">
              Marble & Geometric Suite
            </span>
          </div>

          <Link
            href="/marble-geometric-suite"
            className="portfolio-link"
            aria-label="View Marble & Geometric Suite project"
          />
        </div>

        <div className="portfolio-item">
          <img
            src="/images/portfolio/Linear Stone Wet Room/cover.JPG"
            alt="Linear Stone Wet Room"
          />

          <div className="portfolio-overlay">
            <span className="portfolio-title">
              Linear Stone Wet Room
            </span>
          </div>

          <Link
            href="/linear-stone-wet-room"
            className="portfolio-link"
            aria-label="View Linear Stone Wet Room project"
          />
        </div>

        <div className="portfolio-item">
          <img
            src="/images/portfolio/White Gloss & Graphite Kitchen/cover.JPG"
            alt="White Gloss & Graphite Kitchen"
          />

          <div className="portfolio-overlay">
            <span className="portfolio-title">
              White Gloss & Graphite Kitchen
            </span>
          </div>

          <Link
            href="/white-gloss-graphite-kitchen"
            className="portfolio-link"
            aria-label="View White Gloss & Graphite Kitchen project"
          />
        </div>

        <div className="portfolio-item">
          <img
            src="/images/portfolio/Warm Stone Walk-In Suite/cover.jpg"
            alt="Warm Stone Walk-In Suite"
          />

          <div className="portfolio-overlay">
            <span className="portfolio-title">
              Warm Stone Walk-In Suite
            </span>
          </div>

          <Link
            href="/warm-stone-walk-in-suite"
            className="portfolio-link"
            aria-label="View Warm Stone Walk-In Suite project"
          />
        </div>

        <div className="portfolio-item">
          <img
            src="/images/portfolio/Midnight Blue Onyx Suite/cover.jpg"
            alt="Midnight Blue Onyx Suite"
          />

          <div className="portfolio-overlay">
            <span className="portfolio-title">
              Midnight Blue Onyx Suite
            </span>
          </div>

          <Link
            href="/midnight-blue-onyx-suite"
            className="portfolio-link"
            aria-label="View Midnight Blue Onyx Suite project"
          />
        </div>
      </section>
    </main>
  );
}
