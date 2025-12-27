"use client";

import { useState, useEffect } from 'react'

export default function FloatingContact() {
    const [isVisible, setIsVisible] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = window.innerHeight
            const ctaSection = document.getElementById('contact')
            const scrollPosition = window.scrollY

            // Show after scrolling past hero
            const shouldShow = scrollPosition > heroHeight

            // Hide when CTA section is visible
            if (ctaSection) {
                const ctaRect = ctaSection.getBoundingClientRect()
                const isCtaVisible = ctaRect.top < window.innerHeight && ctaRect.bottom > 0
                setIsVisible(shouldShow && !isCtaVisible)
            } else {
                setIsVisible(shouldShow)
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll() // Check initial state

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`floating-contact ${!isVisible ? 'hidden' : ''}`}>
            <button
                className="floating-contact-btn"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Contact options"
            >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-comment'}`}></i>
            </button>

            <div className={`floating-contact-menu ${isMenuOpen ? 'active' : ''}`}>
                <a href="tel:+447454933651" className="floating-contact-item">
                    <i className="fas fa-phone"></i>
                    <span>Call Now</span>
                </a>
                <a href="mailto:info@hotmail.com" className="floating-contact-item">
                    <i className="fas fa-envelope"></i>
                    <span>Email Us</span>
                </a>
            </div>
        </div>
    )
}
