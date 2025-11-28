/**
 * Pro Fit Bathroom and Kitchen - Main JavaScript
 * Modern animations and interactions inspired by Bath Kitchen London
 */

(function() {
    'use strict';

    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        
        // Initialize Rellax for parallax effects
        initRellaxParallax();
        
        // Mobile Menu Toggle
        initMobileMenu();
        
        // Smooth Scrolling for anchor links
        initSmoothScroll();
        
        // Modern scroll reveal animations
        initModernScrollAnimations();
        
        // Parallax effect on hero section
        initParallaxEffect();
        
        // Scroll progress indicator
        initScrollProgress();
        
        // Enhanced header scroll effect
        initHeaderScroll();
        
        // Staggered animations for cards
        initStaggeredAnimations();
        
        // Initialize counters if needed
        initCounters();
        
        // Image lazy loading with fade effect
        initLazyLoadImages();
        
        // Add smooth page load animation
        pageLoadAnimation();
    });

    /**
     * Initialize Rellax for parallax effects on hero only
     */
    function initRellaxParallax() {
        if (typeof Rellax !== 'undefined') {
            const heroWrapper = document.querySelector('.hero-image-wrapper');
            if (heroWrapper) {
                new Rellax('.hero-image-wrapper', {
                    speed: -1,
                    center: false,
                    round: true,
                    vertical: true,
                    horizontal: false
                });
            }
        }
    }

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
     * Modern Scroll Reveal Animations
     * Inspired by Bath Kitchen London's smooth reveal effects
     */
    function initModernScrollAnimations() {
        // Select all elements to animate
        const animateElements = document.querySelectorAll('.service-card, .review-card, .section-title, .about-text, .about-image, .animate-on-scroll');
        
        // Intersection Observer options
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -80px 0px'
        };
        
        // Create observer
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry, index) {
                if (entry.isIntersecting) {
                    // Add a slight delay for stagger effect
                    setTimeout(function() {
                        entry.target.classList.add('visible', 'animated');
                        
                        // Add smooth transform
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0) scale(1)';
                    }, index * 50); // Stagger delay
                    
                    // Unobserve after animation
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe all elements
        animateElements.forEach(function(element) {
            observer.observe(element);
        });
    }

    /**
     * Staggered Animations for Card Grids
     */
    function initStaggeredAnimations() {
        const serviceCards = document.querySelectorAll('.service-card');
        const reviewCards = document.querySelectorAll('.review-card');
        
        const staggerObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const cards = entry.target.querySelectorAll('.service-card, .review-card');
                    cards.forEach(function(card, index) {
                        setTimeout(function() {
                            card.classList.add('visible');
                        }, index * 100); // 100ms stagger between each card
                    });
                    staggerObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        // Observe grid containers
        const servicesSection = document.querySelector('.services-grid');
        const reviewsSection = document.querySelector('.reviews-grid');
        
        if (servicesSection) staggerObserver.observe(servicesSection);
        if (reviewsSection) staggerObserver.observe(reviewsSection);
    }

    /**
     * Scroll Progress Indicator
     */
    function initScrollProgress() {
        // Create progress bar element
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.appendChild(progressBar);
        
        // Update progress on scroll
        window.addEventListener('scroll', function() {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.pageYOffset / windowHeight) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }

    /**
     * Page Load Animation
     */
    function pageLoadAnimation() {
        document.body.style.opacity = '0';
        
        setTimeout(function() {
            document.body.style.transition = 'opacity 0.6s ease-in';
            document.body.style.opacity = '1';
        }, 100);
    }

    /**
     * Lazy Load Images with Fade Effect
     */
    function initLazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(function(img) {
            imageObserver.observe(img);
        });
    }

    /**
     * Enhanced Parallax Effect on Hero Section
     * Smooth, modern parallax with transform3d for better performance
     */
    function initParallaxEffect() {
        const hero = document.querySelector('.hero-section');
        const heroContent = document.querySelector('.hero-content');
        
        if (hero) {
            let ticking = false;
            
            window.addEventListener('scroll', function() {
                if (!ticking) {
                    window.requestAnimationFrame(function() {
                        const scrolled = window.pageYOffset;
                        const heroHeight = hero.offsetHeight;
                        
                        if (scrolled < heroHeight) {
                            // Parallax speed for different layers
                            const parallaxSpeed = 0.5;
                            const contentSpeed = 0.3;
                            
                            // Apply transforms with GPU acceleration
                            hero.style.transform = 'translate3d(0, ' + (scrolled * parallaxSpeed) + 'px, 0)';
                            
                            if (heroContent) {
                                heroContent.style.transform = 'translate3d(0, ' + (scrolled * contentSpeed) + 'px, 0)';
                                heroContent.style.opacity = 1 - (scrolled / heroHeight) * 1.5;
                            }
                        }
                        
                        ticking = false;
                    });
                    
                    ticking = true;
                }
            });
        }
    }

    /**
     * Enhanced Header Scroll Effect
     * Adds shadow and backdrop blur on scroll
     */
    function initHeaderScroll() {
        const header = document.querySelector('.site-header');
        
        if (header) {
            let lastScroll = 0;
            
            window.addEventListener('scroll', function() {
                const currentScroll = window.pageYOffset;
                
                if (currentScroll > 100) {
                    header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
                    header.style.padding = '0.5rem 0';
                } else {
                    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                    header.style.padding = '1rem 0';
                }
                
                // Hide header on scroll down, show on scroll up
                if (currentScroll > lastScroll && currentScroll > 300) {
                    header.style.transform = 'translateY(-100%)';
                } else {
                    header.style.transform = 'translateY(0)';
                }
                
                lastScroll = currentScroll;
            });
            
            // Add transition to header
            header.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
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

    /**
     * Back to Top Button
     */
    function initBackToTop() {
        const backToTop = document.getElementById('back-to-top');
        
        if (backToTop) {
            // Show/hide button based on scroll position
            window.addEventListener('scroll', function() {
                if (window.scrollY > 300) {
                    backToTop.style.display = 'block';
                    backToTop.style.opacity = '1';
                } else {
                    backToTop.style.opacity = '0';
                    setTimeout(function() {
                        if (window.scrollY <= 300) {
                            backToTop.style.display = 'none';
                        }
                    }, 300);
                }
            });
            
            // Smooth scroll to top on click
            backToTop.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({ 
                    top: 0, 
                    behavior: 'smooth' 
                });
            });
            
            // Add hover effect
            backToTop.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 8px 20px rgba(252, 163, 17, 0.6)';
            });
            
            backToTop.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 4px 12px rgba(252, 163, 17, 0.4)';
            });
        }
    }
    
    // Initialize back to top button
    initBackToTop();

})();

// Footer Fade-in Animation
(function initFooterAnimation() {
    const footerSections = document.querySelectorAll('.footer-section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    footerSections.forEach(section => observer.observe(section));
})();
