import { reviews } from '@/data/reviews'

export default function Reviews() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="container reviews-container">
        <h2 className="section-title">What My Customers Say</h2>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div className="review-card" data-aos="zoom-in" key={index}>
              <div className="review-stars">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <i className="fas fa-star" key={i}></i>
                ))}
              </div>
              <p className="review-text">&quot;{review.text}&quot;</p>
              <p className="review-author">- {review.name}</p>
            </div>
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
