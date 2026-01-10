"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling down
        setHidden(true);
      } else {
        // scrolling up
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`site-header ${hidden ? "header-hidden" : ""}`}>
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

        <nav className="main-navigation" id="main-navigation">
          <ul className="primary-menu">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/#reviews">Reviews</Link></li>
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
