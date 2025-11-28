<?php
/**
 * Template Name: Portfolio Page
 * Description: A custom page template to showcase your bathroom and kitchen projects.
 */

get_header(); 
?>

<!-- Portfolio Hero Section -->
<section class="portfolio-hero" data-scroll-section>
    <div class="hero-image-wrapper" data-scroll data-scroll-speed="-2">
        <?php
        // If page has featured image
        if (has_post_thumbnail()) {
            the_post_thumbnail('full', [
                'class' => 'hero-image',
                'alt' => get_the_title(),
                'loading' => 'eager' // loads immediately since it's above-the-fold
            ]);
        } else {
            // Fallback to WordPress uploads directory
            ?>
            <img src="http://localhost/Marius/wp-content/uploads/2025/11/bg-portoflio.jpg" 
                 class="hero-image" 
                 alt="Portfolio Hero" 
                 loading="eager">
        <?php } ?>
    </div>

    <h1 class="portfolio-hero-title" data-scroll data-scroll-speed="1"><?php the_title(); ?></h1>
</section>

<!-- 2️⃣ Section Title & Description -->
<section class="portfolio-intro" style="padding: 60px 20px; background-color: #f7f7f7; text-align: left; max-width: 1200px; margin: 0 auto;">
    <h2 style="font-size: 2.5rem; font-family: var(--heading-font); color: var(--primary-blue);">Explore Our Bathroom Portfolio</h2>
    <div style="width: 50px; height: 4px; background: var(--accent-color); margin: 10px 0;"></div>
    <p style="font-size: 1.1rem; color: var(--medium-gray); line-height: 1.8;">Our bathroom portfolio will help you discover what Pro Fit Bathroom and Kitchen can do for you!</p>
</section>

<!-- 3️⃣ Portfolio Grid with Hover Overlay -->
<section class="portfolio-grid-section" style="max-width: 1200px; margin: 0 auto; padding: 60px 20px;">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
        <?php
        $portfolio_query = new WP_Query(array(
            'post_type' => 'portfolio',
            'posts_per_page' => -1
        ));
        if ($portfolio_query->have_posts()) :
            while ($portfolio_query->have_posts()) : $portfolio_query->the_post(); ?>
                <div class="portfolio-item" style="position: relative; overflow: hidden; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                    <?php if (has_post_thumbnail()) : ?>
                        <img src="<?php the_post_thumbnail_url('large'); ?>" alt="<?php the_title(); ?>" style="width: 100%; display: block; transition: transform 0.5s;">
                    <?php endif; ?>
                    <div class="portfolio-overlay" style="position: absolute; bottom: 0; left: 0; right: 0; background: rgba(0,0,0,0.6); color: #fff; padding: 20px; opacity: 0; transition: opacity 0.3s;">
                        <h3 style="font-family: var(--heading-font); font-size: 1.5rem; margin-bottom: 0.5rem;"><?php the_title(); ?></h3>
                        <?php $terms = get_the_terms(get_the_ID(), 'portfolio_category');
                        if($terms) {
                            foreach($terms as $term) {
                                echo '<span style="display: inline-block; padding: 5px 10px; background: var(--accent-color); border-radius: 5px; margin-right: 5px; font-size: 0.9rem;">' . $term->name . '</span>';
                            }
                        } ?>
                    </div>
                    <a href="<?php the_permalink(); ?>" style="position:absolute;top:0;left:0;right:0;bottom:0;"></a>
                </div>
            <?php endwhile; wp_reset_postdata();
        endif; ?>
    </div>
</section>

<!-- 4️⃣ Call-To-Action Section -->
<section class="portfolio-cta" style="background-color: rgba(223,223,223,0.7); padding: 80px 20px; display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; flex-wrap: wrap; gap: 2rem;">
    <div>
        <h2 style="font-size: 2rem; font-family: var(--heading-font); color: var(--primary-blue);">Your dream bathroom or kitchen is just a phone call away</h2>
    </div>
    <div>
        <a href="tel:+447454933651" class="btn" style="text-transform: uppercase; padding: 15px 30px; background: var(--primary-blue); color: #fff; border-radius: 8px; text-decoration: none; display: inline-block; transition: all 0.3s ease;">Get in Touch</a>
    </div>
</section>

<style>
.portfolio-item:hover img { transform: scale(1.1); }
.portfolio-item:hover .portfolio-overlay { opacity: 1; }
.portfolio-cta .btn:hover { background: var(--accent-color); transform: translateY(-2px); box-shadow: 0 8px 20px rgba(252, 163, 17, 0.4); }
</style>

<?php get_footer(); ?>
