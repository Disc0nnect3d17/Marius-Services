"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="contact-info">
          <a href="tel:+447454933651">
            <i className="fas fa-phone"></i>
            <span>+44 7454 933651</span>
          </a>
          <a href="mailto:profitbathroom@gmail.com">
            <i className="fas fa-envelope"></i>
            <span>profitbathroom@gmail.com</span>
          </a>
        </div>
      </div>

      <div className="header-content">
        <div className="site-branding">
          <h1 className="site-title">
            <Link href="/" rel="home">
              Pro Fit Bathroom & Kitchen
            </Link>
          </h1>
        </div>

        <button
          className={`menu-toggle ${menuOpen ? "menu-open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <i key="close" className="fas fa-times"></i>
          ) : (
            <i key="menu" className="fas fa-bars"></i>
          )}
        </button>

        <nav className={`main-navigation ${menuOpen ? "active" : ""}`} id="main-navigation">
          <ul className="primary-menu">
            <li><Link href="/" onClick={closeMenu} className={isActive("/") ? "active" : ""}>Home</Link></li>
            <li><Link href="/portfolio" onClick={closeMenu} className={isActive("/portfolio") ? "active" : ""}>Portfolio</Link></li>
            <li><Link href="/#services" onClick={closeMenu}>Services</Link></li>
            <li><Link href="/#reviews" onClick={closeMenu}>Reviews</Link></li>
            <li><Link href="/#about" onClick={closeMenu}>About</Link></li>
            <li><Link href="/#contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
