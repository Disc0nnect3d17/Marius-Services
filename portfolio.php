<?php
/**
 * Template Name: Portfolio Page
 * Description: A custom page template to showcase your bathroom and kitchen projects.
 */

get_header(); 
?>

<div class="portfolio-hero" style="text-align: center; padding: 80px 20px; background: #f7f7f7;">
    <h1 style="font-size: 3rem; margin-bottom: 10px;">Our Portfolio</h1>
    <p style="font-size: 1.2rem; color: #666;">Explore our luxury bathroom and kitchen renovations.</p>
</div>

<div class="portfolio-wrapper" style="max-width: 1200px; margin: 0 auto; padding: 60px 20px;">
    <div class="portfolio-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">

        <!-- Example Portfolio Item -->
        <div class="portfolio-card" style="background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            <img src="https://via.placeholder.com/400x300" alt="Project 1" style="width:100%; border-radius: 12px; margin-bottom: 15px;">
            <h2 style="font-size: 1.3rem; margin-bottom: 10px;">Luxury Bathroom Renovation</h2>
            <p>Complete transformation including tiles, fixtures, and design.</p>
        </div>

        <!-- Duplicate the above block for each project -->
        
    </div>
</div>

<?php get_footer(); ?>
