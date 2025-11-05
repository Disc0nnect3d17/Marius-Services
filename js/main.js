/**
 * Pro Fit Bathroom and Kitchen - Main JavaScript
 * Handles animations, interactions, and responsive behavior
 */

(function() {
    'use strict';

    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        
        // Mobile Menu Toggle
        initMobileMenu();
        
        // Smooth Scrolling for anchor links
        initSmoothScroll();
        
        // Scroll animations
        initScrollAnimations();
        
        // Parallax effect on hero section
        initParallaxEffect();
        
        // Add animation on scroll for service cards
        observeElements();
        
        // Header scroll effect
        initHeaderScroll();
        
        // Initialize counters if needed
        initCounters();
    });

    /**
     * Mobile Menu Toggle
     */
    function initMobileMenu() {
        const menuToggle = document.getElementById('menu-toggle');
        const mainNavigation = document.getElementById('main-navigation');
        
        if (menuToggle && mainNavigation) {
            menuToggle.addEventListener('click', function() {
                mainNavigation.classList.toggle('active');
                
                // Change icon
                const icon = this.querySelector('i');
                if (icon) {
                    if (mainNavigation.classList.contains('active')) {
                        icon.classList.remove('fa-bars');
                        icon.classList.add('fa-times');
                    } else {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            });
            
            // Close menu when clicking on a link
            const navLinks = mainNavigation.querySelectorAll('a');
            navLinks.forEach(function(link) {
                link.addEventListener('click', function() {
                    mainNavigation.classList.remove('active');
                    const icon = menuToggle.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                });
            });
        }
    }

    /**
     * Smooth Scrolling for anchor links
     */
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(function(link) {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Skip if it's just "#"
                if (href === '#') return;
                
                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    /**
     * Scroll Animations
     */
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.service-card, .review-card, .about-text, .about-image');
        
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translateY(30px)';
                    
                    // Trigger animation
                    setTimeout(function() {
                        entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, 100);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        animatedElements.forEach(function(element) {
            observer.observe(element);
        });
    }

    /**
     * Parallax Effect on Hero Section
     */
    function initParallaxEffect() {
        const hero = document.querySelector('.hero-section');
        
        if (hero) {
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const parallaxSpeed = 0.5;
                
                if (scrolled < hero.offsetHeight) {
                    hero.style.transform = 'translateY(' + (scrolled * parallaxSpeed) + 'px)';
                }
            });
        }
    }

    /**
     * Observe Elements for Animation
     */
    function observeElements() {
        const cards = document.querySelectorAll('.service-card, .review-card');
        
        cards.forEach(function(card, index) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            
            setTimeout(function() {
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                
                const observer = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            setTimeout(function() {
                                entry.target.style.opacity = '1';
                                entry.target.style.transform = 'translateY(0)';
                            }, index * 100);
                            observer.unobserve(entry.target);
                        }
                    });
                }, {
                    threshold: 0.1
                });
                
                observer.observe(card);
            }, 100);
        });
    }

    /**
     * Header Scroll Effect
     */
    function initHeaderScroll() {
        const header = document.querySelector('.site-header');
        let lastScroll = 0;
        
        if (header) {
            window.addEventListener('scroll', function() {
                const currentScroll = window.pageYOffset;
                
                if (currentScroll > 100) {
                    header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
                    header.style.padding = '0.5rem 0';
                } else {
                    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                    header.style.padding = '1rem 0';
                }
                
                lastScroll = currentScroll;
            });
        }
    }

    /**
     * Initialize Counters (if you want to add statistics)
     */
    function initCounters() {
        const counters = document.querySelectorAll('[data-counter]');
        
        counters.forEach(function(counter) {
            const target = parseInt(counter.getAttribute('data-counter'));
            const duration = 2000; // 2 seconds
            const step = target / (duration / 16); // 60fps
            let current = 0;
            
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        const timer = setInterval(function() {
                            current += step;
                            if (current >= target) {
                                current = target;
                                clearInterval(timer);
                            }
                            counter.textContent = Math.floor(current);
                        }, 16);
                        
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.5
            });
            
            observer.observe(counter);
        });
    }

    /**
     * Add hover effect to buttons
     */
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(function(button) {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    /**
     * Add ripple effect to service cards
     */
    function createRipple(event) {
        const card = event.currentTarget;
        const ripple = document.createElement('span');
        const rect = card.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        const existingRipple = card.querySelector('.ripple');
        if (existingRipple) {
            existingRipple.remove();
        }
        
        card.appendChild(ripple);
        
        setTimeout(function() {
            ripple.remove();
        }, 600);
    }

    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(function(card) {
        card.style.position = 'relative';
        card.style.overflow = 'hidden';
        card.addEventListener('click', createRipple);
    });

    /**
     * Lazy loading for images
     */
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });

        const images = document.querySelectorAll('img[data-src]');
        images.forEach(function(img) {
            imageObserver.observe(img);
        });
    }

    /**
     * Add CSS for ripple effect dynamically
     */
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

})();
