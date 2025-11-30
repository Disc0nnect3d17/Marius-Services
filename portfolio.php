<?php
/**
 * Template Name: Portfolio Page
 */

get_header(); 
?>

<section class="portfolio-hero">
    <h1 style="text-align:center; font-family: var(--heading-font); font-size: 3rem; color: var(--primary-blue); margin-bottom: 0.5rem;">Portfolio</h1>
    <p style="text-align:center; font-size:1.2rem; color: var(--medium-gray);">Explore Our Bathroom Portfolio</p>
</section>

<section class="portfolio-grid" style="display:flex; justify-content:center; padding:60px 20px;">
    <div class="portfolio-item" style="position:relative; width:400px; height:300px; overflow:hidden; border-radius:12px; cursor:pointer;">
        <img src="http://localhost/Marius/wp-content/uploads/2025/11/IMG_4150.jpg" 
             alt="The Sage & Walnut Shaker" 
             style="width:100%; height:100%; object-fit:cover; transition: transform 0.3s ease;">
        <div class="portfolio-overlay" style="position:absolute; inset:0; background:rgba(0,0,0,0.6); display:flex; align-items:center; justify-content:center; opacity:0; color:#fff; font-size:1.5rem; font-weight:600; transition: opacity 0.3s ease;">
            The Sage & Walnut Shaker
        </div>
        <a href="<?php echo site_url('/the-sage-walnut-shaker'); ?>" style="position:absolute; inset:0;"></a>
    </div>
</section>

<style>
.portfolio-item:hover img { transform: scale(1.05); }
.portfolio-item:hover .portfolio-overlay { opacity:1; }
</style>

<?php get_footer(); ?>
