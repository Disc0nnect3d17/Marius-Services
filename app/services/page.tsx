import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services - Pro Fit Bathroom and Kitchen',
  description: 'Quality craftsmanship and complete renovation solutions for your home.',
}

export default function ServicesPage() {
  return (
    <main>
      <div className="services-hero" style={{ textAlign: 'center', padding: '80px 20px', background: '#f7f7f7' }}>
        <h1 className="services-title" style={{ fontSize: '3rem', marginBottom: '10px' }}>
          Our Services
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>
          Quality craftsmanship and complete renovation solutions for your home.
        </p>
      </div>

      <div className="services-wrapper" style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          
          {/* Service Item */}
          <div className="service-card" style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Full Bathroom Renovations</h2>
            <p>Complete bathroom transformations including tiles, plumbing, electric work, and plastering. We handle every aspect of your bathroom project.</p>
          </div>

          <div className="service-card" style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Full Kitchen Renovations</h2>
            <p>Comprehensive kitchen remodeling services from design to completion. Expert installation of cabinets, countertops, and all fixtures.</p>
          </div>

          <div className="service-card" style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Plumbing Services</h2>
            <p>Professional plumbing installation and repairs. From pipes to fixtures, we ensure everything works perfectly.</p>
          </div>

          <div className="service-card" style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Electrical Work</h2>
            <p>Certified electrical services for your renovation. Safe and compliant installations for lighting, outlets, and more.</p>
          </div>

          <div className="service-card" style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Painting & Decorating</h2>
            <p>High-quality painting services to give your space the perfect finish. Professional preparation and attention to detail.</p>
          </div>

          <div className="service-card" style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Carpentry & Joinery</h2>
            <p>Expert carpentry including custom doors, cabinets, and woodwork. Precision craftsmanship for lasting results.</p>
          </div>

        </div>
      </div>
    </main>
  )
}
