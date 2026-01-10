export default function CallToAction() {
  return (
    <section className="cta-section" id="contact">
      <div className="container">
        {/* Social Proof Badge */}
        <div className="cta-badge-container">
          <div className="cta-social-proof">
            <i className="fas fa-users"></i>
            <span>Join 500+ Happy Customers</span>
          </div>
          <div className="cta-free-quote">
            <i className="fas fa-gift"></i>
            <span>Free Quote</span>
          </div>
        </div>

        <h2>Ready to Transform Your Space?</h2>
        <p>Contact Pro Fit Bathrooms & Kitchen today for a free consultation and quote</p>

        <div className="cta-buttons">
          <a href="tel:+447454933651" className="btn">
            <i className="fas fa-phone"></i> Call Us Now
          </a>
          <a href="mailto:profitbathroom@gmail.com" className="btn btn-secondary">
            <i className="fas fa-envelope"></i> Email Us
          </a>
        </div>
      </div>
    </section>
  )
}
