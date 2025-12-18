import Link from 'next/link'

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text" data-aos="slide-right">
            <h2>Why Choose Pro Fit?</h2>
            <p>
              With decades of experience in the renovation industry, Pro Fit Bathroom and Kitchen has built a 
              reputation for excellence and reliability. I specialize in complete bathroom and kitchen renovations, 
              handling every aspect from initial design to final touches.
            </p>
            <p>
              My comprehensive services include professional tiling, expert plumbing, certified electrical work, 
              quality painting and decorating, skilled carpentry, and precision plastering. I take pride in my 
              attention to detail and commitment to customer satisfaction.
            </p>
            <p>
              Every project is done to your needs and vision. I work closely with you to ensure your ideas are 
              brought to life and you have something to cherish for years to come.
            </p>
            <Link 
              href="/portfolio" 
              className="btn" 
              style={{ marginTop: '1rem', transform: 'translateY(0px) scale(1)' }}
            >
              View Our Portfolio
            </Link>
          </div>
          <div className="about-image" data-aos="slide-left">
            <img 
              src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&h=400&fit=crop" 
              alt="Pro Fit Renovation Team" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}
