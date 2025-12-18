import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Portfolio - Pro Fit Bathroom and Kitchen',
  description: 'Explore our bathroom and kitchen renovation portfolio',
}

export default function PortfolioPage() {
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
            src="http://localhost/Marius/wp-content/uploads/2025/11/IMG_4150.jpg" 
            alt="The Sage & Walnut Shaker" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', 
              transition: 'transform 0.3s ease' 
            }} 
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
            style={{ position: 'absolute', inset: '0' }}
            aria-label="View The Sage & Walnut Shaker project"
          ></Link>
        </div>
      </section>

      <style jsx>{`
        .portfolio-item:hover img { 
          transform: scale(1.05); 
        }
        .portfolio-item:hover .portfolio-overlay { 
          opacity: 1; 
        }
      `}</style>
    </main>
  )
}
