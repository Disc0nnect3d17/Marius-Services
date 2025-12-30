/**
 * Pro Fit Bathroom and Kitchen - Client-side JavaScript
 * Migrated from PHP to Next.js
 */

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNavigation = document.getElementById('main-navigation');

    if (menuToggle && mainNavigation) {
        // Create backdrop element
        let backdrop = null;
        let scrollPosition = 0;

        // Function to create and show backdrop
        function showBackdrop() {
            if (!backdrop) {
                backdrop = document.createElement('div');
                backdrop.className = 'mobile-menu-backdrop';
                backdrop.style.cssText = `
                    position: fixed;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.7);
                    z-index: 998;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                `;
                document.body.appendChild(backdrop);

                // Add click listener to backdrop
                backdrop.addEventListener('click', closeMenu);

                // Prevent touch scrolling on backdrop
                backdrop.addEventListener('touchmove', function (e) {
                    e.preventDefault();
                }, { passive: false });

                // Force reflow to enable transition
                backdrop.offsetHeight;
                backdrop.style.opacity = '1';
            }
        }

        // Function to hide and remove backdrop
        function hideBackdrop() {
            if (backdrop) {
                backdrop.style.opacity = '0';
                setTimeout(() => {
                    if (backdrop && backdrop.parentNode) {
                        backdrop.parentNode.removeChild(backdrop);
                        backdrop = null;
                    }
                }, 300); // Match transition duration
            }
        }

        // Function to disable body scroll
        function disableBodyScroll() {
            // Save current scroll position
            scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

            // Prevent scrolling with overflow hidden
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100vh';

            // Prevent touch-based scrolling
            document.body.addEventListener('touchmove', preventScroll, { passive: false });
            // Prevent wheel-based scrolling
            document.body.addEventListener('wheel', preventScroll, { passive: false });
        }

        // Function to prevent scroll events
        function preventScroll(e) {
            e.preventDefault();
        }

        // Function to enable body scroll
        function enableBodyScroll() {
            // Remove scroll prevention
            document.body.style.removeProperty('overflow');
            document.body.style.removeProperty('height');

            // Remove event listeners
            document.body.removeEventListener('touchmove', preventScroll);
            document.body.removeEventListener('wheel', preventScroll);

            // No need to restore scroll - it never changed!
        }

        // Function to hide floating buttons
        function hideFloatingButtons() {
            const floatingContact = document.querySelector('.floating-contact');
            const backToTop = document.getElementById('back-to-top');
            if (floatingContact) floatingContact.style.display = 'none';
            if (backToTop) backToTop.style.display = 'none';
        }

        // Function to show floating buttons
        function showFloatingButtons() {
            const floatingContact = document.querySelector('.floating-contact');
            const backToTop = document.getElementById('back-to-top');
            if (floatingContact) floatingContact.style.display = '';
            if (backToTop) backToTop.style.display = '';
        }

        // Function to close the menu
        function closeMenu() {
            mainNavigation.classList.remove('active');
            hideBackdrop();
            enableBodyScroll();
            showFloatingButtons();
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }

        // Toggle menu on hamburger button click
        menuToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            const isActive = mainNavigation.classList.contains('active');

            if (isActive) {
                closeMenu();
            } else {
                mainNavigation.classList.add('active');
                showBackdrop();
                disableBodyScroll();
                hideFloatingButtons();
                const icon = this.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                }
            }
        });

        // Close menu when clicking on a link
        const navLinks = mainNavigation.querySelectorAll('a');
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                closeMenu();
            });
        });
    }

    // Back to Top Button
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 300) {
                backToTop.style.display = 'flex';
                backToTop.style.opacity = '1';
            } else {
                backToTop.style.opacity = '0';
                setTimeout(() => {
                    if (window.pageYOffset <= 300) {
                        backToTop.style.display = 'none';
                    }
                }, 300);
            }
        });

        backToTop.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Smooth Scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
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
});
