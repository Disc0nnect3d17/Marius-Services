<?php
/**
 * Template Name: Services Page
 * Description: A custom page template for displaying services.
 */

get_header();
?>

<div class="services-hero" style="text-align: center; padding: 80px 20px; background: #f7f7f7;">
    <h1 class="services-title" style="font-size: 3rem; margin-bottom: 10px;">Our Services</h1>
    <p style="font-size: 1.2rem; color: #666;">Quality craftsmanship and complete renovation solutions for your home.</p>
</div>

<div class="services-wrapper" style="max-width: 1200px; margin: 0 auto; padding: 60px 20px;">
    <div class="services-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">

        <!-- Service Item -->
        <div class="service-card" style="background: #fff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            <h2 style="font-size: 1.5rem; margin-bottom: 10px;">Full Bathroom Renovations</h2>
            <p>Complete bathroom transformations including tiles, plumbing, electric work, and plastering. We handle every aspect of your bathroom project.</p>
        </div>

        <div class="service-card" style="background: #fff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            <h2 style="font-size: 1.5rem; margin-bottom: 10px;">Full Kitchen Renovations</h2>
            <p>Comprehensive kitchen remodeling services from design to completion. Expert installation of cabinets, countertops, and all fixtures.</p>
        </div>

        <div class="service-card" style="background: #fff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            <h2 style="font-size: 1.5rem; margin-bottom: 10px;">Plumbing Services</h2>
            <p>Professional plumbing installation and repairs. From pipes to fixtures, we ensure everything works perfectly.</p>
        </div>

        <div class="service-card" style="background: #fff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            <h2 style="font-size: 1.5rem; margin-bottom: 10px;">Electrical Work</h2>
            <p>Certified electrical services for your renovation. Safe and compliant installations for lighting, outlets, and more.</p>
        </div>

        <div class="service-card" style="background: #fff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            <h2 style="font-size: 1.5rem; margin-bottom: 10px;">Painting & Decorating</h2>
            <p>High-quality painting services to give your space the perfect finish. Professional preparation and attention to detail.</p>
        </div>

        <div class="service-card" style="background: #fff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            <h2 style="font-size: 1.5rem; margin-bottom: 10px;">Carpentry & Joinery</h2>
            <p>Expert carpentry including custom doors, cabinets, and woodwork. Precision craftsmanship for lasting results.</p>
        </div>

    </div>
</div>

<?php get_footer(); ?>
