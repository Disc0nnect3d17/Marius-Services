import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>About Pro Fit</h3>
              <p>
                Your trusted partner for complete bathroom and kitchen renovations. We provide expert services in 
                tiles, plumbing, electrical work, painting, carpentry, and plastering.
              </p>
            </div>

            <div className="footer-section">
              <h3>Services</h3>
              <ul style={{ listStyle: 'none' }}>
                <li><a href="#services">Full Bathroom Renovations</a></li>
                <li><a href="#services">Full Kitchen Renovations</a></li>
                <li><a href="#services">Plumbing Services</a></li>
                <li><a href="#services">Electrical Work</a></li>
                <li><a href="#services">Painting & Decorating</a></li>
                <li><a href="#services">Carpentry & Joinery</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Contact Us</h3>
              <p>
                <i className="fas fa-phone"></i> 
                <a href="tel:+447454933651">+44 7454 933651</a>
              </p>
              <p>
                <i className="fas fa-envelope"></i> 
                <a href="mailto:info@hotmail.com">info@hotmail.com</a>
              </p>
              <p>
                <i className="fas fa-clock"></i> 
                Mon - Sat: 8:00 AM - 6:00 PM
              </p>
              <div className="social-links" style={{ marginTop: '1rem' }}>
                <a href="#" style={{ marginRight: '1rem', fontSize: '1.5rem' }} aria-label="Facebook">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" style={{ marginRight: '1rem', fontSize: '1.5rem' }} aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" style={{ fontSize: '1.5rem' }} aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {currentYear} Pro Fit Bathroom and Kitchen. All rights reserved. | Website designed with care</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <a href="#" id="back-to-top" style={{ display: 'none' }}>
        <i className="fas fa-arrow-up"></i>
      </a>
    </>
  )
}
