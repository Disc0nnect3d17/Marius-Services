import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="contact-info">
          <a href="tel:+447454933651">
            <i className="fas fa-phone"></i>
            <span>+44 7454 933651</span>
          </a>
          <a href="mailto:info@hotmail.com">
            <i className="fas fa-envelope"></i>
            <span>info@hotmail.com</span>
          </a>
        </div>
      </div>

      <div className="header-content">
        <div className="site-branding">
          <img 
            width="150" 
            src="http://localhost/Marius/wp-content/uploads/2025/11/1_uhDNWOUENopISF28W7UeOw.gif" 
            alt="Pro Fit Logo" 
          />
          <h1 className="site-title">
            <Link href="/" rel="home">
              Pro Fit Bathroom & Kitchen
            </Link>
          </h1>
        </div>

        <button className="menu-toggle" id="menu-toggle" aria-label="Toggle menu">
          <i className="fas fa-bars"></i> Menu
        </button>

        <nav className="main-navigation" id="main-navigation">
          <ul className="primary-menu">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#reviews">Reviews</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
